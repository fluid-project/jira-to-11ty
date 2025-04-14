---json
{
  "title": "FLUID-6357",
  "summary": "UIO should have aria-expanded attribute on toggle button, not iframe div",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Alan Harnum",
  "date": "2018-12-03T13:50:42.931-0500",
  "updated": "2018-12-04T16:35:35.264-0500",
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
      "author": "Alan Harnum",
      "date": "2018-12-03T13:52:08.364-0500",
      "body": "\"When authors use collapsible content, for example, to hide navigation menus or lists of content, the **triggering link or button** should indicate to screen reader users whether the collapsable content below is in the expanded or in the collapsed state. The `aria-expanded` attribute is used for this purpose.\" - <https://www.w3.org/WAI/GL/wiki/Using_aria-expanded_to_indicate_the_state_of_a_collapsible_element>\n\nSome examples from Bootstrap at <http://v4-alpha.getbootstrap.com/components/collapse/>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-12-04T16:35:31.925-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/948) has been merged into the project repo at [this commit](https://github.com/fluid-project/infusion/commit/2ca90f6e6db043849826dd09418824aac24394f6).\n"
    }
  ]
}
---
Per a conversation with @liskovoi, the aria-expanded attribute should go on the toggle buttons, not the iframe div - see links to examples in comments.

        