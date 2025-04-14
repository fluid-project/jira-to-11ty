---json
{
  "title": "FLUID-3743",
  "summary": "Fix the preview template URL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2010-09-16T12:21:08.607-0400",
  "updated": "2010-09-24T15:58:27.550-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3743/FLUID-3743.patch.txt",
      "filename": "FLUID-3743.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-09-21T12:44:46.488-0400",
      "body": "-this patch adds previewTemplateUrl as an option to UI Options\\\n-it also adds a unit test that checks the default url is set, as well as a custom url\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-09-23T17:02:23.142-0400",
      "body": "Fixed at revision 10041\n"
    }
  ]
}
---
right now the preview url is hard-coded in uioptions.html, the url should be an option one can specify on init

* make the URL an option in the 'default's structure
* when initializing the component set the preview URL
* this should fix - page not found in dialog preview
* recursive clicking of "edit appearance" button in preview

        