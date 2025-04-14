---json
{
  "title": "FLUID-3449",
  "summary": "Checkboxes remain checked on reload of page: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-12-18T09:03:07.000-0500",
  "updated": "2014-03-03T11:20:12.285-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 7 & 8 (Win Vista)\\\nIE 9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.284-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Checkboxes remain checked on reload of page

Steps to reproduce:

1\) Check some of the checkboxes

2\) Refresh the page

Notice that the checkboxes remain checked, but that all other indicators of selection (i.e. highlighting and the download button) are not present.

        