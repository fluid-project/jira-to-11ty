import { fromADF } from "mdast-util-from-adf";
import { toMarkdown } from "mdast-util-to-markdown";
import { gfmToMarkdown } from "mdast-util-gfm";

export default function eleventy(eleventyConfig) {
    eleventyConfig.addFilter("fromADF", value => {
      return toMarkdown(fromADF(value), { extensions: [gfmToMarkdown()] });
    });

    eleventyConfig.addFilter("removeMentions", value => value.replace(/@@/g, ''));

    // based on https://lea.verou.me/blog/2023/11ty-indices/#dynamic-postsbytag-collection
    eleventyConfig.addCollection("projects", (collectionsApi) => {
    // fetch a page so that we can access the global data through it.
    const page = collectionsApi.getFilteredByGlob("import/issue.11ty.js");

    const ret = {};

    for (const issue of page[0].data.issues ?? []) {
      const project = issue.fields?.project;
      if (project) {
        ret[project.key] ??= project.name;
      }

    }

    return Object.fromEntries(Object.entries(ret).sort());
  });

    return {
        dir: {
            input: "import",
            output: "src",
            data: "_data"
        }
    };
}
