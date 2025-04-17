
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: 'Michael Rivera',
    role: 'Founder & Lead Tattoo Artist',
    bio: 'With over 15 years of experience, Michael specializes in realistic and portrait tattoos. His passion for art and precision has earned him recognition in the industry.',
    image: 'https://images.unsplash.com/photo-1612459284970-e8f027596279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Sarah Chen',
    role: 'Tattoo Artist & Designer',
    bio: 'Sarah brings a unique blend of traditional and modern techniques to her work. She specializes in watercolor tattoos and Japanese-inspired designs.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'James Wilson',
    role: 'Piercing Specialist',
    bio: 'James has performed thousands of piercings with meticulous attention to safety and detail. He stays current with the latest techniques and jewelry trends.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Emma Davis',
    role: 'Microblading & PMU Artist',
    bio: 'Emma is our permanent makeup specialist, transforming eyebrows and enhancing natural beauty. Her background in cosmetology brings a unique perspective to our team.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
  }
];

const About = () => {
  return (
    <Layout>
      <div className="pt-24 bg-tattoo-dark">
        {/* Hero Section */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="heading-lg">About InkAlchemy Studio</h1>
              <p className="text-lg text-gray-300">
                Founded in 2010, InkAlchemy has grown from a small tattoo parlor to a premier destination for body art and modification. Our mission is to transform your vision into permanent artistry while maintaining the highest standards of quality and safety.
              </p>
              <p className="text-gray-400">
                Located in the heart of the city, our studio provides a welcoming environment where creativity flourishes and clients receive personalized attention from our skilled team of artists.
              </p>
              <div className="pt-4">
                <Button asChild>
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
              </div>
            </div>
            
            <div className="glass-panel p-6">
              <img 
                src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
                alt="InkAlchemy Studio Interior" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-black py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">Our Core Values</h2>
              <p className="text-gray-400">
                These principles guide everything we do, from client consultations to aftercare support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Artistic Excellence</h3>
                <p className="text-gray-400">
                  We continuously refine our craft and stay current with industry techniques to deliver exceptional results for every client.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety & Hygiene</h3>
                <p className="text-gray-400">
                  We maintain stringent cleanliness protocols and use only sterile equipment and high-quality products for all procedures.
                </p>
              </div>
              
              <div className="bg-secondary p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client Satisfaction</h3>
                <p className="text-gray-400">
                  We prioritize clear communication, personalized experiences, and exceptional results that exceed client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">Meet Our Talented Team</h2>
              <p className="text-gray-400">
                Our diverse group of artists brings unique skills and perspectives to create exceptional experiences for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-secondary rounded-xl overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-accent text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-black py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400">
                Find answers to common questions about our services, procedures, and aftercare.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-800">
              <div className="py-5">
                <h3 className="text-lg font-medium mb-2">How do I prepare for my first tattoo?</h3>
                <p className="text-gray-400">
                  Get plenty of rest, stay hydrated, eat before your appointment, and avoid alcohol for 24 hours prior. Wear comfortable clothing that provides easy access to the tattoo area.
                </p>
              </div>
              
              <div className="py-5">
                <h3 className="text-lg font-medium mb-2">Is permanent makeup really permanent?</h3>
                <p className="text-gray-400">
                  While called "permanent," microblading and powder brows typically last 1-3 years depending on skin type, lifestyle, and aftercare. Touch-ups are recommended to maintain the desired look.
                </p>
              </div>
              
              <div className="py-5">
                <h3 className="text-lg font-medium mb-2">How painful are piercings?</h3>
                <p className="text-gray-400">
                  Pain levels vary by location and individual tolerance. Most clients describe the sensation as brief pressure or a quick pinch. Our experienced piercers work efficiently to minimize discomfort.
                </p>
              </div>
              
              <div className="py-5">
                <h3 className="text-lg font-medium mb-2">What aftercare is required?</h3>
                <p className="text-gray-400">
                  Each service has specific aftercare instructions that our team will review with you. Generally, keeping the area clean, avoiding sun exposure, and following our guidance ensures optimal healing.
                </p>
              </div>
              
              <div className="py-5">
                <h3 className="text-lg font-medium mb-2">Do you accept walk-ins?</h3>
                <p className="text-gray-400">
                  While we welcome walk-ins for simple piercings (subject to availability), we recommend appointments for all tattoo and permanent makeup services to ensure you receive our full attention and preparation.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="group">
                <Link to="/contact" className="flex items-center">
                  Have more questions? Contact us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
