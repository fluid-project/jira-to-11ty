---json
{
  "title": "FLOE-216",
  "summary": "Add TTS-supporting markup to the HTML content",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2014-08-14T10:29:56.763-0400",
  "updated": "2015-04-23T13:33:52.322-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-21T16:02:33.472-0400",
      "body": "This is not looking promising. As with other attributes, pandoc is stripping off lots of the things that need to be present for TTS support (see <https://github.com/jgm/pandoc/issues/1555>) but even if the markup is forcefully added to the EPUB resource, Mac OS X's TTS doesn't pay any attention to it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-27T11:21:39.025-0400",
      "body": "It seems none of the possible voicing technologies currently pay any attention to the lexicons or SSML, so we'll stick with the \\<abbr> elements, which at least some screen readers honour.\n"
    }
  ]
}
---
The HTML content of the EPUB samples will need mark-up embedded in it to support effecting TTS, for example instructions for voicing units of measurement live velocity. We will also look into audio stylesheets as part of this.&#x20;

        