---json
{
  "title": "FLOE-364",
  "summary": "Next and previous language buttons should not be tab focusable. ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Michelle D'Souza",
  "date": "2015-05-29T13:31:25.302-0400",
  "updated": "2015-11-03T12:44:43.425-0500",
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
      "author": "Michelle D'Souza",
      "date": "2015-05-29T13:34:09.182-0400",
      "body": "Simon is fixing this issue as part of <https://fluidproject.atlassian.net/browse/FLOE-333#icft=FLOE-333>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-05-29T13:46:09.510-0400",
      "body": "The fix has been added to the <https://fluidproject.atlassian.net/browse/FLOE-333#icft=FLOE-333> branch:\n\n<https://github.com/simonbates/first-discovery/commit/86696465f4d458506b2601887612b8aaf03e5cb9>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-05T13:08:33.219-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/83> ) into the project repo at 556374661c8eac45bc6ad935b89f040a4f344b53\n"
    }
  ]
}
---
It is confusing for non-sighted users to use the language page of the first discovery tool with the keyboard. Currently, when I tab to the next or previous button (the buttons with the triangles on them) the TTS says "Select to view more languages" however, when I select it nothing is read out. It was agreed that it would provide a better user experience to remove those buttons from the tab order.&#x20;

        