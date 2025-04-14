---json
{
  "title": "FLUID-3903",
  "summary": "Reorderable jQuery Tabs escalated tests missing jQuery dependencies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Anastasia Cheetham",
  "reporter": "Jonathan Hung",
  "date": "2010-12-15T11:01:29.626-0500",
  "updated": "2011-01-21T12:54:10.572-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3904/",
      "key": "FLUID-3904",
      "summary": "Review and clean up manual-tests and escalated-tests"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3628/",
      "key": "FLUID-3628",
      "summary": "Remove jQuery tabs escalated test demo"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3903/FLUID-3903.patch",
      "filename": "FLUID-3903.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-15T11:04:18.039-0500",
      "body": "Restored missing dependencies.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-15T12:45:07.909-0500",
      "body": "We should review all the escalated tests before addressing this issue.\n"
    }
  ]
}
---
After FLUID-3731, the jQuery tabs escalated test is missing jQuery dependencies that have since been deleted.

These missing dependencies breaks the test.

        