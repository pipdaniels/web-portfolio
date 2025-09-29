import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Vision } from './components/Vision';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Vision />
        <StatsCounter />
        <Testimonials />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}