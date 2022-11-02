import contentful from 'contentful';
import type { TypeBlogPost, TypeBlogPostFields } from 'src/env';

export async function getBlogPosts() {
  const client = contentful.createClient({
    accessToken: import.meta.env.SECRET_API_KEY,
    space: import.meta.env.SECRET_SPACE_ID
  })

  async function getAllBlogPosts() : Promise<contentful.EntryCollection<TypeBlogPost>> {
    return await client.getEntries({
      content_type: "blogPost"
    })
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

  return getBlogData().then((values) => {
    return values.map(({ slug, title, body }) => {
      return {
        params: { slug },
        props: { title, body }
      };
    });
  })
}