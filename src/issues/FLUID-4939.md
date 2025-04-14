---json
{
  "title": "FLUID-4939",
  "summary": "Init functions that are specified in the defaults run multiple times when modifying gradeNames at instantiation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-03-20T09:27:42.202-0400",
  "updated": "2013-03-26T08:48:12.397-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-03-20T09:32:43.348-0400",
      "body": "Added a test case in a branch on my github repo\\\n<https://github.com/jobara/infusion/tree/FLUID-4939>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-22T12:21:06.923-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/272> into project repo at e6152e3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-22T13:26:37.130-0400",
      "body": "Found another variant of the issue. This time it happens when there is a circular grade reference. For example if the component adds a grade that had included the component itself as a grade. The framework is supposed to ignore duplicate grades, so this should work. I've added another test to my branch for this.\n\nExample:\n\nfluid.defaults(\"fluid.someComp\", { \\\ngradeNames: \\[\"fluid.littleComponent\", \"autoInit\"] \\\nfinalInitFunction: \"fluid.someComp.finalInit\" \\\n});&#x20;\n\nfluid.someComp.finalInit = function (that) { //do something};&#x20;\n\nfluid.defaults(\"fluid.newGrade\", {\\\ngradeNames: \\[\"fluid.someComp\", \"autoInit\"]\\\n});\n\n// This will cause fluid.someComp.finalInit to be executed twice. \\\nfluid.someComp({ \\\ngradeNames: \\[\"fluid.newGrade\"] \\\n});&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-24T15:26:36.636-0400",
      "body": "Thanks for the additional test case, jobara - this has now also a fix applied\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-25T11:05:40.502-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/273> merged into project repo at 8211b41\n"
    }
  ]
}
---
If you specify init functions in the components defaults and modify the components gradeNames when you initialize it. The init functions will be run multiple times.

Example:

fluid.defaults("fluid.someComp", {\
gradeNames: \["fluid.littleComponent", "autoInit"]\
finalInitFunction: "fluid.someComp.finalInit"\
});

fluid.someComp.finalInit = function (that) { //do something};

// This will cause fluid.someComp.finalInit to be executed twice.\
fluid.someComp({\
gradeNames: \["newGrade"]\
});

        