---json
{
  "title": "FLUID-3243",
  "summary": "Make the Infusion build using the buildutils.xml file instead of having the identical tasks defined in it. ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-10-06T17:03:14.000-0400",
  "updated": "2011-03-17T15:06:06.091-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-14T14:20:15.000-0400",
      "body": "Note that the code to minify engage client is very similar to infusion.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-09T14:29:43.000-0500",
      "body": "This has been done. We should remember to put targets in here that will be useful to other builds such as engage.\n"
    }
  ]
}
---
Right now there are tasks that are used by both the Infusion and the Engage builds. Those tasks have been pulled out into a 'buildutils.xml' file for the engage build. The buildutils file should be put into the infusion/build-scripts directory and the Infusion build should use those instead of defining the tasks.&#x20;

As part of this, we should move the jslint task into the buildutils file so that the engage build also provides the lint support.&#x20;

        