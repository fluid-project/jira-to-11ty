---json
{
  "title": "FLUID-4476",
  "summary": "Uploading a file with a long filename causes progress bar style to appear incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2011-09-29T14:39:48.680-0400",
  "updated": "2014-06-03T15:22:18.213-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4476/Screen Shot 2011-09-29 at 2.19.png",
      "filename": "Screen Shot 2011-09-29 at 2.19.png"
    }
  ],
  "comments": []
}
---
Uploading a file with a very long filename causes the progress bar to appear green and grey. It should be green to match the style when uploading a short named file.

        