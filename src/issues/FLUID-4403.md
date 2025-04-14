---json
{
  "title": "FLUID-4403",
  "summary": "The preview template is not being loaded in the full page with preview demo",
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
  "reporter": "Michelle D'Souza",
  "date": "2011-08-23T11:17:46.337-0400",
  "updated": "2013-10-04T09:52:19.686-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-23T11:17:58.770-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-23T11:19:54.580-0400",
      "body": "This is a case-sensitivity issue: The default preview filename is \"UIOptionsPreview.html\" but my preview file is called \"uiOptionsPreview.html\"  Locally, my Firefox doesn't care, so I didn't catch it. I'll rename.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-23T11:26:17.563-0400",
      "body": "I've renamed the file and submitted a pull request (#141).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-23T11:50:02.384-0400",
      "body": "Merged into project repo at 3876dd49bd312f682fafa6ba95f7f8ab351ccaa7\n"
    }
  ]
}
---
Instead of showing a preview in the preview pane I get a 404 error when using the full page with preview ui options demo.&#x20;

        