/**
 * Sanity Studio config mounted at /app/studio/[[...tool]]/page.tsx
 */

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/deskStructure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,

  schema: {
    ...schema,
    // Only allow the Availability singleton
    templates: (templates) =>
      templates.filter((t) => t.schemaType === "availability"),
  },

  plugins: [
    deskTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
