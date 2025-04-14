---json
{
  "title": "FLUID-4606",
  "summary": "Enlarging inputs doesn't work for elements other than \"input\" and \"button\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-02-16T11:57:01.473-0500",
  "updated": "2024-07-22T14:28:22.578-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-11-09T11:57:47.799-0500",
      "body": "Updated the name and description in light of <https://issues.fluidproject.org/browse/FLUID-6053>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:28:22.398-0400",
      "body": "As part of <https://fluidproject.atlassian.net/browse/FLUID-6605> css custom properties were added to allow for integrators to style other widgets and elements based on the size changes.\n"
    }
  ]
}
---
The "Enlarge buttons, menus, text-fields, and other inputs" option of the "emphasis" panel currently has several limitations:

* Many user interfaces currently use anchor tags for what are semantically and visually buttons. When users choose the "make inputs larger" option of UIO, these "anchor-buttons" do not enlarge. We are considering merging anchors and buttons into a single category, which would alleviate this, but we're also considering an expert level which would maintain the differentiation. We could consider stylesheets that are aware of the ARIA 'button' role, which would help when it's used.
* When widgets intended for user input have been built up of markup other than "input" and "button", they do not enlarge; the jQuery slider is one example of this.

        