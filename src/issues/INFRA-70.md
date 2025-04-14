---json
{
  "title": "INFRA-70",
  "summary": "Get the spare Macbook Air configured as a mobile / Giovanni remote login crash cart",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-26T09:57:27.862-0500",
  "updated": "2015-11-26T13:29:45.337-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-11-26T13:29:45.335-0500",
      "body": "This should be tested at the datacentre, but looks good from the office. Specifically:\n\n* the crash cart adapter has been configured to work under OS X\n* we've installed Chrome Remote Desktop on the Mac and confirmed that Giovanni can remote control it\n"
    }
  ]
}
---
From an email thread discussing this: "I think it would be good to go over this week and figure out the KVM\
configuration (with the crash cart adapter?) in advance of that - maybe\
see if we can rig up the old Macbook Air for this purposes? If Gio were\
able to connect to the Mac remotely and KVM through there, it would be a\
useful tool in the remote-management arsenal."

        