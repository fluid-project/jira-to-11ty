---json
{
  "title": "FLUID-5178",
  "summary": "Schema version of prefs framework dependent on StarterGrades.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-10T15:05:22.221-0400",
  "updated": "2013-10-11T12:58:40.028-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
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
      "date": "2013-10-10T15:34:38.493-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/416> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-11T12:58:36.961-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/416> ) merged into the project repo at 11714d2fd7a756bcfd8e8b21eb95757e9540738f\n"
    }
  ]
}
---
The AuxiliaryBuilder uses a grade "fluid.prefs.defaultPanel", but this grade is defined in StarterGrades.js

The grade definition should be moved, probably into AuxBuilder.js

        