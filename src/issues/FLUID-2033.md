---json
{
  "title": "FLUID-2033",
  "summary": "Springboard:  Dragging object above locked object does not \"snap back to orginal location\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Daphne Ogle",
  "date": "2008-12-17T20:39:12.000-0500",
  "updated": "2008-12-18T09:07:37.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Mac OSX 10.5, FF 3\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T09:07:37.000-0500",
      "body": "This is actually an error with the test protocol. It has been updated now.\n"
    }
  ]
}
---
It actually drops it just below the locked object.  The drop target shows you where it will be dropped so it is pretty clear.  I think this is the behavior we want rather than dropping back to original location.  The test plan currently says it should drop back to original location.  Let's discuss.

        