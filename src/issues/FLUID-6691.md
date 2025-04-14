---json
{
  "title": "FLUID-6691",
  "summary": "Write documentation for integrating UIO using CSS custom properties",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2021-10-20T13:12:17.638-0400",
  "updated": "2024-07-22T10:35:20.886-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "Tech. Documentation",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-10T08:48:55.693-0500",
      "body": "As the CSS custom properties are more integrator facing than UIO/Prefs framework developer, it may be better to put the documentation/tutorial alongside [Working with UI Options](https://docs.fluidproject.org/infusion/development/tutorial-userinterfaceoptions/workingwithuserinterfaceoptions)\n"
    }
  ]
}
---
With changes for <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> and <https://fluidproject.atlassian.net/browse/FLUID-6260#icft=FLUID-6260> we're introducing the ability to integrate UIO using CSS custom properties. However, it isn't obvious how to work with these just from looking at demos and code. We should write up some dedicated documentation for to describe what the CSS custom properties are and how they can be used. This could be added as another child to <https://docs.fluidproject.org/infusion/development/preferencesframework>

Perhaps a tutorial as well would be helpful to walk though integrating UIO into an existing site and allowing UIO to hook into the sites styles via the CSS Custom properties.

        