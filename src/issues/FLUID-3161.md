---json
{
  "title": "FLUID-3161",
  "summary": "Textual update of progress should be part of the component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Reopened",
  "reporter": "Justin Obara",
  "date": "2009-09-08T13:39:58.000-0400",
  "updated": "2014-04-02T15:15:00.917-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2457/",
      "key": "FLUID-2457",
      "summary": "[Progress] Progress could use a few events for integrators to be able to use in integrations"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T10:08:13.982-0400",
      "body": "Appears to be fixed. Please confirm and close the issue?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-13T09:24:10.119-0400",
      "body": "The user can pass in a string to be displayed with the progress bar.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-13T15:11:41.630-0400",
      "body": "Closed in error, as the component does not do this yet. Maybe it should be handled through an event that returns the current progress instead.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-17T10:34:19.308-0500",
      "body": "Maybe an on update event would help.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:15:00.917-0400",
      "body": "This still seems to be an issue as of the pre-1.5 evaluation\n"
    }
  ]
}
---
Textual update of progress should be part of the component

The progress component should both show an animated progress bar and update via text the progress state, for example "55 % Complete".

An example of how this could look is in the Progress Demo\
file:///Users/jmo/Documents/Aptana%20Studio/fluid-all/infusion/src/webapp/standalone-demos/progress/html/pop-up-progress.html

        