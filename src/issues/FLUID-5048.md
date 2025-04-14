---json
{
  "title": "FLUID-5048",
  "summary": "Label \"for\" attributes not being set correctly for multiple uses of the same template",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-12T15:47:32.194-0400",
  "updated": "2013-07-05T11:22:40.957-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-12T16:06:17.213-0400",
      "body": "I've added a test case for this:\\\n<https://github.com/acheetham/infusion/blob/FLUID-5048/src/webapp/tests/framework-tests/renderer/js/RendererIoCTests.js>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-19T10:58:37.500-0400",
      "body": "I discovered this problem when working on the VIdeoPlayer integration with the new UIO: The VP captions and transcripts panels are almost identical, so they share a common HTML template. When the two panels are rendered, clicking the checkbox label in the second panel modifies the checkbox in the first panel, since the second label has \"for=\" referencing the first checkbox.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-06-28T16:53:46.426-0400",
      "body": "Merged into trunk at revision 8f13b8e\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-07-05T11:22:40.942-0400",
      "body": "I've tried this out in the Video Player, and the issue is, indeed, resolved there.\n"
    }
  ]
}
---
When a template contains a label element with a for attribute referencing a rendered element, the id of the rendered element and the label's for attribute are set to match the selector name/model property.

When a single template is used more than once (e.g. when two subcomponents both use it), both of the labels' "for" attributes are set to the ID of the element for the first occurrence.

        