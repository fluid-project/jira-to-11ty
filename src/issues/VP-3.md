---json
{
  "title": "VP-3",
  "summary": "Controls bar is slightly too long when transcripts are on in fullscreen mode (Firefox)",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2013-01-10T13:26:01.718-0500",
  "updated": "2017-12-22T10:28:45.199-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "controls"
  ],
  "environment": "FF\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VP/VP-3/Screen Shot 2013-01-10 at 1.26.36 PM.png",
      "filename": "Screen Shot 2013-01-10 at 1.26.36 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-01-14T19:08:41.304-0500",
      "body": "Cindy Li opened a pull request for this issue: <https://github.com/fluid-project/videoPlayer/pull/111>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-01-15T09:44:35.342-0500",
      "body": "Unfortunately this change doesn't properly address the issue. When Michelle and I were looking at this a bit last week we noted a few things. 1) we can't just make the video 80% width as the transcripts may not be on and we would like the video to take up the entire space in this case. 2) There is some strange behaviour based on screen aspect ratio (e.g. MacBook Pro display vs external Thunderbolt display). I tested this with my MBP screen and couldn't see the transcripts at all. I think they had wrapped below the video.&#x20;\n\nTo address at least point 1 above, you may want to change things around a bit so that turning on captions will also add another class to the parent element. This can then be used for styling changes in fullscreen so that you could specify that the video take up the full screen space when there are no transcripts and only a portion of the space when the transcripts are present.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T10:28:45.198-0500",
      "body": "The video player repository has been archived.\n"
    }
  ]
}
---
When you go into fullscreen mode in Firefox and turn transcripts on, the controls bar overlaps the transcripts by a little. However, once you start the video playing, the display readjusts itself and looks ok.&#x20;

        