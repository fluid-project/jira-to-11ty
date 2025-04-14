---json
{
  "title": "FLUID-573",
  "summary": "Build script not creating .war file on Windows",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2008-05-12T11:17:22.000-0400",
  "updated": "2011-02-22T16:27:47.053-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-07T16:34:34.000-0400",
      "body": "Fixed version of build.xml which works on Windows and Mac (tested so far) committed at revision 7061\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.051-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The Ant script does not build a .war file on Windows. There are two problems:

1\. The mvn apply task requires ".bat" in order for the task to run... which will break the script for non-Windows users.

2\. Fixing #1 reveals another problem: when the mvn process runs, the necessary directories are not created. (like the Target directory)

Thought: perhaps consider have Maven 2 script call Ant instead of Ant calling Maven 2?

        