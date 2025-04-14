---json
{
  "title": "FLUID-1952",
  "summary": "Committed code should not have console.log() functions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-12-09T15:03:35.000-0500",
  "updated": "2011-01-30T11:58:17.762-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:02:14.000-0500",
      "body": "Bug Parade  0.8 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-11T12:37:51.000-0500",
      "body": "I searched the code base for console.log, and didn't find anything else in our code besides nested.html. I updated that file to use fluid.log, and now IE doesn't complain anymore.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T18:38:14.000-0500",
      "body": "I have reviewed this, and found some stray references in \"versioning/list.html\". These have been updated to fluid.log, but unfortunately the sample doesn't seem to work any more - the 0.8 version of the reorderer no longer works,\\\napparently because of some form of JQuery UI conflict. Other than this, I confirmed that no unguarded references to \"console\" occur in our codeset. Some 3rd party code (jquery.selectbox, tinyMCE, testrunner, etc.) do make use of console.log, as do we as an option in Fluid.js, but these either perform a guard to check for existence, or (more disagreeably in the case of 3rd party code) assign a dummy value to it. We can sign this one off\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:28:33.000-0500",
      "body": "I've reviewed both Anastasia's (r6481) and Antranig's (r6511) commits, and they're just fine. +1 on these for inclusion in Infusion 0.8.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:24:36.000-0500",
      "body": "Verified fix on the two pages mentioned in the above comments, using:\n\nIE 6 (Win XP)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:39.366-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
Committed code should not have console.log() functions

at least nested.html has a call to console.log

        