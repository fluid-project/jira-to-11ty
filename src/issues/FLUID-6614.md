---json
{
  "title": "FLUID-6614",
  "summary": "fastXmlPull.js strips the opening comment sign from templates",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2021-04-20T13:46:47.944-0400",
  "updated": "2021-04-22T10:11:15.388-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6614/toc1.png",
      "filename": "toc1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6614/toc2.png",
      "filename": "toc2.png"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-04-22T10:11:15.388-0400",
      "body": "I believe since the impl was simplified a few months ago to avoid the massive model relay CPU usage caused by the cities list, none of \"new-renderer-demo\" is actually being validly used in this project any more so I'll draw up a pull which simplifies the impl by removing them - I think every facility we are now using is part of the plain function of the <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580> \"new renderer framework\" which just consists of straightforward improvements to core Infusion\n"
    }
  ]
}
---
[Covid-data-monitor repo](https://github.com/inclusive-design/covid-data-monitor/blob/main/package.json#L20) uses \`fastXmlPull.js\` from amb26/new-renderer-demo#FLUID-5047. This script appears stripping the opening comment sign when a template is loaded. This causes the issue that the table of content is shown with a string "Table of contents template -->" above "Table of Contents" header. See attached toc1.png.&#x20;

Inspecting the DOM element shows the opening comment sign from [the template of \`tableOfContents.html\`](https://github.com/amb26/infusion/blob/FLUID-6580/src/components/tableOfContents/html/TableOfContents.html#L1) was removed. See attached toc2.png.

The demonstration of the issue can be produced at [the deploy preview](https://deploy-preview-415--wecount.netlify.app/map/) of [this WeCount website PR](https://github.com/inclusive-design/wecount.inclusivedesign.ca/pull/415).

This issue will not occur by using either one of workarounds below:

1\. replace this version of \`fastXmlPull.js\` with the one from amb26/infusion#FLUID-6580;\
2\. remove the line of the comment from the table of contents template.

        