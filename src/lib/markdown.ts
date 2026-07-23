import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

export interface MarkdownData {
  contentHtml: string;
  data: Record<string, any>;
  rawContent: string;
}

export function getMarkdownContent(filename: string): MarkdownData {
  const fullPath = path.join(contentDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  // Use marked to convert markdown into HTML string
  const contentHtml = marked(content) as string;

  return {
    contentHtml,
    data,
    rawContent: content,
  };
}
