---json
{
  "title": "FLUID-662",
  "summary": "Upload feedback lacking for JAWS users",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2008-05-28T15:48:58.000-0400",
  "updated": "2014-07-07T14:09:26.354-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-665/",
      "key": "FLUID-665"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-704/",
      "key": "FLUID-704"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T15:10:33.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T14:09:26.305-0400",
      "body": "The progress for the uploading files is reported as it occurs.\n"
    }
  ]
}
---
If using JAWS, there is no feedback given to the user once the Upload button has been activated. One way to overcome this would be to focus the progress bar thickbox when it appears so that the screen reader can read it.

Could conflict with FLUID-657 - if focus is placed on Pause Upload button once upload has begin, it may not be enough feedback for an AT user.

        