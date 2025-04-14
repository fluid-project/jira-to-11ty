---json
{
  "title": "VP-4",
  "summary": "Safari: Track elements with data sources not working",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2012-11-09T16:38:25.058-0500",
  "updated": "2017-12-22T10:28:46.401-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "captions"
  ],
  "environment": "Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T10:28:46.399-0500",
      "body": "The video player repository has been archived.\n"
    }
  ]
}
---
In Safari, if a caption is specified using a data source e.g.

\<track source="data:vtt/text, WEBVTT..."... />

then the track will not display. Our basic demo uses this format for the English captions, and English captions do not display.

        