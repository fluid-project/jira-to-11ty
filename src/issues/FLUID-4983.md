---json
{
  "title": "FLUID-4983",
  "summary": "Resolve demands blocks issued against grades",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-04-19T16:03:35.080-0400",
  "updated": "2015-06-17T10:31:43.552-0400",
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
      "author": "Antranig Basman",
      "date": "2015-03-31T13:00:37.288-0400",
      "body": "This was fixed some years ago. However, demands blocks will shortly be eliminated from the framework\n"
    }
  ]
}
---
It would be helpful that the framework can resolve the demands block issued against grades, not only the end components.

For example, components "comp1" and "comp2" use the same grade:

fluid.defaults("fluid.comp1", {\
gradeNames: \["fluid.oneGrade", "autoInit"],\
...\
});

fluid.defaults("fluid.comp2", {\
gradeNames: \["fluid.oneGrade", "autoInit"],\
...\
});

The ideal is to have the below type of demands blocks resolved and applied to all the components that use this grade.

fluid.demands("fluid.oneGrade", \["fluid.context"], {\
options: {\
...\
}\
});

        