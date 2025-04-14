---json
{
  "title": "FLUID-3659",
  "summary": "ProtoTrees: Can't attach decorators to value-bound components",
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
  "reporter": "Anastasia Cheetham",
  "date": "2010-02-12T15:23:04.000-0500",
  "updated": "2011-01-20T15:18:28.700-0500",
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
      "date": "2010-05-27T02:04:37.668-0400",
      "body": "Converted this issue from <https://fluidproject.atlassian.net/browse/ENGAGE-382#icft=ENGAGE-382>, alongside <https://fluidproject.atlassian.net/browse/FLUID-3658#icft=FLUID-3658> work\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T01:04:46.791-0400",
      "body": "Fixed with test case as part of merge of <https://fluidproject.atlassian.net/browse/FLUID-3658#icft=FLUID-3658> work at 9968\n"
    }
  ]
}
---
The new protoTree format does not allow for decoration of nodes that are value-bound to the model: you can only do one or the other.

CollectionSpace has a use-case for this:\
An \<input> field is bound to the model and decorated with a component that submits a query to an autocomplete service. I'm going to have to either add a separate element to the template to attach the decorator to, and associate the element with the \<input> field, or attach the decorator to a container of the \<input>.

        