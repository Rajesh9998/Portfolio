import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/MDXContent";
import { Header1 } from "@/components/ui/Headers";
import Link from "@/components/ui/Link";
import { meta } from "@/config/metadata";
import { getResearchPosts } from "@/lib/researchUtils";
import { cn, formatDate, slugify } from "@/lib/utils";
import Avatar from "@/public/assets/avatar.png";

export async function generateStaticParams() {
 const posts = await getResearchPosts();

 return posts.map((post) => ({
  slug: post.slug,
 }));
}

export const dynamicParams = false;

interface Props {
 params: {
  slug: string;
 };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const posts = await getResearchPosts();
 const post = posts.find((post) => post.slug === params.slug);

 if (!post) {
  return {};
 }

 const { title, publishedAt: publishedTime, description } = post.metadata;

 return {
  title,
  description,
  openGraph: {
   title,
   description,
   type: "article",
   publishedTime,
   url: `${meta.url}/research/${post.slug}`,
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
  },
 };
}

export default async function ResearchPost({ params }: Props) {
 const posts = await getResearchPosts();
 const post = posts.find((post) => post.slug === params.slug);

 if (!post) {
  notFound();
 }
 
 // Calculate word count
 const wordCount = post.content.split(/\s+/gu).length;
 
 // Estimate reading time (200 words per minute)
 const readingTime = { text: `${Math.ceil(wordCount / 200)} min read` };

 return (
  <article className="mt-6 mb-16 flex min-h-screen flex-col items-start justify-center md:mt-12 lg:mt-20">
   <script
    type="application/ld+json"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
     __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      headline: post.metadata.title,
      datePublished: post.metadata.publishedAt,
      dateModified: post.metadata.publishedAt,
      description: post.metadata.description,
      image: `/og?title=${encodeURIComponent(post.metadata.title)}`,
      url: `${meta.url}/research/${post.slug}`,
      author: {
       "@type": "Person",
       name: "Rajesh Yarra",
      },
     }),
    }}
   />

   <div className="grid flex-1 grid-cols-1 md:grid-cols-[1fr_minmax(auto,640px)_1fr] md:*:col-start-2">
    <div>
     <header className="mb-4 w-full">
      <Header1>{post.metadata.title}</Header1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
       <div className="flex items-center">
        <Image alt={meta.title} height={24} width={24} src={Avatar} className="rounded-full" />
        <time className="ml-2 text-sm text-neutral-700 dark:text-neutral-300" dateTime={new Date(post.metadata.publishedAt).toUTCString()}>
         Rajesh Yarra / {formatDate(post.metadata.publishedAt)}
        </time>
       </div>
       <p className="mt-2 min-w-32 text-sm text-neutral-700 md:mt-0 dark:text-neutral-300">
        {wordCount} words • {readingTime.text}
       </p>
      </div>
     </header>
     <MDXContent>{post.content}</MDXContent>
    </div>
   </div>
  </article>
 );
} 