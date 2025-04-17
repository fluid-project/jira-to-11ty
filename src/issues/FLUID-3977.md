---json
{
  "title": "FLUID-3977",
  "summary": "Rich text, IE error after opening Tiny MCE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-20T16:27:51.542-0500",
  "updated": "2014-03-03T13:39:24.650-0500",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win XP, IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-18T15:19:47.467-0500",
      "body": "It looks like this is due to a missing dependency on FluidView\\.js. However, the page still seems to function properly, which leads me to wonder if the real bug is using the DMB in this case.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:46:04.872-0400",
      "body": "I'm unable to reproduce this in v1.4.\n"
    }
  ]
}
---
When clicking edit on the first paragraph of the Rich Text inline edit demo, an IE error happens when Tiny MCE is opened:

"Object doesn't support this property or method"\
InlineEditIntegrations.js, Line 188, Char 13

        