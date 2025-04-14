---json
{
  "title": "FLUID-4185",
  "summary": "Uploader remote component has an incorrect argumentMap value for the options",
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
  "reporter": "Mike Lam",
  "date": "2011-04-12T10:01:14.835-0400",
  "updated": "2011-04-12T10:10:18.972-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-04-12T10:10:15.759-0400",
      "body": "Reviewed and committed\n"
    }
  ]
}
---
The options value in the argumentMap needs to be 1 instead of 2 in the remote component of the HTML5 uploader.  This bug currently has no negative effects on the remote uploader, but needs to be fixed for correctiveness. &#x20;

        