---json
{
  "title": "FLUID-2160",
  "summary": "OSDPL: Add redirection for a node that is no longer public.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-23T15:39:07.000-0500",
  "updated": "2014-04-02T16:35:54.004-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If a node was previously publicly viewable (either in "Open for Comments" stage or "Published"), then a redirection to a friendly note should be given.

The message should explain that the pattern is no longer publicly viewable and give suggestions on what the user can do.

To set up the redirection in our workflow:

* create a page with the appropriate message.
* install the CCK Redirection module (<http://drupal.org/project/cck_redirection>)
* add the redirection field to the pattern entry form (make a note that it's not to be tampered with)
* using CCK Field Access module, restrict access to that field to just administrators.
* in Workflow-ng, set a Rule that sets the URL to the page created in step 1 when a pattern is moved from Published / Comments to Draft / Review
* clears the Redirection field in the affected node if goes from Draft/Review to Published/Comments

Special case:

* When pattern goes from Comments to Review, you want the redirection ONLY for registered users, not editors or admins.

        