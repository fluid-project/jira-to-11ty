---json
{
  "title": "FLUID-3943",
  "summary": "Demo portal link to Uploader ReadMe broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-17T14:01:16.050-0500",
  "updated": "2011-01-20T15:09:46.589-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": "FF3.6 on Mac OS X\\\nFF & IE & Chrome on Win XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-17T14:26:04.492-0500",
      "body": "Fixed.\n"
    }
  ]
}
---
The Uploader demo page on the demo portal (the actual portal page, not the Uploader demo itself) includes a link to the Uploader's ReadMe file. The link specifies the filename is all lowercase ("readme.txt") while the actual file name is camel-case ("ReadMe.txt") so the link breaks. The file is present on the server, the link just doesn't work. (Note that it works fine when I test on my local machine).

The change would be required in demos/uploader/demo.html

        