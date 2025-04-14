---json
{
  "title": "FLUID-4295",
  "summary": "UI Options error when unchecking \"Show table of contents\" after \"save and apply\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Harris Wong",
  "date": "2011-06-17T16:25:59.860-0400",
  "updated": "2011-07-25T15:49:09.957-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Firefox Ubuntu&#x20;\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3742/",
      "key": "FLUID-3742"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4284/",
      "key": "FLUID-4284"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-06-17T16:27:06.442-0400",
      "body": "I tried running the demo on my <https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209> branch (cloned from Justin), it gives error before I can click \"SAVE AND APPLY\".  Branch here: <https://github.com/harriswong/infusion/tree/FLUID-4209>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-20T11:25:48.337-0400",
      "body": "A duplication of <https://fluidproject.atlassian.net/browse/FLUID-4284#icft=FLUID-4284>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-21T15:38:28.611-0400",
      "body": "This issue goes away with re-factored table of contents component. <https://github.com/cindyli/infusion/tree/FLUID-4295> modifies UIO demos and tests to work with the new toc and is dependent on the final toc component from <https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209> (<https://github.com/harriswong/infusion/tree/FLUID-4209>) to complete. The merge sequence should be:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4209#icft=FLUID-4209> -> <https://fluidproject.atlassian.net/browse/FLUID-4295#icft=FLUID-4295>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-23T14:48:20.335-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T15:48:54.524-0400",
      "body": "Resolved in the pull request for <https://fluidproject.atlassian.net/browse/FLUID-4137#icft=FLUID-4137>, which is merged into project repo at 6d6c5ddc4ac62499c026c9d61430459eb73d2e94&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T15:49:09.955-0400",
      "body": "Closed\n"
    }
  ]
}
---
Steps to reproduce:\
1\. Go to <http://build.fluidproject.org/infusion/demos/uiOptions/FullNoPreviewUIOptions/html/uiOptions.html>\
2\. Check "SHOW TABLE OF CONTENTS"\
3\. Click "SAVE AND APPLY"\
4\. After saved, uncheck "SHOW TABLE OF CONTENTS"\
5\. Console error ASSERTION FAILED: Bound data could not be discovered in any node above \[object HTMLDivElement]

        