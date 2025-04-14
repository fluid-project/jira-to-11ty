---json
{
  "title": "FLUID-526",
  "summary": "jARIA aria states require namespace prefix for FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "David Bolter",
  "reporter": "David Bolter",
  "date": "2008-04-23T23:21:26.000-0400",
  "updated": "2009-06-15T10:43:29.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Bolter",
      "date": "2008-04-23T23:23:07.000-0400",
      "body": "trivial fix.\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-04-23T23:24:35.000-0400",
      "body": "I think this is a real issue, and a useful fix, but remember... I didn't sleep much last night 🙂\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-04-24T12:31:45.000-0400",
      "body": "Fixed in <http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/jARIA/jARIA.js> but not in Fluid's copy.\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-04-24T12:38:08.000-0400",
      "body": "Hold off on this fix... I'm getting different information now.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-06-15T10:43:29.000-0400",
      "body": "We have switched to using the build in ARIA support in jQuery UI instead of jARIA.&#x20;\n"
    }
  ]
}
---
In FF2, the jaria states should have a aaa: prefix. This is fixed at <http://code.google.com/p/jqueryjs/source/browse/trunk/plugins/jARIA/jARIA.js>

Sorry for the confused with the initial reporting of this bug.

        