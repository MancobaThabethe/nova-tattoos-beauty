
import React, { useState, useEffect, useRef } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Send, User, Phone, UserPlus, UserX, Settings, Clock, Video, Bell, BellOff } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

interface Message {
  id: number;
  sender: 'client' | 'staff';  // Fixed: Explicitly defined as union type instead of string
  text: string;
  timestamp: Date;
  read: boolean;
}

interface ChatSession {
  id: number;
  client: {
    id: number;
    name: string;
    avatar?: string;
    email: string;
    phone?: string;
    lastSeen: Date;
    status: 'online' | 'offline' | 'away';
  };
  messages: Message[];
  unreadCount: number;
  lastMessage: Date;
}

const DashboardLiveChat = () => {
  const { toast } = useToast();
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([
    {
      id: 1,
      client: {
        id: 101,
        name: 'Sarah Johnson',
        email: 'sarah.j@example.com',
        phone: '+27 72 123 4567',
        lastSeen: new Date(),
        status: 'online',
      },
      messages: [
        { id: 1, sender: 'client', text: 'Hi, I\'m interested in booking a full sleeve tattoo. Do you have availability next month?', timestamp: new Date(Date.now() - 3600000), read: true },
        { id: 2, sender: 'staff', text: 'Hi Sarah! Thanks for reaching out. We do have some availability next month. What kind of design are you thinking about?', timestamp: new Date(Date.now() - 3500000), read: true },
        { id: 3, sender: 'client', text: 'I\'m thinking of a Japanese-style sleeve with koi fish and cherry blossoms.', timestamp: new Date(Date.now() - 3400000), read: true },
      ],
      unreadCount: 0,
      lastMessage: new Date(Date.now() - 3400000),
    },
    {
      id: 2,
      client: {
        id: 102,
        name: 'David Williams',
        email: 'david.w@example.com',
        phone: '+27 83 987 6543',
        lastSeen: new Date(Date.now() - 1200000),
        status: 'offline',
      },
      messages: [
        { id: 1, sender: 'client', text: 'Hello, I need to reschedule my appointment for this Friday.', timestamp: new Date(Date.now() - 86400000), read: true },
        { id: 2, sender: 'staff', text: 'Hi David, no problem. When would you like to reschedule for?', timestamp: new Date(Date.now() - 85000000), read: true },
      ],
      unreadCount: 0,
      lastMessage: new Date(Date.now() - 85000000),
    },
    {
      id: 3,
      client: {
        id: 103,
        name: 'Emma Thompson',
        email: 'emma.t@example.com',
        lastSeen: new Date(),
        status: 'online',
      },
      messages: [
        { id: 1, sender: 'client', text: 'Hi there! I\'m interested in your facial treatment services. What do you recommend for sensitive skin?', timestamp: new Date(Date.now() - 1800000), read: false },
      ],
      unreadCount: 1,
      lastMessage: new Date(Date.now() - 1800000),
    },
  ]);
  
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [activeChat, chatSessions]);
  
  const getActiveChatSession = () => {
    return chatSessions.find(session => session.id === activeChat) || null;
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim() || !activeChat) return;
    
    setChatSessions(prev => prev.map(session => {
      if (session.id === activeChat) {
        const updatedMessages = [
          ...session.messages,
          {
            id: session.messages.length + 1,
            sender: 'staff' as const,  // Fixed: Using 'as const' to specify the type
            text: newMessage,
            timestamp: new Date(),
            read: true,
          }
        ];
        
        return {
          ...session,
          messages: updatedMessages,
          lastMessage: new Date(),
        };
      }
      return session;
    }));
    
    setNewMessage('');
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const markAsRead = (sessionId: number) => {
    setChatSessions(prev => prev.map(session => {
      if (session.id === sessionId) {
        const updatedMessages = session.messages.map(msg => ({ ...msg, read: true }));
        return {
          ...session,
          messages: updatedMessages,
          unreadCount: 0,
        };
      }
      return session;
    }));
  };
  
  const handleChatSelect = (sessionId: number) => {
    setActiveChat(sessionId);
    markAsRead(sessionId);
  };
  
  const filteredSessions = chatSessions.filter(session => 
    session.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    session.client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };
  
  const activeChatSession = getActiveChatSession();

  return (
    <DashboardLayout>
      <div className="h-[calc(100vh-180px)] flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Live Chat</h2>
        
        <div className="flex h-full gap-4">
          {/* Chat list sidebar */}
          <Card className="w-1/3 max-w-xs">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center mb-2">
                <CardTitle>Conversations</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Start New Conversation</DialogTitle>
                      <DialogDescription>Select a client to start a new chat session.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="relative">
                        <Input
                          placeholder="Search for clients..."
                          className="pl-9"
                        />
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="max-h-[300px] overflow-y-auto">
                        {/* Sample client list */}
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className="flex items-center gap-3 p-2 hover:bg-secondary rounded cursor-pointer">
                            <Avatar>
                              <AvatarFallback>{`C${i}`}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">Client Name {i}</div>
                              <div className="text-sm text-muted-foreground">client{i}@example.com</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Start Chat</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="relative">
                <Input
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-320px)]">
                {filteredSessions.map((session) => (
                  <div
                    key={session.id}
                    className={`flex p-3 gap-3 cursor-pointer border-b hover:bg-secondary/20 ${
                      activeChat === session.id ? 'bg-secondary/30' : ''
                    }`}
                    onClick={() => handleChatSelect(session.id)}
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarFallback>{session.client.name.charAt(0)}</AvatarFallback>
                        {session.client.avatar && <AvatarImage src={session.client.avatar} />}
                      </Avatar>
                      <span 
                        className={`absolute -right-1 -bottom-1 h-3 w-3 rounded-full ${
                          session.client.status === 'online' ? 'bg-green-500' : 
                          session.client.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'
                        }`} 
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{session.client.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {formatTime(session.lastMessage)}
                        </span>
                      </div>
                      <div className="text-sm truncate text-muted-foreground max-w-[180px]">
                        {session.messages[session.messages.length - 1]?.text}
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">
                          {formatDate(session.lastMessage)}
                        </span>
                        {session.unreadCount > 0 && (
                          <Badge variant="default" className="rounded-full px-2 py-0 text-xs">
                            {session.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
          
          {/* Chat window */}
          <Card className="flex-1">
            {activeChatSession ? (
              <>
                <CardHeader className="pb-3 border-b">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{activeChatSession.client.name.charAt(0)}</AvatarFallback>
                        {activeChatSession.client.avatar && <AvatarImage src={activeChatSession.client.avatar} />}
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg">{activeChatSession.client.name}</CardTitle>
                          <span 
                            className={`h-2 w-2 rounded-full ${
                              activeChatSession.client.status === 'online' ? 'bg-green-500' : 
                              activeChatSession.client.status === 'away' ? 'bg-yellow-500' : 'bg-gray-300'
                            }`} 
                          />
                          <span className="text-xs text-muted-foreground">
                            {activeChatSession.client.status === 'online' ? 'Online' : 
                             activeChatSession.client.status === 'away' ? 'Away' : 'Offline'}
                          </span>
                        </div>
                        <CardDescription>
                          {activeChatSession.client.email}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" onClick={() => toast({ title: "Video call initiated" })}>
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => toast({ title: "Calling client" })}>
                        <Phone className="h-4 w-4" />
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <UserX className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>End conversation?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will end your chat session with {activeChatSession.client.name}. The chat history will still be available.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => {
                              toast({
                                title: "Conversation ended",
                                description: `Chat with ${activeChatSession.client.name} has been ended.`
                              });
                              setActiveChat(null);
                            }}>
                              End Conversation
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Chat Settings</DialogTitle>
                            <DialogDescription>
                              Configure settings for this chat session.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col gap-1">
                                <span className="font-medium">Notification Sound</span>
                                <span className="text-sm text-muted-foreground">Play sound on new messages</span>
                              </div>
                              <Button variant="outline" className="gap-2">
                                <Bell className="h-4 w-4" />
                                Enabled
                              </Button>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="flex flex-col gap-1">
                                <span className="font-medium">Chat History</span>
                                <span className="text-sm text-muted-foreground">View and export chat history</span>
                              </div>
                              <Button variant="outline" onClick={() => toast({ title: "Exported chat history" })}>
                                Export
                              </Button>
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save Changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <ScrollArea className="flex-1 h-[calc(100vh-370px)] p-4">
                    <div className="space-y-4">
                      {activeChatSession.messages.map((message, index) => {
                        // Show date separator if needed
                        const showDateSeparator = index === 0 || 
                          formatDate(message.timestamp) !== formatDate(activeChatSession.messages[index - 1].timestamp);
                        
                        return (
                          <React.Fragment key={message.id}>
                            {showDateSeparator && (
                              <div className="flex justify-center my-4">
                                <Badge variant="outline" className="bg-secondary/30">
                                  {formatDate(message.timestamp)}
                                </Badge>
                              </div>
                            )}
                            <div className={`flex ${message.sender === 'staff' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[70%] ${message.sender === 'staff' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} rounded-lg p-3`}>
                                <div className="text-sm">{message.text}</div>
                                <div className="text-xs mt-1 opacity-80 flex items-center gap-1 justify-end">
                                  {formatTime(message.timestamp)}
                                  {message.sender === 'staff' && message.read && (
                                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                        <Send className="h-4 w-4 mr-2" />
                        Send
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-muted-foreground mb-4">
                    Select a conversation or start a new one
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <UserPlus className="h-4 w-4 mr-2" />
                        New Conversation
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Start New Conversation</DialogTitle>
                        <DialogDescription>Select a client to start a new chat session.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="relative">
                          <Input
                            placeholder="Search for clients..."
                            className="pl-9"
                          />
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="max-h-[300px] overflow-y-auto">
                          {/* Sample client list */}
                          {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-2 hover:bg-secondary rounded cursor-pointer">
                              <Avatar>
                                <AvatarFallback>{`C${i}`}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">Client Name {i}</div>
                                <div className="text-sm text-muted-foreground">client{i}@example.com</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Start Chat</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardLiveChat;
