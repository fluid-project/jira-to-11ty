---json
{
  "title": "FLUID-5600",
  "summary": "Allow for a set of grades to be passed into the prefsLoader through the auxiliary schema",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-25T10:54:45.180-0500",
  "updated": "2015-06-26T10:09:23.783-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
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
      "date": "2015-03-16T14:43:25.132-0400",
      "body": "Based on the conversation in the channel today with Bosmon, the option in the auxiliary schema should be called \"loaderGrades\".\\\n<https://botbot.me/freenode/fluid-work/2015-03-16/?tz=America/Toronto>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-17T10:20:02.310-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/588>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-17T10:22:01.807-0400",
      "body": "submitted a pull request to update the docs:\\\n<https://github.com/fluid-project/infusion-docs/pull/44>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:16.457-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently there is no direct way to modify the prefsEditor type via the auxiliary schema. However, during instantiation an integrator could pass in a prefsEditorType option. This should be modified slightly to provide a means for accepting a grade or array of grades in the schema which are distributed to the prefsEditorLoader. This would take the place of the prefsEditorType option, which could be removed after this has been implemented.

        