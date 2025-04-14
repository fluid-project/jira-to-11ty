---json
{
  "title": "FLUID-2595",
  "summary": "Uploader: Restore lost Image Gallery demo functionality",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-13T17:56:35.000-0400",
  "updated": "2010-03-30T14:01:13.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
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
      "date": "2009-05-18T16:25:39.000-0400",
      "body": "The first two of these are done. Still considering whether there is time to add the third.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:01:13.000-0400",
      "body": "The Cancel and Done buttons in the Image Gallery are indeed working, as are all the other events. This one is fixed.&#x20;\n"
    }
  ]
}
---
Somewhere in the process of refactoring for Infusion 0.8 we lost the meta data editing step that happened once the all the images had been uploaded.&#x20;

There are a few of things that need to happen to bring it back:

* Change the afterFileUploaded event to add the image data to the form as the images get uploaded.

- Change the afterUploadComplete event to fire off the form.submit().

* Add the proper listeners and UI elements to the Image Gallery to handle Done and Cancel.

        