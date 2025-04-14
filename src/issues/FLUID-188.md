---json
{
  "title": "FLUID-188",
  "summary": "Provide keyboard navigation within individual portlets.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2008-01-28T11:30:36.000-0500",
  "updated": "2011-02-22T16:27:45.570-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-02-06T15:03:39.000-0500",
      "body": "Current thinking on how this should behave can be found at\\\n<http://fluidproject.org/work/keyboardtest/keyboardtest.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:41:34.000-0400",
      "body": "A thorough testing and assessment of this behaviour is needed to ensure that keyboard navigation works as expected.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:42:01.000-0400",
      "body": "Jonathan, can you take a look at this?\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-08T11:17:27.000-0400",
      "body": "The multiple focus is the most confusing aspect of the mock-up. When a link is selected using a tab, I expect that hitting down-arrow will move me to the next link below, but instead the portal changes focus to the next to the right.\n\nI guess I was expecting the same behaviour that is possible with the outer (portal) container to apply to the contents inside the container. (Arrow keys navigate within a list).\n\nFood for thought:\\\nWhat if a portal container contains multiple items not necessarily in a list (like a Weather portlet with a 5 day forecast horizontally and a list of the days in the extended 14 day forcast below that... and each item \"clickable\"). How will a user navigate that given the above portal navigation scheme?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-08T15:30:27.000-0400",
      "body": "Jonathan tested the potlet reordering and confirmed that we can navigate inside a portlet with the keyboard.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:45.569-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, we navigate between portals on the page using the arrow keys. Based on design specifications, we'd like to create a coherent, unified approach to navigating between portlets and within each one.

        