---json
{
  "title": "FLUID-2269",
  "summary": "OSDPL: PathAuto clobbers custom URLs.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-02-19T12:17:05.000-0500",
  "updated": "2014-04-02T16:35:53.709-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-23T10:14:10.000-0500",
      "body": "Investigate removal of Pathauto.\n\niteration30\n"
    }
  ]
}
---
The PathAuto module clobbers custom URL aliases because the module by default checks the "Automatic alias" checkbox when making an edit to a Node. Thus if you are editing a Node and then Submit it, Path Auto will overwrite any URL alias you may have submitted previously.

This is problematic as it will break several hard-coded URLs in the OSDPL which make references to the Alias.

        