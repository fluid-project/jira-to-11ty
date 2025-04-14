---json
{
  "title": "IDI-85",
  "summary": "Sticky nav bar covers active content",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-25T12:03:38.948-0400",
  "updated": "2015-01-15T10:09:13.786-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-10-03T10:53:43.234-0400",
      "body": "Related to this bug, the drop-shadow on the sticky nav bar causes interactive elements to be unclickable using the mouse.\n\ni.e.  \\\n1\\. go to the People section.\\\n2\\. Scroll down a little so the top sticky nav covers some of the content.\\\n3\\. Try clicking a name that appears in the drop shadow in the side bar.\\\n4\\. Notice that the link is unclickable.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-01-15T10:07:30.083-0500",
      "body": "I found a CSS solution that will apparently move the anchors out from under the sticky nav bar:\\\n<http://stackoverflow.com/questions/10732690/offsetting-an-html-anchor-to-adjust-for-fixed-header>\\\nI haven't tried it yet, though; and this won't help the shadow issue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-01-15T10:09:13.786-0500",
      "body": "The shadow is not passing click events through to underlying elements. This can be overcome:\\\n<http://stackoverflow.com/questions/3680429/click-through-a-div-to-underlying-elements>\n"
    }
  ]
}
---
When the nav bar is stuck to the top of the window, it covers content that is active, e.g. internal anchors such as people on the People page (click a name, and the person jumps to the top, under the sticky nav), or if you tab backward from the bottom of the page the things you tab to i.e. things which have focus will be under the sticky nav.

        