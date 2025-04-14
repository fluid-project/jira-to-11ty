---json
{
  "title": "FLUID-3585",
  "summary": "After saving edited text using FCKEditor, there apperats to be a giant cursor on the web page in IE.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2010-04-01T12:40:57.000-0400",
  "updated": "2011-01-10T14:07:59.373-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 8, WIN 7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3585/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-01T12:42:16.000-0400",
      "body": "Steps to reproduce:\n\n* Go to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\n* Click on FCKEditor example and add b at the beginning of the text.\n* Click Save.\n* Notice there is a giant cursor on the web page closer to the right bottom side.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T14:07:59.345-0500",
      "body": "Using Infusion 1.3, I am unable to reproduce this bug in IE8 on Win 7.\n"
    }
  ]
}
---

        