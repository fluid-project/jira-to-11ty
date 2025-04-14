---json
{
  "title": "FLUID-3006",
  "summary": "postProcessor.php returns true if $minified or $includes are invalid",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-07-07T12:21:25.000-0400",
  "updated": "2009-08-24T11:23:16.000-0400",
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
      "date": "2009-07-07T14:17:20.000-0400",
      "body": "Established that this is not a bug - $minified and $includes default to true and \"\" respectively if any hacking is attempted, therefore this function can still return true because the two values are valid.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-07T14:17:42.000-0400",
      "body": "Have resolved this issue - not a bug.\n"
    }
  ]
}
---

        