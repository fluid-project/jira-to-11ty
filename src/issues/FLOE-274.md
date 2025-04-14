---json
{
  "title": "FLOE-274",
  "summary": "Show message for unsupported browsers",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-02-13T11:12:01.440-0500",
  "updated": "2015-11-03T11:25:12.916-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-13T11:28:20.910-0500",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/19>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-02-13T11:53:53.606-0500",
      "body": "Merged into the master branch @ f17ba8ac6bcc53f8e103e94f3a24348de748b1fb\n"
    }
  ]
}
---
For browsers that don't support the SpeechSynthesis Inteferace from the Web Speech API, a message should be displayed in place of the First Discovery Tool. This will inform users to use a supported browser and prevent a broken interface from being displayed to a user.&#x20;

        