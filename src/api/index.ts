
// This is a mock API for demonstration purposes
// In a real application, you would use a backend server

interface Appointment {
  id: number;
  clientId: number;
  serviceId: number;
  date: string;
  time: string;
  status: string;
  notes?: string;
}

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  joinedDate: string;
  totalVisits: number;
}

interface Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  category: string;
}

// Add user and authentication interfaces
interface User {
  id: number;
  email: string;
  name: string;
  role: "admin" | "staff" | "client";
  createdAt: string;
}

// Sample data
const appointments: Appointment[] = [
  { id: 1, clientId: 1, serviceId: 1, date: '2025-04-14', time: '14:00', status: 'Confirmed', notes: 'Full sleeve tattoo, dragon design' },
  { id: 2, clientId: 2, serviceId: 2, date: '2025-04-14', time: '16:30', status: 'Confirmed' },
  { id: 3, clientId: 3, serviceId: 3, date: '2025-04-15', time: '10:15', status: 'Pending' },
  { id: 4, clientId: 4, serviceId: 1, date: '2025-04-15', time: '13:00', status: 'Confirmed', notes: 'Back tattoo, forest scene' },
  { id: 5, clientId: 5, serviceId: 4, date: '2025-04-16', time: '11:30', status: 'Confirmed' },
];

const clients: Client[] = [
  { id: 1, name: 'Alex Johnson', email: 'alex@example.com', phone: '(555) 123-4567', joinedDate: '2025-01-15', totalVisits: 5 },
  { id: 2, name: 'Sam Smith', email: 'sam@example.com', phone: '(555) 234-5678', joinedDate: '2025-02-03', totalVisits: 2 },
  { id: 3, name: 'Jamie Lee', email: 'jamie@example.com', phone: '(555) 345-6789', joinedDate: '2025-02-12', totalVisits: 1 },
  { id: 4, name: 'Taylor Wong', email: 'taylor@example.com', phone: '(555) 456-7890', joinedDate: '2025-03-01', totalVisits: 3 },
  { id: 5, name: 'Casey Martin', email: 'casey@example.com', phone: '(555) 567-8901', joinedDate: '2025-03-15', totalVisits: 2 },
];

const services: Service[] = [
  { id: 1, name: 'Custom Tattoo', description: 'Personalized tattoo design', duration: 120, price: 1500, category: 'Tattoo' },
  { id: 2, name: 'Permanent Eyebrows', description: 'Long-lasting eyebrow enhancement', duration: 90, price: 2000, category: 'Permanent Makeup' },
  { id: 3, name: 'Piercing', description: 'Various body piercing options', duration: 30, price: 500, category: 'Piercing' },
  { id: 4, name: 'Touch Up', description: 'Refresh existing tattoos or makeup', duration: 60, price: 750, category: 'Maintenance' },
];

// Add sample users with different roles
const users: User[] = [
  { id: 1, email: 'admin@novatattoos.co.za', name: 'Admin User', role: 'admin', createdAt: '2024-01-01T00:00:00Z' },
  { id: 2, email: 'artist@novatattoos.co.za', name: 'Artist Staff', role: 'staff', createdAt: '2024-01-15T00:00:00Z' },
  { id: 3, email: 'reception@novatattoos.co.za', name: 'Reception Staff', role: 'staff', createdAt: '2024-02-01T00:00:00Z' },
  { id: 4, email: 'client@example.com', name: 'Sample Client', role: 'client', createdAt: '2024-03-10T00:00:00Z' },
];

// Current user state
let currentUser: User | null = null;

