---json
{
  "title": "FLUID-966",
  "summary": "<!--nextpage--> macro being ignored in blog",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-07-21T20:01:41.000-0400",
  "updated": "2014-06-25T16:16:10.732-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": "Wordpress 2.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-24T12:02:46.066-0400",
      "body": "No longer an issue.\n"
    }
  ]
}
---
Wordpress 2.6 seems to be ignoring the \<!--nextpage--> macro. Should be fixed so posts using the macro will be formatted properly.

Could be related to a theme issue. Check to see that the Misty theme supports multiple paged posts.

        