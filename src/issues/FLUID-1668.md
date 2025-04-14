---json
{
  "title": "FLUID-1668",
  "summary": "Avatar going behind tabs on Sortable jQuery tab example",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Joseph Vernuccio",
  "date": "2008-10-09T10:31:25.000-0400",
  "updated": "2010-12-09T10:35:30.041-0500",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T10:35:30.035-0500",
      "body": "Was still an issue in this demo (avatar hides behind the selected tab). This demo has since been removed from the repository. <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
When dragging reorderable tab, the tab goes behind the highlighted tab.&#x20;

Steps to reproduce:&#x20;

1\. Open url: <http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\. With the mouse, select one of the reordeable tabs.&#x20;

3\. Drag selected tab to replace with highlighted tab.&#x20;

Results:&#x20;

Reordable tab will go behind the highlighted tab.&#x20;

        