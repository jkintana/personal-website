// <reference types="astro/client" />
///  <reference types="@astrojs/image/client" />

import type * as Contentful from "contentful";
import * as CFRichTextTypes from "@contentful/rich-text-types";

export interface TypeBlogPostFields {
  slug?: Contentful.EntryFields.Symbol;
  title?: Contentful.EntryFields.Symbol;
  content?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  description?: Contentful.EntryFields.Symbol;
  date?: Contentful.EntryFields.Date;
}

export type TypeBlogPost = Contentful.Entry<TypeBlogPostFields>;