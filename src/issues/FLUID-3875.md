---json
{
  "title": "FLUID-3875",
  "summary": "The FF 3.6 manual multipart request handling in Uploader's HTML strategy needs to be improved",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-02T18:51:42.378-0500",
  "updated": "2011-01-21T09:23:23.824-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-03T08:50:49.576-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-12T23:08:19.264-0500",
      "body": "Mike has addressed the first issue mentioned here, along with unit tests for the whole implementation. While there's certainly more work that needs to be done here, I think we can go ahead and ship for Infusion 1.3.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-12T23:09:03.477-0500",
      "body": "Changing the priority of this issue for the Infusion 1.3 release based on the fact that we have addressed the most substantial issues. The issue will stay open to be resolved fully for Infusion 1.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-21T09:23:16.644-0500",
      "body": "The core issues here have been resolved, and I've split out the remaining tasks into separate JIRAs, <https://fluidproject.atlassian.net/browse/FLUID-4040#icft=FLUID-4040> and <https://fluidproject.atlassian.net/browse/FLUID-4041#icft=FLUID-4041>.\n"
    }
  ]
}
---
In the new HTML 5 strategy for the Uploader, we have to hand-roll a standard multipart request in Firefox 3.6, due to the absence of the FormData object. Our current implementation works, but needs improvement, including:

* we hard code the multipart boundary, instead of randomly generating as is typical
* we need to verify that we correctly support the full UTF-8 character set, such as file names with special characters in them
* File.getAsBinary() is blocking, and may need to be replaced with Firefox's FileReader API
* concatenating strings and binary data together is sketchy, and we should verify that it's actually viable for any kind of file

        