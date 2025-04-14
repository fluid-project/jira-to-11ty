---json
{
  "title": "FLUID-3436",
  "summary": "Concurrent identical builds will cause a race condition that results in an error for everyone but the person whose build finishes first.",
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
  "date": "2009-12-16T15:09:20.000-0500",
  "updated": "2010-01-05T15:49:10.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3436/FLUID-3436-1.patch.txt",
      "filename": "FLUID-3436-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3436/FLUID-3436-2.patch.txt",
      "filename": "FLUID-3436-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3436/FLUID-3436-3.patch.txt",
      "filename": "FLUID-3436-3.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-12-18T16:06:05.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-04T11:03:07.000-0500",
      "body": "The attached patch FLUID-3436-1.patch.txt should solve the problem. It follows up a failed cache insert with a check that the requested build had already been cached. If the cached item exists then the processing continues as expected. Otherwise a failure is thrown as before.\n\nI've tested this briefly by bypassing the code which initially checks for caching, but this needs to be applied and tested properly with several concurrent users in the same way we did before.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-04T14:57:59.000-0500",
      "body": "I moved the code into a separate function which returns true or false if the file is cached or not cached. The function is longer than the mysql query in the previous patch. The function fails if the mysql query results in an error and then ensures that the successful query returns a row of data. I also changed the names of the variables in the existing code to be a little more descriptive (ie. $is\\_cached rather than $cached\\_row).&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-04T16:41:42.000-0500",
      "body": "I walked through the code with Laurel, it looks good. I only recommended changing the name of the $cached\\_rows variable.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T12:20:04.000-0500",
      "body": "Made a small change to the variable names in the function as per Justin's suggestion, and fixed a spelling error in the error message.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-05T15:47:22.000-0500",
      "body": "I've reviewed Laurel's third patch to this issue and it looks good. Committed at r8952.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-05T15:49:10.000-0500",
      "body": "This one is cool for the 1.1.2.1 release of Builder.\n"
    }
  ]
}
---
If more than one identical, uncached build is requested at roughly the same time, an error occurs for all users but the first. This is due to the fact that both processes try to update the cache, inserting a new cache record with the same primary key. Attempts to do this subsequent to the first one will violate the unique constraint for this table in MySQL.

We can fix this by recognizing when a cache insert error occurs and actually checking the cache for the appropriate files, rather than just throwing an error.

Bug Parade Builder 1.1.2

        