---json
{
  "title": "FLUID-1069",
  "summary": "OSDPL Infrastructure: Evaluate upgrade to Drupal 5.9 or 6.3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-07-29T23:37:06.000-0400",
  "updated": "2008-10-29T16:23:51.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-29T23:37:17.000-0400",
      "body": "iteration21\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-05T19:21:07.000-0400",
      "body": "I am getting messages on certain pages in Drupal saying, \"There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information.\" so I believe this is something we should at least investigate the severity of this iteration.\n\nAdditionally, I spoke with Jon Hayes at UC Berkeley today about Drupal 6.3 which he is happily using now with many of the same important modules we are, such as CCK & Views. He says many of the 6.x modules have just become ready in the last month, and that version 6 is a BIG improvement.\n\nYou can see all the modules that have been released for 6.x by going to this page: <http://drupal.org/project/Modules/name> and choosing \"6.x\" in the \"Filter by Drupal Core compatibility:\" filter. This is the best method to use because some module pages don't seem to list all the versions (Jon had this experience with one he needed for 6.0).\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-29T14:11:46.000-0400",
      "body": "Migration for Drupal 6 is very tempting for the increased integration with Drupal features and Views (i.e. you can create Views based on user informaiton, which is something you can't do in Drupal 5.x).\n\nHowever, I think we should stick with 5.x until we hit a critical wall or ready for a major step forward.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-29T16:23:51.000-0400",
      "body": "Closing for now. Investigate Drupal 6 upgrade path at a later time.\n"
    }
  ]
}
---
Drupal 5.9 and 6.3 are available with potential security fixes.

Evaluate the merits of upgrading to either version and decide an upgrade path.

Information on upgrading your Drupal installation can be found at: <http://drupal.org/upgrade/>.

Note:&#x20;

* Upgrading to Drupal 6.3 may depend if CCK is available or not. We depend on that heavily.
* also see if one of these versions allow multiple instances of grouped fields (i.e. Image + Attribution pairs) in CCK
* also see if one of these versions adds multiple image upload to CCK

        