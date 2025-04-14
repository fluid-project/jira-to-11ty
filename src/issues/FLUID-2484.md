---json
{
  "title": "FLUID-2484",
  "summary": "Visual flicker on inline edit announcements sample due to use of document.ready in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T15:48:09.000-0400",
  "updated": "2011-01-07T13:02:21.511-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T13:02:21.509-0500",
      "body": "This demo has been deprecated.\n"
    }
  ]
}
---
The initialisation code in <http://build.fluidproject.org/infusion/integration-demos/sakai/html/inline-edit-announcements.html> uses a document.ready approach which causes visual flicker on page load, as the editable controls are created and then hidden. This should instead use an init block so that the markup is prepared earlier in the load cycle.&#x20;

        