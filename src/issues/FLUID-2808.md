---json
{
  "title": "FLUID-2808",
  "summary": "Slow performance of UI Options dialog: using IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-28T12:04:36.000-0400",
  "updated": "2009-08-12T09:23:36.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-12T09:23:36.000-0400",
      "body": "Cannot reproduce\n"
    }
  ]
}
---
Slow performance of UI Options dialog

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options dialog

Notice that it takes a while to load, also using the "reset" button is slow.

        