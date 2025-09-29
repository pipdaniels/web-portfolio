import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Target, Lightbulb, Rocket, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Vision() {
  const principles = [
    {
      icon: Target,
      title: "Precision & Performance",
      description: "Every line of code serves a purpose. I believe in writing clean, efficient backend systems that scale seamlessly with business growth."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Building secure payment systems and APIs requires unwavering attention to security. I implement robust authentication and data protection from the ground up."
    },
    {
      icon: Lightbulb,
      title: "Innovation Through Simplicity",
      description: "Complex problems require elegant solutions. I focus on creating maintainable architectures that solve real business challenges."
    },
    {
      icon: Rocket,
      title: "Continuous Evolution",
      description: "Technology evolves rapidly. I stay ahead by constantly learning new tools and methodologies to deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">My Vision & Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a backend developer with expertise in payment systems and scalable architectures, 
              I believe technology should empower businesses to achieve their goals efficiently and securely.
            </p>
            
            <div className="space-y-6">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg mb-2">{principle.title}</h3>
                            <p className="text-muted-foreground">{principle.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NTg4NTIwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern tech workspace"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
            </div>
            
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">System Online</span>
              </div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm">Secure & Scalable</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}