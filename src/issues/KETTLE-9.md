---json
{
  "title": "KETTLE-9",
  "summary": "There's currently no way in Kettle to specify app-specific includes on top of a default set of Kettle-wide includes",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2009-09-26T22:25:30.000-0400",
  "updated": "2014-03-03T14:22:46.535-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-7/",
      "key": "KETTLE-7"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/KETTLE/KETTLE-9/ENGAGE-100patch.txt",
      "filename": "ENGAGE-100patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-01T15:16:27.000-0500",
      "body": "I'm putting up a patch that will handle an array of includes files instead of a single string. This is perhaps not enough - we would likely want to support either a single string or an array of file names.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-29T21:18:22.000-0400",
      "body": "I think this work is done in the <https://fluidproject.atlassian.net/browse/ENGAGE-208#icft=ENGAGE-208> branch.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T14:01:21.690-0400",
      "body": "\"new new Kettle\" provides standard ways to modularise dependencies (in the form of the \"modules\" directive in a \"config\") for app-specific includes.\n"
    }
  ]
}
---
At the moment, a Kettle app can specify only a single includes file (specifying an array instead of a string for the "includes" property throws an exception). This means that each application has to copy-paste the standard set of Kettle JS includes into its include file.

Instead, perhaps we should have a global or standard includes file available to users, and allow applications to specify more than one includes file so that they can more easily reuse the defaults and supply their own includes on top.

        