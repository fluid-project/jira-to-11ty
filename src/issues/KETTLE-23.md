---json
{
  "title": "KETTLE-23",
  "summary": "Improve factoring of Kettle's \"kettle.tests.testCaseHolder\"",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2014-01-15T02:02:23.064-0500",
  "updated": "2014-01-15T02:02:23.064-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The base grade "kettle.tests.testCaseHolder" currently contains various extraneous material, for example a "cookieJar" and a "secret" which do not belong there. We should devolve these out to specialised grades as well as provide a scheme whereby participants in the Kettle "buildTestCase" system can supply custom grades which will be merged into the resulting test case. This appeared in any case to be a requirement to resolve an options expansion bug in the GPII where material actually destined for the LifecycleManager which resembled IoC expressions would be corrupted through being expanded through the expansion process for the Kettle testCaseHolder grade.

        