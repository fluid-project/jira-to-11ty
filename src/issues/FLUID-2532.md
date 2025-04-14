---json
{
  "title": "FLUID-2532",
  "summary": "Verify dependencies for FSS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T11:20:41.000-0400",
  "updated": "2011-02-22T16:27:53.423-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "FSS",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-04-07T11:11:37.000-0400",
      "body": "All the paths check out just fine.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.422-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Note that there is currently a bug in the build script that will throw an error when building a custom build with only fss because it does not contain any javascript files.

        