---json
{
  "title": "FLUID-2768",
  "summary": "Pager Bar Items Inconsistently work if not surrounded by flc-pager-top",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Steven Githens",
  "date": "2009-05-25T16:27:42.000-0400",
  "updated": "2014-07-11T14:35:06.754-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Fluid Infusion Trunk Revision 7199\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:35:06.752-0400",
      "body": "flc-pager-top and flc-pager-bottom are containers used to instantiate the fluid.pager.pagerBar subcomponent responsible for handling the pagination functionality. This is required. Although the exact class names could be configured through the components options.\n"
    }
  ]
}
---
Description: I've found that when using flc-pager-summary, flc-pager-page-size, flc-pager-previous, flc-pager-links, and flc-pager-next, the first 2 work fine when not surrounded by a flc-pager-top (or bottom), but that previous, links, and next do not.  Which was a bit mysterious and took a while to figure out what was wrong.

Expected Behavior:  I'm not sure what the expected behavior should be.  I think it would make a lot of sense to be able to have 1 copy of all of these operate somewhere inside the paged area but not inside a designated pager-top|bottom.

Or maybe summary and page-size are supposed to be available everywhere and this is actually working as designed.

        