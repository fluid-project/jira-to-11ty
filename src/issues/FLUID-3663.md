---json
{
  "title": "FLUID-3663",
  "summary": "Protocomponent expander tries to expand UISelect array members into UIBound elements",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2010-06-01T14:01:52.921-0400",
  "updated": "2014-03-03T13:43:09.069-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T01:04:05.504-0400",
      "body": "Fixed as part of integration of <https://fluidproject.atlassian.net/browse/FLUID-3658#icft=FLUID-3658> work into trunk at 9968\n"
    }
  ]
}
---
For example, expanding the following tree designating a UISelect component:

var protoTree = {\
"authority-history": "${fields.history}",\
"contact-addressType1": {\
"selection": "${fields.addressType1}",\
"optionlist": \["Home", "Work"],\
"optionnames": \["home", "work"]\
}\
};

would have "optionlist" expanded to \
\[{value: "Home"}, {value: "Work"}]

This representation is not accepted by the renderer - although work was done, for example, to allow UIMessage to accept a form like this as its "args".&#x20;

        