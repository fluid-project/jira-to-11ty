---json
{
  "title": "FLUID-3886",
  "summary": "The HTML5 version of the Uploader can't exclude certain files based on file type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2010-12-09T10:58:27.383-0500",
  "updated": "2011-05-17T13:51:05.678-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3886/FLUID-3886.patch",
      "filename": "FLUID-3886.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-01-20T12:11:47.740-0500",
      "body": "At the moment, I suspect the attribute is ignored because we're specifying it in an invalid format. The \"accept\" attribute should contain a list of MIME types, not file extensions.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-25T13:08:34.364-0500",
      "body": "Convert all file types from the queue settings into valid HTML5 mime types.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-25T13:13:02.939-0500",
      "body": "Renamed patch to the appropriate JIRA\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-25T13:17:28.343-0500",
      "body": "Awaiting review.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-02-07T13:28:05.444-0500",
      "body": "I have refactored the patch originally attached to the JIRA.   The file type to mime type conversion only needs to happen once.   A pull request has been made on gitHub.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-02-08T14:20:14.665-0500",
      "body": "After much discussion, we have decided that parsing formatted strings is not the proper approach to solving this problem.  MIME types are preferred over standard file types and is more desirable to be the default format for file inclusion.  An array of MIME types would work better.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:50:10.257-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-17T13:51:05.676-0400",
      "body": "The solution has been reviewed and pushed into the repository. &#x20;\n\nThe effects of this fix are not evident yet.  However, when modern HTML5 browsers properly interpret and support MIME types, this solution will automatically take effect. &#x20;\n"
    }
  ]
}
---
The Uploader uses the incorrect format when filtering file types using the "accepts" attribute of the HTML5 multiple file input element. HTML5 specifies that the accepts attribute should be formatted as a comma-delimited list of MIME types. Currently, the HTML5UploadStrategy specifies this list using SWFUpload's non-standard format.

This is a bug in Infusion and should be fixed in the next release.

        