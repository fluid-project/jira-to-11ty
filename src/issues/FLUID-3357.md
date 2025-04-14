---json
{
  "title": "FLUID-3357",
  "summary": "Applying decorator to UISelect component backed with HTML <select> fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2009-11-04T13:07:14.000-0500",
  "updated": "2014-03-03T14:21:02.988-0500",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
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
      "date": "2009-11-04T21:13:28.000-0500",
      "body": "Have committed a test case for this, but cannot make it fail. Can you investigate and compare with your code?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:14:04.000-0400",
      "body": "Yura, can you verify whether this bug is real, or should we just close the issue?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-01-17T13:00:42.766-0500",
      "body": "I don't think this is a real bug, since it has not been mentioned in a while - there are test cases to verify the described functionality\n"
    }
  ]
}
---
(20:28:26) Justin Obara: we seem to be getting a fluid.fail error when the processDecoratorQueue looks for an id for the decorated element\
(20:30:14) Justin Obara: um... basically it is looking for the id from the cutpoints, but the node doesn't have any id's on it. it is specified with a class\
(20:35:23) Justin Obara: interesting... because basically the element is being rendered but the decorator part is failing... \
(20:35:29) Justin Obara: yura is trying to make a select box

        