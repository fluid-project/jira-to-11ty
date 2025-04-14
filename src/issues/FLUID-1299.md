---json
{
  "title": "FLUID-1299",
  "summary": "OSDPL Styling: \"More tags\" phrase needs more vertical padding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T15:05:47.000-0400",
  "updated": "2008-10-03T12:26:51.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-03T12:25:29.000-0400",
      "body": "Added the following to our theme's CSS\n\n/\\* Custom Tagadelic \"more tags\" top margin. Fluid-1299. \\*/\\\n.block-tagadelic .content .more-link{\\\nmargin-top: 10px;\\\n}\n\nGives it more of a gap.\n\nIteration19\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-03T12:26:51.000-0400",
      "body": "Done.\n"
    }
  ]
}
---
In the tag cloud the phrase "More Tags" needs a little more vertical space to distinguish it from a tag.

Another idea would be to remove the link "More Tags" all together and make the "Find patterns by tag" header clickable.

        