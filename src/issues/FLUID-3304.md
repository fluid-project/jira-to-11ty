---json
{
  "title": "FLUID-3304",
  "summary": "jsonProcessor.php needs error checking on json caching file open",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Laurel Williams",
  "date": "2009-10-16T16:44:35.000-0400",
  "updated": "2011-01-14T12:01:26.852-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If file does not exist and directory does not exist, the cacheOutput function will result in a "cannot open cache file" message. Probably would be better if the file and directory were created if needed.

        