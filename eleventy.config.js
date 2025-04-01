import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import { fromADF } from "mdast-util-from-adf";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmTableToMarkdown } from "mdast-util-gfm-table";

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
      toMarkdown(fromADF(value), { extensions: [gfmTableToMarkdown()] }),
    );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
