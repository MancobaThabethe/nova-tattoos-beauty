
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { UserPlus, Search, Edit, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';

const DashboardClients = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data - in a real app, this would come from your API
  const clients = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', phone: '(555) 123-4567', joinedDate: 'Jan 15, 2025', totalVisits: 5 },
    { id: 2, name: 'Sam Smith', email: 'sam@example.com', phone: '(555) 234-5678', joinedDate: 'Feb 3, 2025', totalVisits: 2 },
    { id: 3, name: 'Jamie Lee', email: 'jamie@example.com', phone: '(555) 345-6789', joinedDate: 'Feb 12, 2025', totalVisits: 1 },
    { id: 4, name: 'Taylor Wong', email: 'taylor@example.com', phone: '(555) 456-7890', joinedDate: 'Mar 1, 2025', totalVisits: 3 },
    { id: 5, name: 'Casey Martin', email: 'casey@example.com', phone: '(555) 567-8901', joinedDate: 'Mar 15, 2025', totalVisits: 2 },
    { id: 6, name: 'Morgan Quinn', email: 'morgan@example.com', phone: '(555) 678-9012', joinedDate: 'Jan 5, 2025', totalVisits: 4 },
    { id: 7, name: 'Riley Jordan', email: 'riley@example.com', phone: '(555) 789-0123', joinedDate: 'Feb 20, 2025', totalVisits: 6 },
    { id: 8, name: 'Dana Cruz', email: 'dana@example.com', phone: '(555) 890-1234', joinedDate: 'Mar 10, 2025', totalVisits: 1 },
  ];

  // Filter clients based on search query
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone.includes(searchQuery)
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Clients</h2>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Client
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Client Directory</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search clients..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Visits</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>{client.joinedDate}</TableCell>
                    <TableCell>{client.totalVisits}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardClients;
