---json
{
  "title": "FLUID-5675",
  "summary": "Text To Speech enactor should be supplied with a mock implementation to facilitate integration testing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2015-06-03T11:01:45.919-0400",
  "updated": "2017-01-16T14:30:11.908-0500",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-370/",
      "key": "FLOE-370"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-19T14:36:57.871-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/612>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-03T10:27:55.280-0400",
      "body": "Submitted a pull request to update the build site with a link to the TTS tests.\\\n<https://github.com/fluid-project/build.fluidproject.org/pull/16>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-29T08:42:42.198-0400",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/612> ) was merged into the project repo at 70ea372fd461554567ae453c5523a4b30d8cc438\n"
    }
  ]
}
---
We need to implement a mock version of the fluid.textToSpeech component for integration testing purposes. This will enable us to create a linear log of all the items that were queued for speech, for which we could then issue a jqUnit.assertDeepEq assertion for verification. Issues such as <https://fluidproject.atlassian.net/browse/FLOE-363#icft=FLOE-363> ( <https://github.com/fluid-project/first-discovery/pull/77> ) could then straightforwardly be extended with integration tests which target this API.

See channel discussion: <https://botbot.me/freenode/fluid-work/2015-06-02/?msg=40811279&page=2>

This will also allow us to run some TTS tests on browsers where the API is currently not supported, e.g. Firefox.&#x20;

        