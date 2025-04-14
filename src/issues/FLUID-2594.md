---json
{
  "title": "FLUID-2594",
  "summary": "Uploader: Upgrade to the 2.2.0 Release of SWFUpload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-13T17:52:13.000-0400",
  "updated": "2011-02-28T16:45:15.471-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
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
      "date": "2009-05-18T12:44:48.000-0400",
      "body": "In the time since I posted this bug they have released 2.2.0.1 which (from the ChangeLog.txt file):&#x20;\n\n* Removed requeueUpload due to bugs/poor testing\\\n  \\= Fixed namespace conflict that broke stopUpload\n\nI've done a smoke test using the server and stand-alone versions.&#x20;\n\nServer versions where tested using:\n\n* Mac 10.5/FF3/Flash 10\n* Mac 10.5/Safari 3/Flash 10\n* Windows XPsp3/IE7/Flash9\n* WindowsXPsp3/FF3/Flash9\n\nStandalone version was tested with:\n\n* Mac 10.5/FF3/Flash 10\n\nMy smoke test consisted of uploading a set of files, stopping and starting the upload, letting the upload complete, and then doing another upload with some repeated files to test upload failure. (upload failure, of course, fails to to fail on the standalone version.)\n\nBased on these tests and a cursory look at the change logs and the code for SWFUpload I'm going to go ahead and commit the latest version of SWF Upload\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-18T12:47:26.000-0400",
      "body": "Latest version of the SWFUpload swf and js files have been committed to the code base. Looking good so far.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:15.464-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
SWFUpload has released a final version of SWFUpload 2.2.0. (<http://swfupload.org/>)

There is at least one bug fix that we would like to take advantage of: Consistent handling of relative URLs

Here's the full write up: \
SWFUpload v2.2.0 has been released and is available for download.

Changes in this version:

* Flash Player 10 Compatibility
* New settings and improved handling for responses without content
* Consistent handling of relative URLs\*
* Speed Plugin and Demo
* Improved Plugin architecture\
  and more...

- Dropped Flash Player 8 support
- Dropped the v1.0.2 plugin
- Dropped the Graceful Degradation plugin

The demos have been updated to take advantage of the new functionality. The latest down is available at the GoogleCode Project Site.

\*This change may break your site if you are using URLs relative to the SWF file (which was the most common use and was the method used in the Demos). Relative URLs are now relative to the document. We still recommend using absolute URLs.

        