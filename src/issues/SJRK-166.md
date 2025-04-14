---json
{
  "title": "SJRK-166",
  "summary": "Use Hugo for managing site",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Avtar Gill",
  "date": "2018-11-22T13:10:24.458-0500",
  "updated": "2019-01-22T09:48:33.280-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "SoJustRepairIt.org"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Avtar Gill",
      "date": "2018-11-22T20:28:08.680-0500",
      "body": "hugo version\\\nHugo Static Site Generator v0.51/extended darwin/amd64 BuildDate: unknown\n\n* Create a new site in your site directory\n  * hugo new site .\n\n- Use YAML config files instead of the default TOML\n  * mv config.toml config.yml\n\n* Edit the newly generated config file\n  ```java\n  baseURL: \"https://sojustrepairit.org/\"\r\n  languageCode: \"en-us\"\r\n  title: \"Social Justice Repair Kit\"\n  ```\n\n- The default directory structure is documented at the following location\n  * <https://gohugo.io/getting-started/directory-structure/>\n  * When Hugo runs it creates a `resources` directory which isn't covered in the page above. It is a resource cache where generated files, such as images, are stored. For more information refer to the following forum post: <https://discourse.gohugo.io/t/why-does-hugo-create-the-resources-directory/13021/3?u=balibebas>\n  * To make use of Hugo's asset processing features a top level `assets` directory needs to exist\n  * The remaining files for your site that won't be minified or altered in other ways by Hugo should go in the `static` directory\n\n* More information about asset management\n  * <https://gohugo.io/hugo-pipes/introduction/>\n  * <https://gohugo.io/hugo-pipes/minification/>\n  * <https://gohugo.io/hugo-pipes/fingerprint/>\n\n- Create a new `assets/css` directory and copy CSS files to that location\n  * mkdir -p assets/css\n  * cp \\~/path/to/your/style.css assets/css/\n\n* To minify and fingerprint our style.css use the following lines in your template\n  ```java\n  {{ $style := resources.Get \"css/style.css\" | minify | fingerprint }} \r\n  <link rel=\"stylesheet\" href=\"{{ $style.Permalink }}\">\n  ```\n\n- Remove any unneeded directories\n  * rm -rf archetypes/ data/ themes/\n\n* Create a .gitignore file\n  ```java\n  /public/\r\n  /resources/_gen/\n  ```\n\n- Create your index/home page and split up content in the `partials` directory\n  * touch layouts/index.html\n  * mkdir -p layouts/{\\_default,partials}\n\n* This next step is not right, will troubleshoot and document\n  * cp layouts/index.html layouts/\\_default/single.html\n\n- Create your static pages in the `content` directory as Markdown files\n  * touch content/ {\\_index,about,resources,partners}.md\n\n* Start Hugo in \"drafts\" mode\n  * hugo server --disableFastRender -D\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2018-11-22T20:32:20.025-0500",
      "body": "Initial bit of work can be found in the following branch: <https://github.com/avtar/sojustrepairit.org/tree/SJRK-166>\n\n~~I had all the pages rendering using markdown files at one point but when it came time to push everything to a branch I realized some of the pages might have been cached and stopped being generated as I continued to poke around ~~😞~~ Right now the home page works. I'll troubleshoot this further on Monday and update my notes in the previous comment.~~\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2018-11-26T10:59:12.680-0500",
      "body": "Hugo is being used to [manage content in my branch](https://github.com/avtar/sojustrepairit.org/tree/SJRK-166/content). I'm currently looking into how more markup can be moved into templates and use only markdown for authoring site content.\n"
    }
  ]
}
---
The initial version of the site is online. The HTML and CSS documents are maintained manually. This jira covers any work required to switching over to using Hugo.

        