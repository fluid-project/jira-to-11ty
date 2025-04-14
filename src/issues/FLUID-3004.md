---json
{
  "title": "FLUID-3004",
  "summary": "Allow implementers to specify a list of file types to exclude from the Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-07-06T11:05:31.000-0400",
  "updated": "2011-01-05T11:52:33.128-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-07-06T11:30:00.000-0400",
      "body": "The current SWFUpload engine 2.2.0 only has a setting for which filetypes to include, not which to exclude.&#x20;\n\nfile\\_types: the file\\_types setting accepts a semi-colon separated list of file extensions that are allowed to be selected by the user. Use '**.**' to allow all file types.\n\nWe could can exclude files as they are added to the file queue but the end-user would still be able to \"select\" the excluded files in the file browser.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T11:52:33.116-0500",
      "body": "We have given the integrator the option of what file types the SWF uploader will allow.   This feature has also been implemented into the new HTML5 uploader, however, most browsers still ignore the HTML5 input's accept attribute.\n"
    }
  ]
}
---
At the moment, the Uploader allows users to specify a list of file types that should be allowed by the Uploader. Cindy Qi Li, an ATutor developer, suggested that we provide a feature where implementers can specifically exclude certain file types. Here's what she said:

One feature that Fluid may consider to add in is the file types to be excluded from the uploader. File uploader already supports the file types that can be uploaded by setting the uploadManager option "fileTypes". When this option is set, only the given file types are listed in the popup OS file dialog.

In ATutor, administrators can define a list of file types that are NOT allowed to be uploaded into ATutor. For example, the files with extension "exe" or "php" or "bat" are forbidden as they have potential to ruin the system. It would be nice that Fluid can support something like "fileTypesToExclude", which could either stop the file types being listed in file dialog, or, when they are selected in dialog and go into queue, show an error like "illegal file type" besides those files.

We'll have to investigate whether SWFUpload and other multi-file upload back ends will support a feature like this.

        