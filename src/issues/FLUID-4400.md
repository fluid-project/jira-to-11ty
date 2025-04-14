---json
{
  "title": "FLUID-4400",
  "summary": "jscssp parser url validation is not working",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2011-08-12T14:22:52.048-0400",
  "updated": "2014-03-02T14:31:46.864-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-02T14:31:46.843-0500",
      "body": "jscssp is no longer being used.\n"
    }
  ]
}
---
The jscssp parser has a couple of regular expressions which are used for validating urls. This validation is causing valid urls to be rejected when they contain a slash.&#x20;

        