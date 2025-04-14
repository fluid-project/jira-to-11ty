---json
{
  "title": "FLUID-4287",
  "summary": "HC and HCI themes shouldn't strip out widget icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2011-06-09T10:52:41.968-0400",
  "updated": "2011-07-08T16:13:35.338-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-09T11:07:13.138-0400",
      "body": "Bug Parade Infusion&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-06-21T14:20:53.735-0400",
      "body": "I've issued a pull request for this work:\\\n<https://github.com/fluid-project/infusion/pull/82>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T12:55:34.357-0400",
      "body": "Merged into project repo at e97bebdc197b1a77d101827ad9af5006fec50918\n"
    }
  ]
}
---
Currently, the HC and HCI themes do not use icons for the FSS widget, but rather substituted the text alternatives. James felt that this was not necessary, and that we should, indeed, use icons, just high-contrast versions of the icons.

        