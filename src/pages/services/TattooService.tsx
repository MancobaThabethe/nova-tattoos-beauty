
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Brush, Clock, ShieldCheck, FileCheck, Zap } from 'lucide-react';

const TattooService = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <Brush className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Tattoo Services</span>
              </div>
              
              <h1 className="heading-lg">Custom Tattoo Artistry</h1>
              
              <p className="text-gray-300 text-lg">
                From minimalist designs to intricate masterpieces, our talented artist brings your vision to life with precision and creativity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duration</h3>
                    <p className="text-gray-400">Varies by size and complexity</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Safety</h3>
                    <p className="text-gray-400">Sterilized equipment & single-use needles</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-lg">
                <p className="text-xl font-medium mb-1">Starting at R1,200 per hour</p>
                <p className="text-gray-400">Custom quotes provided during consultation</p>
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
                  src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Tattoo artist working" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="styles" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid grid-cols-4 bg-background/10">
              <TabsTrigger value="styles">Styles</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="aftercare">Aftercare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="styles" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StyleCard 
                  title="Traditional"
                  description="Bold lines, vibrant colors, and classic designs with strong black outlines."
                  image="https://images.unsplash.com/photo-1590246814883-351321981512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                />
                <StyleCard 
                  title="Neo-Traditional"
                  description="Evolved traditional style with more intricate details and expanded color palette."
                  image="https://images.unsplash.com/photo-1581695232869-5b1dc8201735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                />
                <StyleCard 
                  title="Realism"
                  description="Photorealistic designs that capture subjects with lifelike detail and dimension."
                  image="https://images.unsplash.com/photo-1542884385-a6a1bc21190c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <StyleCard 
                  title="Geometric"
                  description="Precision patterns, shapes, and sacred geometry designs with clean, sharp lines."
                  image="https://images.unsplash.com/photo-1591467883484-31b7ee4bac35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                />
                <StyleCard 
                  title="Watercolor"
                  description="Flowing, colorful designs that mimic watercolor painting techniques."
                  image="https://images.unsplash.com/photo-1601785241577-889b0a7f6dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <StyleCard 
                  title="Minimalist"
                  description="Simple, clean designs with fine lines and minimal shading."
                  image="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Tattoo Process</h3>
                  <p className="text-gray-300">
                    We prioritize your vision, safety, and comfort throughout the entire tattoo journey. 
                    Here's what to expect when getting a tattoo with us:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProcessCard 
                    number="01"
                    title="Consultation"
                    description="Discuss your tattoo ideas, placement, size, and design elements. This can be done in person or through email before booking."
                  />
                  <ProcessCard 
                    number="02"
                    title="Design Development"
                    description="Our artist will create a custom design based on your input. You'll have the opportunity to provide feedback and request revisions."
                  />
                  <ProcessCard 
                    number="03"
                    title="Appointment Day"
                    description="The design is transferred to your skin, final adjustments are made, and tattooing begins in our clean, comfortable studio environment."
                  />
                  <ProcessCard 
                    number="04"
                    title="Aftercare"
                    description="We'll provide detailed aftercare instructions to ensure proper healing. A follow-up appointment for touch-ups may be scheduled if needed."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-accent" />
                    What to Bring to Your Appointment
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Valid ID (you must be 18+ for tattoos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Comfortable clothing that provides easy access to the tattoo area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>A meal before your appointment (never tattoo on an empty stomach)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Entertainment for longer sessions (headphones, books, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>Any reference images you'd like to share with your artist</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Tattoo Pricing Guide</h3>
                  <p className="text-gray-300">
                    Tattoo prices are determined by size, complexity, detail level, and time required. 
                    Below is a general pricing guide, but precise quotes are provided during consultation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PricingCard 
                    title="Small Tattoos"
                    description="Simple designs up to 5cm. Examples: small symbols, minimal text, tiny icons."
                    price="R800 - R1,200"
                    time="30-60 minutes"
                  />
                  <PricingCard 
                    title="Medium Tattoos"
                    description="More detailed designs between 5-15cm. Examples: portraits, animals, flowers."
                    price="R1,200 - R3,600"
                    time="1-3 hours"
                  />
                  <PricingCard 
                    title="Large Tattoos"
                    description="Detailed pieces 15cm+ or complex designs. Examples: half/full sleeves, back pieces."
                    price="R3,600+"
                    time="3+ hours, multiple sessions"
                  />
                  <PricingCard 
                    title="Cover-Ups"
                    description="Designs that hide existing tattoos. Pricing varies based on size and difficulty."
                    price="R1,800+"
                    time="Varies based on complexity"
                  />
                  <PricingCard 
                    title="Custom Full-Day Sessions"
                    description="Extended session for significant progress on larger pieces."
                    price="R7,200"
                    time="6 hours"
                  />
                  <PricingCard 
                    title="Touch-Ups"
                    description="Minor adjustments to existing NOVA tattoos within 3 months."
                    price="Free - R650"
                    time="15-60 minutes"
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    Booking & Deposits
                  </h4>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      All tattoo appointments require a non-refundable deposit to secure your booking:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Small tattoos: R300 deposit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Medium and large tattoos: R600 deposit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Custom full-day sessions: R1,200 deposit</span>
                      </li>
                    </ul>
                    <p>
                      Deposits are applied toward your final tattoo price. We accept cash, credit/debit cards, and mobile payments.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="aftercare" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Tattoo Aftercare Guidelines</h3>
                  <p className="text-gray-300">
                    Proper aftercare is essential for tattoo healing and longevity. Follow these instructions
                    carefully, and contact us if you have any questions or concerns.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">First 24-48 Hours</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Leave the bandage on for 2-4 hours after getting tattooed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Wash the tattoo gently with fragrance-free, antibacterial soap and lukewarm water.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Pat dry with a clean paper towel – do not rub or use cloth towels.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Apply a thin layer of recommended aftercare ointment.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Do not re-bandage the tattoo; let it breathe.</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-medium">Days 3-14</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Wash your tattoo 2-3 times daily with gentle soap and water.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Apply a thin layer of aftercare lotion after washing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Do not soak the tattoo in water (avoid swimming, baths, hot tubs).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Avoid exposing the tattoo to direct sunlight.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Do not pick or scratch at scabs or peeling skin.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">6.</span>
                        <span>Wear loose clothing over the tattooed area.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Long-Term Care</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Always protect your tattoo with SPF 30+ sunscreen when exposed to sunlight.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Keep your tattoo moisturized with quality lotion.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Schedule a touch-up appointment if necessary, usually 4-6 weeks after initial tattoo.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 mt-6">
                      <h4 className="text-xl font-medium text-red-400 mb-3">Warning Signs</h4>
                      <p className="text-gray-300">
                        Contact us immediately and seek medical attention if you experience:
                      </p>
                      <ul className="space-y-2 mt-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Excessive redness, swelling, or warmth around the tattoo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Pus or excessive discharge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Fever or chills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          <span>Severe pain or increasing pain after 3 days</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-accent mb-3">Healing Timeline</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 1-3:</span>
                          <span>Redness, swelling, tenderness (normal)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 4-10:</span>
                          <span>Flaking, peeling, itching (don't scratch!)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Days 11-21:</span>
                          <span>Final peeling, color appears lighter</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Weeks 3-4:</span>
                          <span>Surface healing complete</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent font-bold">Months 2-3:</span>
                          <span>Deep healing complete, true color settles</span>
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
            <h2 className="heading-md mb-6">Ready to Transform Your Ideas into Art?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Schedule a consultation with our talented artist to discuss your tattoo vision.
              No commitment required – just a conversation about creating something unique for you.
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

// Component for tattoo style cards
const StyleCard = ({ title, description, image }) => (
  <Card className="bg-secondary/30 border-0 overflow-hidden hover:bg-secondary/40 transition-colors">
    <div className="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardContent className="p-5">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
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
const PricingCard = ({ title, description, price, time }) => (
  <div className="bg-secondary/30 p-6 rounded-lg hover:bg-secondary/40 transition-colors">
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-gray-400 mb-4 text-sm">{description}</p>
    <div className="border-t border-gray-700 pt-4">
      <p className="text-accent font-bold text-xl mb-1">{price}</p>
      <p className="text-gray-400 text-sm">{time}</p>
    </div>
  </div>
);

export default TattooService;
