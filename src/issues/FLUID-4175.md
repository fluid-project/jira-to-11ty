---json
{
  "title": "FLUID-4175",
  "summary": "Button unit tests have bad path to images",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-04-04T17:24:27.110-0400",
  "updated": "2011-07-06T16:21:59.048-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4176/",
      "key": "FLUID-4176"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-06T16:21:51.714-0400",
      "body": "This issue was fixed as part of a commit against <https://fluidproject.atlassian.net/browse/FLUID-4182#icft=FLUID-4182>\n"
    }
  ]
}
---
The FSS unit test page for containers references images in the images folder, but the path to the folder is wrong: it is missing the ../  As a result, the images are invisible, making the test buttons invisible:

<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/3.fss.layout.advanced.html>

The buttons are immediately above the image grid.

        