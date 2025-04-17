
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar, Check, Clock, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardAppointments = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("upcoming");
  
  // Sample data - in a real app, this would come from your API
  const appointments = {
    upcoming: [
      { id: 1, client: 'Alex Johnson', service: 'Full Sleeve Tattoo', date: 'Apr 14, 2025', time: '2:00 PM', status: 'Confirmed' },
      { id: 2, client: 'Sam Smith', service: 'Permanent Eyebrows', date: 'Apr 14, 2025', time: '4:30 PM', status: 'Confirmed' },
      { id: 3, client: 'Jamie Lee', service: 'Piercing', date: 'Apr 15, 2025', time: '10:15 AM', status: 'Pending' },
      { id: 4, client: 'Taylor Wong', service: 'Back Tattoo', date: 'Apr 15, 2025', time: '1:00 PM', status: 'Confirmed' },
      { id: 5, client: 'Casey Martin', service: 'Touch Up', date: 'Apr 16, 2025', time: '11:30 AM', status: 'Confirmed' },
    ],
    past: [
      { id: 101, client: 'Morgan Quinn', service: 'Half Sleeve Tattoo', date: 'Apr 10, 2025', time: '3:00 PM', status: 'Completed' },
      { id: 102, client: 'Riley Jordan', service: 'Ear Piercing', date: 'Apr 9, 2025', time: '1:45 PM', status: 'Completed' },
      { id: 103, client: 'Dana Cruz', service: 'Custom Tattoo', date: 'Apr 7, 2025', time: '11:00 AM', status: 'Completed' },
      { id: 104, client: 'Jordan Smith', service: 'Touch Up', date: 'Apr 5, 2025', time: '4:30 PM', status: 'Completed' },
      { id: 105, client: 'Quinn Davis', service: 'Eyebrow Touch Up', date: 'Apr 2, 2025', time: '2:15 PM', status: 'Completed' },
    ],
    cancelled: [
      { id: 201, client: 'Alex Rivera', service: 'Small Tattoo', date: 'Apr 8, 2025', time: '3:30 PM', status: 'Cancelled' },
      { id: 202, client: 'Jesse Morgan', service: 'Piercing', date: 'Apr 6, 2025', time: '12:00 PM', status: 'Cancelled' },
    ]
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    toast({
      title: "Status updated",
      description: `Appointment #${id} has been marked as ${newStatus}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Appointments</h2>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            New Appointment
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <Tabs defaultValue="upcoming" onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
            
              <CardContent className="pt-6">
                <TabsContent value="upcoming" className="mt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.upcoming.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.client}</TableCell>
                          <TableCell>{appointment.service}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              appointment.status === 'Confirmed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleStatusChange(appointment.id, 'Completed')}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleStatusChange(appointment.id, 'Cancelled')}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="past" className="mt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.past.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.client}</TableCell>
                          <TableCell>{appointment.service}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              {appointment.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="cancelled" className="mt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appointments.cancelled.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.client}</TableCell>
                          <TableCell>{appointment.service}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>
                            <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                              {appointment.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleStatusChange(appointment.id, 'Rescheduled')}
                            >
                              <Clock className="h-4 w-4 mr-1" />
                              Reschedule
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </CardContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAppointments;
