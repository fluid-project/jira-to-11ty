---json
{
  "title": "FLUID-3437",
  "summary": "Infusion Builder should only build the version requested by the user--either minified or source--not both",
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
  "date": "2009-12-16T15:17:45.000-0500",
  "updated": "2010-01-06T13:49:59.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3456/",
      "key": "FLUID-3456"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3437/FLUID-3437-1.patch.txt",
      "filename": "FLUID-3437-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3437/FLUID-3437-2.patch.txt",
      "filename": "FLUID-3437-2.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3437/FLUID-3437-script-1.patch.txt",
      "filename": "FLUID-3437-script-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-16T15:19:02.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-18T14:21:25.000-0500",
      "body": "This patch alters the database cache table - adding another column to indicate if the minified or source build is cached. There is a unique constraint applied to the combination of the id and minified columns.\n\nThe code changes include the adjustment of the mysql statements to accommodate the new minified column and removal of code to perform two builds. Only a single build is performed, and the results of that build are copied to the cached directory with the appropriate file name. I re-arranged the code a little to make some of the variables available earlier in the execution. I also added one variable which is an integer representation of the boolean $min (required for the mysql statements).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-18T15:18:28.000-0500",
      "body": "Added a small fix to the initial patch. All mysql statements need to use the $intMin value and not the $min value. I missed one statement (the counter increment query).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-12-18T15:51:33.000-0500",
      "body": "Committed Laurel's second patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-05T12:14:40.000-0500",
      "body": "I did a second review of Laurel's second patch and it looks good.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-05T12:14:41.000-0500",
      "body": "I did a second review of Laurel's second patch and it looks good.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T13:58:43.000-0500",
      "body": "Need to fix the sql script that creates the database cache table. It should always create the table.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T14:01:42.000-0500",
      "body": "This change to the sql script drops the table and re-creates it every time. This is not really needed except when the table schema changes - however the table schema did change for this issue and then the code stopped working because the cache table schema was wrong.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-01-05T14:08:20.000-0500",
      "body": "I've reviewed Laurel's latest patch, which modifies the create-and-clear-builder-cache.sql script. It looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-05T14:18:19.000-0500",
      "body": "Committed Laurel's patch (FLUID-3437-script-1.patch.txt) which has solved the issue of an old cache table being around and preventing the deployment of the builder.\n"
    }
  ]
}
---
The Infusion Builder currently builds two different versions of Infusion for each request, building both the minified and source zip files. We can reduce the time for a build by only building a single zip file for the requested download.

This will require changes to the cache table in the database to record if the minified or source zip files are cached. However it will also reduce the amount of code in postProcessor.php

        