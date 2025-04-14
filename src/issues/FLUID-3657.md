---json
{
  "title": "FLUID-3657",
  "summary": "Renderer doesn't implement getAbsoluteComponent(), necessary to process 'parentFullID'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2010-05-18T14:53:14.806-0400",
  "updated": "2011-01-20T15:09:39.882-0500",
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
      "date": "2010-05-19T01:54:14.860-0400",
      "body": "The directive \"parentFullID\" has been removed as of this release. \"this is not recommended functionality and has been withdrawn (full IDs are not guaranteed to remain stable within the tree, although as of this revision they still are - modified value is currently written to field \"finalID\"\"\n"
    }
  ]
}
---
If the component tree for a select uses full IDs for the parent references instead of relative IDs (i.e. uses "parentFullID" instead of "parentRelativeID"), the renderer calls "getAbsoluteComponent()" instead of "getRelativeComponent()" (see fluidRenderer.js, line 753 in v1.2). Unfortunately, the function "getAbsoluteComponent()" does not exist.

        