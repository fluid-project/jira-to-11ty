---json
{
  "title": "VULAB-97",
  "summary": "Further Jitter work",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-12-01T11:07:50.000-0500",
  "updated": "2014-03-04T08:27:30.531-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-12-01T11:08:11.000-0500",
      "body": "vulab9, vulab10\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-15T14:01:26.000-0500",
      "body": "Performed detailed analysis.  Will continue to refactor code to make it more efficient and bring in some postprocessing before sending the image across to the server.\n\nThere will be some necessity to refactor the server code to postprocess differently as well.  Extending this to next week.\n\nVULAB11\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-22T10:35:38.000-0500",
      "body": "I have optimized the java code as much as possible.  Unfortunately, it is impossible to get more than 3 or 4 screenshots per second.  I will have to do some post-processing work on the server side to pad frames and normalize the timestamps.\n"
    }
  ]
}
---
Frame padding doesn't seem to be enough to keep the audio and video in sync.  Will look at optimizing recording loop to get more frames / second

        