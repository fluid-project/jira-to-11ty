---json
{
  "title": "FLUID-1953",
  "summary": "The editable field should be hidden with display:none instead of visible:hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Justin Obara",
  "date": "2008-12-10T09:18:54.000-0500",
  "updated": "2008-12-11T09:46:10.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1955/",
      "key": "FLUID-1955",
      "summary": "Investigate strategies for restoring fields to a hidden condition for JAWS after they have once been shown"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-12-10T14:20:58.000-0500",
      "body": "We are already using display:none to hide the field. This issue will be reopened as a fresh issue to investigate workarounds for this JAWS bug.\n"
    }
  ]
}
---
In JAWS 10 the editable field for an inline edit field is still visible to the screen reader after leaving edit mode. It should be hidden with display:none instead of visible:hidden, to avoid this.

        