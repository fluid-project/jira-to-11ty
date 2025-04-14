---json
{
  "title": "FLUID-3211",
  "summary": "Update the README.txt file ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-09-28T14:15:57.000-0400",
  "updated": "2011-01-13T16:54:19.252-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-28T14:16:02.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T14:02:55.000-0400",
      "body": "I've removed the old ImageReordererRSF.html template from the Image Reorderer. In the off change that an RSF-based user is actually using this template, or if someone is ajaxing it into their application, we should add a note to the README file explaining the change and how they can address any problems it may cause:\n\n\"The old ImageReordererRSF.html template, used by RSF-based applications with the Image Reorderer, has been removed from this Infusion release because it can be confusing for users. If you rely on this template, you can retrieve the file from the Infusion 1.1.1 release here: <http://source.fluidproject.org/svn/fluid/infusion/tags/fluid-1.1.1/src/webapp/components/reorderer/html/ImageReordererRSF.html>\"\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-15T11:08:44.000-0400",
      "body": "Readme has been updated and frozen\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T10:48:24.000-0500",
      "body": "as per previous comment\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:09.589-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Be sure to update the version number, the zip file names (which include the version number), the "What's New" section with a list of features of the release, folder hierarchy if it has changed at all (e.g. new sample-code folders added), the list of supported browsers if it has changed, and the "Known Issues" section with highlights of the known issues.&#x20;

        