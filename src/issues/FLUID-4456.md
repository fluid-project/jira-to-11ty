---json
{
  "title": "FLUID-4456",
  "summary": "Sometimes, when reordering elements in the vertical reorderer, a click-up event is fired (or equivalent) even when the user hasn't released the click",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Yoon",
  "date": "2011-09-16T15:34:30.695-0400",
  "updated": "2015-06-26T10:12:42.768-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE8 in Windows XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-10T10:15:07.150-0400",
      "body": "Could not reproduce in IE 11 (which is currently the latest version of IE supported)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:20.813-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Cannot replicate inconsistently. To replicate:

1\. For IE8 in Windows XP, click and hold any element.\
2\. Move cursor around as though preparing to place it between elements.

On occasion, it will place the element without the user releasing click

        