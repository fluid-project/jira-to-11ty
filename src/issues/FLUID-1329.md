---json
{
  "title": "FLUID-1329",
  "summary": "inline edit - undo/redo  do not receive focus",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-27T14:48:11.000-0400",
  "updated": "2009-01-14T13:41:50.000-0500",
  "versions": [
    "0.6beta1",
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, Opera, FF3 OSX10.4\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1317/",
      "key": "FLUID-1317",
      "summary": "Can't tab to the undo/redo icons in Opera"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1317/",
      "key": "FLUID-1317"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1322/",
      "key": "FLUID-1322"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:59:35.000-0400",
      "body": "Likely fixed now that undo/redo are links\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-10-30T14:29:53.000-0400",
      "body": "Still an issue in all the browsers specified. Not tested in Safari.\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-10-30T14:30:12.000-0400",
      "body": "See comments - still an issue.\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-17T17:08:27.000-0500",
      "body": "v 0.6 still a problem for FF2 and FF3 OSX10.5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T11:55:39.000-0500",
      "body": "I think this may have been caused by the a setting in the \"Keyboard & Mouse\" settings in Mac OS. Full keyboard access should be set to \"All Controls\" and not just \"Text boxes and lists only\"\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-14T12:22:15.000-0500",
      "body": "You are right Justin. I would close this - but there is no \"Not an issue\" choice. Thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T13:41:50.000-0500",
      "body": "Confirmed  as a settings error and not a bug with component. See previous comments\n"
    }
  ]
}
---
Tab skips over undo/redo links

dev-iteration43

        