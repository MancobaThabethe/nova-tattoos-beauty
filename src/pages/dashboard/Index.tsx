
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Palette, CircleDollarSign } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DashboardOverview = () => {
  // Sample data - in a real app, this would come from your API
  const stats = [
    { title: 'Total Appointments', value: '127', icon: Calendar, change: '+12%', changeType: 'increase' },
    { title: 'New Clients', value: '32', icon: Users, change: '+18%', changeType: 'increase' },
    { title: 'Completed Tattoos', value: '93', icon: Palette, change: '+5%', changeType: 'increase' },
    { title: 'Monthly Revenue', value: '$8,942', icon: CircleDollarSign, change: '+14%', changeType: 'increase' },
  ];

  const recentAppointments = [
    { client: 'Alex Johnson', service: 'Full Sleeve Tattoo', date: 'Today, 2:00 PM', status: 'Confirmed' },
    { client: 'Sam Smith', service: 'Permanent Eyebrows', date: 'Today, 4:30 PM', status: 'Confirmed' },
    { client: 'Jamie Lee', service: 'Piercing', date: 'Tomorrow, 10:15 AM', status: 'Pending' },
    { client: 'Taylor Wong', service: 'Back Tattoo', date: 'Apr 15, 1:00 PM', status: 'Confirmed' },
    { client: 'Casey Martin', service: 'Touch Up', date: 'Apr 16, 11:30 AM', status: 'Confirmed' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">Overview</h2>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs ${stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAppointments.map((appointment) => (
                    <TableRow key={appointment.client}>
                      <TableCell className="font-medium">{appointment.client}</TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          appointment.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button variant="default" className="w-full">Add New Appointment</Button>
              <Button variant="outline" className="w-full">Register New Client</Button>
              <Button variant="outline" className="w-full">Upload to Gallery</Button>
              <Button variant="outline" className="w-full">View All Analytics</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
