---json
{
  "title": "FLUID-1674",
  "summary": "Uploader 2: Add support for graceful degradation back to a standard single-file HTML upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2008-10-09T23:46:55.000-0400",
  "updated": "2011-02-22T16:27:53.703-0500",
  "versions": [],
  "fixVersions": [
    "0.7",
    "0.8",
    "1.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-09T23:47:21.000-0400",
      "body": "infusion-06-wishlist\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-05-15T18:47:53.000-0400",
      "body": "This was fixed back in Infusion 0.7.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.701-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In cases where JavaScript or Flash 9 aren't available, we should fall back gracefully to a standard single-file HTML upload.

        