import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  category,
  date,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="overflow-hidden hover-elevate cursor-pointer h-full" data-testid={`blog-card-${id}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="destructive" className="text-xs">
              {category}
            </Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
          <span className="text-destructive font-medium hover:underline">
            Lire la suite →
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
