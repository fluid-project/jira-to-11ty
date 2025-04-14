---json
{
  "title": "FLOE-3",
  "summary": "Integrate Video Player into the OER Commons authoring tool. ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2012-03-27T15:36:40.983-0400",
  "updated": "2013-04-25T11:02:12.220-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VP-211/",
      "key": "VP-211",
      "summary": "VideoPlayer should query Amara for captions for current video"
    },
    {
      "type": "Dependence",
      "url": "/browse/VP-297/",
      "key": "VP-297",
      "summary": "Update VideoPlayer with the latest version of Infusion"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-04-25T10:51:11.250-0400",
      "body": "This work is being carried out under the OER Commons Assembla ticket #895:\\\n<https://www.assembla.com/spaces/iskme/tickets/895>\n\nWork was started, but then suspended to wait for VP-211 (modify VP to automatically query Amara for any subtitles), which, as of this comment, is still in progress.\n\nWe should also likely wait for VP-297 (upgrade VP to latest Infusion), since OER Commons is being upgraded.\n"
    }
  ]
}
---
When an HTML5 video format is uploaded using the OER Commons authoring tool, we should inject an Infusion Video Player.&#x20;

To do this task, we'll need to upgrade Infusion using this branch: <https://github.com/amb26/infusion/tree/FLUID-4607>\
We should use the demo version of the video player: <https://github.com/fluid-project/videoPlayer/tree/demo>

        