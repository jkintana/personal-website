/// <reference types="astro/client" />

import type * as Contentful from "contentful";

export interface TypeBlogPostFields {
  slug?: Contentful.EntryFields.Symbol;
  title?: Contentful.EntryFields.Symbol;
  body?: Contentful.EntryFields.Text;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;