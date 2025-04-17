
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brush, Users, Scissors } from 'lucide-react';

const services = [
  {
    title: 'Custom Tattoos',
    description: 'Personalized designs tailored to your vision. From minimalist line work to detailed full-color pieces.',
    icon: Brush,
    link: '/services/tattoos'
  },
  {
    title: 'Permanent Eyebrows',
    description: 'Enhance your natural beauty with microblading and powder brow techniques for perfect brows every day.',
    icon: Users,
    link: '/services/eyebrows'
  },
  {
    title: 'Professional Piercings',
    description: 'Safe, sterile piercing services with high-quality jewelry options for all body locations.',
    icon: Scissors,
    link: '/services/piercings'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-tattoo-dark to-black">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Our Premium Services</h2>
          <p className="text-gray-400">
            NOVA Tattoos & Beauty offers a range of professional body modification services performed by experienced artists in a clean, safe environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-secondary border-0 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-accent" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-accent group">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
