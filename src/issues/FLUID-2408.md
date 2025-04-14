---json
{
  "title": "FLUID-2408",
  "summary": "update Uploader class names",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-03-25T12:35:12.000-0400",
  "updated": "2011-02-22T16:27:46.035-0500",
  "versions": [],
  "fixVersions": [
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
      "author": "Justin Obara",
      "date": "2009-03-25T12:37:48.000-0400",
      "body": "Clean Up Parade 1.0&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-26T17:04:27.000-0400",
      "body": "currently fl-ProgEnhance-show/hide are whats being used to execute progressive enhancement display effects. Since this gets flipped at run-time, it doesnt make sense.\\\nWhen possible, I suggest we try :\n\nfl-ProgEnhance-basic {} // what would get changed at run time to hidden\\\nfl-ProgEnhance-enhanced {} // what would get changed at run time to shown (instead of  writing out the style on the node)\n\nand flc-basic, flc-enhanced could be the DOM selectors maybe?\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-30T14:43:41.000-0400",
      "body": "changed fl-ProgEnhance selectors to use the selectors as suggested by Jacob above\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-31T15:05:47.000-0400",
      "body": "Uploader style and selector class names are now updated to the new scheme&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:46.034-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
update Uploader class names

        