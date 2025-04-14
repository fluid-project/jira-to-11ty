---json
{
  "title": "FLUID-2428",
  "summary": "Can't pass updated POST parameters to the Uploader; they can only be specified upon initialization.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-03-31T13:22:14.000-0400",
  "updated": "2017-01-16T09:44:38.767-0500",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-04-03T11:48:42.000-0400",
      "body": "Further useful comments from Aaron Brown and myself on the mailing list:\n\n<http://fluidproject.org/pipermail/fluid-work/2009-March/004159.html>\\\n<http://fluidproject.org/pipermail/fluid-work/2009-April/004189.html>\n"
    }
  ]
}
---
At the moment, a user can only specify POST parameters to the Uploader upon instantiation. There's no API for dynamically modifying these parameters during the process of interacting with the Uploader.

An in-depth discussion of the issue can be found in Aaron Brown's excellent post to the list:

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2009-March/004130.html>

We need a public method on Uploader to allow users to update these parameters whenever they want.

        