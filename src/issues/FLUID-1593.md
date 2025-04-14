---json
{
  "title": "FLUID-1593",
  "summary": "Springboards: Grid cell avatars do not all display under the pointer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-18T17:44:50.000-0400",
  "updated": "2011-01-14T09:53:23.588-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1593/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-18T17:45:50.000-0400",
      "body": "'screenshot-1' shows the avatar for \"Am\" is far away from the pointer\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:59:27.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-22T17:43:32.000-0400",
      "body": "I've been playing around with this bug and it's actually quite hard to reproduce. I can still do it if I grab one of the grid elements as I move the mouse very quickly on the run (so to speak). Otherwise the avatar tracks pretty closely.&#x20;\n\nThis was running on XP, Service Pack 3, on a 1.73 GHz Pentium M with 1GB of RAM\n\nNo doubt that on a slower machine or with many processes running we could still reproduce this bug but I would suggest closing it.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-23T08:44:21.000-0400",
      "body": "Appears to have been resolved with one of the recent changes.\n\nVerified fix using:\\\nIE6 (Win XP, Win 2000)\n"
    }
  ]
}
---
Grid cell avatars do not all display under the pointer.

Steps to reproduce:

1\) Open the Reorderer Springboards from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Go to the grid example (example 3) and pick up a cell. Notice that the avatar is not directly under the pointer. Different cells will be placed in differing positions.

        