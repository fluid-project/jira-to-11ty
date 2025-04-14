---json
{
  "title": "FLUID-2222",
  "summary": "Selecting 'No Preference' for text size in UI Options causes text sizes set with FSS to be changed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-02-11T12:12:22.000-0500",
  "updated": "2011-02-22T16:27:51.331-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2153/",
      "key": "FLUID-2153"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-02-23T15:29:45.000-0500",
      "body": "When no preference is selected by the user, then the integrator's default should be used.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-05T13:22:58.000-0500",
      "body": "This is no longer relevant due to an implementation change - text size is now set with a text box and slider and there is no way to state 'no preference'.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.330-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The issue has to do with clearing FSS styles when options are selected using UI Options.&#x20;

        