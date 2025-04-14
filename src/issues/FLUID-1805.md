---json
{
  "title": "FLUID-1805",
  "summary": "OSDPL: Pattern category navigation in left sidebar reporting incorrect quantity.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-11-13T19:32:22.000-0500",
  "updated": "2014-04-02T16:35:53.807-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-11-13T19:32:36.000-0500",
      "body": "Iteration22 if there is time.\n"
    }
  ]
}
---
In the left sidebar, the design pattern category is reporting an incorrect node count.

Example: Navigation (3)

However, clicking on the link gives you a listing of 0 patterns. This is because the category count is counting unpublished articles too, which is incorrect.

To fix this:

* Admin > Block > Design Pattern Categories > Configuration
* Change the mySQL query to do a JOIN on the {nodes} and {term\_node} tables, accounting for {nodes}->status == 1 (published).

        