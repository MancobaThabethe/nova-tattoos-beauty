
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogPostById } from '@/api/blog';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', id],
    queryFn: () => fetchBlogPostById(id!),
  });

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4 md:px-6 mt-16">
        <div className="max-w-3xl mx-auto">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-64 w-full mt-8" />
            </div>
          )}
          
          {error && (
            <div className="border border-destructive p-4 rounded-md">
              <h2 className="text-xl font-semibold text-destructive">Error Loading Blog Post</h2>
              <p className="mt-2">There was an error loading this blog post. Please try again later.</p>
            </div>
          )}
          
          {post && (
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 mb-8">
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </time>
                {post.sharedOn && post.sharedOn.length > 0 && (
                  <>
                    <span>•</span>
                    <span>Shared on: {post.sharedOn.join(', ')}</span>
                  </>
                )}
              </div>
              
              {post.coverImage && (
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="rounded-lg w-full h-auto object-cover mb-8"
                />
              )}
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
