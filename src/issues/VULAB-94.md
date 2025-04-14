---json
{
  "title": "VULAB-94",
  "summary": "RASCAL Applet Not Returning SESSION ID.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "David Makalsky",
  "reporter": "Blake E",
  "date": "2008-11-24T10:39:31.000-0500",
  "updated": "2014-03-04T08:27:40.873-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-11-27T17:23:54.000-0500",
      "body": "any luck?\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-27T17:34:52.000-0500",
      "body": "I tried it again on the gluebox with a simple alert, and firebug tells me that the function doesn't exist. I try the same at: <http://rascal.xymbo.com/> and the \"Click to Obtain ID\" doens't work, and the same error is thrown (function not defined)\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-01T10:50:42.000-0500",
      "body": "Returns sessionid just fine for me.  Confirmed by multiple users on multiple machines.  In the future, please include the log output in your java console when logging a bug against RASCAL\n"
    }
  ]
}
---
I've integrated the sessionid get function into a greater function that redirected the user to the post-survey page with a get variable with the session id, but it caused a javascript error and failed to continue to the post-survey page.

Thus for the all-hands meeting the command was changed to NOT include the sessionid and merely just redirect to the post-survey page.

The javascript for the redirect is in place and can be viewed on the vulab.yorku.ca site. Note that in the window.location command that pushed the user to the post-survey I added a \
+.document.rascal.sessionid() but this caused an error.

        