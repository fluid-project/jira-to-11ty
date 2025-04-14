---json
{
  "title": "FLUID-1729",
  "summary": "Uploader 2: Progress bar moves down before it fades out",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-10-29T13:41:44.000-0400",
  "updated": "2008-12-03T11:53:50.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-10-29T14:09:32.000-0400",
      "body": "Progress for files is hidden without animation now, which fixes the case where the hide animation was still running while the Progress was already moving the progress bar in prep for the next upload\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:53:50.000-0500",
      "body": "appears to be fixed\n"
    }
  ]
}
---
when uploading, the progress bar visibly moves on to the next file to upload, THEN fades out, then fades in to display progress. This is opposed to the expected first fade out, THEN move down, then fade in to dispal progress

        