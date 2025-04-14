---json
{
  "title": "DECA-177",
  "summary": "Styles not properly scoped",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2011-10-14T12:03:06.544-0400",
  "updated": "2012-02-10T13:06:18.318-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration",
    "Capture",
    "Image Management"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-02-10T13:06:18.316-0500",
      "body": "Since we are starting from scratch with styles, this is no longer an issue.\n"
    }
  ]
}
---
Some Decapod styles are not properly scoped. Example, there are styles for anchors, and body tags in the Decapod.css file.

example:\
body {\
font-family: 'Droid Sans', arial, serif;\
background-color: #F8F8F8;\
position: absolute;\
bottom: 0px;\
left: 0px;\
right: 0px;\
top: 0px;\
}

h1 {\
font-size: 24px;\
font-weight: bold;\
color: #3a3a3a;\
margin-bottom: 0px;\
border-bottom-style: none !important;\
}

a {\
color: #39b54a;\
}

        