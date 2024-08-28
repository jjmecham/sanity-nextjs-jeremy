import { defineConfig, isDev } from "sanity";
import {structureTool} from 'sanity/structure'
import { schemaTypes } from "./schemas";
import {visionTool} from '@sanity/vision'

const devOnlyPlugins = [visionTool()]

export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",
  projectId: "d412zic1",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});