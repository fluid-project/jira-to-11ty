---json
{
  "title": "FLUID-2719",
  "summary": "Make modified builds a parameter option instead of a seperate ant target",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-05-13T11:43:55.000-0400",
  "updated": "2009-11-13T09:15:03.000-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-13T14:28:31.000-0400",
      "body": "Removed the modifiedReleaseBuild and modifiedCustomBuild targets. Now to create a modified build (that incorporates head rewriting to point at the single js and css files), you now just call a build with the following parameter -DrewriteHead=\"true\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T13:35:33.000-0400",
      "body": "some refactoring needed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:04:30.000-0400",
      "body": "Some refactoring. Renamed checkCondition to checkRewriteStatus. Removed the dependency on removing js files from the removing css task. Added in an additional \\<antcall> task rewriteHTMLHead to call both the rewriting of the css and js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:15:03.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Make modified builds a parameter option instead of a seperate ant target

The modifiedReleaseBuild and modifiedCustomBuild should be incorporated into the standard releaseBuild and customBuild tasks, but use a parameter to turn  them on.

        