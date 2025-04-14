---json
{
  "title": "FLUID-1051",
  "summary": "Uploader beginUpload() click event handler should not be dependent on cursor style",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-29T10:09:43.000-0400",
  "updated": "2009-06-03T13:45:28.000-0400",
  "versions": [
    "0.4",
    "0.5"
  ],
  "fixVersions": [
    "0.6"
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
      "date": "2008-08-26T14:55:09.000-0400",
      "body": "downgraded from blocker to critical, as uploader is under going major changes\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-14T16:08:42.000-0500",
      "body": "No longer using the cursor state, buttons and links are actually enabled and disabled in the DOM by various Uploader events\n"
    }
  ]
}
---
In the Uploader bindEvents() function, the event handers that bind the beginUpload() function to the upload/resume buttons' click events, there is a check to see if the button's "cursor" css property is set to "pointer", and if not, the beginUpload() is not carried out.

Uploading should not be dependent on a cursor style.

        