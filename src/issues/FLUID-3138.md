---json
{
  "title": "FLUID-3138",
  "summary": "builder.php uses $_POST instead of $_GET for 'var'",
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
  "date": "2009-08-25T14:33:15.000-0400",
  "updated": "2009-10-22T16:21:54.000-0400",
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
      "date": "2009-08-25T15:05:13.000-0400",
      "body": "changed the $\\_POST to $\\_GET\n"
    }
  ]
}
---
the value for var is not posted, so must use $\_GET

        