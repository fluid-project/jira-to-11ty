---json
{
  "title": "FLUID-652",
  "summary": "Focus style remains on module even after tabbing away: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-27T13:19:05.000-0400",
  "updated": "2014-07-07T14:01:19.209-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, Mac OS 10.6,  Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-15T14:15:36.397-0400",
      "body": "\\[Non A-Grade]\n"
    }
  ]
}
---
Use the uPortal example to recreate the issue:

1\. Put focus on the 'bookmarks' portlet\
2\. press tab.

The focus should now be on the title of the portlet, however, the stying of the portlet still appears as if it has focus. Using the arrow keys will not move focus to another portlet.&#x20;

        