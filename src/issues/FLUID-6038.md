---json
{
  "title": "FLUID-6038",
  "summary": "Uploaded files still have an enabled remove button, but it has no bound click handler",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-11-07T09:23:47.013-0500",
  "updated": "2016-11-08T09:47:43.453-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
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
      "date": "2016-11-07T09:27:13.244-0500",
      "body": "One solution to this issue would be to just ensure that the remove button is disabled.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-08T09:47:38.314-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/781> has been merged into the master branch at 5207fa04aa34e10135d557f9a99b47410d1429a7\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Add some files to the queue\
3\. Upload some of the files and stop the file upload\
4\. Using the browser's developer tools inspect the 'x' and the '✓' mark at the end of the respective file rows.&#x20;

Notice that they are both marked up as buttons with a `aria-label: "Remove"`. The files that were uploaded have `title="File Uploaded"` as well. However, the uploaded files cannot be removed as the click handler has been taken off. Unfortunately the button itself isn't disabled, so an AT will see this as a remove button and the user will think it doesn't work.

        