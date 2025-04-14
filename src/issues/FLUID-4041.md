---json
{
  "title": "FLUID-4041",
  "summary": "The HTML5 Upload strategy for Firefox 3.6 should use the FileReader API rather than getAsBinary()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2011-01-21T09:21:28.564-0500",
  "updated": "2015-06-18T11:51:10.990-0400",
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
      "date": "2015-06-09T10:28:18.104-0400",
      "body": "@@Colin Clark, Firefox 3.6 is fairly old at this point. Firefox is currently at version 38. How should we go about addressing this? Can this ticket just be closed, or should some old code also be deprecated/removed?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2015-06-18T11:51:10.990-0400",
      "body": "I don't see any evidence that we use getAsBinary() anymore in the Uploader, though there are a few stray references in tests to a mock implementation of it. It looks like we migrated to using XHR2's FormData API years ago.\n\nWe should remove the references to getAsBinary() in our unit tests (presumably they will still pass happily) and then close this issue.\n"
    }
  ]
}
---
At the moment, we use File.getAsBinary() when passing the contents of a file to an XHR request in Firefox 3.6. getAsBinary() loads the entire file into memory, but is a blocking method, which means the entire browser chrome will spin until it has finished executing. The FileReader API is asynchronous, meaning the browser would remain more responsive while passing file to the XHR. We should investigate its use.

        