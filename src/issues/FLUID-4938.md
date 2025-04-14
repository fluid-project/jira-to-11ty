---json
{
  "title": "FLUID-4938",
  "summary": "Implement the \"C1\" UIO style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Jonathan Hung",
  "date": "2013-03-19T14:25:19.920-0400",
  "updated": "2013-04-29T09:18:16.821-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4949/",
      "key": "FLUID-4949",
      "summary": "Add icon fonts to the UIO demo"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4953/",
      "key": "FLUID-4953",
      "summary": "Background image not disappearing when UIO is in a contrast theme"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4956/",
      "key": "FLUID-4956",
      "summary": "Vertical scroll bar appears in UIO Fat Panel in Webkit browsers"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4957/",
      "key": "FLUID-4957",
      "summary": "Reset and Show-Hide tabs missing rounded corners and icons"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4961/",
      "key": "FLUID-4961",
      "summary": " Font-icons change to text, when you change the font. After closing and opening the \"display preferences\""
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4962/",
      "key": "FLUID-4962",
      "summary": "Missing focus styling on new 'colour & contrast' panel"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4959/",
      "key": "FLUID-4959",
      "summary": "Changing line spacing with UIO causes text to mis-align in the UIO panel"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4960/",
      "key": "FLUID-4960",
      "summary": "Fixed height of UIO reset and show/hide tabs causes some fonts to wrap and clip"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4951/",
      "key": "FLUID-4951",
      "summary": "Add indicator arrow to contrast theme radio choices"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4952/",
      "key": "FLUID-4952",
      "summary": "Theme the new UIO designs"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4965/",
      "key": "FLUID-4965",
      "summary": "Enlarging text size plus emphasizing links disturb the styling of text sliders"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-08T14:09:09.099-0400",
      "body": "The pull request for this issue should address the related issues.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-08T14:34:46.705-0400",
      "body": "We need to make sure we test for the multiple horizontal scroll bar issue that we had hacked around for the demo. We were seeing two scroll bars in the fat panel which made scrolling inside the panel look broken in Chrome.&#x20;\n"
    }
  ]
}
---
Implement the style depicted in the C1 wireframes for UIO.

Wireframes:\
<http://wiki.fluidproject.org/display/fluid/User+Interface+Options+design+high+fidelity%2C+C.1>

        