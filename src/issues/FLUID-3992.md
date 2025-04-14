---json
{
  "title": "FLUID-3992",
  "summary": "Uploader appears underneath the Simple Uploader when Javascript is disabled on the browser",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Erin Yu",
  "date": "2010-12-21T12:47:12.135-0500",
  "updated": "2014-03-03T13:39:18.248-0500",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-01-27T18:31:38.901-0500",
      "body": "I fixed this as part of a commit against <https://fluidproject.atlassian.net/browse/FLUID-3837#icft=FLUID-3837>, which substantially cleaned up Uploader's markup at r10479. The fix involved putting back a misplaced fl-progEnhance-enhanced style on the Uploader's container, and extending ProgressiveEnhancement.js to automatically unhide fl-progEnhance-enhanced if JavaScript is enabled.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T18:32:07.580-0500",
      "body": "Mike or Erin, can you take a look at tomorrow's build and verify that this issue is fixed? Thanks!\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-28T10:35:08.795-0500",
      "body": "The single file uploader is not displayed when Javascript is disabled.  &#x20;\n"
    }
  ]
}
---
To duplicate:\
On FireFox 3.6, disable Javascript and open Demo.

Current behaviour:\
The simple uploader appears at the top of the page. The multi-file uploader is displayed underneath the simple uploader, but does not work.

Desired behaviour:\
Only the simple uploader should be displayed.&#x20;

        