---json
{
  "title": "FLUID-5001",
  "summary": "In the full with preview manual test for UIO, the preview document cannot be found.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-04-29T14:30:25.533-0400",
  "updated": "2013-04-30T08:46:38.792-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-29T15:36:38.197-0400",
      "body": "Submitted a pull request to fix the URL <https://github.com/fluid-project/infusion/pull/318>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-04-29T16:16:18.227-0400",
      "body": "Merged into project repo at 1e643275fe5b83aafe327c71b2f8d6ad7aa79088\n"
    }
  ]
}
---
The url for the preview page has a typo.

The URL provided is: \
<http://build.fluidproject.org/infusion/tests/manual-tests/html/UIOptionsPreview.html>

but should be\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/uiOptionsPreview.html>

        