---json
{
  "title": "FLUID-2541",
  "summary": "pointer appears as arrow when it should be something else",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Laurel Williams",
  "date": "2009-04-06T15:07:36.000-0400",
  "updated": "2009-06-03T12:23:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows XP IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-13T10:38:12.000-0400",
      "body": "I am having trouble reproducing this issue. Which sample page did it occur on?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-03T12:23:27.000-0400",
      "body": "Looks like it might have been because of multiple IE\n"
    }
  ]
}
---
<http://wiki.fluidproject.org/display/fluid/Inline+Edit+QA+Test+Plan+-+Simple+Text>

Test one describes that hovering over the edittable field causes the pointer to be a hand. It is an arrow pointer.

Test three describes that selecting the edittable field should cause the pointer to be an I bar. Initially, upon click, it is an I bar, but the slightest move of the mouse switches it back to an arrow.

        