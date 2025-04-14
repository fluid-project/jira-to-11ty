---json
{
  "title": "ENGAGE-124",
  "summary": "Remove old demos and files from the Engage space",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-14T11:46:26.000-0400",
  "updated": "2009-11-03T11:26:17.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-14T16:48:39.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-15T09:46:20.000-0400",
      "body": "Performed the removal and moving tasks.\n\nThe moved directories went into an \"engage\" space in the incubator\n\n<https://source.fluidproject.org/svn/incubator/engage/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-16T12:25:37.000-0400",
      "body": "need to remove some more files\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-16T12:26:50.000-0400",
      "body": "need to move java/org/fluidproject/engage directory to engaeg/server/space\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-16T15:07:23.000-0400",
      "body": "We also need to update the kettle demos (cherry and jsgi) to work within the current single-app model.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-16T18:30:53.000-0400",
      "body": "Justin, Yura, Michelle, and I have fiinshed this work for Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-16T19:06:28.000-0400",
      "body": "We forgot to move the ScreenNavigator's tests out of engage-core.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-16T19:14:36.000-0400",
      "body": "After punting SN's unit tests out, we're done here.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-19T09:24:10.000-0400",
      "body": "Commits for r8333 to r8340 were incorrectly filed against FLUID-124 instead of <https://fluidproject.atlassian.net/browse/ENGAGE-124#icft=ENGAGE-124>&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:26:17.000-0500",
      "body": "closed as per Colin Clark's comments on Oct 16\n"
    }
  ]
}
---
Remove old demos and files from the Engage space

remove:\
the pic flip artifact html page,\
integration\_demo directory,\
jQueryLoad.js (from the screen navigator)\
The pic flip artifact page is no longer needed,  also the Integration\_demo directory can be removed.\
Need also to remove:\
browse/spec\
browse/spec/\*\
framework/spec\
framework/spec/\*

leave in incubator\
The mobileFSS\_demo directory.\
The screenNavigator directory\
Mapping (currently in engage server)

        