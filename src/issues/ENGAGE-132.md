---json
{
  "title": "ENGAGE-132",
  "summary": "The browse component loads slowly and shows the template before rendering the content.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-10-19T11:17:29.000-0400",
  "updated": "2009-11-10T14:05:49.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-19T22:45:22.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-20T15:30:36.000-0400",
      "body": "A loading message has been added, rhino was upgraded, and switched to native json parsing in rhino. All this means that the template isn't shown on page load (replaced by the loading message) and the page loads much faster now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T14:05:49.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
The browse component loads slowly and shows the template before rendering the content.

Since the template loads first, while the data is being brought in, it appears as though the component is broken and missing data. With it taking about a minute or two to load in the data, it can be easily mistaken for the actual page.

Instead of having the template show on page load, a loading screen should be displayed first, with the template hidden, and then swapped when it is ready to be displayed on the screen.

        