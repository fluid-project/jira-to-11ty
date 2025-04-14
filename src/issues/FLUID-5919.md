---json
{
  "title": "FLUID-5919",
  "summary": "Add documentation for fluid.prefs.resourceLoader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-06-16T14:52:49.851-0400",
  "updated": "2016-06-22T19:29:40.236-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-06-17T16:05:18.824-0400",
      "body": "The infusion pull request: <https://github.com/fluid-project/infusion/pull/721>\n\nThe corresponding infusion-docs pull request: <https://github.com/fluid-project/infusion-docs/pull/90>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-06-22T19:29:40.233-0400",
      "body": "The infusion pull request has been merged into the master @ 78f89868fc9478461c33afef58603e4dddfeca63\n\nAntranig added more doc for fluid.fetchResources() and issued an updated infusion doc pull request <https://github.com/fluid-project/infusion-docs/pull/91> which has been merged into the master @ 78f89868fc9478461c33afef58603e4dddfeca63\n"
    }
  ]
}
---
"fluid.prefs.resourceLoader" is used broadly across several projects for template and json file loading. It however doesn't have documentation.

1\. break the "fluid.prefs.resourceLoader" into its own file, probably out of the prefs framework into the core framework so it doesn't rely on pulling out the entire prefs framework in order to use it;\
2\. more test cases;\
3\. documentation.

        