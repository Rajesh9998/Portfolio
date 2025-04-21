import Link from "@/components/ui/Link";
import { formatDate } from "@/lib/utils";

type ResearchPost = {
 slug: string;
 metadata: {
  title: string;
  description: string;
  publishedAt: string;
  status: string;
 };
};

export default function ResearchList({ posts }: { posts: ResearchPost[] }) {
 return (
  <div className="flex flex-col gap-8">
   {posts.map((post) => (
    <article key={post.slug} className="group relative flex flex-col space-y-2">
     <Link
      href={`/research/${post.slug}`}
      className="flex flex-col space-y-2 rounded-lg border border-transparent p-4 transition-colors hover:border-neutral-200 hover:bg-neutral-100 dark:hover:border-neutral-800 dark:hover:bg-neutral-900"
     >
      <h2 className="text-xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">{post.metadata.title}</h2>
      {post.metadata.description && <p className="text-neutral-600 dark:text-neutral-400">{post.metadata.description}</p>}
      <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
       <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time>
       {post.metadata.status === "draft" && <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs dark:bg-neutral-800">Draft</span>}
      </div>
     </Link>
    </article>
   ))}
  </div>
 );
} 