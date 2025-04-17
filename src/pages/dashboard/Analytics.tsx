import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  LineChart,
  Line, 
  BarChart,
  Bar, 
  PieChart,
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area 
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, Calendar, TrendingUp, Banknote } from 'lucide-react';

const DashboardAnalytics = () => {
  // Sample data for charts
  const monthlyData = [
    { name: 'Jan', appointments: 42, revenue: 52000 },
    { name: 'Feb', appointments: 38, revenue: 46000 },
    { name: 'Mar', appointments: 45, revenue: 58000 },
    { name: 'Apr', appointments: 53, revenue: 65000 },
    { name: 'May', appointments: 49, revenue: 62000 },
    { name: 'Jun', appointments: 62, revenue: 78000 },
    { name: 'Jul', appointments: 58, revenue: 71000 },
    { name: 'Aug', appointments: 65, revenue: 82000 },
    { name: 'Sep', appointments: 71, revenue: 91000 },
    { name: 'Oct', appointments: 68, revenue: 87000 },
    { name: 'Nov', appointments: 75, revenue: 98000 },
    { name: 'Dec', appointments: 83, revenue: 105000 },
  ];

  const serviceData = [
    { name: 'Custom Tattoos', value: 65 },
    { name: 'Permanent Eyebrows', value: 15 },
    { name: 'Piercings', value: 12 },
    { name: 'Touch Ups', value: 8 },
  ];

  const clientData = [
    { age: '18-24', male: 15, female: 18, other: 3 },
    { age: '25-34', male: 25, female: 22, other: 5 },
    { age: '35-44', male: 20, female: 18, other: 4 },
    { age: '45-54', male: 10, female: 12, other: 2 },
    { age: '55+', male: 5, female: 8, other: 1 },
  ];

  // New KPI data
  const dailyRevenueData = [
    { day: 'Mon', revenue: 12500 },
    { day: 'Tue', revenue: 9800 },
    { day: 'Wed', revenue: 14200 },
    { day: 'Thu', revenue: 15800 },
    { day: 'Fri', revenue: 21500 },
    { day: 'Sat', revenue: 29000 },
    { day: 'Sun', revenue: 8900 },
  ];

  const customerRetentionData = [
    { month: 'Jan', newClients: 18, returning: 24 },
    { month: 'Feb', newClients: 15, returning: 23 },
    { month: 'Mar', newClients: 20, returning: 25 },
    { month: 'Apr', newClients: 25, returning: 28 },
    { month: 'May', newClients: 22, returning: 27 },
    { month: 'Jun', newClients: 30, returning: 32 },
  ];

  const popularTimesData = [
    { time: '9-11 AM', bookings: 15 },
    { time: '11-1 PM', bookings: 22 },
    { time: '1-3 PM', bookings: 30 },
    { time: '3-5 PM', bookings: 25 },
    { time: '5-7 PM', bookings: 35 },
    { time: '7-9 PM', bookings: 20 },
  ];

  const artistPerformanceData = [
    { name: 'Maria', clients: 45, revenue: 75000 },
    { name: 'John', clients: 38, revenue: 62000 },
    { name: 'Sophia', clients: 52, revenue: 86000 },
    { name: 'James', clients: 30, revenue: 48000 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  // Format currency to ZAR
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(amount);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Analytics</h2>
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">{formatCurrency(885000)}</h3>
                  <p className="text-xs flex items-center mt-1 text-green-500">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 
                    18.2% from last month
                  </p>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Banknote className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Clients</p>
                  <h3 className="text-2xl font-bold mt-1">1,254</h3>
                  <p className="text-xs flex items-center mt-1 text-green-500">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 
                    12.5% from last month
                  </p>
                </div>
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Appointments</p>
                  <h3 className="text-2xl font-bold mt-1">709</h3>
                  <p className="text-xs flex items-center mt-1 text-green-500">
                    <ArrowUpRight className="h-3 w-3 mr-1" /> 
                    8.7% from last month
                  </p>
                </div>
                <div className="bg-violet-500/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-violet-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Service Value</p>
                  <h3 className="text-2xl font-bold mt-1">{formatCurrency(1250)}</h3>
                  <p className="text-xs flex items-center mt-1 text-red-500">
                    <ArrowDownRight className="h-3 w-3 mr-1" /> 
                    2.3% from last month
                  </p>
                </div>
                <div className="bg-amber-500/10 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="revenue">
          <TabsList>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="retention">Retention</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Revenue</CardTitle>
                <CardDescription>
                  Track your monthly revenue over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={monthlyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value) => `R${value/1000}k`} />
                    <Tooltip 
                      formatter={(value) => [formatCurrency(Number(value)), 'Revenue']}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#8884d8" 
                      fill="#8884d8"
                      fillOpacity={0.3}
                      activeDot={{ r: 8 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Daily Revenue Breakdown */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Daily Revenue Breakdown</CardTitle>
                <CardDescription>
                  Average revenue by day of week
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dailyRevenueData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis tickFormatter={(value) => `R${value/1000}k`} />
                    <Tooltip 
                      formatter={(value) => [formatCurrency(Number(value)), 'Revenue']}
                    />
                    <Bar 
                      dataKey="revenue" 
                      fill="#8884d8" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appointments" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Appointments</CardTitle>
                <CardDescription>
                  Track your monthly appointments over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar 
                      dataKey="appointments" 
                      fill="#8884d8" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Popular Appointment Times */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Popular Booking Times</CardTitle>
                <CardDescription>
                  Most frequently booked time slots
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={popularTimesData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="bookings" 
                      fill="#82ca9d" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="services" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Service Distribution</CardTitle>
                <CardDescription>
                  Breakdown of services by popularity
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {serviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="demographics" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Demographics</CardTitle>
                <CardDescription>
                  Breakdown of clients by age group and gender
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={clientData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="male" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="female" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="other" fill="#ffc658" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="retention" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Retention</CardTitle>
                <CardDescription>
                  New vs. returning clients over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={customerRetentionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="newClients" name="New Clients" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="returning" name="Returning Clients" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Artist Performance</CardTitle>
                <CardDescription>
                  Performance metrics by artist
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={artistPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" 
                      tickFormatter={(value) => `R${value/1000}k`} />
                    <Tooltip formatter={(value, name) => {
                      return name === "revenue" 
                        ? [formatCurrency(Number(value)), "Revenue"] 
                        : [value, "Clients"];
                    }} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="clients" name="Clients" fill="#8884d8" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" dataKey="revenue" name="Revenue" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardAnalytics;
