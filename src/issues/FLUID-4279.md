---json
{
  "title": "FLUID-4279",
  "summary": "Image uploader demo should group errors together, and display when upload action is complete.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2011-06-02T15:40:18.249-0400",
  "updated": "2011-06-23T15:17:59.820-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3878/",
      "key": "FLUID-3878",
      "summary": "Improve Uploader's error messages, such as when selected files exceed fileQueueLimit"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-06-14T09:46:54.191-0400",
      "body": "This should be addressed when <https://fluidproject.atlassian.net/browse/FLUID-3878#icft=FLUID-3878> has been resolved\n"
    }
  ]
}
---
Currently the Image Uploader demo displays an error message for each offending file as they are uploaded. The demo should instead group the error messages together, and display them grouped at the end of the Upload action.

Current example:\
"Error 403: file1.txt was not uploaded."\
"Error 403: file3.txt was not uploaded."\
"Error 403: file4.txt was not uploaded."

Proposed solution:\
"Error 403: file1.txt, file3.txt, and file4.txt were not uploaded."

        