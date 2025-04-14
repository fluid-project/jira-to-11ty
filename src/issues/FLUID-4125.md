---json
{
  "title": "FLUID-4125",
  "summary": "HTML5 doesn't support MIME type extensions",
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
  "date": "2011-02-28T13:19:14.131-0500",
  "updated": "2015-06-09T11:01:29.286-0400",
  "versions": [
    "1.4"
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
      "date": "2015-06-09T11:01:20.289-0400",
      "body": "Both of the above referenced issues have been marked as resolved.\n"
    }
  ]
}
---
HTML5 currently doesn't support MIME type extensions as acceptable values in the accept attribute.   MIME type extensions are fully ignored at the moment.  Only MIME types are valid.   There is no word on whether or not MIME type extensions will be supported as they are conflicting across operating systems. &#x20;

See the following for more details about the issue:

<https://bugzilla.mozilla.org/show_bug.cgi?id=565274>

<https://bugzilla.mozilla.org/show_bug.cgi?id=377624>

        