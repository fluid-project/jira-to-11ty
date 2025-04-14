---json
{
  "title": "ENGAGE-118",
  "summary": "Refactor navigationList to allow for a default image to be rendered if none exists",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-13T11:54:49.000-0400",
  "updated": "2009-11-03T11:51:17.000-0500",
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
      "author": "Colin Clark",
      "date": "2009-10-13T16:54:56.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-14T10:57:15.000-0400",
      "body": "modified the navigationList to render the default url provided in the template. Also have gone and updated the browse component and respective mapper functions to make use of this new functionality\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:51:17.000-0500",
      "body": "closed as per previous comment\n"
    }
  ]
}
---
Refactor navigationList to allow for a default image to be rendered if none exists

Currently if no information is passed in about the url for an image, the image isn't rendered at all.&#x20;

To allow for a default image that can easily be changed by an implementor. The new strategy is to have the default url in the template, and to have this default image rendered if no URL is passed in to the component.

There should likely also be an option that will allow the new strategy to be over ridden to the old strategy to handle other cases that may arise.

        