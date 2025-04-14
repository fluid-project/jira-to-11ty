---json
{
  "title": "FLUID-5509",
  "summary": "Storing NaN via a \"new-style applier\" will cause infinite recursion in DataBinding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-09-13T12:48:00.261-0400",
  "updated": "2017-02-27T15:49:18.980-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5632/",
      "key": "FLUID-5632"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-03T15:45:47.084-0500",
      "body": "I was sure a fix had been tested for this issue but it appears to only exist \"in my mind\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:09:04.909-0400",
      "body": "STILL apparently only \"in my mind\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:45:29.600-0400",
      "body": "No - actually resolved in <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> branch on Apr 17 2015 - <https://github.com/amb26/infusion/commit/06d4ea1dfcdbc407ad5c2ecccd54c5d500fb2232>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:45:48.593-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
Any change request attempting to store a float NaN value into a model via the relay-aware applier will cause an infinite recursion in DataBinding. This is because the model will never be considered to have stabilised since each value always compares different to its original value via standard IEEE-754 comparison rules.

The simplest fix will be to adapt the fluid.model.isSameValue utility.

        