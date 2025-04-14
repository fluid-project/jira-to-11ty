---json
{
  "title": "FLUID-4540",
  "summary": "It is impossible to have an expander in listeners block (demands in particular).",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2011-11-25T16:47:29.681-0500",
  "updated": "2014-03-03T13:02:26.525-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-02-19T14:50:48.317-0500",
      "body": "Resolved by merge of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> branch at revision 91d5d1\n"
    }
  ]
}
---
It currently impossible to provide an expandable listener to the event through the demands block in particular.\
I was able to fix the issue bu adding this inside fluid.mergeListeners

```
if (value.expander) {
    value = fluid.expandOptions(value, that);
}
```

&#x20;before the last two lines.\
The issue is that fluid.event.resolveListenerRecord assumes that if the listener record is not primitive it has a listener field inside. Which is not the case when you have listener record as an expander.

        