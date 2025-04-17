
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { MessageCircle, Plus, Trash, Edit, RefreshCw, Copy, Save, Settings, Check, AlertTriangle, Search, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DashboardWhatsApp = () => {
  const { toast } = useToast();
  const [botEnabled, setBotEnabled] = useState(true);
  const [apiKey, setApiKey] = useState('');
  const [phoneNumberId, setPhoneNumberId] = useState('');
  const [businessAccountId, setBusinessAccountId] = useState('');
  const [accessToken, setAccessToken] = useState('');
  
  // Sample data for responses
  const [responses, setResponses] = useState([
    { id: 1, name: 'Welcome Message', keywords: ['hello', 'hi', 'start', 'begin'], response: 'Welcome to NOVA! How can we help you today? Reply with a number:\n1. Book an appointment\n2. Check our services\n3. Get pricing information\n4. Speak with a staff member', active: true },
    { id: 2, name: 'Booking Confirmation', keywords: ['book', 'appointment', '1'], response: 'Great! To book an appointment, we need a few details. Please let us know:\n1. What service are you interested in?\n2. Your preferred date and time\n3. Your name\n\nA staff member will confirm your booking shortly.', active: true },
    { id: 3, name: 'Services Information', keywords: ['services', '2'], response: 'At NOVA, we offer:\n- Tattoo design and application\n- Beauty treatments\n- Permanent makeup\n- Piercings\n\nReply with more specific questions about any service.', active: true },
    { id: 4, name: 'Pricing Information', keywords: ['price', 'pricing', 'cost', '3'], response: 'Our pricing varies depending on the service:\n- Small tattoos: From R800\n- Medium tattoos: From R2,000\n- Large tattoos: From R4,500\n- Beauty treatments: From R600\n\nFor a custom quote, please describe what you\'re looking for.', active: true },
    { id: 5, name: 'Contact Staff', keywords: ['staff', 'person', 'human', '4'], response: 'We\'ll connect you with one of our staff members right away. Please stand by for a moment.', active: true },
  ]);
  
  // Sample data for conversations
  const [conversations, setConversations] = useState([
    { id: 1, customer: { name: 'Sarah Johnson', phone: '+27721234567', avatar: '' }, lastMessage: 'I\'d like to book an appointment for next Tuesday', date: '2025-04-16T10:30:00', status: 'active', unread: 2 },
    { id: 2, customer: { name: 'David Williams', phone: '+27839876543', avatar: '' }, lastMessage: 'Do you have any availability this weekend?', date: '2025-04-15T14:45:00', status: 'active', unread: 0 },
    { id: 3, customer: { name: 'Emma Thompson', phone: '+27651122334', avatar: '' }, lastMessage: 'What\'s the price for a full sleeve tattoo?', date: '2025-04-14T09:15:00', status: 'inactive', unread: 0 },
  ]);
  
  // Sample data for analytics
  const [analytics, setAnalytics] = useState({
    totalMessages: 247,
    activeConversations: 12,
    responsesTriggered: 183,
    averageResponseTime: '1m 23s',
    customerSatisfaction: '4.8/5',
    topTriggerKeywords: [
      { keyword: 'book', count: 78 },
      { keyword: 'price', count: 65 },
      { keyword: 'services', count: 42 },
      { keyword: 'hours', count: 38 },
      { keyword: 'location', count: 24 },
    ],
  });
  
  const handleDeleteResponse = (id: number) => {
    setResponses(prevResponses => prevResponses.filter(response => response.id !== id));
    toast({
      title: "Response deleted",
      description: "The automated response has been removed.",
    });
  };
  
  const handleToggleResponse = (id: number) => {
    setResponses(prevResponses => prevResponses.map(response => 
      response.id === id ? { ...response, active: !response.active } : response
    ));
    
    const response = responses.find(r => r.id === id);
    toast({
      title: response?.active ? "Response disabled" : "Response enabled",
      description: `The "${response?.name}" response has been ${response?.active ? 'disabled' : 'enabled'}.`,
    });
  };
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your WhatsApp Chatbot settings have been updated.",
    });
  };
  
  const handleAddResponse = (newResponse: { name: string, keywords: string[], response: string }) => {
    const id = Math.max(0, ...responses.map(r => r.id)) + 1;
    setResponses([...responses, { ...newResponse, id, active: true }]);
    toast({
      title: "Response added",
      description: `New "${newResponse.name}" response has been created.`,
    });
  };
  
  const handleEditResponse = (id: number, updatedResponse: { name: string, keywords: string[], response: string }) => {
    setResponses(prevResponses => prevResponses.map(response => 
      response.id === id ? { ...response, ...updatedResponse } : response
    ));
    toast({
      title: "Response updated",
      description: `The "${updatedResponse.name}" response has been updated.`,
    });
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">WhatsApp Chatbot Manager</h2>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Switch
                checked={botEnabled}
                onCheckedChange={setBotEnabled}
                id="bot-status"
              />
              <Label htmlFor="bot-status" className="font-medium">
                {botEnabled ? (
                  <span className="text-green-600 flex items-center gap-1">
                    <Check className="h-4 w-4" /> Chatbot Active
                  </span>
                ) : (
                  <span className="text-red-600 flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4" /> Chatbot Inactive
                  </span>
                )}
              </Label>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Settings className="h-4 w-4 mr-2" />
                  Configure
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                  <DialogTitle>WhatsApp Bot Configuration</DialogTitle>
                  <DialogDescription>
                    Configure your WhatsApp Business API integration settings.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="apiKey" className="text-right">
                      API Key
                    </Label>
                    <Input
                      id="apiKey"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="phoneNumberId" className="text-right">
                      Phone Number ID
                    </Label>
                    <Input
                      id="phoneNumberId"
                      value={phoneNumberId}
                      onChange={(e) => setPhoneNumberId(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="businessAccountId" className="text-right">
                      Business Account ID
                    </Label>
                    <Input
                      id="businessAccountId"
                      value={businessAccountId}
                      onChange={(e) => setBusinessAccountId(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="accessToken" className="text-right">
                      Access Token
                    </Label>
                    <Input
                      id="accessToken"
                      type="password"
                      value={accessToken}
                      onChange={(e) => setAccessToken(e.target.value)}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleSaveSettings}>Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Tabs defaultValue="responses">
          <TabsList>
            <TabsTrigger value="responses">Automated Responses</TabsTrigger>
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="responses" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Automated Responses</CardTitle>
                    <CardDescription>Manage your automatic WhatsApp responses and keywords</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        New Response
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Create Automated Response</DialogTitle>
                        <DialogDescription>
                          Set up a new automated response with trigger keywords.
                        </DialogDescription>
                      </DialogHeader>
                      <ResponseForm onSubmit={handleAddResponse} />
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Trigger Keywords</TableHead>
                      <TableHead>Response Preview</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {responses.map((response) => (
                      <TableRow key={response.id}>
                        <TableCell className="font-medium">{response.name}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {response.keywords.slice(0, 3).map((keyword, i) => (
                              <Badge key={i} variant="outline" className="bg-secondary/40">
                                {keyword}
                              </Badge>
                            ))}
                            {response.keywords.length > 3 && (
                              <Badge variant="outline" className="bg-secondary/20">
                                +{response.keywords.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[200px] truncate">
                            {response.response.slice(0, 50)}
                            {response.response.length > 50 ? "..." : ""}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={response.active ? "default" : "secondary"}
                            className={!response.active ? "opacity-70" : ""}
                          >
                            {response.active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleToggleResponse(response.id)}
                            >
                              {response.active ? (
                                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                              ) : (
                                <Check className="h-4 w-4 text-green-500" />
                              )}
                            </Button>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader>
                                  <DialogTitle>Edit Automated Response</DialogTitle>
                                  <DialogDescription>
                                    Modify this automated response and its trigger keywords.
                                  </DialogDescription>
                                </DialogHeader>
                                <ResponseForm 
                                  initialValues={{
                                    name: response.name,
                                    keywords: response.keywords,
                                    response: response.response,
                                  }}
                                  onSubmit={(values) => handleEditResponse(response.id, values)}
                                />
                              </DialogContent>
                            </Dialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4 text-red-500" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This will permanently delete the "{response.name}" automated response.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction 
                                    onClick={() => handleDeleteResponse(response.id)}
                                    className="bg-red-600 hover:bg-red-700"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {responses.length} responses
                </div>
                <Button variant="outline" onClick={() => toast({ title: "Templates refreshed" })}>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Templates
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="conversations" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>WhatsApp Conversations</CardTitle>
                    <CardDescription>Monitor and manage customer interactions</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative w-64">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search conversations..."
                        className="pl-9"
                      />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Status filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Conversations</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Last Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {conversations.map((conversation) => (
                      <TableRow key={conversation.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{conversation.customer.name.charAt(0)}</AvatarFallback>
                              {conversation.customer.avatar && <AvatarImage src={conversation.customer.avatar} />}
                            </Avatar>
                            <div>
                              <div className="font-medium">{conversation.customer.name}</div>
                              <div className="text-sm text-muted-foreground">{conversation.customer.phone}</div>
                            </div>
                            {conversation.unread > 0 && (
                              <Badge className="ml-2 bg-red-500">{conversation.unread}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-[200px] truncate">
                            {conversation.lastMessage}
                          </div>
                        </TableCell>
                        <TableCell>
                          {new Date(conversation.date).toLocaleString('en-ZA', { 
                            day: 'numeric', 
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={conversation.status === 'active' ? "default" : "secondary"}
                            className={conversation.status !== 'active' ? "opacity-70" : ""}
                          >
                            {conversation.status === 'active' ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              onClick={() => toast({ title: "Feature coming soon", description: "This feature will be available in a future update." })}
                            >
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Reply
                            </Button>
                            <Button variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Export
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing {conversations.length} conversations
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="outline" size="sm" disabled>Next</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics" className="space-y-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.totalMessages}</div>
                  <p className="text-xs text-green-500">+24% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.activeConversations}</div>
                  <p className="text-xs text-green-500">+8% from last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Automated Responses Triggered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{analytics.responsesTriggered}</div>
                  <p className="text-xs text-green-500">+15% from last month</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Response Performance</CardTitle>
                  <CardDescription>How your automated responses are performing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Average Response Time</div>
                        <div className="text-sm text-muted-foreground">Time to respond to customer queries</div>
                      </div>
                      <div className="text-xl font-bold">{analytics.averageResponseTime}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Customer Satisfaction</div>
                        <div className="text-sm text-muted-foreground">Based on feedback collection</div>
                      </div>
                      <div className="text-xl font-bold">{analytics.customerSatisfaction}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Bot Resolution Rate</div>
                        <div className="text-sm text-muted-foreground">Issues resolved without human intervention</div>
                      </div>
                      <div className="text-xl font-bold">67%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Top Trigger Keywords</CardTitle>
                  <CardDescription>Most frequently used customer keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analytics.topTriggerKeywords.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-secondary/30">
                            {item.keyword}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-32 h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary" 
                              style={{ 
                                width: `${Math.min(100, (item.count / analytics.topTriggerKeywords[0].count) * 100)}%` 
                              }} 
                            />
                          </div>
                          <span className="text-sm font-medium">{item.count}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Analytics Reports</CardTitle>
                    <CardDescription>Generate detailed WhatsApp chatbot performance reports</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 cursor-pointer transition-colors">
                    <div className="font-medium mb-2">Monthly Performance</div>
                    <div className="text-sm text-muted-foreground mb-4">Comprehensive monthly analysis of chatbot performance and user engagement</div>
                    <Button variant="outline" className="w-full" onClick={() => toast({ title: "Generating report", description: "Your monthly performance report is being generated." })}>
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 cursor-pointer transition-colors">
                    <div className="font-medium mb-2">Keyword Analysis</div>
                    <div className="text-sm text-muted-foreground mb-4">Detailed analysis of customer inquiries and frequently used keywords</div>
                    <Button variant="outline" className="w-full" onClick={() => toast({ title: "Generating report", description: "Your keyword analysis report is being generated." })}>
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 cursor-pointer transition-colors">
                    <div className="font-medium mb-2">Conversation Logs</div>
                    <div className="text-sm text-muted-foreground mb-4">Complete logs of all WhatsApp conversations with customers</div>
                    <Button variant="outline" className="w-full" onClick={() => toast({ title: "Generating report", description: "Your conversation logs are being generated." })}>
                      <Download className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Response Form component for creating/editing automated responses
const ResponseForm = ({ 
  initialValues = { name: '', keywords: [], response: '' },
  onSubmit 
}: { 
  initialValues?: { name: string; keywords: string[]; response: string };
  onSubmit: (values: { name: string; keywords: string[]; response: string }) => void;
}) => {
  const [name, setName] = useState(initialValues.name);
  const [keywordsInput, setKeywordsInput] = useState(initialValues.keywords.join(', '));
  const [response, setResponse] = useState(initialValues.response);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const keywordsArray = keywordsInput.split(',').map(k => k.trim()).filter(k => k);
    onSubmit({
      name,
      keywords: keywordsArray,
      response
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="response-name" className="text-right">
            Name
          </Label>
          <Input
            id="response-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
            placeholder="Welcome Message"
            required
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="response-keywords" className="text-right">
            Keywords
          </Label>
          <div className="col-span-3">
            <Input
              id="response-keywords"
              value={keywordsInput}
              onChange={(e) => setKeywordsInput(e.target.value)}
              placeholder="hello, hi, welcome (comma separated)"
              required
            />
            <p className="text-sm text-muted-foreground mt-1">
              Enter keywords separated by commas that will trigger this response
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 items-start gap-4">
          <Label htmlFor="response-content" className="text-right pt-2">
            Response
          </Label>
          <div className="col-span-3">
            <Textarea
              id="response-content"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="min-h-[150px]"
              placeholder="Welcome to NOVA! How can we help you today?"
              required
            />
            <p className="text-sm text-muted-foreground mt-1">
              Write the message that will be sent when triggered
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-sm">Include:</div>
              <Button type="button" variant="outline" size="sm" className="h-7 px-2 text-xs" 
                onClick={() => setResponse(prev => prev + "\n\nReply with a number to continue:\n1. Option One\n2. Option Two\n3. Option Three")}>
                Number Menu
              </Button>
              <Button type="button" variant="outline" size="sm" className="h-7 px-2 text-xs"
                onClick={() => setResponse(prev => prev + "\n\nA staff member will assist you shortly.")}>
                Staff Handover
              </Button>
              <Button type="button" variant="outline" size="sm" className="h-7 px-2 text-xs"
                onClick={() => setResponse(prev => prev + "\n\nOur business hours: Mon-Fri 9am-6pm, Sat 10am-4pm")}>
                Business Hours
              </Button>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Response
        </Button>
      </DialogFooter>
    </form>
  );
};

export default DashboardWhatsApp;
