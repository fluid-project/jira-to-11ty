---json
{
  "title": "FLUID-5072",
  "summary": "UIO manual test missing reference to message bundle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2013-06-27T14:04:41.581-0400",
  "updated": "2013-06-27T14:33:02.641-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-27T14:22:00.011-0400",
      "body": "Issued a pull request ( <https://github.com/fluid-project/infusion/pull/351> ).\n"
    },
    {
      "author": "y z",
      "date": "2013-06-27T14:32:57.979-0400",
      "body": "Committed and merged: 3273c52e9473e1d4f5cb96a39f8493a67acae35e\n"
    }
  ]
}
---
The Some Kind of News manual test for UIO is missing the i18n.js file which supplies the message bundles. \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/SomeKindOfNews.html>

The missing i18n.js file, causes the IoC system to throw an error, preventing UIO from instantiating.

        