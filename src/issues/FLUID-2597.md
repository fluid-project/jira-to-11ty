---json
{
  "title": "FLUID-2597",
  "summary": "image reorderer uses an fl- prefix for a selector.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-04-14T10:47:13.000-0400",
  "updated": "2009-05-25T11:57:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:29:17.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-20T15:17:06.000-0400",
      "body": "Added a new \"flc-reorderer-imageTitle\" class to go in front of all occurences of \"fl-reorderer-imageTitle\". Swithced the selector to use \".flc-reorderer-imageTitle.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T11:24:26.000-0400",
      "body": "I've reviewed the changes for this fix - all good.\n"
    }
  ]
}
---
image reorderer uses an fl- prefix for a selector. The selector prefix should be  flc-

The selector is ".fl-reorderer-imageTitle"

        