---json
{
  "title": "FLUID-4162",
  "summary": "Allow the creation of an autoInit component and namespace registration with the same name to occur in any order",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-29T00:57:37.812-0400",
  "updated": "2014-03-03T13:12:05.099-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It is a helpful practice for users of a component to be able to structure a namespace around the name of its creator function. Whilst this is done in code, this always involves some amount of time-dependent "juggling" as the Javascript function object must be created FIRST, and it can never be interchanged with an object of the same name. Now that all of this machinery is automated in the framework, it is possible to provide a better experience for both developers and users. Right now the same time-dependency is present - that if, for example, issuing&#x20;

fluid.defaults("fluid.myComponent",\
gradeNames: \["fluid.littleComponent", "autoInit"

and THEN issuing

fluid.registerNamespace("fluid.myComponent.subNamespace") etc.\
will work, the opposite order will not, since the autocreation of the component's creator will blast the existing namespace contents. We should update the "autoInit" pipeline so it "grandfathers in" any existing contents of the record.

        