import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostFrontmatter } from "@/types/post";
import { estimateReadingTime } from "./utils";

const postsDirectory = path.join(process.cwd(), "content/posts");

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

export async function getAllPosts(): Promise<Post[]> {
  ensurePostsDirectory();
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const frontmatter = data as PostFrontmatter;

      if (!frontmatter.published) return null;

      return {
        slug,
        content,
        readingTime: estimateReadingTime(content),
        ...frontmatter,
      } as Post;
    })
    .filter((post): post is Post => post !== null);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getRecentPosts(count: number): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  ensurePostsDirectory();
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as PostFrontmatter;

  return {
    slug,
    content,
    readingTime: estimateReadingTime(content),
    ...frontmatter,
  };
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export async function getAllSlugs(): Promise<string[]> {
  ensurePostsDirectory();
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
