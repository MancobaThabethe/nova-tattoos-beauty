
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FAQ = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-6">Frequently Asked Questions</h1>
            <p className="text-gray-300">
              Find answers to our most commonly asked questions. If you can't find what you're 
              looking for, please don't hesitate to contact us.
            </p>
          </div>

          <Tabs defaultValue="general" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8 bg-background/10">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="tattoos">Tattoos</TabsTrigger>
              <TabsTrigger value="eyebrows">Eyebrows</TabsTrigger>
              <TabsTrigger value="piercings">Piercings</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>General Questions</CardTitle>
                  <CardDescription>Basic information about our studio and services</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What are your business hours?</AccordionTrigger>
                      <AccordionContent>
                        We are open Monday to Saturday from 10:00 AM to 8:00 PM. We are closed on Sundays and public holidays.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Do I need to be 18 years old to get tattooed or pierced?</AccordionTrigger>
                      <AccordionContent>
                        Yes, you must be 18 years or older to get a tattoo or most piercings. We require a valid government-issued ID for age verification. For clients aged 16-17, certain piercings can be done with parental consent and presence during the procedure.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it safe to get tattooed or pierced?</AccordionTrigger>
                      <AccordionContent>
                        Our studio maintains the highest safety standards. We use only single-use needles and sterilize all equipment in an autoclave. Our artists are licensed and follow strict hygiene protocols. However, any procedure carries some risks, which we'll discuss during your consultation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you accept walk-ins?</AccordionTrigger>
                      <AccordionContent>
                        We primarily work by appointment to ensure our clients get the best personalized service. However, we do accept walk-ins when our schedule permits. For the best experience, we recommend booking an appointment through our website or by calling our studio.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                      <AccordionContent>
                        We accept cash, debit cards, credit cards, and mobile payment options. For large tattoo projects, we may require a deposit at the time of booking.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tattoos">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Tattoo FAQs</CardTitle>
                  <CardDescription>Common questions about tattoo procedures and aftercare</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How much does a tattoo cost?</AccordionTrigger>
                      <AccordionContent>
                        Tattoo pricing varies based on size, design complexity, placement, and the time required. Our artist charges R1,200 per hour. Small, simple designs start around R800, while larger or detailed pieces are priced according to estimated hours. We provide a specific quote during your consultation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How painful is getting a tattoo?</AccordionTrigger>
                      <AccordionContent>
                        Pain levels vary depending on the individual's tolerance, placement of the tattoo, and design complexity. Areas with thin skin and close to bones (ribs, ankles, spine) tend to be more sensitive. Most clients describe the sensation as uncomfortable but manageable.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How long does a tattoo take to heal?</AccordionTrigger>
                      <AccordionContent>
                        The initial healing process takes about 2-4 weeks, during which time your tattoo will scab and peel. However, complete healing beneath the surface can take up to 3-4 months. Following our aftercare instructions is crucial for optimal healing and color retention.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I get a tattoo if I have a skin condition?</AccordionTrigger>
                      <AccordionContent>
                        Certain skin conditions like eczema, psoriasis, or dermatitis may affect tattooing and healing. Please inform us about any skin conditions during your consultation. In some cases, we may recommend getting approval from your dermatologist before proceeding.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Do you offer tattoo touch-ups?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we offer touch-ups for tattoos done in our studio. Touch-ups within 3 months of the original tattoo are usually free if needed due to normal healing issues. For older tattoos or those done elsewhere, touch-up fees depend on the work required.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="eyebrows">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Permanent Eyebrows FAQs</CardTitle>
                  <CardDescription>Information about microblading and permanent makeup</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>What's the difference between microblading and powder brows?</AccordionTrigger>
                      <AccordionContent>
                        Microblading creates individual hairlike strokes for a natural look, ideal for filling in sparse areas. Powder brows (ombré brows) provide a softer, shaded effect similar to brow powder makeup. Combination brows merge both techniques. We'll recommend the best approach for your features during consultation.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>How long does permanent makeup last?</AccordionTrigger>
                      <AccordionContent>
                        Permanent eyebrows typically last 1-3 years, depending on your skin type, lifestyle, and aftercare. Oilier skin types tend to experience faster fading. Touch-up sessions every 12-18 months can help maintain the color and shape.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is the permanent eyebrow procedure painful?</AccordionTrigger>
                      <AccordionContent>
                        We apply a topical anesthetic before and during the procedure to minimize discomfort. Most clients report feeling pressure and mild scratching sensations rather than sharp pain. Sensitivity varies by individual, but the procedure is generally well-tolerated.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>How should I prepare for my appointment?</AccordionTrigger>
                      <AccordionContent>
                        Avoid alcohol, caffeine, and blood thinners like aspirin for 48 hours before your appointment. Don't wax or tint your brows for at least one week prior. Avoid retinol products, chemical peels, or Botox in the treatment area for 2-4 weeks before your appointment. Come with clean, makeup-free brows.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Why is a touch-up session necessary?</AccordionTrigger>
                      <AccordionContent>
                        A touch-up session 6-8 weeks after the initial procedure is essential to perfect your results. During healing, some pigment may fade unevenly, and the touch-up allows us to address any areas that need adjustment, ensuring your brows look their best. This perfecting session is included in your initial price.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="piercings">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Piercing FAQs</CardTitle>
                  <CardDescription>Questions about our piercing procedures and care</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How much do piercings cost?</AccordionTrigger>
                      <AccordionContent>
                        Basic earlobe piercings start at R400, while cartilage and facial piercings range from R600-R900. Body piercings typically range from R800-R1,200. All piercings include high-quality starter jewelry. Additional costs apply for premium jewelry upgrades.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>What jewelry materials do you use?</AccordionTrigger>
                      <AccordionContent>
                        We use implant-grade titanium, 14k gold, and high-quality surgical steel for initial piercings. For clients with metal sensitivities, we recommend titanium or gold options. We never use nickel-rich or low-quality metals that could cause reactions or complications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>How long does a piercing take to heal?</AccordionTrigger>
                      <AccordionContent>
                        Healing times vary by piercing location: Earlobes (6-8 weeks), Cartilage (6-12 months), Nostril (4-6 months), Septum (6-8 weeks), Lip (2-3 months), Navel (6-12 months), Dermals (2-3 months). Following aftercare instructions is crucial for proper healing and avoiding complications.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Do you use needles or guns for piercings?</AccordionTrigger>
                      <AccordionContent>
                        We exclusively use single-use, sterile needles for all piercings. Piercing guns cannot be properly sterilized, can cause tissue damage, and use lower quality jewelry. Professional needle piercing is more precise, causes less trauma, and allows for proper jewelry placement.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>When can I change my piercing jewelry?</AccordionTrigger>
                      <AccordionContent>
                        You should wait until the piercing is fully healed before changing jewelry. Changing jewelry too early can irritate the piercing and extend healing time. For your first jewelry change, we recommend having it done by a professional piercer to avoid complications.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="booking">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Booking & Appointments</CardTitle>
                  <CardDescription>Information about scheduling your visit</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
                      <AccordionContent>
                        You can book an appointment directly through our website using our online booking system, by calling our studio, or by emailing us with your request. For complex tattoo projects, we recommend scheduling a consultation first to discuss your design ideas.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is a deposit required to book an appointment?</AccordionTrigger>
                      <AccordionContent>
                        Yes, we require a non-refundable deposit for all tattoo appointments. For small tattoos, the deposit is R300. For larger pieces or full sessions, the deposit is R600. This deposit goes toward your final price. For piercings and permanent makeup, a R200 deposit is required to secure your appointment.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>What's your cancellation policy?</AccordionTrigger>
                      <AccordionContent>
                        We require 48 hours' notice for appointment cancellations. If you cancel with less than 48 hours' notice, your deposit may be forfeited. In case of emergencies, please contact us as soon as possible, and we'll do our best to accommodate rescheduling.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Can I bring friends or family to my appointment?</AccordionTrigger>
                      <AccordionContent>
                        We allow one support person per client for tattoo and piercing appointments. For longer tattoo sessions, we may ask support persons to wait in the reception area periodically. Our workspace is limited, and we prioritize a calm environment for our artists and clients.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>How can I prepare for my tattoo appointment?</AccordionTrigger>
                      <AccordionContent>
                        Get a good night's sleep, eat a substantial meal before your appointment, and stay hydrated. Avoid alcohol for 24 hours before your session. Wear comfortable, appropriate clothing that allows easy access to the tattoo area. Bring snacks and entertainment for longer sessions. Please avoid bringing children to your tattoo appointment.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
