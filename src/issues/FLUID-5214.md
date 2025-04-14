---json
{
  "title": "FLUID-5214",
  "summary": "modelRelay should not define sourceApplier as null",
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
  "date": "2013-11-19T10:38:48.008-0500",
  "updated": "2013-11-20T14:26:02.049-0500",
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
      "date": "2013-11-20T11:23:35.598-0500",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/436> ) that replaces the default sourceApplier with a comment about how to supply one.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-20T14:25:58.391-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/436> ) merged into the project repo at 5a3bcdf175c4f0cd3530619fd8f750490d1c0882\n"
    }
  ]
}
---
The modelRelay grade defines an null sourceApplier. Likely it is here just to illustrate the option. However, if another model relay is added ahead of a configured one, for example when it is supplied as an option during instantiation, it will override the sourceApplier back to null.

Instead a comment should be used to indicate that a sourceApplier option is required.

        