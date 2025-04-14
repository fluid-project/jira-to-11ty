---json
{
  "title": "FLUID-2533",
  "summary": "Verify dependencies for framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T11:22:43.000-0400",
  "updated": "2011-02-22T16:27:52.104-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-06T11:32:49.000-0400",
      "body": "Please also check the dependencies for the jquery lib folder.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-08T17:13:17.000-0400",
      "body": "I tested the dependencies for the framework using the following process:\n\n1\\. Make a custom build of \"framework\"\\\n2\\. Take the UI Options page and remove only framework-related files from the \\<head>, including\n\n* jQuery core\n* jQuery UI core\n* the framework files themselves\n\nUI Options continued to work without throwing any errors. +1\n\nthe jQuery dependencies look fine, with the exception of the <https://fluidproject.atlassian.net/browse/FLUID-2575#icft=FLUID-2575> issue with jquery.bgiframe.js\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.102-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        