---json
{
  "title": "FLUID-3199",
  "summary": "input validation removes \"framework\" module from list of posted modules in submission request",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-22T14:54:17.000-0400",
  "updated": "2009-09-30T09:51:56.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T14:56:26.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-22T15:32:07.000-0400",
      "body": "fixed test (from >0 to >=0) so that \"framework\" was included in modules submitted for build.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T14:30:20.000-0400",
      "body": "the fix for this caused a problem with the validation and cache key creation code, where an invalid module name can be accepted. I am re-opening so I can investigate this issue.&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T16:05:14.000-0400",
      "body": "Added a check for type of returned value as integer from the array\\_search function.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-30T09:51:56.000-0400",
      "body": "Jacob reviewed\n"
    }
  ]
}
---
When doing some manual tests on the caching tasks for the infusion builder, I realized that if I checked "framework" (the 0th element on the module list), it didn't show up in the caching key. Upon further investigation, I realized that the word "framework" also did not show up in the list of includes submitted to the ant script.

I've already looked into this and found the issue, which was a > test instead of a >= test in the validation code (PostClass.php). This is easily corrected and tested. It would also make sense to add a test to the PostClassTest.php to include all of the current modules, just to ensure they all show up, however, if this test is not updated, it is unlikely to catch any further errors of this sort.

        