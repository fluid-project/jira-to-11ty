---json
{
  "title": "FLUID-2027",
  "summary": "drop target remains below locked portlet when \"cannot drop above\" message is displayed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-12-17T17:25:47.000-0500",
  "updated": "2008-12-18T09:47:20.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "WIN: FF3, WIN: IE7, IE6, OPERA  - OSX FF2, FF3\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T09:47:20.000-0500",
      "body": "This was actually an error in the test protocol. It has now been updated\n"
    }
  ]
}
---
Drop target is created below locked portlet - drop target remains even after warn message appears, mixed signals: visible drop target "below", message warning that cannot drop "above"

        