---json
{
  "title": "KETTLE-22",
  "summary": "Review and remove kettle.use.* system which requires app-wide enabling of request extensions",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2014-01-13T22:47:40.065-0500",
  "updated": "2018-04-05T20:16:02.368-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2018-04-05T20:16:02.356-0400",
      "body": "kettle.use.\\* was removed in the Kettle rewrite of 2015 leading to Kettle 1.0\n"
    }
  ]
}
---
The current Kettle implementation currently operates a peculiar system requiring users to enable the presence of various extensions on an app-wide basis by applying grades of the form kettle.use.\* (e.g. kettle.use.CORS) before particular facilities can be enabled on particular handlers.

This is most likely a legacy of the underlying express "middleware" system which requires this kind of static configuration in advance, as well as older versions of our grade handling system which weren't capable to do the necessary gearing automatically. We should review this system and try to remove it, in favour of a system which can apply arbitrary grades directly to request handlers as a "one stop shop" for applying request-directed behaviour - the system should be capable of parsing such grades in advance and ensuring the necessary middleware or whatever becomes suitably configured. This would be useful, for example, for session support which currently has to be enabled in two places (kettle.use.session as well as request handler session options) and the recently implemented CORS support that in KETTLE-21 we were just speculating should really be configurable on a handler rather than an app basis.

        