---json
{
  "title": "FLUID-1873",
  "summary": "Trim Uploader.css",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-11-29T12:48:29.000-0500",
  "updated": "2011-02-22T16:27:55.260-0500",
  "versions": [],
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
      "author": "Eli Cochran",
      "date": "2008-12-04T19:27:18.000-0500",
      "body": "Cleaned up CSS.\n\n* removed some stray comments\n* removed the older pop-up progress styles\n* simplified the caption style down to display: none\n* moved a couple of small styles over from the fluid-infusion.css file so \\\n  &#x20; that if you didn't use the infusion file you would still get nice styling.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.259-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Uploader.css appears to contain some styles, comments, etc. that are no longer relevant to the latest version of Uploader and its template. A bit of trimming and cleanup will keep our download footprint small.

        