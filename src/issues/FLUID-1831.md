---json
{
  "title": "FLUID-1831",
  "summary": "Uploader's FileQueueView isn't fully navigable as a standard table for screen reader users.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michael Elledge",
  "reporter": "Michael Elledge",
  "date": "2008-11-19T20:36:07.000-0500",
  "updated": "2014-04-02T15:08:31.768-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Firefox 3 and JAWS 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-12-08T11:38:00.000-0500",
      "body": "Mike, can you provide more details on how you think the navigation doesn't work as expected? We certainly ensure that all the essential controls are navigable with the keyboard. We treat the file queue as a standard list, in which users can select individual files using the up and down arrow keys, and they can remove files from the queue using the delete key. This is roughly consistent with the experience a user might get in navigating a list of files in their desktop OS, for example.\n\nWhat other behaviour are you expecting?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T15:01:22.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:08:31.765-0400",
      "body": "We feel the keyboard control is adequate.\n"
    }
  ]
}
---
User should be able to move horizontally through table of files using up and down arrows. Should also be able to move vertically using alt + ctrl + arrows as well.

        