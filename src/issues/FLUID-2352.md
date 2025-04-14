---json
{
  "title": "FLUID-2352",
  "summary": "Setting some selections in UI Options should change others.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "assignee": "Gary Thompson",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-16T12:00:10.000-0400",
  "updated": "2024-07-22T11:48:51.976-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T10:29:41.803-0400",
      "body": "This sounds more like the presets work we've been looking at in the Exploration Tool.\\\n<http://build.fluidproject.org/prefsEditors/demos/explorationTool/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:40:59.011-0400",
      "body": "The maximum font size is not only 2 ems, which is generally usable. Perhaps this is no longer an issue, or something that the design team will need to weigh in on. @@joanna vass, @@Dana, and @@Jonathan Hung any thoughts?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T11:48:51.976-0400",
      "body": "For now at least, preferences only affect themselves. It would likely caused confusion if other preferences also changed without prior indication that they should. For the case mentioned in the description with font size, the browsers built in zoom will trigger responsive layouts. This isn’t programatically available via javascript in the browser (although UIO+ does take advantage of it through the browser extension apis). There has been some thought to removing this preference in favour of the user just using the browsers built in functionality.\n"
    }
  ]
}
---
Currently increasing the minimum font size to the maximum makes the user interface of UI Options unusable. It would be good when a user has increased their font size past a particular threshold if we switched simplified layout on. There are probably other settings that could have a similar effect.&#x20;

        