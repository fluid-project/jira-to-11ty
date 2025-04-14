---json
{
  "title": "KETTLE-21",
  "summary": "Review and improve CORS support for flexibility and security issues",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2014-01-13T22:43:09.364-0500",
  "updated": "2014-01-13T22:43:09.364-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Today we committed an early implementation of CORS support at <https://github.com/fluid-project/kettle/pull/9> under <http://issues.gpii.net/browse/GPII-515> which was necessary to assure basic communications between the PCP and PMT preference management tools being demonstrated at the EU meeting this week.

However, this implementation has clear limitations regarding configurability and almost certainly exposes applications to undesirable security risks. For example, the origin detection policy (currently middleware.js line 171)

origin === "\*" || origin.indexOf(reqOrigin) > -1 ? reqOrigin :

is very crude, and there is the more serious limitation that CORS must be enabled on an entire Kettle app instead of on a single handler as would be consistent with minimising exposure.

We should also take the opportunity to deploy REAL tests of CORS (that is, those involving a real browser as client) since as we discovered this week, our "notional" tests which only verify the presence of various headers are deficient in assuring real behaviour. This would be done using phantomjs or a similar package.

        