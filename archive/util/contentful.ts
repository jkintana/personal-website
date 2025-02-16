import { contentful } from 'contentful'
import type { Document } from "@contentful/rich-text-types";

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: Document;
}

export async function getBlogPosts() : Promise<BlogPost[]> {
  let entries = await contentfulClient.getEntries({ content_type: "blogPost" });
  let blogList:BlogPost[] = [];

  entries.items.forEach((entry) => {
    blogList.push(entry.fields as BlogPost);
  });

  return blogList;
}