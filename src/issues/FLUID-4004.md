---json
{
  "title": "FLUID-4004",
  "summary": "Yellow border on \"Browse\" button not properly removed (IE)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-22T12:09:23.801-0500",
  "updated": "2011-10-14T15:44:07.546-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T10:35:43.722-0400",
      "body": "Testing for the 1.4 release, this issue seems to be gone: there is no longer any black border, and the yellow border seems to appear and disappear appropriately.\n"
    }
  ]
}
---
When you tab to the "Browse" button, it gets two highlights: a black border and a yellow border. If you then click elsewhere on the screen, the black border goes away, but the yellow border remains. A bit confusing...

        