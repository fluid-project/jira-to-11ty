import MarkdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import { fromADF } from "mdast-util-from-adf";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmTableToMarkdown } from "mdast-util-gfm-table";
import { gfmStrikethroughToMarkdown } from 'mdast-util-gfm-strikethrough';
import parseTransform from "./src/_transforms/parse.js";
import * as pagefind from "pagefind";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.use(highlightjs);

export default function eleventy(eleventyConfig) {
  eleventyConfig.addFilter("adf", (value) => {
    return md.render(
      toMarkdown(fromADF(value), {extensions: [gfmTableToMarkdown(), gfmStrikethroughToMarkdown()] }),
    );
  })

  // based on https://lea.verou.me/blog/2023/11ty-indices/#dynamic-postsbytag-collection
  eleventyConfig.addCollection("projects", (collectionsApi) => {
    // fetch a page so that we can access the global data through it.
    const page = collectionsApi.getFilteredByGlob("src/index.njk");

    const ret = {};

    for (const issue of page[0].data.issues ?? []) {
      const project = issue.fields?.project?.name;
      if (project) {
        ret[project] ??= [];
        ret[project].push(issue);
      }
    }

    return Object.fromEntries(Object.entries(ret).sort());
  });

  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({ "node_modules/@github/relative-time-element/dist": "assets/scripts/relative-time/"});
  eleventyConfig.addPassthroughCopy({ "node_modules/@zachleat/filter-container/filter-container.js": "assets/scripts/filter-container.js"});
  eleventyConfig.addPassthroughCopy({ "node_modules/@lowlighter/matcha/dist/matcha.css": "assets/styles/matcha.css"});
  
  eleventyConfig.addTransform("parse", parseTransform);

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
    markdownTemplateEngine: "njk",
  };
}
