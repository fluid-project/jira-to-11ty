---json
{
  "title": "FLUID-6678",
  "summary": "Create our own fork of the OpenDyslexic repo for the purpose of sourcing via npm",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Justin Obara",
  "date": "2021-07-27T08:38:46.443-0400",
  "updated": "2024-07-24T14:14:11.516-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T14:14:11.516-0400",
      "body": "OpenDyslexic can be pulled in via font source. <https://fontsource.org/fonts/opendyslexic/install>&#x20;\n"
    }
  ]
}
---
Currently we pull in OpenDyslexic via <https://github.com/ssbc/open-dyslexic> However, it adds a bit of confusion regarding the license, as they layer their own license on top. It would probably be clearer to just fork the [OpenDyslexic](https://github.com/antijingoist/opendyslexic) repo and create an NPM package scoped to our own org.

Note: this is needed because OpenDyslexic is not distributed via NPM directly.

        