
// Mock blog data
const mockBlogPosts = [
  {
    id: '1',
    title: 'The Art of Tattoo Aftercare',
    excerpt: 'Learn how to properly care for your new tattoo to ensure it heals beautifully and retains its vibrant colors for years to come.',
    content: `<p>Getting a new tattoo is exciting, but proper aftercare is crucial for ensuring your tattoo heals correctly and stays vibrant for years to come.</p>
      <h2>Day 1-3: Initial Care</h2>
      <p>Your artist will cover your new tattoo with a bandage or plastic wrap. Leave this on for the time recommended by your artist (typically 2-24 hours). When removing it, wash gently with lukewarm water and fragrance-free soap.</p>
      <h2>Week 1: Keeping It Clean</h2>
      <p>Wash your tattoo 2-3 times daily with gentle soap and apply a thin layer of tattoo-specific aftercare product or fragrance-free lotion. Avoid soaking in water, direct sunlight, and tight clothing over the area.</p>
      <h2>Week 2-3: Managing the Itch</h2>
      <p>Your tattoo will begin to scab and itch. Resist scratching! Continue washing and moisturizing regularly. The scabs will naturally flake off - don't pick at them!</p>
      <h2>Long-term Care</h2>
      <p>Once fully healed, use sunscreen on your tattoo when exposed to sunlight to prevent fading. Keep the skin moisturized to maintain color vibrancy.</p>`,
    author: 'Maria Rodriguez',
    publishedAt: '2023-11-15T08:00:00Z',
    coverImage: 'https://images.unsplash.com/photo-1600359746315-119f1360d663?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    sharedOn: ['Instagram', 'Facebook']
  },
  {
    id: '2',
    title: 'Choosing the Perfect Tattoo Design',
    excerpt: "Tips and considerations for selecting a tattoo design that you'll love forever. From personal meaning to artistic style, we cover all aspects.",
    content: `<p>Choosing a tattoo design is a deeply personal decision. After all, this artwork will be with you for life. Here are some factors to consider when selecting your perfect design:</p>
      <h2>Personal Significance</h2>
      <p>The most meaningful tattoos often have personal significance. Consider designs that represent important people, moments, values, or milestones in your life.</p>
      <h2>Artistic Style</h2>
      <p>Research different tattoo styles: traditional American, Japanese, realistic, watercolor, geometric, etc. Each has distinct characteristics that might resonate with your aesthetic preferences.</p>
      <h2>Placement and Size</h2>
      <p>Consider where on your body the tattoo will be placed. Some designs work better in certain areas, and the size should complement the location.</p>
      <h2>Artist Selection</h2>
      <p>Once you have a general idea, research artists who specialize in that style. A skilled artist can provide valuable input to refine your concept.</p>
      <h2>Timelessness</h2>
      <p>Consider how your design might age - both in terms of the tattoo itself and how you'll feel about it in the future. Trends come and go, but classic designs often have staying power.</p>`,
    author: 'Alex Chen',
    publishedAt: '2023-12-08T10:30:00Z',
    coverImage: 'https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    sharedOn: ['WhatsApp']
  },
  {
    id: '3',
    title: 'The History of Tattooing Across Cultures',
    excerpt: 'Explore the rich global history of tattoos, from ancient tribal practices to modern artistic expression.',
    content: `<p>Tattooing is an ancient art form that transcends cultural boundaries, with evidence of tattoo practices dating back thousands of years. Let's explore how different cultures have embraced and evolved this art form:</p>
      <h2>Ancient Origins</h2>
      <p>The oldest evidence of tattooing was found on Ötzi the Iceman, who lived around 3300 BCE. His body features 61 tattoos, believed to be therapeutic rather than decorative.</p>
      <h2>Polynesian Traditions</h2>
      <p>Traditional Polynesian tattoos (like Samoan, Maori, and Hawaiian) feature geometric patterns with deep cultural significance. These tattoos often told the story of one's heritage, rank, and achievements.</p>
      <h2>Japanese Irezumi</h2>
      <p>Japanese tattooing developed into elaborate full-body designs in the Edo period. These intricate pieces often depicted legends, folk tales, and historical figures.</p>
      <h2>Western Evolution</h2>
      <p>In Western cultures, tattoos initially gained popularity among sailors and were later embraced by various subcultures before becoming mainstream art forms.</p>
      <h2>Modern Renaissance</h2>
      <p>Today, tattooing has evolved into a respected art form with diverse styles and techniques. Artists push boundaries with innovation while often drawing inspiration from these rich historical traditions.</p>`,
    author: 'Jordan Williams',
    publishedAt: '2024-01-25T14:15:00Z',
    coverImage: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    sharedOn: []
  }
];

// Store blog posts in memory for the mock API
let blogPosts = [...mockBlogPosts];

// Fetch all blog posts
export const fetchBlogPosts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Fetch a single blog post by ID
export const fetchBlogPostById = async (id: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    throw new Error(`Blog post with ID ${id} not found`);
  }
  
  return post;
};

// Create a new blog post
export const createBlogPost = async (data: Partial<{
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  sharedOn?: string[];
}>) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Validate required fields
  if (!data.title || !data.excerpt || !data.content || !data.author) {
    throw new Error('Missing required fields');
  }
  
  // Create new blog post
  const newPost = {
    id: String(Date.now()),
    title: data.title,
    excerpt: data.excerpt,
    content: data.content,
    author: data.author,
    publishedAt: new Date().toISOString(),
    coverImage: data.coverImage || '',
    sharedOn: data.sharedOn || []
  };
  
  // Add to blog posts
  blogPosts.push(newPost);
  
  // Simulate sharing on social media if applicable
  if (data.sharedOn && data.sharedOn.length > 0) {
    console.log(`Shared blog post "${data.title}" on: ${data.sharedOn.join(', ')}`);
    // In a real app, you would call the social media APIs here
  }
  
  return newPost;
};

// Update an existing blog post
export const updateBlogPost = async (id: string, data: Partial<{
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  coverImage?: string;
  sharedOn?: string[];
}>) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Find post index
  const postIndex = blogPosts.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    throw new Error(`Blog post with ID ${id} not found`);
  }
  
  // Get the existing post
  const existingPost = blogPosts[postIndex];
  
  // Determine if there are new platforms to share on
  const existingPlatforms = existingPost.sharedOn || [];
  const newPlatforms = data.sharedOn?.filter(platform => !existingPlatforms.includes(platform)) || [];
  
  // Update post with new data
  const updatedPost = {
    ...existingPost,
    ...data,
    sharedOn: data.sharedOn || existingPost.sharedOn || []
  };
  
  // Replace post in array
  blogPosts[postIndex] = updatedPost;
  
  // Simulate sharing on new social media platforms
  if (newPlatforms.length > 0) {
    console.log(`Shared updated blog post "${updatedPost.title}" on: ${newPlatforms.join(', ')}`);
    // In a real app, you would call the social media APIs here
  }
  
  return updatedPost;
};

// Delete a blog post
export const deleteBlogPost = async (id: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Find post
  const postIndex = blogPosts.findIndex(post => post.id === id);
  
  if (postIndex === -1) {
    throw new Error(`Blog post with ID ${id} not found`);
  }
  
  // Remove post from array
  blogPosts.splice(postIndex, 1);
  
  return { success: true };
};
