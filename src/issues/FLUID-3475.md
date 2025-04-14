---json
{
  "title": "FLUID-3475",
  "summary": "Pager is displayed regardless of the number of items returned",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Erin Yu",
  "date": "2010-01-13T17:28:58.000-0500",
  "updated": "2021-07-15T08:32:50.530-0400",
  "versions": [
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-819/",
      "key": "FLUID-819",
      "summary": "Don't show page links for few items"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4057/",
      "key": "FLUID-4057",
      "summary": "Pager shouldn't use ellipses if the gap is 1 for gapped strategy"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently when the number of items returned is less than the number of items per page, the pager still displays previous and back buttons as links and a static text "1(last)".&#x20;

Desired behaviour: \
1\. When # of items returned < # of items per page\
Don't display page links, previous/next buttons\
Do display the dropdown for "Show # per page" and "1-5 of 5 items"

2\. When 0 items return\
Don't display pager at all\
Do display an appropriate message such as "No matches found"

        