
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MessageSquare, FileText, Lightbulb, ClipboardList } from 'lucide-react';

const ConsultationsService = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                <MessageSquare className="h-4 w-4 text-accent" />
                <span className="text-accent text-sm font-medium">Expert Guidance</span>
              </div>
              
              <h1 className="heading-lg">Free Consultations</h1>
              
              <p className="text-gray-300 text-lg">
                Every great body art journey begins with a conversation. Our free consultations give you the opportunity 
                to discuss your ideas, ask questions, and receive expert guidance before committing to a procedure.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Duration</h3>
                    <p className="text-gray-400">30-45 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Cost</h3>
                    <p className="text-gray-400">Free of charge</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/50 p-5 rounded-lg">
                <p className="text-xl font-medium mb-1">No Obligation</p>
                <p className="text-gray-400">Discuss your ideas and get expert advice with no pressure</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/booking">Book a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Have Questions?</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" 
                  alt="Consultation session" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Tabs Section */}
          <Tabs defaultValue="types" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid grid-cols-3 bg-background/10">
              <TabsTrigger value="types">Consultation Types</TabsTrigger>
              <TabsTrigger value="process">What to Expect</TabsTrigger>
              <TabsTrigger value="prepare">How to Prepare</TabsTrigger>
            </TabsList>
            
            <TabsContent value="types" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ConsultCard 
                  icon={<ClipboardList className="h-8 w-8 text-accent" />}
                  title="Tattoo Consultations"
                  description="Discuss your tattoo ideas, design options, placement, size, and style with our experienced artist."
                  benefits={[
                    "Review portfolio and art styles",
                    "Discuss design concepts and placement",
                    "Get size and time estimates",
                    "Learn about the tattooing process",
                    "Receive pricing information"
                  ]}
                />
                
                <ConsultCard 
                  icon={<Lightbulb className="h-8 w-8 text-accent" />}
                  title="Permanent Makeup Consultations"
                  description="Explore options for enhancing your natural beauty with microblading, powder brows, and other permanent makeup."
                  benefits={[
                    "Discuss brow shape and style options",
                    "Color matching for your skin tone",
                    "Learn about different techniques",
                    "Understand the healing process",
                    "Get personalized recommendations"
                  ]}
                />
                
                <ConsultCard 
                  icon={<MessageSquare className="h-8 w-8 text-accent" />}
                  title="Piercing Consultations"
                  description="Get expert advice on piercing options, placement, jewelry selection, and aftercare requirements."
                  benefits={[
                    "Discuss anatomy and piercing suitability",
                    "Review jewelry options and materials",
                    "Learn about healing expectations",
                    "Get answers to safety questions",
                    "Understand aftercare requirements"
                  ]}
                />
              </div>
              
              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-medium">Specialty Consultations</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SpecialtyCard 
                    title="Cover-Up Assessment"
                    description="Evaluation of existing tattoos to determine cover-up possibilities and design options."
                  />
                  
                  <SpecialtyCard 
                    title="Scar Camouflage Consultation"
                    description="Discussion of techniques to minimize the appearance of scars through specialized tattooing."
                  />
                  
                  <SpecialtyCard 
                    title="Custom Project Planning"
                    description="In-depth planning for large-scale tattoo projects like sleeves, back pieces, or cohesive collections."
                  />
                  
                  <SpecialtyCard 
                    title="Correction Consultation"
                    description="Assessment of previous work done elsewhere that may need improvement or correction."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4">Our Consultation Philosophy</h4>
                  <p className="text-gray-300">
                    At NOVA Tattoos & Beauty, we believe that a thorough consultation is the foundation of a successful 
                    body art experience. We take the time to truly understand your vision, answer all your questions, 
                    and provide honest, professional guidance. Our consultations are pressure-free zones where you can 
                    explore ideas without obligation, and we're committed to ensuring you feel informed and confident 
                    before proceeding with any service.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">What to Expect During Your Consultation</h3>
                  <p className="text-gray-300">
                    Our consultations are designed to be informative, comfortable, and productive. Here's what happens 
                    during this important first step:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ProcessCard 
                    number="01"
                    title="Welcome & Discussion"
                    description="We'll begin by getting to know you and understanding your ideas, goals, and any concerns you may have. This is the time to share inspiration photos, sketches, or concepts."
                  />
                  <ProcessCard 
                    number="02"
                    title="Professional Assessment"
                    description="Our artist will evaluate your ideas in relation to skin type, placement area, and artistic feasibility. They'll provide honest feedback about what works well and any potential challenges."
                  />
                  <ProcessCard 
                    number="03"
                    title="Options & Education"
                    description="You'll learn about different techniques, styles, or approaches that might work for your project. We'll explain the process, expected results, and aftercare requirements."
                  />
                  <ProcessCard 
                    number="04"
                    title="Planning & Next Steps"
                    description="If you decide to proceed, we'll discuss timing, pricing, and scheduling. For tattoos, design development may begin. For other services, we may book your appointment right away."
                  />
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4">Frequently Asked Consultation Questions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div>
                      <h5 className="font-medium text-accent mb-2">Do I need to pay for a consultation?</h5>
                      <p className="text-gray-300 text-sm">
                        No, consultations are completely free and come with no obligation to book a service.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">How long does a consultation take?</h5>
                      <p className="text-gray-300 text-sm">
                        Most consultations last 30-45 minutes, depending on the complexity of your project.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">Should I bring reference images?</h5>
                      <p className="text-gray-300 text-sm">
                        Yes! Reference images are extremely helpful for communicating your vision. Bring any inspiration photos, sketches, or ideas you have.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">Can I book my appointment after the consultation?</h5>
                      <p className="text-gray-300 text-sm">
                        Absolutely. If you're ready to proceed after the consultation, we can book your appointment and collect any required deposit.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">Will I see design sketches during the consultation?</h5>
                      <p className="text-gray-300 text-sm">
                        For tattoos, preliminary design work typically begins after the consultation and deposit. For permanent makeup, we may draw potential brow shapes during the consultation.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">What if I'm not sure what I want?</h5>
                      <p className="text-gray-300 text-sm">
                        That's perfectly fine! Our consultations are ideal for those still exploring ideas. Our artist can help refine concepts based on your preferences and style.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prepare" className="mt-8">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">How to Prepare for Your Consultation</h3>
                  <p className="text-gray-300">
                    Getting the most out of your consultation is easy with a little preparation. Here are some tips to 
                    help you make the most of your session:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PrepCard 
                    title="Research & Inspiration"
                    items={[
                      "Collect reference images that inspire you",
                      "Consider your personal style preferences",
                      "Think about size and placement options",
                      "Research artists and their styles",
                      "Make notes about specific elements you want"
                    ]}
                  />
                  
                  <PrepCard 
                    title="Questions to Prepare"
                    items={[
                      "Write down specific questions you have",
                      "Consider budget and timing constraints",
                      "Think about pain tolerance concerns",
                      "Note any health conditions to discuss",
                      "Consider aftercare limitations"
                    ]}
                  />
                  
                  <PrepCard 
                    title="Practical Preparation"
                    items={[
                      "Wear comfortable clothing for easy access to potential placement areas",
                      "Bring your ID (especially if under 25)",
                      "Consider bringing a friend for a second opinion",
                      "Plan enough time without rushing",
                      "Be ready to take notes"
                    ]}
                  />
                </div>
                
                <div className="bg-accent/10 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4 text-accent">Pre-Consultation Checklist</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h5 className="font-medium">For Tattoo Consultations:</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Gather reference images of styles you like</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Consider placement options on your body</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Think about size, color vs. black & gray</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Research our artist's portfolio on Instagram</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Set a realistic budget expectation</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h5 className="font-medium">For Permanent Makeup Consultations:</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Come with clean, makeup-free brows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Bring photos of brow styles you like</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Consider your makeup routine and lifestyle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Note any previous permanent makeup</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Research microblading vs. powder brows</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="font-medium mb-4">For Piercing Consultations:</h5>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Research different piercing types and placements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Consider jewelry styles and materials you prefer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Think about healing time and how it fits your lifestyle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">✓</span>
                        <span>Note any previous piercing experiences or reactions</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-secondary/30 p-6 rounded-lg mt-8">
                  <h4 className="text-xl font-medium mb-4">Making the Most of Your Consultation</h4>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Your consultation is a valuable opportunity to establish a relationship with your artist and set 
                      the foundation for a successful experience. Here are some tips to maximize this time:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          <span className="font-medium">Be open and honest</span> about your expectations, concerns, and any relevant health information.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          <span className="font-medium">Ask questions</span> - there are no silly questions when it comes to 
                          permanent body art. Our artist welcomes all inquiries.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          <span className="font-medium">Listen to professional advice</span> - our artist has experience 
                          with what works well and what doesn't. Their recommendations come from a place of expertise.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold">•</span>
                        <span>
                          <span className="font-medium">Take time to decide</span> - there's no pressure to book immediately. 
                          Feel free to think about the information and options presented.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Testimonials Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">What Clients Say About Our Consultations</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TestimonialCard 
                quote="I came in so nervous and unsure about my first tattoo, but the consultation completely put me at ease. My artist took time to understand what I wanted and gave honest advice about what would work best."
                author="Sophia M."
                service="Tattoo Client"
              />
              
              <TestimonialCard 
                quote="The brow consultation was incredibly thorough. We discussed shape, color, and techniques. I felt confident booking my microblading appointment knowing exactly what to expect."
                author="Lauren T."
                service="Permanent Makeup Client"
              />
              
              <TestimonialCard 
                quote="I had a complex cover-up project and wasn't sure if it could be done. During my consultation, the artist showed me possibilities I hadn't considered and created a plan that worked beautifully."
                author="James K."
                service="Cover-Up Client"
              />
              
              <TestimonialCard 
                quote="As someone with anxiety about piercings, the consultation was essential. All my questions were answered, and I felt prepared and comfortable when I came back for the actual procedure."
                author="Olivia R."
                service="Piercing Client"
              />
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent/20 to-purple-900/20 rounded-xl p-8 md:p-12 text-center">
            <h2 className="heading-md mb-6">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Book your free, no-obligation consultation today. It's the perfect first step toward bringing your vision to life, 
              whether you're planning a tattoo, permanent makeup, or piercing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/booking">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Component for consultation type cards
