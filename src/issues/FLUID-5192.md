---json
{
  "title": "FLUID-5192",
  "summary": "Slider icon text not being rendered",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-28T11:22:35.530-0400",
  "updated": "2016-08-12T10:22:37.648-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5680/",
      "key": "FLUID-5680"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-03-27T15:05:28.760-0400",
      "body": "@@joanna vass@@Dana@@Justin Obara There was some conversation about whether or not this is an issue that we should actually fix. Justin, could you clarify what the questions are and perhaps we can move towards fixing or closing this issue.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:49:28.579-0400",
      "body": "I believe the questions are around whether or not those icons should actually have any aria-labels at all. They appear to be purely presentational.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-12T08:00:18.303-0400",
      "body": "The slider icons were marked with role=presentation as a fix for <https://fluidproject.atlassian.net/browse/FLUID-5680#icft=FLUID-5680>. The associated strings should be removed from the message bundles and any other scaffolding left to insert them in the components should be removed.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-08-12T10:22:33.897-0400",
      "body": "The pull request has been merged into the master branch at 8c675a5a4a90a1e8d50074ae08541e067bcb64fe\n"
    }
  ]
}
---
In the two starter panels that use the textfieldSlider (textSize and lineSpacing), there are message strings in the string files that are intended to be rendered into the divs for the icons at either end of the slider. The selectors for these strings are specified in the panel component defaults and the prototrees include them. However, the current HTML templates are missing the selector classnames, and so the strings are not being rendered.

        