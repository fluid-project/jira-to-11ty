---json
{
  "title": "FLUID-668",
  "summary": "Opacity styling doesn't work in IE.",
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
  "date": "2008-05-29T10:54:55.000-0400",
  "updated": "2014-07-07T14:49:33.867-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "IE 6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T09:55:53.000-0400",
      "body": "Does seem to be working in IE 8\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T14:49:33.861-0400",
      "body": "This works in IE 11. IE 6 and 7 are no longer supported\n"
    }
  ]
}
---
Due to a bug in IE, opacity only works if the width or height of an element has been set. This is a problem, for example, in the uPortal reordering portlets sample. You will notice that when trying to move a portlet with the keyboard the opacity setting does not work. Other problems with opacity has caused us to set it in code, for example, in the Uploader. I think we need to come up with an opacity strategy that will work in all cases and will simplify the creation of individual components with respect to styling.&#x20;

        