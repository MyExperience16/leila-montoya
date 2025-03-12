
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  thumbnail: string;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "In Progress: Hayley Matthews-Jones",
    excerpt: "The London-born entrepreneur behind the Minneapolis Craft and Vintage Markets.",
    thumbnail: "https://meettheminnesotamakers.com/wp-content/uploads/2022/03/hayley-matthews-jones.jpg",
    url: "#",
  },
  {
    id: 2,
    title: "Benefits of meeting real people: Making your money work for you",
    excerpt: "Exploring the path to financial freedom, John Montoya helps others learn how to manage their wealth independently, challenging the norms of modern banking.",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*sqgUhtkUxXNqKwLIyxxynQ.png",
    url: "https://medium.com/@montoya.leila.2006/benefits-of-meeting-real-people-making-your-money-work-for-you-6a199a6669f2",
  },
  {
    id: 3,
    title: "Breaking Away From Monotony: What you can learn from running a business and beyond",
    excerpt: "Suzanne Varecka’s story reveals how stepping outside routine and embracing curiosity can drive both business and personal growth.",
    thumbnail: "https://miro.medium.com/v2/resize:fit:748/format:webp/1*iRV7cEcKSnB44oSVF4kK7g.jpeg",
    url: "https://medium.com/@montoya.leila.2006/breaking-away-from-monotony-youre-curious-for-a-reason-discover-why-74aec5e60716",
  }
];

export const LatestWritings = () => {
  return (
    <section id="writings" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="mb-16 text-center animate-on-scroll">
          <h2 className="section-title">Latest Writings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
          Sharing insights on entrepreneurship, personal growth, and learning from real-world experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`animate-on-scroll glass-card overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.thumbnail} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <a 
                  href={post.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWritings;
