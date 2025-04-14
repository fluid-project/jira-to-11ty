---json
{
  "title": "FLUID-5678",
  "summary": "Detailed headings and instructions describing purpose of form inputs ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kaye Mao",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T13:53:31.067-0400",
  "updated": "2015-09-30T12:18:36.203-0400",
  "versions": [
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
      "url": "/browse/FLUID-5708/",
      "key": "FLUID-5708",
      "summary": "On off toggle styling needs to be update due to overflow into adjacent panels"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5738/",
      "key": "FLUID-5738"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-06-09T16:21:15.549-0400",
      "body": "Attempting to change labels for slider icons (ex line spacing icons) within the linespace.json file revealed that there is no corresponding css class (in panels.js,   narrowIcon: \".flc-prefsEditor-line-space-narrowIcon\") for the selector to connect to.&#x20;\n\nthe current aria-label for the panel icons are hardcoded into the html (PrefsEditorTemplate-lineSpace.html)\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-06-11T14:59:40.804-0400",
      "body": "Updated design for UIO with new descriptions <https://www.dropbox.com/s/02j7ilnhxd7c8hv/UIO_mock.pdf?dl=0>\\\nwhich may solve \"- Wording for measure of scale with text size and line height as x Times may be confusing\"\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-06-17T12:07:23.864-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/611>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-08-12T09:38:18.281-0400",
      "body": "@@Kaye Mao the description talks about \"Wording for measure of scale with text size and line height as x Times may be confusing\" but this doesn't appear to be handled in your pull request. Could you please create a new jira for this issue?\n"
    },
    {
      "author": "Kaye Mao",
      "date": "2015-08-12T10:05:56.466-0400",
      "body": "Created new jira <https://fluidproject.atlassian.net/browse/FLUID-5738#icft=FLUID-5738>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-30T10:11:46.225-0400",
      "body": "Submitted a new pull request that is updated to infusion master\\\n<https://github.com/fluid-project/infusion/pull/639>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-30T10:39:18.631-0400",
      "body": "new infusion-docs related pull request:\\\n<https://github.com/fluid-project/infusion-docs/pull/72>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-09-30T12:02:13.674-0400",
      "body": "The infusion repo pull request <https://github.com/fluid-project/infusion/pull/639> has been merged into the master branch @ e17422195ffe9e978b1a199f9606272c4015a1a6\n\nThe corresponding infusion-docs repo pull request <https://github.com/fluid-project/infusion-docs/pull/72> has been merged @ a5fd904e7608e22a84b38060cdb168d6d35e9e26\n"
    }
  ]
}
---
Suggestions for fixes as part of the WCAG 2.0 accessibility audit of the UI options tools

* Detailed description/instruction text for function of tools e.g. change size of site text 
* Update header copy for consistency

Will be addressed in FLUID-5738

* Wording for measure of scale with text size and line height as x Times may be confusing

        