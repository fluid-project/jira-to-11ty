---json
{
  "title": "FLUID-3899",
  "summary": "\"primeCacheFromResources\" fails with exception if IoC system is included",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2010-12-14T01:08:39.320-0500",
  "updated": "2010-12-15T18:32:41.885-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3899/FLUID-3899.patch",
      "filename": "FLUID-3899.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3899/FLUID-3899-b.patch",
      "filename": "FLUID-3899-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3899/FLUID-3899-c.patch",
      "filename": "FLUID-3899-c.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T01:19:05.443-0500",
      "body": "Fix with test cases for this issue. \"fluid.withNewComponent\" now no longer appears as if it expects it can be called without a \"that\" instance, and all clients will now conform.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-14T01:21:13.666-0500",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-15T15:15:54.276-0500",
      "body": "Attached version \"b\" of patch that has been corrected for linting in trunk\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T18:16:12.509-0500",
      "body": "Here's a version of the patch that applies cleanly against trunk without reverting any linted parts.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T18:31:15.190-0500",
      "body": "I've reviewed Antranig's fix for this issue, run all the appropriate unit tests (including those for Uploader and Reorderer), tested everything that depends on IoC, and everything works. +1 for this last-minute inclusion in 1.3.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T18:32:41.878-0500",
      "body": "This issue has been reviewed, tested, and committed. We're good to go.\n"
    }
  ]
}
---
When calling expand options without providing the "that" argument (fluid.fetchResources.primeCacheFromResources), fluid.withNewComponent will not fix the thatStack and thus will fail when trying to operate on it.

        