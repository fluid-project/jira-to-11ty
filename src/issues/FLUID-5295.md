---json
{
  "title": "FLUID-5295",
  "summary": "Condition value of \"null\" is treated in a peculiar and inconsistent way by condition expander",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Antranig Basman",
  "date": "2014-03-25T02:19:35.059-0400",
  "updated": "2014-03-25T02:19:35.059-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The condition transformer is hard-coded to apply a special meaning to the value "null" when seen as a condition value. In its implementation is \
if (condition === null) {\
return undefined;\
}\
There seems to be no reason to retain this branch and it should be removed. It's worth noting that the condition expander differs subtly from some others as well - in that a value of "undefined" for the condition is also interpreted. It has become a general standard that a transformer becomes entirely inactivated by being supplied values which are all "undefined". Certainly, if **every** input to the condition transformer is undefined, this remains the case - but we should start working harder to ensure there is a consistent idiom for these cases across all transformers, and write down a standard that applies to them.

        