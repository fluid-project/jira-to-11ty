---json
{
  "title": "FLOE-312",
  "summary": "Add TTS support to keyboard assistance screens",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-28T17:16:36.390-0400",
  "updated": "2015-11-03T12:10:14.462-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-337/",
      "key": "FLOE-337"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-338/",
      "key": "FLOE-338"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-339/",
      "key": "FLOE-339"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-340/",
      "key": "FLOE-340"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5666/",
      "key": "FLUID-5666"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2015-05-11T15:25:48.679-0400",
      "body": "In addition, say \"shift is on\" when the shift key is latched, but only when Sticky Keys is on (consistent with showing the shift indicator).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-12T13:12:15.385-0400",
      "body": "Murilo noticed that the text field prompt says \"...now.\" This was decided when we thought we were going to put keyboard focus onto the text entry field automatically. Now that we've decided we're not going to do that, saying \"now\" is bad. Let's change it to \"... here\" as in \"Type the @ symbol here\" or \"Type the % symbol here\"\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-05-14T16:56:49.487-0400",
      "body": "I have filed a separate issue for the completion of the reading of updated descriptions: <http://issues.fluidproject.org/browse/FLOE-337>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-05-14T17:39:47.391-0400",
      "body": "<https://github.com/fluid-project/first-discovery/pull/47>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-15T15:32:30.576-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/47> )  into the project repo at 06616a4944329f90674196cf541afb0d41934196\n"
    }
  ]
}
---
Read the placeholder text when user focuses on the text field\
Read letters back as they are typed	(3 days)\
When user passes test and message changes, ensure it's read by TTS	 	(1 day) \
When user doesn't pass test and message changes, ensure it's read by TTS	(1 day)\
When accommodation turned on (or off), replace instructions in text field (0.3 days)

        