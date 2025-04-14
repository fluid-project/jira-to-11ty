---json
{
  "title": "FLUID-5219",
  "summary": "preference framework components should share a messageResolver",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2013-11-21T15:19:51.416-0500",
  "updated": "2015-06-26T10:03:17.369-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
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
      "date": "2015-06-15T10:56:17.373-0400",
      "body": "The process was changed to have the messageLoader fetch the bundles for each panel separately and pass these down to the panel's own messageResolver. See <https://fluidproject.atlassian.net/browse/FLUID-5597#icft=FLUID-5597>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:01.720-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Currently the message loader retrieves all of the messages to be used in prefsEditor stack. These are all passed down as parent bundles and used by each components own messageResolver. This leads to a lot of overhead in creating messageResolvers. Mainly this happens by the panels which are all rendererComponents and create message resolvers automatically.

        