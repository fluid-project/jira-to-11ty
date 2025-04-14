---json
{
  "title": "FLOE-533",
  "summary": "Posts in more than 1 category does not properly render the category sidebar",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-01-17T13:32:42.745-0500",
  "updated": "2018-02-05T13:14:24.491-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2018-01-17T13:33:40.467-0500",
      "body": "There is no immediate fix for this. For now the best solution is to avoid using posts that belong in more than 1 category. If this bug continues to be a problem, then appropriate time should be allocated to researching and implementing a fix.\n"
    }
  ]
}
---
cCurrently there is no way to know which category sidebar to render if a post belongs in more than one category.

For example: a post "Contact" is categorized under both "About Us" and "Projects". Displaying the "About Us" landing page may actually show the "Projects" sidebar because Contact is categorized under both.

The problem is that the Sidebar does not keep track of which category is to be displayed.

A solution is to track which category is being viewed possibly by using a query parameter or some other Wordpress variable and/or function.

        