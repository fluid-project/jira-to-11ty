---json
{
  "title": "FLUID-4776",
  "summary": "Implement facility for automatically registering initFunctions which conform to a particular naming scheme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2012-08-22T15:08:46.214-0400",
  "updated": "2024-07-22T09:36:34.722-0400",
  "versions": [
    "1.4"
  ],
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
      "author": "Michelle D'Souza",
      "date": "2012-08-29T16:22:40.975-0400",
      "body": "Merged into project repo at 94149c04b1515082042d1b9e60259306b2797b64\n"
    }
  ]
}
---
Already a convention has been established, that involves boilerplate configuration as follows:

fluid.defaults("fluid.tests.child4257", {\
gradeNames: \["fluid.eventedComponent", "autoInit"],\
preInitFunction: "fluid.tests.child4257.preInit"  \
});

It should be the case that any function which conforms to such a naming scheme (consisting of the component name followed by one of the recognised lifecycle function names, preInit, postInit or finalInit) is automatically registered as a handler for the relevant lifecycle point.

        