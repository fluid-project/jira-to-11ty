---json
{
  "title": "ENGAGE-163",
  "summary": "My Collection: Provide users with the ability to create their own personal collections of artifacts",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2009-10-21T17:52:35.000-0400",
  "updated": "2010-02-08T16:21:18.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-163/fe_mobile_icon_loadmore.png",
      "filename": "fe_mobile_icon_loadmore.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-163/fe_mobile_icon_send.png",
      "filename": "fe_mobile_icon_send.png"
    }
  ],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2009-10-23T10:36:15.000-0400",
      "body": "Elements in the grid and list views should link to the appropriate artifact.\n\nOnce a user is at an artifact from the My Collections view, the user should be able to tap the back button to return to the My Collection view.&#x20;\n\nAdditionally, while at an artifact from the My Collections view, the user should be able to tap previous and next buttons to get to the previous and next artifacts from the My Collections view (on grid view, sequence of artifacts is left to right, top to bottom).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:17:23.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-05T10:37:28.000-0500",
      "body": "Icons for My Collection:\n\n* Send (for sending one's collection to an email address)\n* Load more (for loading more artifacts)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:21:13.000-0500",
      "body": "Sveto has implemented the My Collection component in a branch. It still needs to be merged, which I am in the process of doing. Any other issues related to My Collection should be filed under more specific JIRA tickets.\n"
    }
  ]
}
---
The wireframes for this feature are available herer:

<http://wiki.fluidproject.org/display/fluid/Mobile+wireframes%2C+draft+8#Mobilewireframes%2Cdraft8-Mycollections>

This is an umbrella issue that covers all the tasks required to implement the My Collections feature of Engage. In short, this will include:

* Creation of a My Collections component that supports grid and list views as well as artifact reorderering
* A generic persistent navigation component that will allow us to provide navigation between screens within the system
* Data models for users and personal collections

        