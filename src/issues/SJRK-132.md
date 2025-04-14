---json
{
  "title": "SJRK-132",
  "summary": "Review current fields that exist on the story model to ensure they are needed",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-06-01T15:31:10.532-0400",
  "updated": "2020-01-20T14:46:17.110-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-11-30T17:33:54.259-0500",
      "body": "Removed:\n\n* language (each block has this now)\n* images (image blocks represent themselves)\n* categories (we're going to use tags only)\n\nCommented out for the future:\n\n* timestampCreated\n* timestampModified\n* requestedTranslations\n  * this could be a collection of language codes as keys with the number of requests for each language as values\n* translationOf\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-01-20T14:46:17.110-0500",
      "body": "Removed more fields, including previously commented-out ones. These were intended for future use, but we can re-implement them when that time comes. For now they're just cruft.\n\n* summary\n* timestampCreated\n* timestampModified\n* requestedTranslations\n* translationOf\n* thumbnailUrl (this is referred to in templates but not saved currently)\n* thumbnailAltText (same as above)\n* contentTypes (same as above, also calculated when loading the browse page data)\n"
    }
  ]
}
---
We should review all fields that exist on the model on the client side, and ensure they are still relevant / needed.

Fields that existed in older designs or are there as placeholders for expected future use should be removed or commented out.

        