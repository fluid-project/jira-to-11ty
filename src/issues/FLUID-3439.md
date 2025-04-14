---json
{
  "title": "FLUID-3439",
  "summary": "Page stays on \"preparing to download\" even after the file is successfully downloaded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "James Yoon",
  "date": "2009-12-17T10:39:16.000-0500",
  "updated": "2010-01-07T08:28:25.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3233/",
      "key": "FLUID-3233",
      "summary": "After download, progress on \"Preparing your download...\" page does not disappear  "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "James Yoon",
      "date": "2009-12-17T10:48:08.000-0500",
      "body": "The server should know when the package has been put together and is being sent to the user--at that point, \"Preparing your download\" is moot and the page should indicate a different state.\n"
    }
  ]
}
---

        