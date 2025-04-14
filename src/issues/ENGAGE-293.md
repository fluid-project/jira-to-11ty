---json
{
  "title": "ENGAGE-293",
  "summary": "Implement the Object Code Entry Screen",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-26T10:57:18.000-0500",
  "updated": "2010-02-12T14:31:29.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/code-entry-latest-images.zip",
      "filename": "code-entry-latest-images.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/ENGAGE-293.native-couch-view.patch",
      "filename": "ENGAGE-293.native-couch-view.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/ENGAGE-293.patch",
      "filename": "ENGAGE-293.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/ENGAGE-293-2.patch",
      "filename": "ENGAGE-293-2.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/fe_mobile_icon_delete.png",
      "filename": "fe_mobile_icon_delete.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-293/fe_mobile_icon_warning.png",
      "filename": "fe_mobile_icon_warning.png"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:21:22.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-05T10:30:12.000-0500",
      "body": "Icons for object code entry screen:\n\n* Warning (for invalid code entry)\n* Delete (for backspacing on entered codes)\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-08T08:00:01.000-0500",
      "body": "Patch replacing lucene views with native couch views. The artifact model has been changed a bit and this is also reflected in the patch. Finally this patch fixes a bug with switching invalid message style to normal style for the top screen message.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-10T08:07:28.000-0500",
      "body": "Basically the same patch but against a fresh trunk and manually changed fluid-engage to fluid-engage-kettle.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-11T20:07:38.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-11T20:22:20.000-0500",
      "body": "I have committed <https://fluidproject.atlassian.net/browse/ENGAGE-293#icft=ENGAGE-293>.native-couch-view.patch with several changes.\n\nHere is a link to an e-mail thread about it.\\\n<http://old.nabble.com/Object-Entry-Code-Review-to27557626.html>\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-12T09:03:33.000-0500",
      "body": "<https://fluidproject.atlassian.net/browse/ENGAGE-293#icft=ENGAGE-293>.patch fixes the unit tests for code entry and fixes the layout for FF.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-12T09:06:59.000-0500",
      "body": "Images to go with the above patch.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-12T10:59:35.000-0500",
      "body": "ENGAGE-293-2.patch contains the same set of changes as <https://fluidproject.atlassian.net/browse/ENGAGE-293#icft=ENGAGE-293>.patch, with the difference that the internationalized delete button is used.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T12:27:39.000-0500",
      "body": "Committed Sveto's latest patch ENGAGE-293-2.patch, which fixes the broken unit tests, the alignment of the buttons, abd the response from the service. I added in the new images from <https://fluidproject.atlassian.net/browse/ENGAGE-305#icft=ENGAGE-305> (which Sveto had done locally but couldn't add to the patch). These new images should also fix the horizontal scroll issue. I did have to make some changes which was to go back to a single image for the delete button. This will simplify the code. The background should probably be done in css anyways. So we should look into that for the next version.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-12T12:28:14.000-0500",
      "body": "Assigning this to colin. Could you please take another pass over this before we close it.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:31:29.000-0500",
      "body": "I've reviewed Sveto and Justin's changes to Object Code Entry and they look good. +1 for inclusion in Engage 0.3b\n"
    }
  ]
}
---
In the mobile wireframes there is a screen where a use can enter an object code and will be presented with the artifact page for that object. This might be implemented as a component.&#x20;

        