// API functions
export const api = {
  // Authentication
  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.email === email);
        
        if (user && password === 'password') { // In a real app, you'd use proper password hashing
          currentUser = user;
          resolve({ 
            user, 
            token: 'mock-jwt-token-' + user.role // In a real app, this would be a proper JWT
          });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 500);
    });
  },
  
  register: async (email: string, password: string, name: string): Promise<{ user: User; token: string }> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Check if user already exists
        if (users.some(u => u.email === email)) {
          reject(new Error('User already exists'));
          return;
        }
        
        // Create new user (as client by default)
        const newUser: User = {
          id: Math.max(...users.map(u => u.id)) + 1,
          email,
          name,
          role: 'client',
          createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        currentUser = newUser;
        
        resolve({ 
          user: newUser, 
          token: 'mock-jwt-token-client' // In a real app, this would be a proper JWT
        });
      }, 700);
    });
  },
  
  logout: async (): Promise<{ success: boolean }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        currentUser = null;
        resolve({ success: true });
      }, 300);
    });
  },
  
  getCurrentUser: async (): Promise<User | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(currentUser);
      }, 300);
    });
  },

  // Appointments
  getAppointments: (): Promise<Appointment[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(appointments), 300);
    });
  },
  
  getAppointment: (id: number): Promise<Appointment | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(appointments.find(a => a.id === id)), 300);
    });
  },
  
  createAppointment: (appointment: Omit<Appointment, 'id'>): Promise<Appointment> => {
    return new Promise((resolve) => {
      const newAppointment = {
        ...appointment,
        id: Math.max(...appointments.map(a => a.id)) + 1
      };
      appointments.push(newAppointment);
      setTimeout(() => resolve(newAppointment), 300);
    });
  },
  
  updateAppointment: (id: number, data: Partial<Appointment>): Promise<Appointment | undefined> => {
    return new Promise((resolve) => {
      const index = appointments.findIndex(a => a.id === id);
      if (index !== -1) {
        appointments[index] = { ...appointments[index], ...data };
        setTimeout(() => resolve(appointments[index]), 300);
      } else {
        setTimeout(() => resolve(undefined), 300);
      }
    });
  },
  
  deleteAppointment: (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const index = appointments.findIndex(a => a.id === id);
      if (index !== -1) {
        appointments.splice(index, 1);
        setTimeout(() => resolve(true), 300);
      } else {
        setTimeout(() => resolve(false), 300);
      }
    });
  },
  
  // Clients
  getClients: (): Promise<Client[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(clients), 300);
    });
  },
  
  getClient: (id: number): Promise<Client | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(clients.find(c => c.id === id)), 300);
    });
  },
  
  createClient: (client: Omit<Client, 'id'>): Promise<Client> => {
    return new Promise((resolve) => {
      const newClient = {
        ...client,
        id: Math.max(...clients.map(c => c.id)) + 1
      };
      clients.push(newClient);
      setTimeout(() => resolve(newClient), 300);
    });
  },
  
  updateClient: (id: number, data: Partial<Client>): Promise<Client | undefined> => {
    return new Promise((resolve) => {
      const index = clients.findIndex(c => c.id === id);
      if (index !== -1) {
        clients[index] = { ...clients[index], ...data };
        setTimeout(() => resolve(clients[index]), 300);
      } else {
        setTimeout(() => resolve(undefined), 300);
      }
    });
  },
  
  deleteClient: (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const index = clients.findIndex(c => c.id === id);
      if (index !== -1) {
        clients.splice(index, 1);
        setTimeout(() => resolve(true), 300);
      } else {
        setTimeout(() => resolve(false), 300);
      }
    });
  },
  
  // Services
  getServices: (): Promise<Service[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(services), 300);
    });
  },
  
  getService: (id: number): Promise<Service | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(services.find(s => s.id === id)), 300);
    });
  },

  createService: (service: Omit<Service, 'id'>): Promise<Service> => {
    return new Promise((resolve) => {
      const newService = {
        ...service,
        id: Math.max(...services.map(s => s.id)) + 1
      };
      services.push(newService);
      setTimeout(() => resolve(newService), 300);
    });
  },

  updateService: (id: number, data: Partial<Service>): Promise<Service | undefined> => {
    return new Promise((resolve) => {
      const index = services.findIndex(s => s.id === id);
      if (index !== -1) {
        services[index] = { ...services[index], ...data };
        setTimeout(() => resolve(services[index]), 300);
      } else {
        setTimeout(() => resolve(undefined), 300);
      }
    });
  },

  deleteService: (id: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const index = services.findIndex(s => s.id === id);
      if (index !== -1) {
        services.splice(index, 1);
        setTimeout(() => resolve(true), 300);
      } else {
        setTimeout(() => resolve(false), 300);
      }
    });
  }
};
