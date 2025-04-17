
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { AlertCircle, CheckCircle2, CreditCard, LockKeyhole } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const services = [
  { id: 'tattoo', name: 'Tattoo' },
  { id: 'eyebrows', name: 'Permanent Eyebrows' },
  { id: 'piercing', name: 'Piercing' },
  { id: 'consultation', name: 'Consultation' },
];

// Updated: Single artist - NOVA
const artist = {
  id: 'nova',
  name: 'NOVA',
  specialties: ['tattoo', 'eyebrows', 'piercing', 'consultation']
};

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', 
  '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
];

// Pricing map for services
const servicePricing = {
  'tattoo': { deposit: 'R600', session: 'R1,200/hour' },
  'eyebrows': { deposit: 'R500', session: 'R2,800' },
  'piercing': { deposit: 'R200', session: 'From R350' },
  'consultation': { deposit: 'R0', session: 'Free' }
};

const Booking = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<string>('creditCard');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePaymentProcess = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      
      // Close modal after showing success for a moment
      setTimeout(() => {
        setShowPaymentModal(false);
        toast({
          title: "Booking Confirmed!",
          description: "Your appointment has been scheduled. Check your email for details.",
        });
      }, 2000);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedService !== 'consultation') {
      setShowPaymentModal(true);
    } else {
      // For consultations (which are free), just confirm the booking
      toast({
        title: "Booking Request Submitted",
        description: "We'll confirm your appointment shortly!",
      });
    }
  };

  const nextStep = () => {
    if (step === 1 && !selectedService) {
      toast({
        title: "Service Required",
        description: "Please select a service to continue.",
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && (!selectedDate || !selectedTime)) {
      toast({
        title: "Date and Time Required",
        description: "Please select both a date and time to continue.",
        variant: "destructive"
      });
      return;
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="heading-lg mb-6">Book Your Appointment</h1>
            <p className="text-gray-300">
              Schedule your session in a few simple steps. We'll confirm your appointment via email or phone.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-8 relative">
              <div className="absolute top-1/2 h-1 transform -translate-y-1/2 bg-gray-700 w-full z-0"></div>
              
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="relative z-10 flex flex-col items-center">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      stepNumber === step ? 'bg-accent' : 
                      stepNumber < step ? 'bg-accent/80' : 'bg-gray-700'
                    }`}
                  >
                    {stepNumber < step ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-white font-medium">{stepNumber}</span>
                    )}
                  </div>
                  <span className="text-sm mt-2 text-gray-400">
                    {stepNumber === 1 && 'Service'}
                    {stepNumber === 2 && 'Date & Time'}
                    {stepNumber === 3 && 'Details'}
                  </span>
                </div>
              ))}
            </div>
            
            <Card className="bg-secondary border-0">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Select Service */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold mb-4">Select a Service</h2>
                      
                      <RadioGroup 
                        value={selectedService} 
                        onValueChange={setSelectedService}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={service.id} id={service.id} />
                            <Label htmlFor={service.id} className="cursor-pointer flex flex-col">
                              <span>{service.name}</span>
                              {service.id !== 'consultation' && (
                                <span className="text-sm text-muted-foreground">
                                  Deposit: {servicePricing[service.id].deposit}
                                </span>
                              )}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      
                      {selectedService && (
                        <div className="bg-accent/10 p-4 rounded-lg mt-4">
                          <h3 className="font-medium text-accent mb-2">
                            {selectedService === 'consultation' ? 'Free Consultation' : `${services.find(s => s.id === selectedService)?.name} Service`}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {selectedService === 'consultation' 
                              ? 'Discuss your ideas with our artist before committing to a procedure.' 
                              : `Estimated price: ${servicePricing[selectedService].session}`}
                          </p>
                          {selectedService !== 'consultation' && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Required deposit: {servicePricing[selectedService].deposit}
                            </p>
                          )}
                        </div>
                      )}
                      
                      <div className="pt-6 flex justify-end">
                        <Button type="button" onClick={nextStep}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Select Date & Time */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold mb-4">Select Date & Time</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <Label className="block mb-3">Select a Date</Label>
                          <div className="bg-background rounded-lg p-3">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={handleDateSelect}
                              disabled={(date) => 
                                date < new Date() || 
                                date.getDay() === 0 // Disable Sundays
                              }
                              className="rounded-md border p-3 pointer-events-auto"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label className="block mb-3">Select a Time</Label>
                          <div className="grid grid-cols-2 gap-3">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={selectedTime === time ? "default" : "outline"}
                                className={`h-12 ${
                                  selectedTime === time ? "bg-accent hover:bg-accent" : "bg-background/50"
                                }`}
                                onClick={() => setSelectedTime(time)}
                              >
                                {time}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-6 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="button" onClick={nextStep}>
                          Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 3: Personal Details */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName" 
                            placeholder="John" 
                            required 
                            className="bg-background/50"
                            value={formData.firstName}
                            onChange={handleFormChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName" 
                            placeholder="Doe" 
                            required 
                            className="bg-background/50"
                            value={formData.lastName}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email"
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                            className="bg-background/50"
                            value={formData.email}
                            onChange={handleFormChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone"
                            type="tel"
                            placeholder="(021) 123-4567" 
                            required 
                            className="bg-background/50"
                            value={formData.phone}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Project Description</Label>
                        <Textarea 
                          id="description"
                          placeholder="Tell us about your tattoo idea, placement, size, or any questions you have..." 
                          className="bg-background/50 min-h-[120px]"
                          value={formData.description}
                          onChange={handleFormChange}
                        />
                      </div>
                      
                      <div className="bg-black/30 rounded-lg p-4 space-y-3">
                        <h3 className="font-medium">Booking Summary</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <p className="text-gray-400">Service:</p>
                          <p>{services.find(s => s.id === selectedService)?.name}</p>
                          
                          <p className="text-gray-400">Date:</p>
                          <p>{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Not selected'}</p>
                          
                          <p className="text-gray-400">Time:</p>
                          <p>{selectedTime}</p>
                          
                          <p className="text-gray-400">Artist:</p>
                          <p>{artist.name}</p>
                        </div>
                        
                        {selectedService && selectedService !== 'consultation' && (
                          <div className="border-t border-gray-700 mt-2 pt-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Required Deposit:</span>
                              <span className="text-accent font-bold">{servicePricing[selectedService].deposit}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="pt-6 flex justify-between">
                        <Button type="button" variant="outline" onClick={prevStep}>
                          Back
                        </Button>
                        <Button type="submit">
                          {selectedService === 'consultation' ? 'Book Consultation' : 'Proceed to Payment'}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Secure Payment</DialogTitle>
            <DialogDescription>
              Pay your deposit to secure your booking with NOVA Tattoos & Beauty.
            </DialogDescription>
          </DialogHeader>
          
          {!paymentComplete ? (
            <>
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Amount Due:</h3>
                    <p className="text-lg font-bold">{selectedService ? servicePricing[selectedService].deposit : ''}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    This deposit is required to secure your booking and will be applied to your final payment.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={setPaymentMethod}
                    className="grid gap-2"
                  >
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="creditCard" id="creditCard" />
                      <Label htmlFor="creditCard" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-4 w-4" />
                        <span>Credit/Debit Card</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="instantEFT" id="instantEFT" />
                      <Label htmlFor="instantEFT" className="cursor-pointer">Instant EFT</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {paymentMethod === 'creditCard' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" className="bg-background" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input id="cardNumber" placeholder="4242 4242 4242 4242" className="bg-background pl-10" />
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <div className="relative">
                          <Input id="cvv" placeholder="123" className="bg-background pl-10" />
                          <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'instantEFT' && (
                  <div className="bg-muted p-4 rounded-md">
                    <p className="text-sm">
                      You'll be redirected to your bank's secure login page to complete the payment.
                    </p>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <LockKeyhole className="h-4 w-4 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    All payments are secure and encrypted. Your payment information is never stored.
                  </p>
                </div>
              </div>
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPaymentModal(false)}
                  disabled={isProcessing}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handlePaymentProcess} 
                  disabled={isProcessing}
                  className="relative"
                >
                  {isProcessing ? (
                    <>
                      <span className="opacity-0">Pay Now</span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </span>
                    </>
                  ) : (
                    'Pay Now'
                  )}
                </Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-6 flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium">Payment Successful!</h3>
              <p className="text-center text-muted-foreground">
                Your booking is confirmed. We've sent a confirmation email with all the details.
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Booking;
