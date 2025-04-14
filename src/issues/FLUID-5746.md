---json
{
  "title": "FLUID-5746",
  "summary": "Topics button should have aria-expanded attribute",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2015-08-18T15:13:44.939-0400",
  "updated": "2015-09-25T08:07:38.307-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-09-15T15:28:48.689-0400",
      "body": "When the sidebar is in an expanded state, the text should read: \"Hide Topics\".\\\nWhen the sidebar is collapsed, the text should read: \"Show Topics\".\n"
    }
  ]
}
---
The Show/Hide link has role="button". Since it controls the visibility of the sidebar, it should have aria-expanded="true"/"false" property when hidden or showing.

See this example:\
<http://oaa-accessibility.org/example/20/>

        