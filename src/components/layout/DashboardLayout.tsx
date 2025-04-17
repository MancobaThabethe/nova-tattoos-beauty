
import React from 'react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { LayoutDashboard, Calendar, Users, Image, FileText, Settings, LineChart, MessageCircle, Bookmark, FileBarChart, MessageSquare, MessagesSquare } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Footer from './Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const menuItems = [
    { title: "Overview", path: "/dashboard", icon: LayoutDashboard },
    { title: "Appointments", path: "/dashboard/appointments", icon: Calendar },
    { title: "Clients", path: "/dashboard/clients", icon: Users },
    { title: "Gallery Management", path: "/dashboard/gallery", icon: Image },
    { title: "Services", path: "/dashboard/services", icon: FileText },
    { title: "Blog", path: "/dashboard/blog", icon: Bookmark },
    { title: "Analytics", path: "/dashboard/analytics", icon: LineChart },
    { title: "Reports", path: "/dashboard/reports", icon: FileBarChart },
    { title: "Live Chat", path: "/dashboard/livechat", icon: MessageSquare },
    { title: "WhatsApp Bot", path: "/dashboard/whatsapp", icon: MessageCircle },
    { title: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/20">
        <Sidebar variant="floating" collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <div className="p-2">
                <Link to="/" className="font-display text-xl font-bold flex items-center gap-2 p-2">
                  <span className="text-accent">NOVA Tattoos &amp; Beauty</span>
                </Link>
              </div>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={location.pathname === item.path}
                        tooltip={item.title}
                      >
                        <Link to={item.path}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b flex items-center px-6 justify-between">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
          <Toaster />
          <Sonner />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
