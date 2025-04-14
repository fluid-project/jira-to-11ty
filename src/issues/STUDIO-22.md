---json
{
  "title": "STUDIO-22",
  "summary": "Show Display Prefs button offers no affordances to screen readers",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-09T14:50:12.067-0500",
  "updated": "2014-03-04T11:53:58.370-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4426/",
      "key": "FLUID-4426",
      "summary": "Sliding Panel needs ARIA and/or to move focus to beginning of panel when opened to alert screen readers of new content"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-12T15:41:09.170-0500",
      "body": "This issue is actually filed against Infusion, as FLUID-4426.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-15T15:04:45.786-0500",
      "body": "Speaking to Joseph about this, we came to the conclusion that the fat panel is similar to a single accordion panel.&#x20;\n\nIt uses tablist, tab and tabpanel ARIA attributes to try to give some feedback to the user. It's better, but still not great, and some browsers don't fare quite as well as others. Still needs some work.\n\nJoseph also feels that the toggle button should be marked up as an actual ARIA toggle button, i.e. it should have an 'aria-pressed' state of true or false.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-04T11:53:58.355-0500",
      "body": "The fluid studios site has been taken down. There are no current plans to replace it.\n"
    }
  ]
}
---
The "show display prefs" button is activated, there's no indication to a screen reader that anything has happened. We should probably add an appropriate ARIA role.

        