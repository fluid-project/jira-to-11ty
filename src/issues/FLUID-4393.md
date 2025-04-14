---json
{
  "title": "FLUID-4393",
  "summary": "UI Options' prefix option breaks on absolute paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2011-08-08T19:05:05.152-0400",
  "updated": "2013-10-04T09:54:34.321-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-08-08T19:05:57.421-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-08-08T19:09:15.983-0400",
      "body": "Here's the snippet of code I'm using to instantiate UI Options:\n\n\\<!-- UI Options -->\\\n\\<div class=\"flc-uiOptions-fatPanel fl-uiOptions-fatPanel\">\\\n\\<div id=\"myUIOptions\" class=\"flc-slidingPanel-panel flc-uiOptions-iframe\">\\</div>     \\\n\\<div class=\"fl-panelBar\">\\\n\\<button class=\"flc-slidingPanel-toggleButton fl-toggleButton\">Show display preferences\\</button>\\\n\\</div>\\\n\\</div>\\\n\\<script>\\\nfluid.pageEnhancer({\\\ntocTemplate: \"\\<?php bloginfo('template\\_url'); ?>/infusion/components/tableOfContents/html/TableOfContents.html\"\\\n});\n\nfluid.uiOptions.fatPanel(\".flc-uiOptions-fatPanel\", {\\\nprefix: \"\\<?php bloginfo('template\\_url'); ?>/infusion/components/uiOptions/html/\"\\\n});\\\n\\</script>\n\nAt runtime on my blog, \"\\<?php bloginfo('template\\_url'); ?>\" resolves to \"<http://localhost:8888/wordpress/wp-content/themes/FSSFive/>\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-18T10:23:28.246-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/133> merged into project repo at 457fba9c079883f6e4f518693da0f1a4e4dddb0e\n"
    }
  ]
}
---
UI Options can currently only handle relative paths in the "prefix" option. When providing a URL like this:

<http://localhost:8888/wordpress/wp-content/themes/FSSFive/infusion/components/uiOptions/html/>

the result is URLs to templates like this:

:8888/wordpress/<http://localhost:8888/wordpress/wp-content/themes/FSSFive/infusion/components/uiOptions/html/UIOptionsTemplate-text.html>

        