---json
{
  "title": "FLUID-3759",
  "summary": "Decide on either an IoC or non-IoC version of the inline edit button fix",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-09-27T17:50:28.408-0400",
  "updated": "2010-10-08T14:09:33.195-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T13:51:18.987-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:00:41.851-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T10:52:21.472-0400",
      "body": "The trunk version of inline edit has been reverted to remove the IoC implementation.   The injection of IoC introduced many more coding issues and the accessibility fix for <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652> proved to be simpler without IoC.   See <https://fluidproject.atlassian.net/browse/FLUID-2652#icft=FLUID-2652> for more information about this fix. &#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-08T14:09:33.193-0400",
      "body": "There is no longer any IoC functionality in inlineEdit. It may be reintroduced at another time.\n"
    }
  ]
}
---
Currently in trunk there is a semi-baked implementation of the fix for FLUID-2652. In it's current state it is implemented with sketched approach of IoC. A fully thoughtout implementation needs to be in place for Infusion 1.3

        