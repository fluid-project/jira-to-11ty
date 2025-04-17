---json
{
  "title": "SJRK-417",
  "summary": "Remove ESLint \"global\" declarations in each file",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-10-27T02:55:33.503-0400",
  "updated": "2021-01-21T09:38:03.639-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-27T07:29:27.374-0400",
      "body": "This would seem to be a good time to update to the latest version of fluid-grunt-lint-all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-12-09T07:27:39.843-0500",
      "body": "Being worked on with changes to <https://fluidproject.atlassian.net/browse/SJRK-405#icft=SJRK-405>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-01-21T09:38:03.635-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/105> ) into project repo at 3845afd05c22ba96283c4558581b90e69ea47319\n"
    }
  ]
}
---
**What needs doing:**

Remove all references to ESLint global variables which are already defined in configuration files. Namely "fluid" and "sjrk". "jqUnit" and a small handful of other values are defined as well, but not commonly enough to add to the \
overall config file for the project.

 

**Why it needs doing:**

As highlighted by [this review feedback](https://github.com/fluid-project/sjrk-story-telling/pull/77#pullrequestreview-502386906) by Justin Obara on the SJRK-289 pull request, the ESLint global variable declarations which are present in many files are repetitive and can instead be defined just once in the .eslintrc.json file.

Previous attempts at this ran afoul of the linter, but the configuration and tools now seem to agree (at time of filing)

        