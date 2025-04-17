
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    content: 'The attention to detail is incredible. My sleeve tattoo exceeded all expectations, and the healing process was smooth thanks to their aftercare guidance.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    service: 'Custom Tattoo'
  },
  {
    id: 2,
    name: 'Sophia Williams',
    content: 'I was nervous about microblading, but the artist made me feel comfortable throughout the process. My eyebrows look natural and beautiful!',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    service: 'Permanent Eyebrows'
  },
  {
    id: 3,
    name: 'Miguel Torres',
    content: 'Clean facility, professional staff, and gorgeous piercing jewelry options. They took the time to educate me on proper aftercare, which I appreciated.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    service: 'Piercings'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-tattoo-dark">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-gray-400">
            Don't just take our word for it. Here's what our clients have to say about their experiences at InkAlchemy Studio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-black/50 border border-white/10">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
