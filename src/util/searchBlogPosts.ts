import { getBlogPosts } from "@util/contentful";

export async function searchBlogPosts() {
  console.log(await getBlogPosts());
}