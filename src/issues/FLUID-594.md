---json
{
  "title": "FLUID-594",
  "summary": "OSDPL Navigation: Fix bug in OSDPL where breadcrumbs aren't displayed properly in the Views",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-13T16:53:09.000-0400",
  "updated": "2009-02-05T10:05:54.000-0500",
  "versions": [
    "0.5beta1"
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
      "author": "Allison Bloodworth",
      "date": "2008-05-13T16:53:21.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T19:27:29.000-0400",
      "body": "I tried playing with Taxonomy Breadcrumb to see if that helped, but it only affects nodes (like uidp), not category pages. I also had to turn taxonomy\\_breadcrumb off because there is a bug when you go to the drag and drop patterns it loses the category (e.g. \"Information Organization\") in the breadcrumb trail. Interestingly, this doesn't happen to any of the other patterns. Might be able to work around this by using custom\\_breadcrumbs module, but not sure as it may also just apply to node types and what we are concerned with is the breadcrumbs for a view. Here's a post that may be helpful: <http://groups.drupal.org/node/8422>.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-05T09:55:47.000-0500",
      "body": "Fixed. The title variable was not being set using the Argument in Views.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-05T10:05:54.000-0500",
      "body": "iteration26\n"
    }
  ]
}
---
In screens like <http://osdpl.fluidproject.org/taxonomy_menu/1/10> & <http://osdpl.fluidproject.org/taxonomy_menu/1> the breadcrumbs have an extra double colon (or two) at the end. The last item in the list should not be followed by a colon. The number of extra colons seems to correspond with the number of arguments in the URL (e.g. /taxonomy\_menu/$arg/$arg) used by the View.

        