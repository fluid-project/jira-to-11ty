---json
{
  "title": "FLUID-6530",
  "summary": "Orator Selection Reader typeface changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Gregor Moss",
  "date": "2020-07-16T18:21:33.142-0400",
  "updated": "2021-06-23T15:48:22.335-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Windows 10 Pro, v1909;\\\nChrome 84, Firefox 78, Edge 44\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6530/2020-07-16 Orator typeface bug 1.png",
      "filename": "2020-07-16 Orator typeface bug 1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6530/2020-07-16 Orator typeface bug 2.png",
      "filename": "2020-07-16 Orator typeface bug 2.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-20T07:45:59.614-0400",
      "body": "I think the issue is actually related to what is described in the \"Expected\" section of the description above. That is, the font family is inherited. The selection reader play button is appended to the selection's offset parent or the selection's start container's parent node. This means that it is inheriting the font family from those containers. (See: <https://github.com/fluid-project/infusion/blob/8d59c6ce77ed83a0c8c8c70f1195636cfcc02797/src/components/orator/js/Orator.js#L1146-L1158> )\n\nWe should investigate appending to the body element instead. We'll need to determine if this affects the positioning of the play button. Also this change may address <https://fluidproject.atlassian.net/browse/FLUID-6523#icft=FLUID-6523>. Another option would be to use a tooltip library like [tippy](https://atomiks.github.io/tippyjs/) and others. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-20T09:50:50.828-0400",
      "body": "Appending the play button to the body results in the positioning of the button being incorrect. Likely due to <https://fluidproject.atlassian.net/browse/FLUID-6394#icft=FLUID-6394>\n"
    }
  ]
}
---
The Orator Selection Reader's typeface changes in certain conditions

**To reproduce:**

1. Go to <https://build.fluidproject.org/infusion/demos/orator/>
2. In the left-side panel, select any part of the title "An Infusion component demo"

**Expected:**

The Selection Reader's typeface is the same as other parts of the page. The CSS is defined as "font-family: inherit", so in my environments that resolves to sans-serif (e.g. Arial)

**Actual:**

The Selection Reader's typeface changes to match the title of the pane, which is RobotoSlab (defined at [OverviewPanel.css:59](https://github.com/fluid-project/infusion/blob/8d59c6ce77ed83a0c8c8c70f1195636cfcc02797/src/components/overviewPanel/css/OverviewPanel.css#L59)).

        