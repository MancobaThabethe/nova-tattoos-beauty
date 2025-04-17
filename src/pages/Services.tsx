
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brush, Eye, Scissors, Clock, RefreshCw } from 'lucide-react';

const servicesData = [
  {
    id: 'tattoos',
    title: 'Custom Tattoos',
    description: 'From concept to completion, our artists work with you to create personalized designs that reflect your vision.',
    image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    icon: Brush,
    features: [
      'Free consultation and design process',
      'Custom artwork tailored to your vision',
      'Various styles: Traditional, Realism, Geometric, Watercolor, and more',
      'Safe and sterile environment',
      'Aftercare guidance and touch-up services'
    ],
    pricing: 'Starting at R350/hour',
    link: '/services/tattoos'
  },
  {
    id: 'eyebrows',
    title: 'Permanent Eyebrows',
    description: 'Enhance your natural beauty with microblading and powder brow techniques for perfect brows every day.',
    image: 'https://images.unsplash.com/photo-1572872202671-dc8bd60080ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    icon: Eye,
    features: [
      'Microblading for natural-looking hair strokes',
      'Powder/Ombré brows for a softer, filled look',
      'Combination brows for best of both techniques',
      'Custom color matching for your skin tone',
      'Touch-up sessions included'
    ],
    pricing: 'Starting at R500',
    link: '/services/eyebrows'
  },
  {
    id: 'piercings',
    title: 'Professional Piercings',
    description: 'Safe, sterile piercing services with high-quality jewelry options for all body locations.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
    icon: Scissors,
    features: [
      'Ear piercings (lobe, helix, tragus, etc.)',
      'Body piercings (navel, nose, lip, etc.)',
      'High-quality jewelry options',
      'Safe and sterile procedure',
      'Aftercare guidance and support'
    ],
    pricing: 'Starting at R350',
    link: '/services/piercings'
  },
  {
    id: 'consultations',
    title: 'Consultations',
    description: 'Meet with our artists to discuss your ideas and get expert advice on your tattoo, eyebrow, or piercing projects.',
    image: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    icon: Clock,
    features: [
      'One-on-one sessions with experienced artists',
      'Design concept development',
      'Placement and size recommendations',
      'Cost estimates and time expectations',
      'Preparation guidelines for your appointment'
    ],
    pricing: 'Free (requires appointment)',
    link: '/services/consultations'
  },
  {
    id: 'touch-ups',
    title: 'Touch-Ups & Revisions',
    description: 'Keep your tattoos and permanent makeup looking fresh and vibrant with our touch-up services.',
    image: 'https://images.unsplash.com/photo-1617473791116-12e006bc1243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    icon: RefreshCw,
    features: [
      'Tattoo touch-ups and color refreshing',
      'Microblading and powder brow maintenance',
      'Scar camouflage and correction',
      'Tattoo enhancement and revision',
      'Cover-up consultations'
    ],
    pricing: 'Starting at R400',
    link: '/services/touch-ups'
  }
];

const Services = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 bg-tattoo-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-lg mb-6">Our Services</h1>
            <p className="text-gray-300">
              At NOVA Tattoos & Beauty, we offer a comprehensive range of body art and modification services, all performed by our expert artists in a safe, clean environment.
            </p>
          </div>
            
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <div className="lg:w-1/2">
                  <div className="rounded-xl overflow-hidden aspect-video">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="heading-md">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-300">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <span className="text-accent">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-2">
                    <p className="text-lg font-medium mb-4">{service.pricing}</p>
                    <div className="flex gap-4">
                      <Button asChild>
                        <Link to="/booking">Book Now</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to={service.link}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
