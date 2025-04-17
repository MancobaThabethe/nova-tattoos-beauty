
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_70%)]"></div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="heading-xl leading-tight">
              Transform Your Vision Into 
              <span className="text-accent block">Permanent Artistry</span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Premium tattoo studio specializing in custom designs, permanent eyebrows, and professional piercings. Your body is our canvas.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/booking">Book Appointment</Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="text-base group">
                <Link to="/gallery">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">10+</span>
                </div>
                <p className="text-sm">Years of<br />Experience</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">2k+</span>
                </div>
                <p className="text-sm">Satisfied<br />Clients</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="font-bold">100%</span>
                </div>
                <p className="text-sm">Safe &<br />Sterile</p>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 lg:p-8 animate-slideUp">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00a8e0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" 
                alt="Tattoo Artist at Work" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
