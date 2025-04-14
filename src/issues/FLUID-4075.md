---json
{
  "title": "FLUID-4075",
  "summary": "Long file names don't wrap properly in Uploader queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "heidi valles",
  "reporter": "Anastasia Cheetham",
  "date": "2011-02-17T13:52:41.684-0500",
  "updated": "2011-02-17T16:28:11.738-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-962/",
      "key": "FLUID-962",
      "summary": "long file names in the upload queue, push the file size and remove button out of view"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-02-17T14:00:21.076-0500",
      "body": "Remove no-wrap style on line 87 in Uploader.css\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-17T16:18:00.319-0500",
      "body": "I'm re-opening this one: The wrapping only happens on spaces or dashes, so if a long filename has neither (e.g. if it's broken up using underscores), this issue is still present.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-17T16:28:11.736-0500",
      "body": "This issues duplicates <https://fluidproject.atlassian.net/browse/FLUID-962#icft=FLUID-962>\n"
    }
  ]
}
---
If a file is added to the uploader queue with a very long filename, it pushes the 'remove' button out of sight. In Firefox, this doesn't affect the 'remove' buttons for other items in the queue, but in Safari, all remove buttons are lost. You can still select the items in the queue (using mouse or keyboard) and remove them using the Delete key, you just can't see the icons.

        