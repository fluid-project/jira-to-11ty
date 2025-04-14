---json
{
  "title": "FLUID-4134",
  "summary": "HTML5 Uploader needs to conform to onFileSuccess and onFileError API semantics",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2011-03-07T14:51:01.979-0500",
  "updated": "2011-03-15T11:17:33.857-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-03-14T17:45:34.392-0400",
      "body": "Merged into the project repo at revision <https://github.com/fluid-project/infusion/commit/db7b9cac954410ea4d689c8b6a7f1ea857da17f7>\n"
    }
  ]
}
---
HTML5 Uploader needs to conform to onFileSuccess and onFileError API semantics.  &#x20;

The SWFUpload onFileError event receives three arguments:\
1\. The File object\
2\. An error code which is SWFUpload's HTTP\_ERROR\
3\. The HTTP response code as a String. &#x20;

The SWFUpload onFileSuccess event receives three arguments:\
1\. The File object\
2\. The response from the server\
3\. the Boolean value true - response received from the server. (We will be ignoring this last argument since it will not be useful in our implementation)

        