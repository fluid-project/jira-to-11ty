---json
{
  "title": "FLUID-5680",
  "summary": "Icon content should be hidden from assistive technologies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T14:01:24.858-0400",
  "updated": "2016-08-12T07:56:09.518-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4968/",
      "key": "FLUID-4968",
      "summary": "Hide presentational content from screen readers"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5225/",
      "key": "FLUID-5225",
      "summary": "Font icon character codes collide with characters used in iOS"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5192/",
      "key": "FLUID-5192",
      "summary": "Slider icon text not being rendered"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:28:22.938-0400",
      "body": "It's probably enough to remove the aria-label, and possibly also adding a role=\"presentation\" if it is still being picked up by the AT.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T09:05:15.533-0400",
      "body": "for the \"+\" and \"-\" in the tab for the sliding panel, those values are supplied by the message bundle. It may take some reworking to switch to using an icon for those portions.\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-08-11T14:47:58.025-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/620>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-12T07:56:09.498-0400",
      "body": "I believe this may have been reopened by accident instead of being closed.\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools 

* hide decorative icon characters with the aria-hidden="true" attribute. Ex. \<span class="fl-icon-font" aria-hidden="true">\</span>.

- use of characters like “+” in place of icons might confuse AT users as it is interpreted as “plus”.

-solves comment about "Update the labels for the slider images to better describe purpose. Ex instead of “Icon of 3 horizontal lines with narrow space” use, “Narrower spacing between lines”. 

        