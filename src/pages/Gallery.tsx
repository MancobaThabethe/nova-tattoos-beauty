
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample gallery images - in a real app, these would come from your database
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590246815117-ded75092d9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Geometric Arm Design",
    artist: "Alex Smith",
    category: "tattoos"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Floral Back Piece",
    artist: "Mia Johnson",
    category: "tattoos"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578088638455-661eb17d6aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Minimalist Line Work",
    artist: "Carlos Rivera",
    category: "tattoos"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Traditional Rose",
    artist: "Sophia Lee",
    category: "tattoos"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Blackwork Mandala",
    artist: "David Kim",
    category: "tattoos"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Natural Microblading",
    artist: "Emma Wilson",
    category: "eyebrows"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1593533824878-1c98a80104e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Powder Brow Technique",
    artist: "Olivia Taylor",
    category: "eyebrows"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Multiple Ear Piercings",
    artist: "James Wright",
    category: "piercings"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1603899230798-7bbbe426d2e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Septum Jewelry",
    artist: "Thomas Garcia",
    category: "piercings"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-tattoo-dark">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="heading-lg mb-6">Our Gallery</h1>
            <p className="text-gray-300">
              Browse through our portfolio of completed works. Each piece represents our commitment to quality, creativity, and client satisfaction.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                <TabsTrigger value="all">All Works</TabsTrigger>
                <TabsTrigger value="tattoos">Tattoos</TabsTrigger>
                <TabsTrigger value="eyebrows">Eyebrows</TabsTrigger>
                <TabsTrigger value="piercings">Piercings</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-xs font-medium bg-accent/90 text-white py-1 px-2 rounded-full inline-block mb-2 w-fit">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-300 text-sm">Artist: {item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tattoos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.filter(item => item.category === 'tattoos').map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-300 text-sm">Artist: {item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="eyebrows">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.filter(item => item.category === 'eyebrows').map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-300 text-sm">Artist: {item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="piercings">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.filter(item => item.category === 'piercings').map((item) => (
                  <div 
                    key={item.id} 
                    className="group relative overflow-hidden rounded-lg cursor-pointer"
                    onClick={() => openLightbox(item)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-gray-300 text-sm">Artist: {item.artist}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              className="w-full object-contain max-h-[80vh]"
            />
            <div className="mt-4 text-white">
              <h3 className="text-xl font-medium">{selectedImage.title}</h3>
              <p className="text-gray-300">Artist: {selectedImage.artist}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
