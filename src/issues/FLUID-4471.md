---json
{
  "title": "FLUID-4471",
  "summary": "Rich text inline edit throws javascript error when loaded twice in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2011-09-27T12:33:50.349-0400",
  "updated": "2014-06-25T15:55:52.695-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win XP IE 6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:52.687-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
Opening the ck editor causes a javascript error when the demo is loaded a second time in IE 6. Note that the error does not happen when looking at the demo through the demo portal.

Steps to Recreate:

1\. Load the rich text demo in IE 6 using this link: <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/html/inlineEdit.html>\
2\. Open the ck editor by clicking on the edit link\
3\. Refresh the page\
4\. Open the ck editor again by clicking the edit link

The following error will appear:\
Line 7, Char 1: Object doesn't support this property or method

        