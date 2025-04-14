---json
{
  "title": "FLUID-4060",
  "summary": "Scroller appears after selecting last file in queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-02-14T10:13:48.896-0500",
  "updated": "2011-06-27T11:13:44.995-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "mac 10.6 - FF3.6, Safari 5.  okay on win.\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3837/",
      "key": "FLUID-3837",
      "summary": "Clean up Uploader's markup"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-02-15T11:19:26.894-0500",
      "body": "This issue is a bug arising from our fix to <https://fluidproject.atlassian.net/browse/FLUID-3837#icft=FLUID-3837>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:45:56.718-0400",
      "body": "Bug Parade Infusion\n"
    }
  ]
}
---
Add 5 files to the uploader queue - the container doesn't have a scroller. Select the last file in the queue and a scroller appears.

        