---json
{
  "title": "FLOE-407",
  "summary": "Remove the need for the setTimeout used to determine when the language buttons are ready",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-08-10T13:33:05.671-0400",
  "updated": "2015-11-12T14:35:38.112-0500",
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
      "date": "2015-08-10T13:33:10.689-0400",
      "body": "It could be related to how the browser is applying styling and etc to position the buttons.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-08-31T15:55:55.587-0400",
      "body": "Issued a pull request to update the code comment: <https://github.com/fluid-project/first-discovery/pull/98>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-01T10:11:19.320-0400",
      "body": "merged pull request ( <https://github.com/fluid-project/first-discovery/pull/98> ) into the project repo at c077e4ad6d3a48ec3694e27d70dfb4d859982115\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:35:38.109-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1470> and all activities should be carried on there.\n"
    }
  ]
}
---
The implementation of the language panel uses setTimeout() to break the event firing of langButtonsReady out of the synchronous flow (<https://github.com/fluid-project/first-discovery/blob/master/src/js/panels.js#L833-L835>) to ensure the button div scrolling has completed when the event is fired. Otherwise, buttons.offset() used in listeners for this event returns position values before scrolling occurs.

Should investigate if setTimeout() can be removed.

        