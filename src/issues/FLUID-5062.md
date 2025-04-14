---json
{
  "title": "FLUID-5062",
  "summary": "UIO uportal integration test throws javascript error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2013-06-20T10:55:30.250-0400",
  "updated": "2013-06-27T14:30:03.482-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-4923/",
      "key": "FLUID-4923"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5062/uportal demo.jpeg",
      "filename": "uportal demo.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-27T14:30:03.480-0400",
      "body": "The integration demo was replaced by unit tests with the work for <https://fluidproject.atlassian.net/browse/FLUID-4923#icft=FLUID-4923>\n"
    }
  ]
}
---
1\. Open uportal integration test: <http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>\
2\. At page load, this javascript error is thrown: that.getSettings is not a function

        