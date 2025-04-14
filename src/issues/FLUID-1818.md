---json
{
  "title": "FLUID-1818",
  "summary": "Browse button submitting contents to Flash, crashing browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2008-11-18T12:44:57.000-0500",
  "updated": "2008-11-18T14:33:12.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF, Opera, Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-11-18T12:45:59.000-0500",
      "body": "Stopped default action on browse button if there is any\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-18T14:33:12.000-0500",
      "body": "Verified fix using:\n\nFF2, Opera 9.5, Safari 3.1 (Mac OS 10.5)\n"
    }
  ]
}
---
using a \<button> tag as the browse button would submit its contents to Flash, resulting in either an immediate crash of the browser or a long freeze followed by a inactive uploader component

        