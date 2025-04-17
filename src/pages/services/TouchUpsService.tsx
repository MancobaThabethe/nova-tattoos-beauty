
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, Clock, ShieldCheck, FileCheck, Zap } from 'lucide-react';

const TouchUpsService = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <RefreshCw className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Maintenance Services</span>
              </div>
              
              <h1 className="heading-lg">Touch-Ups & Revisions</h1>
              
              <p className="text-gray-300 text-lg">
                Keep your tattoos and permanent makeup looking fresh and vibrant with our professional 
                touch-up services. We also offer correction and enhancement for existing work.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duration</h3>
                    <p className="text-gray-400">15 min - 3 hours (varies by service)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Experience</h3>
                    <p className="text-gray-400">Expert care for all enhancement needs</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-lg">
                <p className="text-xl font-medium mb-1">Starting at R650</p>
                <p className="text-gray-400">Free touch-ups available for NOVA Tattoos & Beauty clients*</p>
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
                  src="https://images.unsplash.com/photo-1613479205646-c0dc1ee8511f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                  alt="Tattoo touch-up" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="services" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid grid-cols-4 bg-background/10">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="aftercare">Aftercare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ServiceCard 
                  title="Tattoo Touch-Ups"
                  description="Refresh and revitalize your existing tattoos to restore vibrancy and clarity."
                  image="https://images.unsplash.com/photo-1608639533432-be1445700f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  features={[
                    "Brighten faded colors",
                    "Sharpen blurred lines",
                    "Restore details",
                    "Fix patchy areas",
                    "Add new elements to existing designs"
                  ]}
                  price="From R650"
                />
                
                <ServiceCard 
                  title="Permanent Makeup Refreshers"
                  description="Maintain or enhance your microblading and powder brows as they naturally fade over time."
                  image="https://images.unsplash.com/photo-1579125323696-17dd2e74a575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  features={[
                    "Color refreshing for brows",
                    "Shape adjustments",
                    "Density enhancement",
                    "Annual maintenance",
                    "Technique updates"
                  ]}
                  price="From R1,800"
                />
                
                <ServiceCard 
                  title="Cover-Up Consultations"
                  description="Transform existing tattoos you're no longer satisfied with into new designs you'll love."
                  image="https://images.unsplash.com/photo-1619451334792-150fd785ee74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  features={[
                    "Design assessment",
                    "Cover-up feasibility evaluation",
                    "Creative redesign options",
                    "Multi-session planning",
                    "Custom artwork creation"
                  ]}
                  price="R500 (applied to service)"
                />
                
                <ServiceCard 
                  title="Scar Camouflage"
                  description="Minimize the appearance of scars through specialized tattooing techniques."
                  image="https://images.unsplash.com/photo-1554188248-986adbb73be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  features={[
                    "Color matching to natural skin tone",
                    "Texture simulation",
                    "Scar tissue assessment",
                    "Multi-session approach",
                    "Personalized healing plan"
                  ]}
                  price="From R1,200"
                />
              </div>
              
              <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-medium mb-4">Our Touch-Up Philosophy</h3>
                <p className="text-gray-300">
                  At NOVA Tattoos & Beauty, we understand that tattoos and permanent makeup evolve over time. 
                  Our touch-up services focus on preserving the integrity of your original design while enhancing 
                  its appearance. Whether you're looking to refresh work done in our studio or elsewhere, our 
                  experienced artist will provide honest assessments and realistic solutions to achieve the best 
                  possible results.
                </p>
                <p className="text-gray-300 mt-4">
                  <span className="text-accent font-medium">*Note:</span> Touch-ups for work originally done at 
                  NOVA Tattoos & Beauty are free within 3 months of the original procedure if needed due to normal 
                  healing issues. This excludes client aftercare neglect or specific designs that naturally require 
                  multiple sessions.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Our Touch-Up Process</h3>
                  <p className="text-gray-300">
                    Every touch-up begins with a thorough assessment to create a personalized plan for your specific needs.
                    Here's what to expect:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProcessCard 
                    number="01"
                    title="Assessment Consultation"
                    description="We examine your tattoo or permanent makeup, discuss your concerns and goals, and determine the best approach for enhancement."
                  />
                  <ProcessCard 
                    number="02"
                    title="Planning & Preparation"
                    description="We develop a detailed plan for your touch-up, including color matching, technique selection, and session scheduling if multiple visits are needed."
                  />
                  <ProcessCard 
                    number="03"
                    title="Touch-Up Procedure"
                    description="Using the appropriate technique for your specific needs, we carefully enhance your existing work with precision and attention to detail."
                  />
                  <ProcessCard 
                    number="04"
                    title="Aftercare & Follow-Up"
                    description="We provide specific aftercare instructions and schedule any necessary follow-up appointments to ensure optimal results."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-4 flex items-center">
                      <FileCheck className="h-5 w-5 mr-2 text-accent" />
                      When to Consider a Touch-Up
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Your tattoo colors have faded significantly</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Lines have blurred or lost definition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Your microbladed brows have faded (typically 1-2 years after procedure)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Patchy areas have developed in your tattoo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>You want to add new elements to an existing design</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-4 flex items-center">
                      <FileCheck className="h-5 w-5 mr-2 text-accent" />
                      Preparing for Your Touch-Up
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Avoid sun exposure on the area for 2 weeks prior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Stay hydrated and maintain healthy skin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Avoid alcohol and blood thinners 48 hours before</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Bring photos of the original work if done elsewhere</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Come with realistic expectations for what can be achieved</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Touch-Up & Revision Pricing</h3>
                  <p className="text-gray-300">
                    Our pricing is based on the complexity, size, and time required for your specific touch-up needs.
                    All prices include consultation, custom planning, and aftercare guidance.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PricingCard 
                    title="Tattoo Touch-Ups"
                    items={[
                      { name: "Small tattoo touch-up", price: "R650 - R950" },
                      { name: "Medium tattoo touch-up", price: "R950 - R1,800" },
                      { name: "Large tattoo touch-up", price: "From R1,800" },
                      { name: "NOVA original work (within 3 months)", price: "Free*" },
                      { name: "Color enhancement only", price: "From R650" }
                    ]}
                  />
                  
                  <PricingCard 
                    title="Permanent Makeup Refreshers"
                    items={[
                      { name: "Eyebrow color refresh (within 12 months)", price: "R1,800" },
                      { name: "Eyebrow color refresh (after 12 months)", price: "R2,200" },
                      { name: "Eyebrow shape adjustment", price: "From R1,500" },
                      { name: "NOVA original work (within 3 months)", price: "Free*" },
                      { name: "Maintenance package (3 sessions/2 years)", price: "R4,200" }
                    ]}
                  />
                  
                  <PricingCard 
                    title="Cover-Up & Corrections"
                    items={[
                      { name: "Cover-up consultation", price: "R500 (credited to service)" },
                      { name: "Small cover-up", price: "From R1,800" },
                      { name: "Medium cover-up", price: "From R3,600" },
                      { name: "Large cover-up", price: "From R6,000" },
                      { name: "Multi-session cover-ups", price: "Custom quote" }
                    ]}
                  />
                  
                  <PricingCard 
                    title="Scar Camouflage"
                    items={[
                      { name: "Consultation & assessment", price: "R500 (credited to service)" },
                      { name: "Small area (up to 5cm)", price: "From R1,200" },
                      { name: "Medium area (5-10cm)", price: "From R2,200" },
                      { name: "Large area (10cm+)", price: "From R3,500" },
                      { name: "Follow-up sessions", price: "From R850" }
                    ]}
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-accent" />
                    Important Pricing Information
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <span className="font-medium">Free Touch-Up Policy:</span> Touch-ups are free within 3 months of the original 
                        procedure done at NOVA Tattoos & Beauty if the issue is related to normal healing. This excludes 
                        client aftercare neglect or designs that naturally require multiple sessions.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <span className="font-medium">Deposits:</span> A non-refundable deposit of R300-R500 (depending on service) 
                        is required to book your touch-up appointment. This amount is deducted from your final service cost.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <span className="font-medium">Custom Quotes:</span> Complex cover-ups, extensive revisions, or unique 
                        projects will receive a personalized quote after consultation.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>
                        <span className="font-medium">Multiple Sessions:</span> Some touch-ups and most cover-ups require 
                        multiple sessions for optimal results. We'll provide a complete treatment plan and pricing during consultation.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="aftercare" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Aftercare for Touch-Ups</h3>
                  <p className="text-gray-300">
                    Proper aftercare is essential for the success of your touch-up. While similar to the care for new tattoos 
                    or permanent makeup, there may be specific considerations based on your particular enhancement.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Tattoo Touch-Up Aftercare</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Follow the same aftercare routine as for new tattoos, keeping the area clean and moisturized.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Be extra gentle with the area, as the skin has already been tattooed before.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Expect possibly quicker healing than with your original tattoo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Avoid sun exposure for at least 4 weeks after the touch-up.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Maintain long-term care with SPF protection to prevent future fading.</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-medium">Permanent Makeup Refresher Aftercare</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Keep the area clean and apply the provided aftercare ointment as directed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Avoid makeup on the treated area for at least 7 days.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Do not pick at scabs or flakes that form during healing.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Avoid swimming, saunas, and excessive sweating for 10-14 days.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">5.</span>
                        <span>Apply SPF when healed to maintain color longevity.</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h4 className="text-xl font-medium">Cover-Up Aftercare</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Follow standard tattoo aftercare, but be aware healing may vary due to the existing ink.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Be patient as cover-ups may look different during healing than when fully settled.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Attend all scheduled follow-up sessions for best results.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Keep expectations realistic - cover-ups work with existing ink, not replace it completely.</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-medium">Scar Camouflage Aftercare</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">1.</span>
                        <span>Follow your personalized aftercare plan, as scar tissue has different needs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">2.</span>
                        <span>Keep the area clean and apply recommended ointments as scheduled.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">3.</span>
                        <span>Protect the area from sun exposure to prevent discoloration.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">4.</span>
                        <span>Attend all follow-up appointments, as scar camouflage typically requires multiple sessions.</span>
                      </li>
                    </ul>
                    
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 mt-6">
                      <h4 className="text-lg font-medium text-accent mb-3">Healing Expectations</h4>
                      <p className="text-gray-300">
                        Touch-ups and revisions often heal differently than original work. The healing process may be:
                      </p>
                      <ul className="space-y-2 mt-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Faster due to the skin being previously prepared</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>More unpredictable with color retention, especially in cover-ups</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Different in appearance during healing than when fully settled</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>Requiring more patience to see final results</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-gray-300 mb-6">
                    For detailed aftercare guidelines specific to your touch-up procedure, 
                    you can visit our comprehensive aftercare page.
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
            <h2 className="heading-md mb-6">Ready to Revitalize Your Body Art?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Whether you need to freshen up a fading tattoo, maintain your permanent makeup, 
              or transform existing work into something new, we're here to help.
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

// Component for service cards
const ServiceCard = ({ title, description, image, features, price }) => (
  <Card className="bg-secondary/30 border-0 overflow-hidden hover:bg-secondary/40 transition-colors h-full flex flex-col">
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <CardContent className="p-5 space-y-4 flex-grow flex flex-col">
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div className="mt-auto">
        <h4 className="text-sm font-medium text-accent mb-2">Services Include:</h4>
        <ul className="text-gray-400 text-sm space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <p className="text-accent font-bold mt-4">{price}</p>
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
const PricingCard = ({ title, items }) => (
  <div className="bg-secondary/30 rounded-lg overflow-hidden">
    <div className="bg-accent/20 p-4">
      <h3 className="text-xl font-medium">{title}</h3>
    </div>
    <div className="p-4">
      <div className="space-y-3">
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

export default TouchUpsService;
