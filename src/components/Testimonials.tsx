import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc",
      avatar: "SJ",
      content: "Seun's expertise in backend development is exceptional. His work on our payment gateway system was flawless, handling millions of transactions with zero downtime.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Product Manager, AFEX",
      avatar: "MC",
      content: "Working with Seun on AFEXPay was a game-changer. His deep understanding of payment settlement systems and attention to security made our platform rock-solid.",
      rating: 5
    },
    {
      name: "Victoria Daniel",
      role: "Founder, Sipstory",
      avatar: "VD",
      content: "Seun developed the AI-powered backend for our social media management platform. His innovative approach and technical excellence exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Tom Stanley",
      role: "UI/UX Designer, OneTruChamp",
      avatar: "TA",
      content: "The sport prediction application Seun built for the US market handles massive data loads effortlessly. His scalable architecture design is truly impressive.",
      rating: 5
    },
    {
      name: "Alex Kumar",
      role: "Infrastructure Manager",
      avatar: "AK",
      content: "Seun's CLI monitoring tool has become an essential part of our server management workflow. It's elegant, powerful, and saves us hours of manual work daily.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients and colleagues say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}