---json
{
  "title": "FLUID-2617",
  "summary": "Uploader: the default configuration for the Uploader will not accept files without an extension",
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
  "date": "2009-04-28T14:41:09.000-0400",
  "updated": "2011-02-28T16:45:17.514-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-05-20T09:32:31.000-0400",
      "body": "This was checked in a while back, but I forgot to resolve the bug.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.512-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
1\. create a text file and save it without a ".txt" or any other extension.  \
2\. Browse to the file with the Uploader\
Observe: the file without the extension is greyed out.&#x20;

This is because the default setting for fileTypes is "**.**". Should be "\*"

        