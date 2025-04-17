
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, History, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { api } from '@/api';

// Mock appointments for the client
const clientAppointments = [
  { id: 101, date: '2025-04-25', time: '14:00', service: 'Full Sleeve Tattoo', artist: 'Maria Rodriguez', status: 'Confirmed' },
  { id: 102, date: '2025-05-10', time: '11:30', service: 'Touch-up', artist: 'James Wright', status: 'Pending' },
];

const ClientDashboard = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [appointments, setAppointments] = useState(clientAppointments);
  
  // Redirect if not logged in or not a client
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (user && user.role !== 'client') {
    return <Navigate to="/dashboard" />;
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-ZA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-20 bg-tattoo-dark min-h-screen">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">My Dashboard</h1>
              <p className="text-gray-400">Welcome back, {user?.name}</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link to="/booking">
                Book New Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="appointments">
            <TabsList className="mb-6">
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="profile">My Profile</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appointments">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {appointments.length > 0 ? (
                  appointments.map(appointment => (
                    <Card key={appointment.id}>
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>{appointment.service}</span>
                          <span className={`text-sm px-2 py-1 rounded-full ${appointment.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {appointment.status}
                          </span>
                        </CardTitle>
                        <CardDescription>With {appointment.artist}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-2">
                          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(appointment.date)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{appointment.time}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="destructive" size="sm">
                          Cancel
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-2 text-center p-8 bg-gray-800 rounded-lg">
                    <p className="text-gray-400 mb-4">You don't have any upcoming appointments.</p>
                    <Button asChild>
                      <Link to="/booking">Book Your First Appointment</Link>
                    </Button>
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Aftercare Instructions</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 mr-3 text-accent mt-0.5" />
                      <div>
                        <h4 className="font-medium mb-2">Tattoo Aftercare Tips</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                          <li>Keep the bandage on for 2-4 hours after getting your tattoo</li>
                          <li>Wash gently with fragrance-free soap and lukewarm water</li>
                          <li>Apply a thin layer of recommended aftercare product</li>
                          <li>Don't pick at scabs or scratch the area</li>
                          <li>Avoid swimming, sun exposure, and tight clothing</li>
                        </ul>
                        <Link to="/aftercare" className="text-accent hover:underline mt-2 inline-block">
                          View detailed aftercare guide
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Previous Appointments</CardTitle>
                  <CardDescription>
                    View your service history with NOVA Tattoos & Beauty
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Japanese Dragon Tattoo</h4>
                          <p className="text-sm text-muted-foreground">With Sophia Lee</p>
                          <div className="flex items-center mt-2">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">March 15, 2025</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Link to="/gallery">View in Gallery</Link>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border-b pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Forearm Geometric Pattern</h4>
                          <p className="text-sm text-muted-foreground">With Alex Smith</p>
                          <div className="flex items-center mt-2">
                            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">January 8, 2025</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Link to="/gallery">View in Gallery</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="profile">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Manage your account details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-muted-foreground mr-2" />
                        <div>
                          <p className="text-sm font-medium">Name</p>
                          <p>{user?.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <p>{user?.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <p>Not set</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Edit Profile</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>
                      Manage your notification settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Notification preferences would go here */}
                      <p className="text-muted-foreground">You can customize your notification preferences and communication settings here.</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Update Preferences</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ClientDashboard;
