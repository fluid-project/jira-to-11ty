---json
{
  "title": "FLUID-4788",
  "summary": "Lifecycle functions of the grade component do not fire for the component that uses that grade.",
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
  "reporter": "y z",
  "date": "2012-09-05T00:59:17.320-0400",
  "updated": "2014-03-03T12:41:39.262-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2012-09-05T01:04:13.747-0400",
      "body": "For example we have a component:\n\n```\nfluid.defaults(\"some.component\", {\n    gradeNames: [\"fluid.littleComponent\", \"autoInit\"]\n});\nsome.component.preInit = function (that) {\n    // Code here\n};\n```\n\nAnd then this component is used as a grade like this:\n\n```\nfluid.defaults(\"other.component\", {\n    gradeNames: [\"some.component\", \"autoInit\"]\n});\n```\n\nit's pre init function specified above will not fire.\n"
    },
    {
      "author": "y z",
      "date": "2012-09-05T10:21:19.246-0400",
      "body": "Pull request with the test for the issue is here: <https://github.com/fluid-project/infusion/pull/240>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-10-09T18:23:23.100-0400",
      "body": "Merged into project repo at bdc6d5a1baaeaaa68f588714b2aae83303894851\n"
    }
  ]
}
---
Looks like when we create a non-default grade that has its own lifecycle functions and then use this grade in other components these lifecycle functions do not get activated.

        