---json
{
  "title": "FLUID-1806",
  "summary": "OSDPL: Pattern node tagging causes redundant search results and bad user experience.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-11-13T19:43:21.000-0500",
  "updated": "2013-04-11T17:45:51.371-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-1298/",
      "key": "FLUID-1298",
      "summary": "OSDPL Content: Add more tags to the OSDPL to make tag cloud more useful"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-11-13T19:43:31.000-0500",
      "body": "Iteration22\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-11-13T22:35:20.000-0500",
      "body": "The above \"fix\" didn't really fix it. The underlying problem was that there are two taxonomies (Category, and Tags) used to describe a pattern. Our View was searching across these taxonomies and finding the same pattern under different tags and categories. Thus multiples were being output in a View because it wasn't smart enough to understand it already found the same item.\n\nTo fix this, I added another condition to the View filter: exclude any pattern that was in the Tags taxonomy. This Views was successful in searching only in the Category taxonomy, and thus only returning a single instance of the pattern.\n"
    }
  ]
}
---
Some nodes, notably older patterns, have a hierarchical tag / categorization. Because of this, doing searches will create redundant results because a single pattern belongs to multiple tags.

To fix:\
1\. Remove all existing tags for each node.\
2\. For each node, determine which category term it belongs to best, and ensure it only has 1 category.\
3\. Test results of step #2.\
4\. Re-input some tags, and re-test results.\
5\. If all goes according to plan, everything should look good. Continue to re-input tags.

        