---json
{
  "title": "FLUID-5599",
  "summary": "Expand the message bundle system to be able to locate the bundle for a requested language",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2015-02-25T10:44:36.907-0500",
  "updated": "2016-03-22T11:03:34.745-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5880/",
      "key": "FLUID-5880"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-25T13:02:53.335-0500",
      "body": "The reference to the JAVA naming scheme for resource bundle fallback based on language\\\n<http://docs.oracle.com/javase/7/docs/api/java/util/ResourceBundle.html#getBundle(java.lang.String,%20java.util.Locale,%20java.lang.ClassLoader>)\n\nImplementing this as far as baseName\\_language\\_country would be good enough for now\n\nSee today's channel conversation with Bosmon7\\\n<https://botbot.me/freenode/fluid-work/2015-02-25/?tz=America/Toronto>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-04T15:17:16.499-0400",
      "body": "Merged Antranig's pull request (<https://github.com/fluid-project/infusion/pull/596>) for implementing the localised resource fetcher into the master branch @ 735a2f084bc72cc71338a5856cfae49268374e56\n\nIssued another pull reqeust (735a2f084bc72cc71338a5856cfae49268374e58) to upgrade the prefs framework to fetch localized message bundles.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-05-07T10:44:46.580-0400",
      "body": "Merged into trunk at revision 76c6189 , incorporating fixes to FluidRequests.js as well as the prefs framework\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:35.811-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The current system requires a user to pass in the location of the specific message bundles that are to be used by the prefsEditor, panels, and etc. However to support a language adjuster for the First Discovery Tool <http://issues.fluidproject.org/browse/FLOE-281> we'll need a system that is more robust.

Instead a user should pass in a reference to the base name of message bundle, from there the system will go through an algorithm trying to locate the correct bundle and falling back to a default one if the desired langauge is not located.

e.g.&#x20;

fr-ca is requested.

will look in this order for the message bundle fr-ca -> fr -> en (default)

Additionally the prefsEditor will need to take in a default language as an option, so that we'll know what to fall back to. However, the current language setting will first look into a model value (so that this can be part of a store preference) to set the components language.

        