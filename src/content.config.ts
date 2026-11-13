import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const projects = defineCollection({loader:glob({pattern:'*.json',base:'./src/content/projects'}),schema:z.object({slug:z.string(),order:z.number(),title:z.string(),subtitle:z.string(),category:z.string(),areas:z.array(z.string()),summary:z.string(),stack:z.array(z.string()),context:z.string(),role:z.string(),problem:z.string(),contribution:z.string(),reportSections:z.array(z.object({title:z.string(),body:z.string()})).optional(),interactionTitle:z.string(),interactionIntro:z.string(),decisions:z.array(z.object({title:z.string(),body:z.string()})),limitations:z.string(),evidence:z.string(),links:z.array(z.object({label:z.string(),url:z.string()}))})});
export const collections={projects};
