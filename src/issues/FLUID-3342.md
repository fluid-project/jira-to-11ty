---json
{
  "title": "FLUID-3342",
  "summary": "spinner image is not present in customBuild download",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-10-30T16:06:56.000-0400",
  "updated": "2009-11-04T11:37:05.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-30T16:23:51.000-0400",
      "body": "Added the image to the Infusion builder\n"
    }
  ]
}
---
When we originally built the Infusion Builder, we included the spinner image only on the website version of the site. Now that the builder has been "removed" from the site interface, it is necessary to include the spinner image in the Builder code.

        