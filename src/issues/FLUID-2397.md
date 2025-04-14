---json
{
  "title": "FLUID-2397",
  "summary": "Line spacing setting does not work in Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Escalated",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-24T15:27:35.000-0400",
  "updated": "2013-10-04T10:28:07.629-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS",
    "UIEnhancer"
  ],
  "environment": "Opera\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2371/",
      "key": "FLUID-2371",
      "summary": "Resizing the text does not change the size of the text's container, in the dialog"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-25T14:09:11.000-0400",
      "body": "If you save, the changes will take effect, it may not be immediate.  You may have to refresh the browser before the changes are displayed.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T11:31:28.000-0400",
      "body": "The more and more complex our css options become, the more bugs we're seeing in how browsers handle large repetetive document repainting  tasks. In this case, once I focus an element it immediately repaints and reflows accordingly, but not before.\n\nThis could symptomatic of another CSS issue, but it looks like we may need to employ some sort of \"forced repaint/reflow\" for browsers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:09:53.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-05-26T12:29:22.000-0400",
      "body": "It seems Opera has an issue with CSS when it comes to operations related to the BODY tag: (<http://archive.webstandards.org/css/opera/#selectors>)\\\nThe issues outlined in the webstandards bug list, however, are different than the ones we're seeing. For our cases, any inline style changes done on the body tag are not repainted in real-time, whereas a different element works fine.\n"
    }
  ]
}
---

        