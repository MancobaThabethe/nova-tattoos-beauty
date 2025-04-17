
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Aftercare = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-6">Aftercare Guidelines</h1>
            <p className="text-gray-300">
              Proper aftercare is crucial for the healing process and final appearance of your tattoo, 
              permanent makeup, or piercing. Follow these professional guidelines for the best results.
            </p>
          </div>

          <Tabs defaultValue="tattoos" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8 bg-background/10">
              <TabsTrigger value="tattoos">Tattoos</TabsTrigger>
              <TabsTrigger value="permanentMakeup">Permanent Makeup</TabsTrigger>
              <TabsTrigger value="piercings">Piercings</TabsTrigger>
            </TabsList>

            <TabsContent value="tattoos" className="space-y-8">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Tattoo Aftercare</CardTitle>
                  <CardDescription>Follow these steps for the first 2-4 weeks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">First 24-48 Hours</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Leave the bandage on for 2-4 hours after getting tattooed.</li>
                      <li>Wash the tattoo gently with fragrance-free, antibacterial soap and lukewarm water.</li>
                      <li>Pat dry with a clean paper towel – do not rub or use cloth towels.</li>
                      <li>Apply a thin layer of recommended aftercare ointment.</li>
                      <li>Do not re-bandage the tattoo; let it breathe.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Days 3-14</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Wash your tattoo 2-3 times daily with gentle soap and water.</li>
                      <li>Apply a thin layer of aftercare lotion after washing.</li>
                      <li>Do not soak the tattoo in water (avoid swimming, baths, hot tubs).</li>
                      <li>Avoid exposing the tattoo to direct sunlight.</li>
                      <li>Do not pick or scratch at scabs or peeling skin.</li>
                      <li>Wear loose clothing over the tattooed area.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Long-Term Care</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Always protect your tattoo with SPF 30+ sunscreen when exposed to sunlight.</li>
                      <li>Keep your tattoo moisturized with quality lotion.</li>
                      <li>Schedule a touch-up appointment if necessary, usually 4-6 weeks after initial tattoo.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                    <h3 className="text-accent font-medium mb-2">Warning Signs</h3>
                    <p className="text-sm text-muted-foreground">
                      If you experience excessive redness, swelling, warm to touch, pus, or fever, 
                      please contact your tattoo artist and seek medical attention immediately.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="permanentMakeup" className="space-y-8">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Permanent Makeup Aftercare</CardTitle>
                  <CardDescription>Guidelines for microblading and permanent cosmetics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">First 7 Days</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Gently blot the treated area with clean tissue to absorb lymph fluid.</li>
                      <li>Apply the provided aftercare ointment with a clean cotton swab 2-3 times daily.</li>
                      <li>Do not get the treated area wet for the first 24 hours.</li>
                      <li>Avoid makeup on or around the treated area.</li>
                      <li>Do not pick, scratch, or rub the treated area.</li>
                      <li>Sleep on your back to avoid pressure on the treated area.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Days 7-14</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Continue applying aftercare ointment as directed.</li>
                      <li>Avoid swimming, saunas, steam rooms, and excessive sweating.</li>
                      <li>Do not use exfoliants, retinols, or acids on the treated area.</li>
                      <li>Some flaking is normal – do not pick or peel!</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Long-Term Care</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Apply SPF 30+ when outdoors to prevent color fading.</li>
                      <li>Avoid harsh facial treatments in the treated area.</li>
                      <li>Schedule your touch-up appointment 6-8 weeks after initial procedure.</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                    <h3 className="text-accent font-medium mb-2">Normal Healing Process</h3>
                    <p className="text-sm text-muted-foreground">
                      The color will appear very dark initially, then lighten by 30-50% during healing. 
                      The final color will be visible 4-6 weeks after the procedure.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="piercings" className="space-y-8">
              <Card className="bg-secondary border-0">
                <CardHeader>
                  <CardTitle>Piercing Aftercare</CardTitle>
                  <CardDescription>General guidelines for all types of piercings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Daily Care</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Clean your piercing 2-3 times daily with saline solution.</li>
                      <li>Wash hands thoroughly before touching your piercing.</li>
                      <li>Avoid moving, twisting, or playing with your jewelry.</li>
                      <li>Do not remove jewelry during the healing period.</li>
                      <li>Avoid makeup, lotions, or sprays around the piercing.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">What to Avoid</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Swimming pools, hot tubs, lakes, and oceans during healing.</li>
                      <li>Alcohol-based mouthwash for oral piercings.</li>
                      <li>Sleeping on facial or ear piercings.</li>
                      <li>Tight clothing on body piercings.</li>
                      <li>Harsh soaps, rubbing alcohol, or hydrogen peroxide.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Healing Times</h3>
                    <div className="grid grid-cols-2 gap-4 text-muted-foreground">
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
                    </div>
                  </div>

                  <div className="rounded-lg bg-accent/10 p-4 border border-accent/20">
                    <h3 className="text-accent font-medium mb-2">Warning Signs of Infection</h3>
                    <p className="text-sm text-muted-foreground">
                      Excessive swelling, prolonged redness, yellow or green discharge, fever, or 
                      extreme pain are signs of infection. Seek medical help immediately if any of 
                      these symptoms occur.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Aftercare;
