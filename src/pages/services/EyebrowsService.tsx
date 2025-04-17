
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Clock, ShieldCheck, FileCheck, Zap } from 'lucide-react';

const EyebrowsService = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <Eye className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Permanent Makeup</span>
              </div>
              
              <h1 className="heading-lg">Permanent Eyebrows</h1>
              
              <p className="text-gray-300 text-lg">
                Wake up with perfect brows every day. Our microblading and powder brow techniques create natural-looking, 
                customized eyebrows that enhance your facial features.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duration</h3>
                    <p className="text-gray-400">2-3 hours (initial session)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Results</h3>
                    <p className="text-gray-400">1-3 years (varies by skin type)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-lg">
                <p className="text-xl font-medium mb-1">Starting at R500</p>
                <p className="text-gray-400">Includes consultation, initial procedure & touch-up</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1600442715817-4d9c8b6c729f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Permanent eyebrow procedure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="techniques" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid grid-cols-4 bg-background/10">
              <TabsTrigger value="techniques">Techniques</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="aftercare">Aftercare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="techniques" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TechniqueCard 
                  title="Microblading"
                  description="Hair-stroke technique that creates ultra-fine, realistic brow hairs for a natural appearance. Ideal for filling in sparse areas and creating structure."
                  image="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  benefits={[
                    "Natural-looking, fine hair strokes",
                    "Great for sparse or thin brows",
                    "Semi-permanent results",
                    "Minimal downtime"
                  ]}
                  price="R500"
                />
                <TechniqueCard 
                  title="Powder Brows"
                  description="Creates a soft, filled-in look similar to brow powder makeup. Provides more color density and is ideal for those who want more definition and shading."
                  image="https://images.unsplash.com/photo-1526758097130-bab247274f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  benefits={[
                    "Perfect for oily or mature skin",
                    "Fuller, defined brow appearance",
                    "Longer-lasting than microblading",
                    "Suits those who fill brows daily"
                  ]}
                  price="R600"
                />
                <TechniqueCard 
                  title="Combination Brows"
                  description="Merges microblading and powder techniques for the best of both worlds. Creates defined hair strokes at the front with a powdered effect through the arch and tail."
                  image="https://images.unsplash.com/photo-1600443582255-dda0b8848ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  benefits={[
                    "Best of both techniques",
                    "Natural front with defined tail",
                    "Customizable density",
                    "Most versatile results"
                  ]}
                  price="R750"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">The Permanent Eyebrow Process</h3>
                  <p className="text-gray-300">
                    Our permanent eyebrow process is thorough and personalized to achieve your perfect brows.
                    Here's what to expect:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProcessCard 
                    number="01"
                    title="Consultation"
                    description="Discuss your desired brow shape, color, and density. We'll assess your skin type, facial features, and natural brows to determine the best approach."
                  />
                  <ProcessCard 
                    number="02"
                    title="Design & Prep"
                    description="Your brows are measured and drawn according to your facial proportions. We'll make adjustments until you're 100% satisfied with the shape and symmetry."
                  />
                  <ProcessCard 
                    number="03"
                    title="Procedure"
                    description="Numbing cream is applied for comfort. The chosen technique is performed with sterile tools and premium pigments customized to your coloring."
                  />
                  <ProcessCard 
                    number="04"
                    title="Touch-Up Session"
                    description="A follow-up appointment 6-8 weeks after the initial procedure to perfect your brows, adjust color, and fill in any areas that didn't retain pigment."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-accent" />
                    Preparation Guidelines
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Avoid alcohol, caffeine, blood thinners, and aspirin for 48 hours before your appointment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Discontinue retinol products and chemical peels 2 weeks before</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>No Botox for 2-4 weeks before (if in the eye/brow area)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>No tanning, sunburn, or sunscreen on the area day of treatment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>No waxing, threading, or tinting 1 week before</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Permanent Eyebrow Pricing</h3>
                  <p className="text-gray-300">
                    Our pricing includes the initial procedure and one touch-up session 6-8 weeks later. 
                    All services include consultation, custom design, and aftercare products.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PricingCard 
                    title="Microblading"
                    description="Natural-looking, hair-stroke technique."
                    price="R2,800"
                    includes={[
                      "Consultation",
                      "Initial procedure (2-3 hours)",
                      "One touch-up (1-2 hours)",
                      "Aftercare kit"
                    ]}
                  />
                  <PricingCard 
                    title="Powder Brows"
                    description="Soft, shaded brow effect with more definition."
                    price="R3,200"
                    includes={[
                      "Consultation",
                      "Initial procedure (2-3 hours)",
                      "One touch-up (1-2 hours)",
                      "Aftercare kit"
                    ]}
                  />
                  <PricingCard 
                    title="Combination Brows"
                    description="Microblading + powder technique."
                    price="R3,500"
                    includes={[
                      "Consultation",
                      "Initial procedure (2-3 hours)",
                      "One touch-up (1-2 hours)",
                      "Aftercare kit"
                    ]}
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    Additional Services
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Annual Color Refresh</span>
                      <span className="font-medium">R1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Shape Correction (not done by us)</span>
                      <span className="font-medium">R2,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Additional Touch-Up (within 3 months)</span>
                      <span className="font-medium">R800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Consultation Only</span>
                      <span className="font-medium">R200 (credited to service)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <p className="text-gray-300">
                      <span className="font-medium text-accent">Booking Deposit:</span> A non-refundable R500 deposit is required to secure your appointment, 
                      which will be deducted from your final service cost.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="aftercare" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Permanent Eyebrow Aftercare</h3>
                  <p className="text-gray-300">
                    Proper aftercare is crucial for optimal pigment retention and healing.
                    Follow these guidelines carefully for the best results.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">First 7 Days</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Gently blot the treated area with clean tissue to absorb lymph fluid for the first few hours.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Apply the provided aftercare ointment with a clean cotton swab 2-3 times daily.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Do not get the treated area wet for the first 24 hours.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Avoid makeup on or around the treated area.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Do not pick, scratch, or rub the treated area.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">6.</span>
                        <span>Sleep on your back to avoid pressure on the treated area.</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-medium">Days 7-14</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Continue applying aftercare ointment as directed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Avoid swimming, saunas, steam rooms, and excessive sweating.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Do not use exfoliants, retinols, or acids on the treated area.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Some flaking is normal – do not pick or peel!</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Long-Term Care</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Apply SPF 30+ when outdoors to prevent color fading.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Avoid harsh facial treatments in the treated area.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Attend your touch-up appointment 6-8 weeks after initial procedure.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-accent mb-3">Healing Process & Expectations</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 1-2:</span>
                          <span>Brows appear dark and bold with slight swelling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 3-5:</span>
                          <span>Darkening and scabbing begins, brows may appear thicker</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 5-8:</span>
                          <span>Flaking begins – don't pick at the flakes!</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 8-10:</span>
                          <span>Color appears lighter as scabs fall off naturally</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 10-14:</span>
                          <span>Brows might look patchy or too light (normal)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Weeks 4-6:</span>
                          <span>Color returns as skin regenerates, ready for touch-up</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-red-400 mb-3">When to Contact Us</h4>
                      <p className="text-gray-300">
                        Reach out immediately if you experience:
                      </p>
                      <ul className="space-y-2 mt-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Excessive pain, swelling, or redness</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Oozing, pus, or signs of infection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Allergic reaction (severe itching, burning)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Fever or other concerning symptoms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-300 mb-6">
                    For detailed aftercare guidelines, you can visit our comprehensive aftercare page.
                  </p>
                  <Button asChild>
                    <Link to="/aftercare">Detailed Aftercare Guide</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent/20 to-purple-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="heading-md mb-6">Ready for Effortless Beauty?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Schedule a consultation with our permanent makeup specialist to discuss your perfect brows.
              We'll help you choose the best technique for your features and lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Component for technique cards
