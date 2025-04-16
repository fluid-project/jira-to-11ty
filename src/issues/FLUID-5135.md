---json
{
  "title": "FLUID-5135",
  "summary": "Reset on grades demo also resets schema demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2013-09-16T15:09:50.896-0400",
  "updated": "2021-07-29T01:38:43.837-0400",
  "versions": [
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:45:28.853-0400",
      "body": "The issue here is that all of the demos and etc. use the same cookie to store the preferences.\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-06T08:02:31.789-0500",
      "body": "I would like to fix this issue but i cannot find the grades demo anywhere in the infusion repo, any help please.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-06T08:44:59.183-0500",
      "body": "Mohamed Shadab I've updated the description with links to the demos in action. You can find these in the repo at <https://github.com/fluid-project/infusion/tree/master/examples/framework/preferences/usingGrades> and <https://github.com/fluid-project/infusion/tree/master/demos/uiOptions.>\n\nI would also suggest looking over all of the UIO/Prefs Framework related demos, examples, and manual tests to ensure that they are all working properly. \n"
    }
  ]
}
---
The reset for the grades and schema demos also resets the settings for the other demo. Making changes to setting on a particular demo does not effect the other demo.

Steps to reproduce:

1. Load the grades demo and set the contrast to yellow on black
   1. <https://build.fluidproject.org/infusion/examples/framework/preferences/usingGrades/>
2. Load the schema demo - note that the contrast is not yellow on black
   1. <https://build.fluidproject.org/infusion/demos/uiOptions/>
3. Hit 'reset' on the schema demo
4. Reload the grades demo - note that the contrast setting has been reset

        