---json
{
  "title": "FLUID-2717",
  "summary": "Code deployed on build site should not be minified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-13T10:15:32.000-0400",
  "updated": "2009-06-03T13:38:37.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2782/",
      "key": "FLUID-2782"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-06-01T14:08:44.000-0400",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-2782#icft=FLUID-2782>\n"
    }
  ]
}
---
It seems to me that the code we deploy on the build site should not be minified. This would make it easier for us to debug any problems, and for anyone visiting the site to explore the code e.g. step through it, etc.

        