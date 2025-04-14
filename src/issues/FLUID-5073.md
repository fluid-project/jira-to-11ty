---json
{
  "title": "FLUID-5073",
  "summary": "the hide and show functions for the manual progress demos are throwing errors",
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
  "date": "2013-06-27T14:10:42.176-0400",
  "updated": "2015-06-15T10:36:40.759-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-4046/",
      "key": "FLUID-4046"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:36:40.757-0400",
      "body": "The progress manual test has been removed.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the progress manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/simple-progress.html>

2\) click on the "Progress Hide" or the "Progress Show" buttons

Notice that an error is thrown.

"TypeError: absoluteProgress.hide is not a function"\
"TypeError: absoluteProgress.show is not a function"

        