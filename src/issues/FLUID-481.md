---json
{
  "title": "FLUID-481",
  "summary": "Dragging lightbox element: translucency opposite of testing specifications",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T13:43:53.000-0400",
  "updated": "2008-11-13T13:30:52.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7, FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T15:54:49.000-0400",
      "body": "This is actually an issue with the test protocol. The Lightbox avatar is actually not supposed to be translucent. The protocol has been updated to reflect this.\n"
    }
  ]
}
---
When dragging an element in the Lightbox to a new location, the dragged representation is solid; the representation left int he original location becomes translucent. This behavoiur reverses that specified in the testing protocol:\
"While an element is being moved, are you able to see a semi-transparent representation of it, under the pointer "

        