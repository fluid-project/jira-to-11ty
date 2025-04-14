import highlightjs from "markdown-it-highlightjs";
import parseTransform from "./src/_transforms/parse.js";
import * as pagefind from "pagefind";
import { EleventyRenderPlugin } from "@11ty/eleventy";

export default function eleventy(eleventyConfig) {
  eleventyConfig.addCollection("projects", (collectionsApi) => collectionsApi.getFilteredByGlob("src/projects/*.md"));

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@github/relative-time-element/dist": "assets/scripts/relative-time/" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@zachleat/filter-container/filter-container.js": "assets/scripts/filter-container.js" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@lowlighter/matcha/dist/matcha.css": "assets/styles/matcha.css" });

  eleventyConfig.addTransform("parse", parseTransform);
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(highlightjs));
  eleventyConfig.on("afterBuild", async () => {
    // Create a Pagefind search index to work with
    const { index } = await pagefind.createIndex();

    // Index all HTML files in a directory
    await index.addDirectory({
      path: "_site"
    });

    // Write the index to disk
    await index.writeFiles({
      outputPath: "_site/pagefind"
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: false,
  };
}
