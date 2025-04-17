import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Plus, Pencil, Trash } from 'lucide-react';
import { api } from '@/api';
import { toast } from "@/components/ui/use-toast";

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

const DashboardServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [serviceToDelete, setServiceToDelete] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Form states
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    duration: 60,
    price: 0,
    category: 'Tattoo'
  });

  // Load services
  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await api.getServices();
        setServices(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch services:', error);
        toast({
          title: "Error",
          description: "Failed to load services",
          variant: "destructive"
        });
        setIsLoading(false);
      }
    };
    
    fetchServices();
  }, []);

  // Handle form changes
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (selectedService) {
      setSelectedService({
        ...selectedService,
        [name]: name === 'price' || name === 'duration' ? parseInt(value) : value
      });
    } else {
      setNewService({
        ...newService,
        [name]: name === 'price' || name === 'duration' ? parseInt(value) : value
      });
    }
  };

  // Handle service creation
  const handleCreateService = async () => {
    try {
      // In a real app, you would call API to create service
      const newId = Math.max(...services.map(s => s.id), 0) + 1;
      const createdService = { ...newService, id: newId };
      
      setServices([...services, createdService]);
      
      toast({
        title: "Success",
        description: "Service created successfully",
      });
      
      // Reset form
      setNewService({
        name: '',
        description: '',
        duration: 60,
        price: 0,
        category: 'Tattoo'
      });
    } catch (error) {
      console.error('Failed to create service:', error);
      toast({
        title: "Error",
        description: "Failed to create service",
        variant: "destructive"
      });
    }
  };

  // Handle service update
  const handleUpdateService = async () => {
    if (!selectedService) return;
    
    try {
      // In a real app, you would call API to update service
      const updatedServices = services.map(service => 
        service.id === selectedService.id ? selectedService : service
      );
      
      setServices(updatedServices);
      
      toast({
        title: "Success",
        description: "Service updated successfully",
      });
      
      setSelectedService(null);
    } catch (error) {
      console.error('Failed to update service:', error);
      toast({
        title: "Error",
        description: "Failed to update service",
        variant: "destructive"
      });
    }
  };

  // Handle service deletion
  const handleDeleteService = async () => {
    if (serviceToDelete === null) return;
    
    try {
      // In a real app, you would call API to delete service
      const filteredServices = services.filter(service => service.id !== serviceToDelete);
      setServices(filteredServices);
      
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
      
      setServiceToDelete(null);
    } catch (error) {
      console.error('Failed to delete service:', error);
      toast({
        title: "Error",
        description: "Failed to delete service",
        variant: "destructive"
      });
    }
  };

  // Filter services by category
  const filteredServices = filterCategory === "all" 
    ? services 
    : services.filter(service => service.category === filterCategory);

  // Format price to ZAR
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(price);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Services Management</h2>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
                <DialogDescription>
                  Create a new service to offer to your clients.
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Service Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={newService.name} 
                    onChange={handleFormChange} 
                    placeholder="e.g. Custom Tattoo" 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    name="category" 
                    value={newService.category} 
                    onValueChange={(value) => setNewService({...newService, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tattoo">Tattoo</SelectItem>
                      <SelectItem value="Permanent Makeup">Permanent Makeup</SelectItem>
                      <SelectItem value="Piercing">Piercing</SelectItem>
                      <SelectItem value="Maintenance">Maintenance</SelectItem>
                      <SelectItem value="Beauty">Beauty</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    value={newService.description}
                    onChange={handleFormChange}
                    placeholder="Describe the service..."
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input 
                      id="duration" 
                      name="duration" 
                      type="number" 
                      min={15} 
                      step={15} 
                      value={newService.duration}
                      onChange={handleFormChange}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="price">Price (ZAR)</Label>
                    <Input 
                      id="price" 
                      name="price" 
                      type="number" 
                      min={0} 
                      value={newService.price}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button variant="outline" onClick={() => setNewService({
                  name: '',
                  description: '',
                  duration: 60,
                  price: 0,
                  category: 'Tattoo'
                })}>
                  Cancel
                </Button>
                <Button onClick={handleCreateService}>Create Service</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-4">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilterCategory("all")}>All Services</TabsTrigger>
              <TabsTrigger value="tattoo" onClick={() => setFilterCategory("Tattoo")}>Tattoos</TabsTrigger>
              <TabsTrigger value="permanent-makeup" onClick={() => setFilterCategory("Permanent Makeup")}>Permanent Makeup</TabsTrigger>
              <TabsTrigger value="piercing" onClick={() => setFilterCategory("Piercing")}>Piercings</TabsTrigger>
              <TabsTrigger value="beauty" onClick={() => setFilterCategory("Beauty")}>Beauty</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>
                  Manage the services offered at NOVA Tattoos & Beauty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">Loading services...</div>
                ) : filteredServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No services found.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first service
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.category} • {service.duration} mins</p>
                          <p className="text-sm mt-1">{formatPrice(service.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="icon" onClick={() => setSelectedService(service)}>
                                <Pencil className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Edit Service</DialogTitle>
                                <DialogDescription>
                                  Make changes to the service details.
                                </DialogDescription>
                              </DialogHeader>
                              
                              {selectedService && (
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-name">Service Name</Label>
                                    <Input 
                                      id="edit-name" 
                                      name="name" 
                                      value={selectedService.name} 
                                      onChange={handleFormChange} 
                                    />
                                  </div>
                                  
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-category">Category</Label>
                                    <Select 
                                      name="category" 
                                      value={selectedService.category} 
                                      onValueChange={(value) => setSelectedService({...selectedService, category: value})}
                                    >
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Tattoo">Tattoo</SelectItem>
                                        <SelectItem value="Permanent Makeup">Permanent Makeup</SelectItem>
                                        <SelectItem value="Piercing">Piercing</SelectItem>
                                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                                        <SelectItem value="Beauty">Beauty</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  
                                  <div className="grid gap-2">
                                    <Label htmlFor="edit-description">Description</Label>
                                    <Textarea 
                                      id="edit-description" 
                                      name="description" 
                                      value={selectedService.description}
                                      onChange={handleFormChange}
                                    />
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor="edit-duration">Duration (minutes)</Label>
                                      <Input 
                                        id="edit-duration" 
                                        name="duration" 
                                        type="number" 
                                        min={15} 
                                        step={15} 
                                        value={selectedService.duration}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                    
                                    <div className="grid gap-2">
                                      <Label htmlFor="edit-price">Price (ZAR)</Label>
                                      <Input 
                                        id="edit-price" 
                                        name="price" 
                                        type="number" 
                                        min={0} 
                                        value={selectedService.price}
                                        onChange={handleFormChange}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setSelectedService(null)}>
                                  Cancel
                                </Button>
                                <Button onClick={handleUpdateService}>Save Changes</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="text-destructive hover:bg-destructive/10"
                                onClick={() => setServiceToDelete(service.id)}
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete Service</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete this service? 
                                  This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setServiceToDelete(null)}>
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction 
                                  className="bg-destructive hover:bg-destructive/90"
                                  onClick={handleDeleteService}
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Other tab contents will reuse the same card for different categories */}
          <TabsContent value="tattoo" className="mt-0">
            <Card>
              {/* Same structure as 'all' tab but with filtered content */}
              <CardHeader>
                <CardTitle>Tattoo Services</CardTitle>
                <CardDescription>
                  Manage the tattoo services offered at NOVA Tattoos & Beauty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* The content here is already filtered by the tab click */}
                {isLoading ? (
                  <div className="text-center py-8">Loading services...</div>
                ) : filteredServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No tattoo services found.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first tattoo service
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.category} • {service.duration} mins</p>
                          <p className="text-sm mt-1">{formatPrice(service.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Same edit/delete controls as in the 'all' tab */}
                          <Button variant="outline" size="icon" onClick={() => setSelectedService(service)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => setServiceToDelete(service.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Similar structure for other category tabs */}
          <TabsContent value="permanent-makeup" className="mt-0">
            {/* Similar card for permanent makeup services */}
            <Card>
              <CardHeader>
                <CardTitle>Permanent Makeup Services</CardTitle>
                <CardDescription>
                  Manage the permanent makeup services offered at NOVA Tattoos & Beauty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Similar content as other tabs but filtered for permanent makeup */}
                {/* This is already filtered by the tab click */}
                {isLoading ? (
                  <div className="text-center py-8">Loading services...</div>
                ) : filteredServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No permanent makeup services found.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first permanent makeup service
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.category} • {service.duration} mins</p>
                          <p className="text-sm mt-1">{formatPrice(service.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Same edit/delete controls as in the 'all' tab */}
                          <Button variant="outline" size="icon" onClick={() => setSelectedService(service)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => setServiceToDelete(service.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="piercing" className="mt-0">
            {/* Similar card for piercing services */}
            <Card>
              <CardHeader>
                <CardTitle>Piercing Services</CardTitle>
                <CardDescription>
                  Manage the piercing services offered at NOVA Tattoos & Beauty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Similar content as other tabs but filtered for piercing */}
                {isLoading ? (
                  <div className="text-center py-8">Loading services...</div>
                ) : filteredServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No piercing services found.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first piercing service
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.category} • {service.duration} mins</p>
                          <p className="text-sm mt-1">{formatPrice(service.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Same edit/delete controls as in the 'all' tab */}
                          <Button variant="outline" size="icon" onClick={() => setSelectedService(service)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => setServiceToDelete(service.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="beauty" className="mt-0">
            {/* Similar card for beauty services */}
            <Card>
              <CardHeader>
                <CardTitle>Beauty Services</CardTitle>
                <CardDescription>
                  Manage the beauty services offered at NOVA Tattoos & Beauty.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Similar content as other tabs but filtered for beauty */}
                {isLoading ? (
                  <div className="text-center py-8">Loading services...</div>
                ) : filteredServices.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No beauty services found.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add your first beauty service
                    </Button>
                  </div>
                ) : (
                  <div className="grid gap-4">
                    {filteredServices.map((service) => (
                      <div 
                        key={service.id} 
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-medium">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">{service.category} • {service.duration} mins</p>
                          <p className="text-sm mt-1">{formatPrice(service.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {/* Same edit/delete controls as in the 'all' tab */}
                          <Button variant="outline" size="icon" onClick={() => setSelectedService(service)}>
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="text-destructive hover:bg-destructive/10"
                            onClick={() => setServiceToDelete(service.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DashboardServices;
