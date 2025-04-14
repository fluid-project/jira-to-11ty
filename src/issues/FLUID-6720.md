---json
{
  "title": "FLUID-6720",
  "summary": "The pager tooltips do not display on mobile ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2022-03-15T15:44:46.463-0400",
  "updated": "2022-03-16T08:08:26.634-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager",
    "Tooltip"
  ],
  "environment": "Safari iOS 15.3.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-16T08:08:26.634-0400",
      "body": "If the tooltip implementation needs much updating or to be replaced, we may want to look at [Tippy.js](https://atomiks.github.io/tippyjs/) as an alternative.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [pager demo](https://build-infusion.fluidproject.org/demos/pager/)
2. Tap on the page links
3. Notice that the pages transition but the tooltip is never presented

        