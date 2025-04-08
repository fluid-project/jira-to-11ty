import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { fromADF } from "mdast-util-from-adf";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmTableToMarkdown } from "mdast-util-gfm-table";
import { gfmStrikethroughToMarkdown } from 'mdast-util-gfm-strikethrough';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

md.use(
  await Shiki({
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  }),
);

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

    let ret = {};

    for (let issue of page[0].data.issues ?? []) {
      let project = issue.fields?.project?.name;
      if (project) {
        ret[project] ??= [];
        ret[project].push(issue);
      }
    }

    return ret;
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
