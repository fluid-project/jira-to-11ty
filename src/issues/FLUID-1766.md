---json
{
  "title": "FLUID-1766",
  "summary": "Defining 2 inline edits makes it unreliable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Nicolaas Matthijs",
  "date": "2008-11-05T10:04:37.000-0500",
  "updated": "2008-12-02T14:45:36.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-11T11:18:33.000-0500",
      "body": "I currently can't verify this issue. I have added a test case to the \"manual tests\" for InlineEdit which makes a second call to fluid.inlineEdits as above, and it seems to be working fine.\n"
    }
  ]
}
---
I defined 2 inline edits like this :&#x20;

fluid.inlineEdits("#wrapper1", {\
useTooltip: true,\
finishedEditing: doSomething,\
defaultViewText: " ",\
});\
fluid.inlineEdits("#wrapper2", {\
useTooltip: true,\
finishedEditing: doSomething,\
defaultViewText: " "\
});

It looked like only the first one got initiated. All of the fields in #wrapper2 didn't do anything.

        