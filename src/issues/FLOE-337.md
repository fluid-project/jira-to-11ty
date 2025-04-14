---json
{
  "title": "FLOE-337",
  "summary": "Read descriptions on the keyboard panel when the screen is updated",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2015-05-14T16:54:37.056-0400",
  "updated": "2015-11-03T12:09:13.484-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-331/",
      "key": "FLOE-331",
      "summary": "Save the state information into the central model"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-312/",
      "key": "FLOE-312",
      "summary": "Add TTS support to keyboard assistance screens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-28T11:21:57.884-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/68>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-01T10:36:48.694-0400",
      "body": "Merged @ 635d32ff4381e34a167d3efcf6f4a86b29407361\n"
    }
  ]
}
---
Issue <http://issues.fluidproject.org/browse/FLOE-312> contained the following:

When user passes test and message changes, ensure it's read by TTS (1 day)\
When user doesn't pass test and message changes, ensure it's read by TTS (1 day)&#x20;

This work was partly done, but not completed. The part that was done was to modify the code that finds descriptions on a panel to find multiple descriptions and speak them together.

What is missing is the triggering of the updated descriptions when they are modified.

The work was not done in FLOE-312 as it was put on hold due to reworking being carried out in <http://issues.fluidproject.org/browse/FLOE-331>

        