const TechniqueCard = ({ title, description, image, benefits, price }) => (
  <Card className="bg-secondary/30 border-0 overflow-hidden hover:bg-secondary/40 transition-colors">
    <div className="aspect-[3/2] overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardContent className="p-5 space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-accent mb-2">Benefits:</h4>
        <ul className="text-gray-400 text-sm space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pt-2">
        <p className="text-accent font-bold">{price}</p>
      </div>
    </CardContent>
  </Card>
);

// Component for process cards
const ProcessCard = ({ number, title, description }) => (
  <div className="bg-secondary/30 p-6 rounded-lg relative overflow-hidden">
    <span className="absolute -top-5 -left-5 text-8xl font-bold text-accent/10">{number}</span>
    <div className="relative z-10">
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

// Component for pricing cards
const PricingCard = ({ title, description, price, includes }) => (
  <div className="bg-secondary/30 p-6 rounded-lg hover:bg-secondary/40 transition-colors h-full flex flex-col">
    <div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-400 mb-3 text-sm">{description}</p>
    </div>
    
    <div className="bg-accent/10 rounded-lg p-4 mb-4">
      <p className="text-accent font-bold text-2xl text-center">{price}</p>
    </div>
    
    <div className="flex-grow">
      <h4 className="text-sm font-medium mb-2">Includes:</h4>
      <ul className="text-gray-400 text-sm space-y-2">
        {includes.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-accent">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default EyebrowsService;
