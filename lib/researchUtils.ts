import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { cache } from "react";
import { slugify } from "@/lib/utils";

const headersRegex = /^(#+)\s+(.+)$/gm;

export const getResearchPosts = cache(async () => {
 const postsDirectory = path.join(process.cwd(), "content/research");
 
 // Create directory if it doesn't exist
 if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
 }

 const files = fs.readdirSync(postsDirectory);
 const posts = files
  .filter((file) => path.extname(file) === ".md")
  .map((file) => {
   const filePath = path.join(postsDirectory, file);
   const fileContents = fs.readFileSync(filePath, "utf8");
   const { data: metadata, content } = matter(fileContents);
   const wordCount = content.split(/\s+/gu).length;
   const readingTimeData = readingTime(content);
   const headings = Array.from(content.matchAll(headersRegex))
    .map((value: RegExpMatchArray) => ({
     size: value[1].length,
     content: value[2],
     slug: slugify(value[2]),
    }))
    .filter(({ size }) => size <= 3);

   return {
    slug: file.replace(".md", ""),
    metadata: {
     title: metadata.title,
     description: metadata.description,
     publishedAt: metadata.publishedAt,
     status: metadata.status || "published",
     author: metadata.author || "Rajesh Yarra",
    },
    content,
    wordCount,
    readingTime: readingTimeData,
    headings,
   };
  })
  // Sort by publication date (newest first)
  .sort((a, b) => {
   const dateA = new Date(a.metadata.publishedAt).getTime();
   const dateB = new Date(b.metadata.publishedAt).getTime();
   
   // If dates are equal, sort alphabetically by title to ensure consistent ordering
   if (dateA === dateB) {
    return a.metadata.title.localeCompare(b.metadata.title);
   }
   
   return dateB - dateA;
  });

 return posts;
}); 