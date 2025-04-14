---json
{
  "title": "FLUID-950",
  "summary": "Inline edit not working in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-21T13:31:13.000-0400",
  "updated": "2008-07-25T10:48:38.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-959/",
      "key": "FLUID-959"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-973/",
      "key": "FLUID-973"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-950/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-21T14:19:48.000-0400",
      "body": "'screeenshot-1' shows the inline edit fields as displayed in IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T10:48:38.000-0400",
      "body": "Appears to be working.\n"
    }
  ]
}
---
When using IE, two errors occur on loading the page (see below for error messages)

This seems to cause the inline edit fields no longer work. \
The text which should have appeared inside the field appears above an open text field.

Error Messages:

Line: 2\
Char: 4780\
Error: Expected identifier, string or number\
Code: 0 \
URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements/html>

Line: 331\
Char: 21\
Error: Object doesn't support this property or method\
Code: 0\
URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements/html>

        