---json
{
  "title": "FLUID-4440",
  "summary": "Tabs are broken in the clearfix demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2011-09-12T15:14:36.017-0400",
  "updated": "2011-09-13T14:17:57.775-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-12T16:37:15.942-0400",
      "body": "A folder had been renamed and the path not updated. I sent a pull request to address this <https://github.com/fluid-project/infusion/pull/162>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-13T14:17:53.974-0400",
      "body": "Michelle merged my pull request <https://github.com/fluid-project/infusion/pull/162> into the project repo at 3e43b98753f04d6a4940ba85b5ee6e9c98665fce\n"
    }
  ]
}
---
The link to the jquery.ui.theme.css file is correct which results in broken tabs at the top of the clearfix demo. This means that the clearfix can only be seen for 'plain div' in the demo.&#x20;

        