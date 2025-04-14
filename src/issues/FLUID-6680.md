---json
{
  "title": "FLUID-6680",
  "summary": "Restart the demo link breaks reloads to a broken page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2021-08-25T11:31:04.396-0400",
  "updated": "2024-07-24T14:15:24.206-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T14:15:24.206-0400",
      "body": "Could not reproduce with FF 128 on macOS 14.5\n"
    }
  ]
}
---
This may just be an issue with the way that the local server handles URLs without the trailing "/".

Steps to reproduce:

1. Serve the demos locally by using "npm start"
2. Open the [progress demo](http://localhost:5000/demos/progress/)
3. Click the "Submit" button
4. After progress is completed, click the "Restart the Demo" link
5. Notice that the page reloads broken and that the URL is missing the ending "/"

        