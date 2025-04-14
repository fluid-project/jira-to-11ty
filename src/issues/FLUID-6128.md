---json
{
  "title": "FLUID-6128",
  "summary": "Failure to match IoCSS selector with more than 2 components from root",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2017-02-12T20:20:21.116-0500",
  "updated": "2017-02-14T11:18:45.340-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.1",
    "3.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-02-14T11:18:42.256-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/810> has been merged into the project repo master branch at 61267240400df33865024a2b54686263bec58e10\n"
    }
  ]
}
---
An IoCSS selector with more than 2 components starting at the root component, such as "{/ remote-component-root fluid.modelComponent}.options.gradeNames", causes a failure when instantiating any component which matches the final component. This has not been noticed so far since all such global selectors have been of the simple form {/ fluid.modelComponent} etc. The failure cause is that there is no contextHashes entry for the root component which has always been instantiated by a special route and is not a genuine component.

        