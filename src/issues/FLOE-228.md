---json
{
  "title": "FLOE-228",
  "summary": "Update EPUB repo to support a non-pandoc workflow",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2014-08-25T10:49:31.356-0400",
  "updated": "2015-04-23T13:33:42.036-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-26T14:03:51.661-0400",
      "body": "merged\n"
    }
  ]
}
---
It turns out that Pandoc is not an ideal tool for generating EPUB 3 documents from HTML files. We've decided to switch to a more manual process of building the archive ourselves. This will require the addition of the metadata, manifest, etc. to the repository, and possibly restructuring the repository to facilitate the process.

        