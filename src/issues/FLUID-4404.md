---json
{
  "title": "FLUID-4404",
  "summary": "UI Options doesn't over-ride specific fonts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "heidi valles",
  "date": "2011-08-23T11:22:16.846-0400",
  "updated": "2011-09-06T15:03:08.690-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-24T15:14:55.673-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-08-24T16:27:06.488-0400",
      "body": "Dev meeting decision to add a uio version of fss-text. Both stylesheets (fss-text and fss-uio-text) will have to be included by users of UIO\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-06T15:03:08.677-0400",
      "body": "Pushed michelle's pull request ( <https://github.com/fluid-project/infusion/pull/152> ) to the project repo at 5e75beb8a97c71adc85c2ee9c340d67c8e321f78\n"
    }
  ]
}
---
In the demo, change the font-style with UIO. Everything but the areas where a specific font-family is set changes. UIO needs to add the font classes in fss-text.css to its list of !important-ed styles.

        