---json
{
  "title": "FLUID-2840",
  "summary": "High Contrast setting seems to automatically remove background images and the that setting doesn't change anything",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T22:44:45.000-0400",
  "updated": "2011-06-27T15:32:22.187-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "XP / IE8 Sakai Demo\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-06-01T14:31:59.000-0400",
      "body": "Since the sakai demo is an integration demo, it's made to showcase the best effects possible. To that end, I made an assumption that a high contrast theme would look much more effective if all the graphical clutter was gone and the content was completely readable.\n\nIts not a bug per se, but rather a design choice in this demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T09:42:31.000-0400",
      "body": "I think the issue is less that the images are removed, and more that the option to remove background images is presented to the user, even though the theme removes them.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T15:32:22.176-0400",
      "body": "This is no longer an issue because we have removed the ability to set background images on or off.&#x20;\n"
    }
  ]
}
---
The background images setting should be disabled and greyed out if the user chooses high contrast and it automatically doesn't display the background images.  If the background images should still be displayed in high contrast mode then that's the bug.

        