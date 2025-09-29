import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function TechStack() {
  const techCategories = [
    {
      title: "Backend Languages",
      icon: "🔧",
      technologies: ["Golang", "Python", "PHP"],
      primary: true
    },
    {
      title: "Frontend Technologies",
      icon: "🎨", 
      technologies: ["JavaScript", "TypeScript"],
      primary: false
    },
    {
      title: "Databases",
      icon: "🗄️",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "GraphQL"],
      primary: false
    },
    {
      title: "DevOps & Tools",
      icon: "⚙️",
      technologies: ["Docker", "Kubernetes", "Redis", "Git"],
      primary: false
    },
    {
      title: "Web Servers",
      icon: "🌐",
      technologies: ["Nginx", "Caddy", "Apache"],
      primary: false
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      technologies: ["Postman", "Podman", "Linux CLI", "Figma", "Jira"],
      primary: false
    }
  ];

  return (
    <section id="stack" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Technology Stack</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building robust, scalable backend systems and modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full hover:shadow-lg transition-all duration-300 ${
                category.primary ? 'border-primary/50 bg-primary/5' : ''
              }`}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant={category.primary ? "default" : "secondary"}
                          className="text-sm py-1 px-3"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl mb-8">Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Scenic Pay - Payment Gateway System",
              "AFEXPay - Payment Settlement Platform", 
              "CCI Church Attendance API Server",
              "Sport Prediction App (OneTruChamp)",
              "Sipstory - AI Social Media Management",
              "CLI Server Monitoring Tool"
            ].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-200"
              >
                <p className="text-sm">{project}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}