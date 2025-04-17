
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from '@/api/blog';
import { Pencil, Trash2, Facebook, Instagram, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  sharedOn?: string[];
}

const DashboardBlog = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    coverImage: '',
  });
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [socialSharing, setSocialSharing] = useState({
    facebook: false,
    instagram: false,
    whatsapp: false
  });

  const { data: posts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: fetchBlogPosts,
  });

  const createMutation = useMutation({
    mutationFn: (data: Partial<BlogPost>) => {
      // Add the social media platforms to the blog post data
      const platforms = [];
      if (socialSharing.facebook) platforms.push('Facebook');
      if (socialSharing.instagram) platforms.push('Instagram');
      if (socialSharing.whatsapp) platforms.push('WhatsApp');
      
      return createBlogPost({
        ...data,
        sharedOn: platforms.length > 0 ? platforms : undefined
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      resetForm();
      toast({
        title: "Blog post created",
        description: "Your blog post has been published successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error creating your blog post.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: Partial<BlogPost>) => {
      // Add the social media platforms to the blog post data
      const platforms = [];
      if (socialSharing.facebook) platforms.push('Facebook');
      if (socialSharing.instagram) platforms.push('Instagram');
      if (socialSharing.whatsapp) platforms.push('WhatsApp');
      
      return updateBlogPost(selectedPostId!, {
        ...data,
        sharedOn: platforms.length > 0 ? platforms : undefined
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      resetForm();
      toast({
        title: "Blog post updated",
        description: "Your blog post has been updated successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error updating your blog post.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteBlogPost(selectedPostId!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      setIsDeleteDialogOpen(false);
      setSelectedPostId(null);
      toast({
        title: "Blog post deleted",
        description: "The blog post has been deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error deleting the blog post.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSocialChange = (platform: keyof typeof socialSharing, checked: boolean) => {
    setSocialSharing(prev => ({ ...prev, [platform]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPostId) {
      updateMutation.mutate(formData);
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPostId(post.id);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      coverImage: post.coverImage || '',
    });
    
    // Reset social sharing checkboxes
    setSocialSharing({
      facebook: post.sharedOn?.includes('Facebook') || false,
      instagram: post.sharedOn?.includes('Instagram') || false,
      whatsapp: post.sharedOn?.includes('WhatsApp') || false
    });
  };

  const handleDeleteClick = (postId: string) => {
    setSelectedPostId(postId);
    setIsDeleteDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      author: '',
      coverImage: '',
    });
    setSelectedPostId(null);
    setSocialSharing({
      facebook: false,
      instagram: false,
      whatsapp: false
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Blog Management</h2>
        
        <Tabs defaultValue="posts">
          <TabsList>
            <TabsTrigger value="posts">All Posts</TabsTrigger>
            <TabsTrigger value="create">Create New Post</TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>
                  Manage your existing blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center p-4">Loading posts...</div>
                ) : posts && posts.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Published</TableHead>
                        <TableHead>Shared On</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">{post.title}</TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>{new Date(post.publishedAt).toLocaleDateString()}</TableCell>
                          <TableCell>
                            {post.sharedOn && post.sharedOn.length > 0 ? (
                              <div className="flex gap-1">
                                {post.sharedOn.includes('Facebook') && <Facebook size={16} />}
                                {post.sharedOn.includes('Instagram') && <Instagram size={16} />}
                                {post.sharedOn.includes('WhatsApp') && <MessageSquare size={16} />}
                              </div>
                            ) : (
                              <span className="text-muted-foreground text-sm">Not shared</span>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => handleEditPost(post)}
                              >
                                <Pencil className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => handleDeleteClick(post.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="text-center p-6 border rounded-md">
                    <p>No blog posts found. Create your first post!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="create" className="mt-4">
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>{selectedPostId ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
                  <CardDescription>
                    {selectedPostId 
                      ? 'Update your blog post and share it on social media' 
                      : 'Create a new blog post and share it on social media'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      name="title" 
                      value={formData.title}
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input 
                      id="author" 
                      name="author" 
                      value={formData.author}
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea 
                      id="excerpt" 
                      name="excerpt" 
                      value={formData.excerpt}
                      onChange={handleInputChange} 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea 
                      id="content" 
                      name="content" 
                      value={formData.content}
                      onChange={handleInputChange} 
                      rows={8}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="coverImage">Cover Image URL (optional)</Label>
                    <Input 
                      id="coverImage" 
                      name="coverImage" 
                      value={formData.coverImage}
                      onChange={handleInputChange} 
                    />
                  </div>
                  
                  <div className="space-y-3 pt-2">
                    <Label>Share on Social Media</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="facebook" 
                          checked={socialSharing.facebook}
                          onCheckedChange={(checked) => 
                            handleSocialChange('facebook', checked as boolean)
                          }
                        />
                        <Label htmlFor="facebook" className="flex items-center">
                          <Facebook className="mr-2 h-4 w-4" />
                          Facebook
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="instagram" 
                          checked={socialSharing.instagram}
                          onCheckedChange={(checked) => 
                            handleSocialChange('instagram', checked as boolean)
                          }
                        />
                        <Label htmlFor="instagram" className="flex items-center">
                          <Instagram className="mr-2 h-4 w-4" />
                          Instagram
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="whatsapp" 
                          checked={socialSharing.whatsapp}
                          onCheckedChange={(checked) => 
                            handleSocialChange('whatsapp', checked as boolean)
                          }
                        />
                        <Label htmlFor="whatsapp" className="flex items-center">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          WhatsApp
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {selectedPostId ? 'Update Post' : 'Publish Post'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this blog post? This action cannot be undone.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={() => deleteMutation.mutate()}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default DashboardBlog;
