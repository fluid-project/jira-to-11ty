---json
{
  "title": "FLUID-3904",
  "summary": "Review and clean up manual-tests and escalated-tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-15T12:05:05.939-0500",
  "updated": "2015-06-26T10:17:14.615-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3903/",
      "key": "FLUID-3903"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2333/",
      "key": "FLUID-2333",
      "summary": "Re-evaluate the need and use of manual tests"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4049/",
      "key": "FLUID-4049"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-17T09:57:17.414-0500",
      "body": "I think we should try to move these to manual tests where ever possible.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-25T14:23:59.326-0500",
      "body": "There are several unit tests that need to be written so that we can get rid of most of these manual tests. I've put the details in a readme in the manual tests folder and will update that as the work happens.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:29.150-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
We have a number of tests in the manual-tests and escalated-tests folders that might be getting crusty. We should look them over, decide whether or not they are worthwhile, and either\
1\) clean them up and make sure they work properly, or\
2\) remove them.

        