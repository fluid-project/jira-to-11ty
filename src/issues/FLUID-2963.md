---json
{
  "title": "FLUID-2963",
  "summary": "Return http error 400 if build is unsuccessful",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-19T11:20:17.000-0400",
  "updated": "2009-08-24T11:18:46.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2963/postProcessor.php",
      "filename": "postProcessor.php"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-19T16:30:38.000-0400",
      "body": "Added more error checking, factored out the processing of the input variables to it's own function, responded to Colin's comments by returning a 400 error for any problems in the request, corrected some problems with returning the built file (filesize was not working, and filename was incorrect).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-13T11:54:58.000-0400",
      "body": "400 error is now returned for any errors\n"
    }
  ]
}
---

        