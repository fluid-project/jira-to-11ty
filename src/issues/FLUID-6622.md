---json
{
  "title": "FLUID-6622",
  "summary": "When the IoC testing framework times out waiting for an event it should unblock jqUnit so that the error is reported.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2021-05-13T15:12:28.218-0400",
  "updated": "2021-05-13T15:13:20.534-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6622/2_test (ubuntu-latest, 14.x).txt",
      "filename": "2_test (ubuntu-latest, 14.x).txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-13T15:13:20.534-0400",
      "body": "\"2\\_test (ubuntu-latest, 14.x).txt\" are example logs pulled from a failing CI build.\n"
    }
  ]
}
---
Currently when a sequence in the IoC testing framework times out because an event didn't fire, jqUnit remains locked up. In the browser you can find the error in the console. However, in CI (GitHub actions) it just idles till the CI task times out after 20 min, and no errors are reported in its logs. However, the logs do stop at the last completed test.

It would be helpful if the task was unblocked so that the test could complete and the error that is logged in the console is output to the CI logs.

        