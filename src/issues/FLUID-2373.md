---json
{
  "title": "FLUID-2373",
  "summary": "switch from using jAria to aria support built into ui.core",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-17T13:38:22.000-0400",
  "updated": "2011-01-28T12:29:05.722-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2379/",
      "key": "FLUID-2379"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T13:38:29.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-18T13:27:32.000-0400",
      "body": "See the patch for <https://fluidproject.atlassian.net/browse/FLUID-2379#icft=FLUID-2379>, that also updates all the Uploader parts to use ui.core.js\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-20T11:49:48.000-0400",
      "body": "Fixed with the patch to <https://fluidproject.atlassian.net/browse/FLUID-2379#icft=FLUID-2379>. Written by Colin, reviewed by Eli\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-24T14:24:24.000-0400",
      "body": "This change was made in the Uploader code, but the rest of the code base needs to be checked, and the jARIA.js file itself needs to be removed.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T16:01:11.000-0400",
      "body": "jARIA is still included in the build.properties file, the ui.FLUID-readme and README.txt\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T09:15:34.000-0400",
      "body": "Clean Up Parade 1.0&#x20;\n"
    }
  ]
}
---
switch from using jAria to aria support built into ui.core

        