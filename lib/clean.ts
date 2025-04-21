import fs from "fs";
import path from "path";
import { globby } from "globby";

const rootDir = process.cwd();
const publicDir = path.join(rootDir, "public");
const contentDir = path.join(rootDir, "content");

const deleteIfExists = (path: string) => {
 if (fs.existsSync(path)) {
  console.log(`Deleting ${path}`);
  fs.rmSync(path, { recursive: true, force: true });
 }
};

// Delete unnecessary files
[
 "public/assets/projects",
 "public/assets/blog",
 "content/blog",
 "content/research",
 ".vercel",
 ".next",
].forEach(deleteIfExists);

// Create necessary directories
console.log("Creating /public/assets/blog");
fs.mkdirSync(path.join(publicDir, "assets", "blog"), { recursive: true });

console.log("Creating /public/assets/projects");
fs.mkdirSync(path.join(publicDir, "assets", "projects"), { recursive: true });

console.log("Creating /content/blog");
fs.mkdirSync(path.join(contentDir, "blog"), { recursive: true });

console.log("Creating /content/research");
fs.mkdirSync(path.join(contentDir, "research"), { recursive: true });

console.log("Done!");
