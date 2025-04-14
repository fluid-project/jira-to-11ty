---json
{
  "title": "FLUID-6263",
  "summary": "The example \"examples/framework/preferences/fullPagePanelStyle/\" is broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2018-03-20T12:15:47.321-0400",
  "updated": "2018-03-21T12:31:49.278-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-03-21T12:31:45.922-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/885) has been merged into the project repo master branch at 0a685b7c48f22a4c5dd8dccb99a633979ba6ed96\n"
    }
  ]
}
---
To produce the problem:

1. Go to <https://build.fluidproject.org/infusion/examples/framework/preferences/fullPagePanelStyle/>
2. Turn on "table of content"
3. Refresh the page
4. The page is not loaded and the console shows the javascript error:

```java
ASSERTION FAILED:  Instantiation of view component with type fluid.tableOfContents.levels failed, since selector " .flc-toc-tocContainer " did not match any markup in the document
```

To get around this issue in the browser:

1. Open the browser preferences page;
2. Rremove the cookie from "build.fluidproject.org" and named "fluid-ui-settings".

 

        