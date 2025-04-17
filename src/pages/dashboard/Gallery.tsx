import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Plus, Trash, Upload, Image as ImageIcon } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from "@/components/ui/use-toast";

// Sample gallery images - in a real app, these would come from your database
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590246815117-ded75092d9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Geometric Arm Design",
    artist: "Alex Smith",
    category: "tattoos"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494389945381-0fe114b8ea4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Floral Back Piece",
    artist: "Mia Johnson",
    category: "tattoos"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1578088638455-661eb17d6aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Minimalist Line Work",
    artist: "Carlos Rivera",
    category: "tattoos"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Traditional Rose",
    artist: "Sophia Lee",
    category: "tattoos"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    title: "Blackwork Mandala",
    artist: "David Kim",
    category: "tattoos"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    title: "Natural Microblading",
    artist: "Emma Wilson",
    category: "eyebrows"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1593533824878-1c98a80104e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Powder Brow Technique",
    artist: "Olivia Taylor",
    category: "eyebrows"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1610991149688-c1321006bcc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Multiple Ear Piercings",
    artist: "James Wright",
    category: "piercings"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1603899230798-7bbbe426d2e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Septum Jewelry",
    artist: "Thomas Garcia",
    category: "piercings"
  }
];

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  artist: string;
  category: string;
}

const DashboardGallery = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [newImage, setNewImage] = useState<Omit<GalleryItem, 'id'>>({
    src: '',
    title: '',
    artist: '',
    category: 'tattoos'
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(galleryItems);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewImage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(prev => ({
          ...prev,
          src: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addImageToGallery = () => {
    const newId = gallery.length > 0 ? Math.max(...gallery.map(item => item.id)) + 1 : 1;
    const newItem: GalleryItem = {
      id: newId,
      ...newImage
    };
    setGallery(prev => [...prev, newItem]);
    setNewImage({
      src: '',
      title: '',
      artist: '',
      category: 'tattoos'
    });
    setIsDialogOpen(false);
    toast({
      title: "Success",
      description: "Image added to gallery successfully",
    });
  };

  const confirmDeleteImage = (image: GalleryItem) => {
    setSelectedImage(image);
    setIsDeleteDialogOpen(true);
  };

  const deleteImage = () => {
    if (selectedImage) {
      setGallery(prev => prev.filter(item => item.id !== selectedImage.id));
      setSelectedImage(null);
      setIsDeleteDialogOpen(false);
      toast({
        title: "Success",
        description: "Image deleted from gallery successfully",
      });
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Gallery Management</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Image</DialogTitle>
                <DialogDescription>
                  Upload a new image to the gallery.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={newImage.title}
                    onChange={handleInputChange}
                    placeholder="Image Title"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="artist">Artist</Label>
                  <Input
                    id="artist"
                    name="artist"
                    value={newImage.artist}
                    onChange={handleInputChange}
                    placeholder="Artist Name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setNewImage(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tattoos">Tattoos</SelectItem>
                      <SelectItem value="eyebrows">Eyebrows</SelectItem>
                      <SelectItem value="piercings">Piercings</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="image">Image Upload</Label>
                  <Input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Label htmlFor="image" className="cursor-pointer bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md h-10 flex items-center justify-center">
                    {newImage.src ? (
                      <img src={newImage.src} alt="Uploaded" className="max-h-8 max-w-xs" />
                    ) : (
                      <>
                        <Upload className="mr-2 h-4 w-4" />
                        <span>Upload Image</span>
                      </>
                    )}
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="secondary" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={addImageToGallery}>
                  Add Image
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Gallery Images</CardTitle>
            <CardDescription>
              Manage the images displayed in the gallery.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.map(image => (
                <div key={image.id} className="relative">
                  <img src={image.src} alt={image.title} className="rounded-md aspect-square object-cover w-full" />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="icon" onClick={() => confirmDeleteImage(image)}>
                          <Trash className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. Are you sure you want to delete this image?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel onClick={() => setIsDeleteDialogOpen(false)}>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={deleteImage}>Delete</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-2 rounded-b-md">
                    <h4 className="font-semibold">{image.title}</h4>
                    <p className="text-sm">{image.artist}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardGallery;
