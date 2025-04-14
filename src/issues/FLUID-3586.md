---json
{
  "title": "FLUID-3586",
  "summary": "FCKEditor shifts the content to a new line when the user starts typing after prelimenary edit cancelation.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2010-04-01T12:59:24.000-0400",
  "updated": "2011-01-10T14:10:12.573-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "WIN 7, IE 8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3586/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-10T14:10:12.571-0500",
      "body": "Can not reproduce using Infusion 1.3 in Windows 7 IE8.\n"
    }
  ]
}
---
Steps to reproduce:

* go to <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>
* Tab to an FCKEditor editable field.&#x20;
* Click enter
* type smth and then tab to Cancel.
* Tab again to the same field and click Enter.
* Notice as soon as you start typing the original content of the editable field will be moved to the new line.

        