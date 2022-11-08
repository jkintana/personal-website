import contentful from 'contentful';
import type { TypeBlogPost, TypeBlogPostFields } from 'src/env';

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getBlogPosts() {
  const client = contentfulClient;
  
  async function getAllBlogPosts() : Promise<contentful.EntryCollection<TypeBlogPost>> {
    return await client.getEntries({ content_type: "blogPost" });
  }
  
  async function getBlogData() : Promise<TypeBlogPostFields[]> {
    return getAllBlogPosts().then((entries) => {
      var pages : TypeBlogPostFields[] = [];
      for(let i = 0; i < entries.items.length; i++) {
        pages.push(entries.items[i].fields as TypeBlogPostFields);
      }
      return pages;
    })
  }

  console.log(await getBlogData());

  // return getBlogData().then((values) => {
  //   return values.map(({ slug, title, body }) => {
  //     return {
  //       params: { slug },
  //       props: { title, body }
  //     };
  //   });
  // })
}