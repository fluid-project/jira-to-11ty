---json
{
  "title": "FLUID-1533",
  "summary": "Tabbing to a portlet automatically pushes focus to the first tabable item inside of it.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-10T10:56:51.000-0400",
  "updated": "2008-09-18T09:45:17.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T22:30:45.000-0400",
      "body": "Downgraded to minor since occurs just on this platform combination. However, this issue should be reevaluated in the light of the fix to <https://fluidproject.atlassian.net/browse/FLUID-160#icft=FLUID-160>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:45:17.000-0400",
      "body": "Can no longer seem to reproduce this issue.&#x20;\n\nMay have been fixed with fix for <https://fluidproject.atlassian.net/browse/FLUID-160#icft=FLUID-160>\n"
    }
  ]
}
---
Tabbing to a portlet automatically pushes focus to the first tabable item inside of it.&#x20;

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Tap the tab key. Notice that when a portlet gets focus, it automatically changes focus to the first tabable item it contains.

In the case of the locked portlet, it pushes the focus to the first tabable item in the lightbox portlet.

        