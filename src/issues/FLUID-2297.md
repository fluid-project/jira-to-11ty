---json
{
  "title": "FLUID-2297",
  "summary": "Progress functionality to handle changing progress bars is no longer used but still lingering in the codebase",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-02-26T18:36:51.000-0500",
  "updated": "2011-02-22T16:27:52.045-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-26T19:11:29.000-0500",
      "body": "Removed the crufty old code. All tests pass. Uploader still works. Angels sing.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:52.044-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The Progress component still contains a little bit of code to handle an edge case that we thought that we needed for the Uploader where you could change the container for the object on the fly. This supported a case were you would use one progress indicator for different rows. We changed the architecture of the Uploader to use a progressor for each row (better user feedback) and now that code is just clutter.&#x20;

        