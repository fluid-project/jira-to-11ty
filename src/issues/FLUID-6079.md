---json
{
  "title": "FLUID-6079",
  "summary": "Uploader error, when chosen files are too large, is not read by screenreader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2016-11-18T10:25:08.044-0500",
  "updated": "2017-02-17T17:38:45.187-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6079/mismatched.PNG",
      "filename": "mismatched.PNG"
    }
  ],
  "comments": [
    {
      "author": "Aashay Singhal",
      "date": "2017-02-17T17:38:45.187-0500",
      "body": "IMO, Aria-invalid tag can be used to fix this. If the error is generated then it should have this aria-invalid set to true. Any other suggestions or should i start working this way?\n"
    }
  ]
}
---
When a file that is too large is selected for upload, there is visual feedback that an error has occurred, but no screenreader feedback.

The logging area for the error messages should be wrapped in appropriate aria attributes so that a screen reader knows to treat the message as an alert or similar. In current state, a screenreader user would be unaware a problem had occured with 1 or more selected files.

        