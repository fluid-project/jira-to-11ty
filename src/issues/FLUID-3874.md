---json
{
  "title": "FLUID-3874",
  "summary": "Implement all Uploader features within the HTML 5 strategy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Colin Clark",
  "date": "2010-12-02T18:45:41.342-0500",
  "updated": "2014-03-03T13:40:02.348-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-03T08:49:21.340-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-07T13:17:26.413-0500",
      "body": "Implemented!&#x20;\n"
    }
  ]
}
---
At the moment, the HTML 5 version of the Uploader is now able to successfully upload files to a server. However, there is still some functionality missing. This includes:

* Local behaviour such as the ability to remove files and handle browse button enabling/disabling based on certain events
* Full support for file progress events
* Error handling
* Support for all options in Uploader's queueSettings

        