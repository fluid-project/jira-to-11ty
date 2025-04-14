---json
{
  "title": "FLUID-5682",
  "summary": "Hide/show frame requires ARIA to explain behaviour to AT ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T14:06:34.810-0400",
  "updated": "2016-07-08T08:46:30.537-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Sliding Panel",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4426/",
      "key": "FLUID-4426",
      "summary": "Sliding Panel needs ARIA and/or to move focus to beginning of panel when opened to alert screen readers of new content"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-08-05T17:06:22.884-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/619>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-30T10:55:52.420-0400",
      "body": "New pull request which updates the previous one to the the current master branch of infusion,\\\n<https://github.com/fluid-project/infusion/pull/640>\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools 

* Explain the behaviour of the hide/show frame by using the aria-expanded attribute on the toggle button.
* inform the user on the state of the frame, and provide feedback when the hide/show button is used.
* An aria-controls attribute that is the value of the frame’s id will let the user know that the toggle button is associated with the frame.

        