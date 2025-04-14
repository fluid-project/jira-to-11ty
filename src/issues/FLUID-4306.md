---json
{
  "title": "FLUID-4306",
  "summary": "UI Options is improperly laid out in IE6 and IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "heidi valles",
  "reporter": "Jonathan Hung",
  "date": "2011-06-24T13:35:05.310-0400",
  "updated": "2014-06-25T15:55:54.011-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE6 IE7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4306/UIO-fatpanel-IE6.PNG",
      "filename": "UIO-fatpanel-IE6.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4306/UIO-no-preview-IE6.PNG",
      "filename": "UIO-no-preview-IE6.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4306/UIO-w-preview-IE6.PNG",
      "filename": "UIO-w-preview-IE6.PNG"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-06-27T09:01:41.457-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-28T15:29:00.612-0400",
      "body": "Pull req sent <https://github.com/fluid-project/infusion/pull/92>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:54.001-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
UI options does not appear to lay out properly in IE6 and IE7. Input selectors and the right icon for sliders appear to float right.

        