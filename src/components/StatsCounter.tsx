import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  suffix?: string;
}

function Counter({ end, duration, label, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-lg">{label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  const stats = [
    { end: 50, label: "Happy Clients", suffix: "+" },
    { end: 75, label: "Projects Completed", suffix: "+" },
    { end: 5, label: "Years Experience", suffix: "" },
    { end: 99, label: "Uptime Guarantee", suffix: "%" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Proven Track Record</h2>
          <p className="text-lg text-muted-foreground">
            Numbers that speak to the quality and reliability of my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Counter
                end={stat.end}
                duration={2}
                label={stat.label}
                suffix={stat.suffix}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}