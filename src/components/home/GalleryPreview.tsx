
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Sample gallery images - in a real app, these would come from your backend
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590246815117-ded75092d9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "Tattoo",
    alt: "Arm tattoo with geometric pattern"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522120657009-060ca01afcd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Tattoo",
    alt: "Back tattoo with floral design"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "Eyebrows",
    alt: "Perfect microbladed eyebrows"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    category: "Piercing",
    alt: "Ear with multiple piercing jewelry"
  }
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="heading-lg mb-4">Our Latest Work</h2>
            <p className="text-gray-400">
              Browse through our portfolio of custom tattoos, permanent eyebrows, and piercings to see the quality and creativity we bring to every client.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="text-base group">
            <Link to="/gallery" className="flex items-center">
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-xs font-medium bg-accent/90 text-white py-1 px-2 rounded-full inline-block mb-2 w-fit">
                  {image.category}
                </span>
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
