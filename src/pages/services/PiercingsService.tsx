
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Clock, ShieldCheck, FileCheck, Zap } from 'lucide-react';

const PiercingsService = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <Scissors className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Body Piercing</span>
              </div>
              
              <h1 className="heading-lg">Professional Piercing Services</h1>
              
              <p className="text-gray-300 text-lg">
                Express yourself with our safe, professional piercing services. From classic ear piercings to 
                unique body modifications, we use only the highest quality jewelry and sterile techniques.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duration</h3>
                    <p className="text-gray-400">15-45 minutes per piercing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Safety</h3>
                    <p className="text-gray-400">Sterile equipment & premium jewelry</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-lg">
                <p className="text-xl font-medium mb-1">Starting at R350</p>
                <p className="text-gray-400">Prices vary by location and jewelry selection</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/booking">Book Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/gallery">View Gallery</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1596075780750-79adcd2cbf50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Professional piercing service" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="piercings" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid grid-cols-4 bg-background/10">
              <TabsTrigger value="piercings">Piercing Types</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="aftercare">Aftercare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="piercings" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PiercingCard 
                  title="Ear Piercings"
                  description="Various locations on the ear including lobe, helix, tragus, conch, daith, and industrial."
                  image="https://images.unsplash.com/photo-1584811644165-33078f50eb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  price="From R350"
                  healing="6 weeks - 12 months"
                />
                <PiercingCard 
                  title="Facial Piercings"
                  description="Nostril, septum, eyebrow, bridge, and various lip piercings including labret and monroe."
                  image="https://images.unsplash.com/photo-1595218391766-83304d246e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  price="From R450"
                  healing="2 - 6 months"
                />
                <PiercingCard 
                  title="Body Piercings"
                  description="Navel, nipple, surface piercings, dermals, and more specialized body modifications."
                  image="https://images.unsplash.com/photo-1627016188481-3ed3809d7e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  price="From R550"
                  healing="3 - 12 months"
                />
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium mb-4">Our Piercing Philosophy</h3>
                <p className="text-gray-300">
                  At NOVA Tattoos & Beauty, we believe that piercings are a personal form of self-expression. 
                  We take pride in providing a safe, sterile environment and use only the highest quality jewelry. 
                  Our professional piercer takes the time to understand your goals and anatomy to ensure proper 
                  placement and the best possible healing experience.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FeatureCard 
                    title="Precision Technique"
                    description="We use sterile, single-use needles (never guns) for precise, clean piercings with minimal trauma."
                  />
                  <FeatureCard 
                    title="Premium Jewelry"
                    description="We offer implant-grade titanium, surgical steel, and solid gold options for initial piercings."
                  />
                  <FeatureCard 
                    title="Extensive Experience"
                    description="Our piercing specialist has years of experience with all types of body piercing."
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Piercing Process</h3>
                  <p className="text-gray-300">
                    We maintain the highest standards of safety and cleanliness throughout your piercing experience.
                    Here's what you can expect during your visit:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProcessCard 
                    number="01"
                    title="Consultation"
                    description="Discuss your piercing goals, jewelry options, and placement. We'll answer any questions and address concerns about the procedure and healing process."
                  />
                  <ProcessCard 
                    number="02"
                    title="Preparation"
                    description="We clean and mark the piercing site, allowing you to approve the placement. All tools and jewelry are sterilized, and we prepare a clean workspace."
                  />
                  <ProcessCard 
                    number="03"
                    title="Piercing Procedure"
                    description="Using a single-use, sterile needle, we create the piercing channel and insert your chosen jewelry. The process is quick with minimal discomfort."
                  />
                  <ProcessCard 
                    number="04"
                    title="Aftercare Instructions"
                    description="We provide detailed aftercare guidelines and a complimentary saline solution. We're available for follow-up questions throughout your healing journey."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-accent" />
                    Before Your Appointment
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Come well-hydrated and after eating a meal (prevents lightheadedness).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Avoid alcohol for 24 hours before your appointment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Bring valid ID (you must be 18+ for most piercings or have parental consent if 16-17).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Wear comfortable clothing that provides easy access to the piercing area.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Consider bringing a friend for support (especially for your first piercing).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Piercing Price Guide</h3>
                  <p className="text-gray-300">
                    Our piercing prices include the procedure, basic jewelry, and aftercare instructions.
                    Premium jewelry options are available at additional cost.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  <PricingSection 
                    title="Ear Piercings"
                    items={[
                      { name: 'Earlobe (single)', price: 'R350' },
                      { name: 'Earlobe (pair)', price: 'R650' },
                      { name: 'Helix/Cartilage', price: 'R450' },
                      { name: 'Tragus', price: 'R500' },
                      { name: 'Conch', price: 'R550' },
                      { name: 'Daith', price: 'R650' },
                      { name: 'Industrial', price: 'R800' },
                      { name: 'Rook', price: 'R600' }
                    ]}
                  />
                  
                  <PricingSection 
                    title="Facial Piercings"
                    items={[
                      { name: 'Nostril', price: 'R450' },
                      { name: 'Septum', price: 'R600' },
                      { name: 'Eyebrow', price: 'R500' },
                      { name: 'Bridge', price: 'R650' },
                      { name: 'Labret/Monroe', price: 'R550' },
                      { name: 'Medusa', price: 'R600' },
                      { name: 'Snake Bites (pair)', price: 'R900' }
                    ]}
                  />
                  
                  <PricingSection 
                    title="Body Piercings"
                    items={[
                      { name: 'Navel', price: 'R550' },
                      { name: 'Nipple (single)', price: 'R650' },
                      { name: 'Nipple (pair)', price: 'R1,100' },
                      { name: 'Surface Piercing', price: 'From R700' },
                      { name: 'Dermal Anchor (single)', price: 'R650' },
                      { name: 'Dermal Anchors (3+)', price: 'R550 each' }
                    ]}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-4 flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-accent" />
                      Jewelry Options
                    </h4>
                    <p className="text-gray-300 mb-4">
                      We offer a variety of high-quality jewelry options for your new piercing:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex justify-between">
                        <span>Implant-Grade Titanium</span>
                        <span>Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Surgical Steel</span>
                        <span>Included</span>
                      </li>
                      <li className="flex justify-between">
                        <span>14k Gold</span>
                        <span>+R300 - R800</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Premium Ends/Gems</span>
                        <span>From R200</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/30 p-6 rounded-lg">
                    <h4 className="text-xl font-medium mb-4 flex items-center">
                      <FileCheck className="h-5 w-5 mr-2 text-accent" />
                      Additional Services
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex justify-between">
                        <span>Jewelry Change (purchased with us)</span>
                        <span>Free</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Jewelry Change (outside jewelry)</span>
                        <span>R150</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Piercing Consultation</span>
                        <span>Free</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Problem-Solving Consultation</span>
                        <span>R200</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="aftercare" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Piercing Aftercare Guidelines</h3>
                  <p className="text-gray-300">
                    Proper aftercare is essential for successful healing. Follow these instructions 
                    carefully to minimize complications and ensure the best results.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Daily Care</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Clean your piercing 2-3 times daily with saline solution.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Wash hands thoroughly before touching your piercing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Avoid moving, twisting, or playing with your jewelry.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Do not remove jewelry during the healing period.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Avoid makeup, lotions, or sprays around the piercing.</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-medium">What to Avoid</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Swimming pools, hot tubs, lakes, and oceans during healing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Alcohol-based mouthwash for oral piercings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Sleeping on facial or ear piercings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Tight clothing on body piercings.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Harsh soaps, rubbing alcohol, or hydrogen peroxide.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Healing Times</h4>
                    <div className="grid grid-cols-2 gap-4 text-gray-300">
                      <div>
                        <p className="font-medium text-accent">Ear Lobe:</p>
                        <p>6-8 weeks</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Cartilage:</p>
                        <p>6-12 months</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Nostril:</p>
                        <p>4-6 months</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Septum:</p>
                        <p>6-8 weeks</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Lip:</p>
                        <p>2-3 months</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Navel:</p>
                        <p>6-12 months</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Eyebrow:</p>
                        <p>6-8 weeks</p>
                      </div>
                      <div>
                        <p className="font-medium text-accent">Nipple:</p>
                        <p>6-12 months</p>
                      </div>
                    </div>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-red-400 mb-3">Warning Signs of Infection</h4>
                      <p className="text-gray-300">
                        Contact us immediately and seek medical help if you notice:
                      </p>
                      <ul className="space-y-2 mt-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Excessive swelling or redness that increases after 48 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Yellow or green discharge (pus)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Severe pain or throbbing sensation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Fever or chills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Embedded jewelry or tissue overgrowth</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-accent mb-3">Normal Healing Symptoms</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Mild swelling and redness for the first few days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Slight tenderness or warmth around the piercing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Clear or slightly white discharge (lymph fluid)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Slight crusting around jewelry</span>
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
            <h2 className="heading-md mb-6">Ready to Express Yourself?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Schedule your piercing appointment today and take the first step towards 
              your new look. We'll ensure a safe, comfortable experience with results you'll love.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book Now</Link>
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

// Component for piercing cards
const PiercingCard = ({ title, description, image, price, healing }) => (
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
      
      <div className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <p className="text-gray-400">Price:</p>
          <p className="font-medium text-accent">{price}</p>
        </div>
        <div>
          <p className="text-gray-400">Healing Time:</p>
          <p className="font-medium">{healing}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Component for feature cards
const FeatureCard = ({ title, description }) => (
  <div className="bg-accent/5 border border-accent/10 p-4 rounded-lg">
    <h4 className="font-medium text-accent mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
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

// Component for pricing sections
const PricingSection = ({ title, items }) => (
  <div className="bg-secondary/30 rounded-lg overflow-hidden">
    <div className="bg-accent/20 p-4">
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between py-2 border-b border-gray-700 last:border-0">
            <span className="text-gray-300">{item.name}</span>
            <span className="font-medium">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PiercingsService;
