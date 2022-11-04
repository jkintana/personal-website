import { getBlogPosts } from "@util/getBlogPosts";

export async function searchBlogPosts() {
  console.log(await getBlogPosts());
}