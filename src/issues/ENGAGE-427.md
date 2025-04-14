---json
{
  "title": "ENGAGE-427",
  "summary": "In VoiceOver, when a change to screen UI occurs, labels and layout for swiping do not update",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "James Yoon",
  "date": "2010-02-19T17:42:55.000-0500",
  "updated": "2017-12-22T09:44:34.124-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-426/",
      "key": "ENGAGE-426"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-398/",
      "key": "ENGAGE-398"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-19T17:45:01.000-0500",
      "body": "Seems that VoiceOver is caching its view of the DOM.&#x20;\n\nIt seems that we can force it to update by manually placing focus on one of the new elements.&#x20;\n\nSo we may have to force focus onto something after all DOM manipulations.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T17:52:40.000-0500",
      "body": "a11y issue\n"
    },
    {
      "author": "y z",
      "date": "2010-03-02T10:15:29.000-0500",
      "body": "Other web based applications for iPhone such as GMail have similar problems with voice over. Focus stays on the previous or dynamically updated elements on the page are not focusable. Some native apps however (such as Skype) have a very good voice over accessibility and have all pages and screens properly updated and accessible.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:34.122-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
e.g., when switching between list and grid layouts and swiping between elements, "switch to x layout" label isn't updated, and swiping cycles through items that were on the previous layout, not the current one\
e.g., in artifact view, after collecting, swiping to "uncollect" continues to read "collect"\
e.g., in artifact view, after collecting, swiping to the "Tap here to go to your collection now" dialogue that appears is impossible (as it's cycling through the previous UI)\
e.g. more in artifact description never changes onto less when expanded.

        