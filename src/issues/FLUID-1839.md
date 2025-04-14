---json
{
  "title": "FLUID-1839",
  "summary": "CTRL-K does not seem to be working for keyboard reodering with JAWS 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-11-26T11:48:28.000-0500",
  "updated": "2008-11-27T09:45:03.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF3, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1821/",
      "key": "FLUID-1821",
      "summary": "Image Reorderer has incomplete directions (Accessibility)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-11-27T09:44:48.000-0500",
      "body": "will work when virtual pc cursor mode is turned off\n"
    }
  ]
}
---
CTRL-K does not seem to be working with JAWS 9

Steps to reproduce:

1\) Start Jaws

2\) Open the Image Reorderer from the daily build site:

3\) Tab to one of the images and attempt to reorder using the ctrl-k key,

Notice that it doesn't move and JAWS says "Temporary place marker set"

        