---json
{
  "title": "FLUID-5207",
  "summary": "Rename the preferences framework's \"msgBundle\" and \"stringBundle\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-11-06T12:45:58.632-0500",
  "updated": "2014-04-24T16:20:55.770-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:51:34.526-0400",
      "body": "Anastasia Cheetham, can you please start a conversation on list about naming these?&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-24T14:57:45.908-0400",
      "body": "Based on the conversation in the channel today <https://botbot.me/freenode/fluid-work/2014-04-24/?tz=America/Toronto>\n\n\"msgBundle\" -> \"msgResolver\"\\\n\"stringBundle\" -> \"msgLookup\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-24T15:42:04.421-0400",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/infusion/pull/498>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-04-24T16:20:49.321-0400",
      "body": "Merged into the project repo @ 78d3600b61697a5063f066735b3943dfbab1b1b9\n"
    }
  ]
}
---
A panel component in the prefs framework now has two properties: "msgBundle" and "stringBundle." These two names are awfully similar – at a glance, there's no clue as to what the difference is. We expect integrators to be working with these properties, so it would probably be helpful to them if the properties were renamed to something a bit clearer.

"msgBundle" is actually a messageResolver component, so perhaps "msgResolver" ?

"stringBundle" is a tool to facilitate using the msgBundle; Not sure yet what to call this, but I'll think on it.

        