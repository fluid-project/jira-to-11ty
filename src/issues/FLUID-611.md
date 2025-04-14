---json
{
  "title": "FLUID-611",
  "summary": "Bad JavaScript in MultiFileUpload.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Former user",
  "date": "2008-05-16T20:35:41.000-0400",
  "updated": "2008-07-11T16:06:44.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
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
      "date": "2008-05-29T16:31:20.000-0400",
      "body": "options added all around\n"
    }
  ]
}
---
The createUploadCompleteHandler function contains the following line:

fileQueueComplete(uploaderContainer, options, progressBar, fragmentSelectors);

However, "options" is undefined in this context. Looks like a bad copy-and-paste, not caught because the no-server-side demo doesn't exercise that function.

I've worked around it by just adding "options" to the parameter list:

var createUploadCompleteHandler = function (uploaderContainer, progressBar,  fragmentSelectors, status, options) {\
...\
upload\_complete\_handler: createUploadCompleteHandler (uploaderContainer, progressBar, fragmentSelectors, status, options),

        