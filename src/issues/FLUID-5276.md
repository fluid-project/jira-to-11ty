---json
{
  "title": "FLUID-5276",
  "summary": "Create component for Fluid Infusion Overview Panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2014-02-13T14:12:32.305-0500",
  "updated": "2014-04-23T09:34:56.622-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5273/",
      "key": "FLUID-5273",
      "summary": "Implement the new Fluid Infusion Demo overlay"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5291/",
      "key": "FLUID-5291",
      "summary": "Rename demoMenu classnames to overviewPanel"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5292/",
      "key": "FLUID-5292",
      "summary": "Remove 'Version #' from the overviewPanel component"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-179/",
      "key": "FLOE-179"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5289/",
      "key": "FLUID-5289"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-03-06T14:12:45.648-0500",
      "body": "I have added a class named \"fl-demoMenu-hidden\". When this class is added to the \\<div class=\"fl-demoMenu\"> container, the contents will hide using a transition effect.\n\nThe javascript should be updated so when the close button or star button is selected, fl-demoMenu-hidden is added or removed from the container automatically.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2014-04-02T10:55:43.563-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/487>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-11T10:29:57.491-0400",
      "body": "Antranig suggested that the \"test\" page in the html folder of the Overview Panel be moved to the demos folder as a proper demo. Simon and I discussed this, and I'll take care of this as part of the <https://fluidproject.atlassian.net/browse/FLUID-5289#icft=FLUID-5289> work, which is adding the panel to all of the demos.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-16T13:59:17.131-0400",
      "body": "Merged into project repo at 27fee1657dd28bb79a7d2becb0b48229b3f84352\n"
    }
  ]
}
---
Create the JavaScript component for the Fluid Infusion Overview Panel.

The following sections of the component may vary between usages of the component and will be parameterized:

* Component Name
* Component Version
* Description (HTML markup)
* Instructions (HTML markup)
* Link destinations

Collapsing behaviour

* the menu collapses horizontally to the left
* the star icon toggle button remains visible at all times
* focusing or selecting anywhere outside the menu will collapse the menu

Positioning

* the menu is visible on the client's screen at all times at location (0,0)
* at this time, we are not supporting alternative positions or orientations of the menu (i.e. the menu is always on the top-left in a vertical orientation).

Close link

* a close link should appear after the feedback link

Vertical size and vertical scrolling menu

* if the contents of the menu is sufficiently long:
  * the maximum vertical size of the menu will be 100% of the browser&#x20;
  * a scroll bar should appear within the menu so the user can scroll through the menu's contents (scrollbar should probably just appear on the instructions area?)

        