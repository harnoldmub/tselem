import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import type { BlogPost as BlogPostType } from "@shared/schema";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const { data: post, isLoading } = useQuery<BlogPostType>({
    queryKey: ["/api/blog", slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-destructive mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article non trouvé</h1>
            <p className="text-muted-foreground mb-8">Cet article n'existe pas ou a été supprimé.</p>
            <Link href="/blog">
              <Button variant="destructive" data-testid="button-back-to-blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <article className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 hover-elevate"
              data-testid="button-back-to-blog"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2" data-testid="post-date">
                <Calendar className="w-4 h-4" />
                <time dateTime={new Date(post.publishedAt).toISOString()}>
                  {format(new Date(post.publishedAt), "d MMMM yyyy", { locale: fr })}
                </time>
              </div>
              <div className="flex items-center gap-2" data-testid="post-author">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2" data-testid="post-category">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-6 leading-tight" data-testid="post-title">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground font-['Cormorant_Garamond'] leading-relaxed" data-testid="post-excerpt">
              {post.excerpt}
            </p>
          </div>

          <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              data-testid="post-image"
            />
          </div>

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-['Playfair_Display'] prose-headings:font-bold
              prose-p:font-['Cormorant_Garamond'] prose-p:text-lg prose-p:leading-relaxed
              prose-p:text-foreground
              prose-a:text-destructive prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-foreground prose-li:font-['Cormorant_Garamond']
              prose-blockquote:border-l-4 prose-blockquote:border-destructive
              prose-blockquote:pl-6 prose-blockquote:italic
              prose-blockquote:font-['Cormorant_Garamond'] prose-blockquote:text-muted-foreground
              prose-img:rounded-lg prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
            data-testid="post-content"
          />

          <div className="mt-16 pt-8 border-t">
            <Link href="/blog">
              <Button
                variant="destructive"
                size="lg"
                className="w-full sm:w-auto"
                data-testid="button-back-to-blog-bottom"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voir tous les articles
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
