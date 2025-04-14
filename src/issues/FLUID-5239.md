---json
{
  "title": "FLUID-5239",
  "summary": "Cannot reference a component by name if it has a segment starting with \"source\"",
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
  "reporter": "Justin Obara",
  "date": "2013-12-04T10:42:57.434-0500",
  "updated": "2014-03-03T11:24:43.836-0500",
  "versions": [],
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
      "author": "Justin Obara",
      "date": "2013-12-04T10:48:30.340-0500",
      "body": "Submitted a pull request containing a unit test to demonstrate the issue <https://github.com/fluid-project/infusion/pull/445>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2014-02-17T18:56:39.814-0500",
      "body": "Reviewed, tested (on FF, Safari, Chrome and IE on both Windows and Mac OS X), and pushed to master:\n\n<https://github.com/fluid-project/infusion/commit/b76917b51b44ecdbc53b0574d27f19a9423dead6>\n"
    }
  ]
}
---
A component that has a name starting with "source" cannot be referenced through IoC by its name. Using "{that}" does still work. Although this won't allow the parent to be referenced from a subcomponent.

Example:&#x20;

fluid.defaults("fluid.sourceSomeName", {\
gradeNames: \["fluid.eventedComponent", "autoInit"],\
listeners: {\
"onCreate.pass": {\
listener: "console.log",\
args: \["{that}"] // outputs the component\
},\
"onCreate.fail": {\
listener: "console.log",\
args: \["{sourceSomeName}"] // outputs undefined\
}

}\
});&#x20;

        