const ConsultCard = ({ icon, title, description, benefits }) => (
  <Card className="bg-secondary/30 border-0 overflow-hidden hover:bg-secondary/40 transition-colors h-full flex flex-col">
    <CardContent className="p-5 space-y-4 flex-grow flex flex-col">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-accent mb-2">What You'll Gain:</h4>
        <ul className="text-gray-400 text-sm space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-accent">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

// Component for specialty consultation cards
const SpecialtyCard = ({ title, description }) => (
  <div className="bg-secondary/30 p-5 rounded-lg border border-accent/10">
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

// Component for preparation cards
const PrepCard = ({ title, items }) => (
  <Card className="bg-secondary/30 border-0 h-full">
    <CardContent className="p-5">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-accent">•</span>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

// Component for testimonial cards
const TestimonialCard = ({ quote, author, service }) => (
  <div className="bg-secondary/30 p-6 rounded-lg border border-accent/10">
    <div className="space-y-4">
      <svg 
        className="h-8 w-8 text-accent/40" 
        fill="currentColor" 
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-gray-300 italic">{quote}</p>
      <div className="pt-2">
        <p className="font-medium">{author}</p>
        <p className="text-gray-400 text-sm">{service}</p>
      </div>
    </div>
  </div>
);

export default ConsultationsService;
