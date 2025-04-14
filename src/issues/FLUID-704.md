---json
{
  "title": "FLUID-704",
  "summary": "Add more / Browse file button needs better feedback for JAWS.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2008-06-03T15:01:28.000-0400",
  "updated": "2017-01-16T09:24:18.631-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP and JAWS\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-662/",
      "key": "FLUID-662",
      "summary": "Upload feedback lacking for JAWS users"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-666/",
      "key": "FLUID-666",
      "summary": "Enhance Uploader accessibility"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T15:10:08.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-16T09:24:18.604-0500",
      "body": "Tried again with JAWS 17 on Win 8.1 using Firefox 50 and IE 11. They both will say \"Browse Files Button\", although in IE 11 there are both an edit field and the button (See: <https://fluidproject.atlassian.net/browse/FLUID-6065#icft=FLUID-6065>)\n"
    }
  ]
}
---
When using JAWS, tab-focusing the Add more / Browse file button will read "Link" in Firefox. In IE7, JAWS will say "Add more", but it should probably be more instructive like "Add more files to upload queue."

        