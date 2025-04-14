---json
{
  "title": "FLUID-665",
  "summary": "Filenames are not being read by JAWS",
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
  "date": "2008-05-28T16:10:15.000-0400",
  "updated": "2014-07-07T14:13:09.912-0400",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
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
      "date": "2009-05-14T15:10:22.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T14:13:09.910-0400",
      "body": "I tried this again with JAWS 15 and it was working fine.\n"
    }
  ]
}
---
When files are in the list (whether uploaded or queued), filenames are not read by JAWS.

Filenames should be read each time a new item in the list is focused, followed by the operations available for that file (i.e. Remove file).

        