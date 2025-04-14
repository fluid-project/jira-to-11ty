---json
{
  "title": "FLUID-2189",
  "summary": "Server version of Uploader still points to jQuery 1.2.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-02-03T14:52:45.000-0500",
  "updated": "2009-02-03T15:31:06.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-03T15:15:32.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-2189#icft=FLUID-2189>: Changed the AddImages.html to point to jQuery 1.3.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-03T15:31:06.000-0500",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
Server version of Uploader still points to jQuery 1.2.6, it needs to point to 1.3.1

<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

        