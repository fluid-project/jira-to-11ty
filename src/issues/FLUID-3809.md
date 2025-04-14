---json
{
  "title": "FLUID-3809",
  "summary": "Edit mode instructional text appearing in the wrong place in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Jonathan Hung",
  "date": "2010-10-18T15:25:51.645-0400",
  "updated": "2010-11-03T12:36:03.408-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win7, IE8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3809/inline-edit-IE8-caption-position.png",
      "filename": "inline-edit-IE8-caption-position.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-03T12:36:03.406-0400",
      "body": "Confirmed fixed.\n"
    }
  ]
}
---
In IE8, when in edit mode in simple editor, the tooltip appears in the wrong location (detached from the element being edited).

        