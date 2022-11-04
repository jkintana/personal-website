// <reference types="astro/client" />
///  <reference types="@astrojs/image/client" />

import type * as Contentful from "contentful";

export interface TypeBlogPostFields {
  slug?: Contentful.EntryFields.Symbol;
  title?: Contentful.EntryFields.Symbol;
  body?: Contentful.EntryFields.Text;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;