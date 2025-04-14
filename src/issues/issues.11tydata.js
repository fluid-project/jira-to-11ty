export default {
    layout: "layouts/issue.njk",
    eleventyComputed: {
        permalink: (data) => `/browse/${data.title}/`
    }
}