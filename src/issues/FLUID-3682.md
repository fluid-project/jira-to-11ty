---json
{
  "title": "FLUID-3682",
  "summary": "Renderer can't interpret component proto tree with just a decorator and no value or valuebinding.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-08-03T16:57:42.766-0400",
  "updated": "2014-03-03T13:42:52.131-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-04T03:36:40.411-0400",
      "body": "Fixed at revision 9975\n"
    }
  ]
}
---
Renderer can't interpret component proto tree with just a decorator and no value or valuebinding.\
This is the example of the proto tree: \
".csc-date-information-date-earliest-single-date-container": {\
"decorators": \[\
{\
"func": "cspace.datePicker",\
"type": "fluid" \
} \
] \
}

        