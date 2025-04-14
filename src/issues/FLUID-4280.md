---json
{
  "title": "FLUID-4280",
  "summary": "Changing file type setting causes Uploader component to reset in Image Uploader Demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2011-06-02T15:46:48.405-0400",
  "updated": "2015-06-09T13:29:39.698-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-06-02T15:47:46.755-0400",
      "body": "This bug may actually not be a bug since it's unlikely that a user will be able to change the file types supported by the uploader. If this is the case, then the demo should document this issue clearly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:29:39.682-0400",
      "body": "The image gallery uploader demo no longer exists\n"
    }
  ]
}
---
When changing supported file types, selecting or deselecting a filetype causes the uploader component to be destroyed and recreated. This causes any upload queue information to disappear, and results in resizing of the page.

Solution: changing file types should not reset the uploader, and filequeue information should be maintained.

        