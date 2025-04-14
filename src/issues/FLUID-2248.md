---json
{
  "title": "FLUID-2248",
  "summary": "UI Options preview iframe issue in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-02-17T12:38:04.000-0500",
  "updated": "2011-02-22T16:27:54.522-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-02-17T12:41:31.000-0500",
      "body": "Temporary fix in place using setTimeout()\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-17T18:03:24.000-0500",
      "body": "I chatted with Michelle and Jacob about their fix, and reviewed the code change. +1\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:54.520-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In IE there is an iframe initialization timing issue.\
Steps to reproduce:\
1\) Go to <http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html> in Internet Explorer\
2\) Ie will throw an error

        