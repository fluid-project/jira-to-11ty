---json
{
  "title": "FLUID-2510",
  "summary": "Using the reset button breaks the preview: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-03T14:35:31.000-0400",
  "updated": "2009-05-25T12:37:47.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2411/",
      "key": "FLUID-2411",
      "summary": "Refreshing the browser, hitting cancel or reset, breaks the functionality of the sliders: using Opera"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-25T12:37:47.000-0400",
      "body": "Appears to have been fixed with one of the other changes leading up to the 1.1 release\n\nVerified using:\n\nOpera 9.6 (Win XP, Mac OS 10.5)\n"
    }
  ]
}
---
Using the reset button breaks the preview

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options Dialog and change one of the options. Notice that the preview changes

3\) Click the reset button

4\) Change an option, Notice that the preview windows doesn't change

        