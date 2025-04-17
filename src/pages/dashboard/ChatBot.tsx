
import React, { useState, useRef, useEffect } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const DashboardChatBot = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your InkAlchemy assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom of messages when new message is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Sample bot responses - in a real app, this would be more sophisticated
  const botResponses = [
    "We offer custom tattoos, permanent eyebrows, and various piercing services.",
    "Our studio is open Monday to Saturday, 10 AM to 8 PM.",
    "Tattoo appointments typically require a deposit of 25% of the estimated cost.",
    "For aftercare, we recommend keeping the tattoo clean and moisturized for at least 2 weeks.",
    "The healing process for tattoos usually takes 2-4 weeks, depending on the size and location.",
    "We require 24 hours notice for cancellations to receive a deposit refund.",
    "Yes, we do offer touch-up services for both tattoos and permanent eyebrows.",
    "Our artists specialize in various styles including traditional, realism, watercolor, and geometric designs."
  ];
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate bot "thinking" and then responding
    setTimeout(() => {
      // For demo purposes, just pick a random response
      const randomIndex = Math.floor(Math.random() * botResponses.length);
      const botMessage: Message = {
        id: messages.length + 2,
        content: botResponses[randomIndex],
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Chat Bot</h2>
        
        <Card className="h-[calc(100vh-14rem)]">
          <CardHeader>
            <CardTitle>Customer Assistance Bot</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-[calc(100%-5rem)]">
            <div className="flex-1 overflow-y-auto mb-4 pr-2">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted'
                    }`}
                  >
                    <div className="flex items-center mb-1">
                      {message.sender === 'bot' ? (
                        <Bot className="h-4 w-4 mr-1" />
                      ) : (
                        <User className="h-4 w-4 mr-1" />
                      )}
                      <span className="text-xs">
                        {message.sender === 'bot' ? 'InkAlchemy Bot' : 'You'}
                      </span>
                    </div>
                    <p>{message.content}</p>
                    <div className="text-xs mt-1 text-right opacity-70">
                      {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardChatBot;
