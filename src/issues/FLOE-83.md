---json
{
  "title": "FLOE-83",
  "summary": "Edit Profile page layout is bad; profile dummy picture missing",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-03T17:13:10.295-0400",
  "updated": "2012-10-18T12:14:16.803-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-83/profile-edit-layout.png",
      "filename": "profile-edit-layout.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-08-03T17:15:19.328-0400",
      "body": "The attached screenshot (profile-edit-layout.png) shows the a11y-uio staging site on the left and the production site on the right.\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-10-18T12:14:16.802-0400",
      "body": "This issue is not present on master or staging. Looks like it was addressed already.\n"
    }
  ]
}
---
On the 'Edit' version of the Profile tab in My OER, the layout is wrong: the editing information is below the picture space, whereas it should be beside it. Also, the profile picture placeholder is absent.

        