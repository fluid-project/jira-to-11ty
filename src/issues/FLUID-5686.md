---json
{
  "title": "FLUID-5686",
  "summary": "Checkboxes are represented inconsistently ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T14:17:24.433-0400",
  "updated": "2017-04-13T17:14:55.930-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5708/",
      "key": "FLUID-5708"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5539/",
      "key": "FLUID-5539"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-4990/",
      "key": "FLUID-4990",
      "summary": "The transition for the Table of Contents toggle, is broken in IE 10"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5006/",
      "key": "FLUID-5006",
      "summary": "Update the font size of checkbox labels for UIO based on design spec"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5350/",
      "key": "FLUID-5350",
      "summary": "Keyboard focus styling of toggles in UIO could be improved (Chrome)"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5402/",
      "key": "FLUID-5402",
      "summary": "table of contents toggle styling is broken when linespacing changed"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-4989/",
      "key": "FLUID-4989",
      "summary": "When in the \"Off\" position the alignment of the text and knob are off for the table of contents toggle"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5738/",
      "key": "FLUID-5738"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5686/checkbox.png",
      "filename": "checkbox.png"
    }
  ],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-06-11T14:59:36.050-0400",
      "body": "Updated checkbox design for UIO <https://www.dropbox.com/s/02j7ilnhxd7c8hv/UIO_mock.pdf?dl=0>\n"
    },
    {
      "author": "Dana",
      "date": "2015-09-01T16:10:03.007-0400",
      "body": "We have decided to convert all on/off switches to check boxes (rather than the other way around). For now we will use browser default check boxes, as long as they are large enough.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-19T13:55:34.624-0500",
      "body": "Seems we have switched back to wanting to use the on/off toggles, but with the new designs ( \\\n<https://wiki.fluidproject.org/display/fluid/%28Floe%29+User+Interface+%28Learner%29+Options+Mobile+and+Responsive+Design> )\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-13T17:14:52.143-0400",
      "body": "[The infusion pull request ](https://github.com/fluid-project/infusion/pull/815)has been merged into the master branch at 0ca2eac0a06731f99588399c9abd3e9d29732235\n\n[The corresponding infusion-docs pull request](https://github.com/fluid-project/infusion-docs/pull/117) has been merged into the master branch at 2950c5bed58bad32d670fa723d6625862bbd85dc\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools 

Checkbox styling is inconsistent throughout tool. Sometimes a regular checkbox, other times the on/off toggle

        