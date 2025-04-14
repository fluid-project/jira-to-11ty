---json
{
  "title": "FLUID-758",
  "summary": "OSDPL Form: Determine HTML Input filter to use for OSDPL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T16:51:31.000-0400",
  "updated": "2008-10-24T11:06:28.000-0400",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T16:51:40.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-24T11:06:28.000-0400",
      "body": "Added a few more tags (like Span, Div, Cite, etc) to the accepted tags used in Filtered HTML.\n\nExisting design patterns confirmed to still look proper.\n"
    }
  ]
}
---
Determine what input format (e.g. Filtered or Full HTML) to use as a default in the OSDPL, and then set it up to be the default for all content types. Then determine whether we would like to restrict access to certain input formats (e.g. Full HTML) to certain roles, and implement this. If we use Filtered HTML, I think we will have to enter **a lot** more accepted tags. Also, if we go with Filtered HTML folks who don't have permission to use Full HTML will not be able to edit any of those nodes, so we will have to go through all the nodes we want users to be able to edit (e.g. design patterns, forum posts, maybe articles), change their format to Filtered HTML, and then QA check to make sure none of the formatting was lost.&#x20;

        