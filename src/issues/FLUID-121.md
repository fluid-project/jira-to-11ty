---json
{
  "title": "FLUID-121",
  "summary": "Can't use keyboard to view full size image when in alphabetical sort.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-19T15:04:56.000-0500",
  "updated": "2007-11-26T15:03:24.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox, IE7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-110/",
      "key": "FLUID-110",
      "summary": "Tab moves focus through all Lightbox images on IE7"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-125/",
      "key": "FLUID-125"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-19T17:07:26.000-0500",
      "body": "Removing the anchors from the tab order in the template created this bug. Keyboard accessibility is only available when the Lightbox is present. In alphabetical mode there is no Lightbox.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2007-11-26T14:58:52.000-0500",
      "body": "Note that this doesn't seem to work using firefox on Mac OS 10.5.1\n"
    }
  ]
}
---
When the sort order is set to alphabetical, there is no keyboard access to the images at all. If a user wishes to view an image they would have to go into the slide show and scroll through the images to find the one they were looking for. The user should probably be able to traverse through the images with only the move option (ctrl-arrow key) being disabled.&#x20;

        