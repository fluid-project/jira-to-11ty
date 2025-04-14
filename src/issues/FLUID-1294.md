---json
{
  "title": "FLUID-1294",
  "summary": "OSDPL Styling: Remove \"Read more\" in Story Teaser block",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T14:14:55.000-0400",
  "updated": "2009-02-18T12:51:31.000-0500",
  "versions": [
    "0.4"
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
      "date": "2009-02-18T12:51:31.000-0500",
      "body": "No longer an issue since we are no longer using teasers for news items.\n"
    }
  ]
}
---
Remove the "Read More" link located after each item in the Story Teaser block on the main page if possible.

It's distracting and made redundant by the fact story titles perform the same action.

This may not be something we can do if it's embedded in the module itself. In which case we should consider alternatives to this block (preferably one that we can style and format ourselves).

        