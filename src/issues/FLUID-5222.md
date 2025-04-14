---json
{
  "title": "FLUID-5222",
  "summary": "Create a one stop shop build and create function for the prefsEditor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2013-11-22T14:45:38.662-0500",
  "updated": "2024-07-22T09:34:00.852-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-11-25T08:47:19.679-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/440> ) into the project repo at 8890b03ab86de9328780dba20d19065b444cf0df\n"
    }
  ]
}
---
It is a two step process to create a prefsEditor with a schema. First a build has to be run, then the resulting grade needs to be instantiated. To make this process a little more streamlined for an integrator, we should implement a single function that builds and instantiates a prefsEditor and returns the instance of the instantiated prefsEditor.

it might look something like:&#x20;

fluid.prefs.create = function (container, options) {\
// options would include a property for builder options, and another for the prefsEditor\
// generate unique namespace if none supplied\
// run the build\
// return the instantiated prefsEditor\
};

        