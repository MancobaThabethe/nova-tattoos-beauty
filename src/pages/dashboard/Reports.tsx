
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, LineChart, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Line, Pie, Cell } from 'recharts';
import { Download, Filter } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';

// Sample data for charts
const revenueData = [
  { month: 'Jan', revenue: 8000, customers: 42 },
  { month: 'Feb', revenue: 9200, customers: 48 },
  { month: 'Mar', revenue: 10500, customers: 55 },
  { month: 'Apr', revenue: 9800, customers: 51 },
  { month: 'May', revenue: 11200, customers: 59 },
  { month: 'Jun', revenue: 12500, customers: 65 },
];

const serviceBreakdown = [
  { name: 'Tattoos', value: 45 },
  { name: 'Permanent Eyebrows', value: 30 },
  { name: 'Piercings', value: 15 },
  { name: 'Touch-Ups', value: 10 },
];

const COLORS = ['#8b5cf6', '#6366f1', '#ec4899', '#f43f5e'];

const appointmentsByDay = [
  { day: 'Monday', appointments: 8 },
  { day: 'Tuesday', appointments: 12 },
  { day: 'Wednesday', appointments: 14 },
  { day: 'Thursday', appointments: 10 },
  { day: 'Friday', appointments: 16 },
  { day: 'Saturday', appointments: 20 },
];

const customerRetention = [
  { month: 'Jan', newCustomers: 32, returnCustomers: 10 },
  { month: 'Feb', newCustomers: 35, returnCustomers: 13 },
  { month: 'Mar', newCustomers: 38, returnCustomers: 17 },
  { month: 'Apr', newCustomers: 30, returnCustomers: 21 },
  { month: 'May', newCustomers: 33, returnCustomers: 26 },
  { month: 'Jun', newCustomers: 36, returnCustomers: 29 },
];

const Reports = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 1),
    to: new Date(2025, 5, 31),
  });
  const [exportFormat, setExportFormat] = useState("pdf");

  const handleExport = () => {
    toast({
      title: "Report Exported",
      description: `Your report has been exported as a ${exportFormat.toUpperCase()} file.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Reports & Analytics</h2>
          
          <div className="flex items-center gap-4">
            <Select
              value={exportFormat}
              onValueChange={setExportFormat}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Export As" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="xlsx">Excel</SelectItem>
              </SelectContent>
            </Select>
            
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Report Date Range</CardTitle>
            <CardDescription>Filter report data by date range</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Calendar
                  mode="range"
                  selected={date}
                  onSelect={(value) => setDate(value)}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Selected Range:</h3>
                <p>
                  From: <span className="font-bold">{date?.from ? format(date.from, 'PPP') : 'Not selected'}</span>
                </p>
                <p>
                  To: <span className="font-bold">{date?.to ? format(date.to, 'PPP') : 'Not selected'}</span>
                </p>
                <Button className="mt-4">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="revenue">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Overview (6 Months)</CardTitle>
                <CardDescription>
                  Monthly revenue and customer count
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={revenueData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis yAxisId="left" orientation="left" stroke="#8b5cf6" />
                      <YAxis yAxisId="right" orientation="right" stroke="#f43f5e" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="revenue" fill="#8b5cf6" name="Revenue (R)" />
                      <Bar yAxisId="right" dataKey="customers" fill="#f43f5e" name="Customers" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue: R61,200</p>
                </div>
                <Button variant="outline" onClick={handleExport}>Export Data</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>
                  Percentage breakdown of services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={serviceBreakdown}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={1}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {serviceBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={handleExport}>Export Data</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="appointments" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Appointments by Day</CardTitle>
                <CardDescription>
                  Distribution of appointments throughout the week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={appointmentsByDay}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="appointments" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={handleExport}>Export Data</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Retention</CardTitle>
                <CardDescription>
                  New vs returning customers by month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={customerRetention}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="newCustomers" fill="#8b5cf6" name="New Customers" />
                      <Bar dataKey="returnCustomers" fill="#f43f5e" name="Return Customers" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" onClick={handleExport}>Export Data</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
