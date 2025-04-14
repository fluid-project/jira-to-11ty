---json
{
  "title": "FLUID-2500",
  "summary": "switching from high contrast to any other theme will remove some text from the page: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-04-03T10:59:04.000-0400",
  "updated": "2009-05-25T12:28:11.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2458/",
      "key": "FLUID-2458",
      "summary": "switching from the High Contrast theme to any other theme, removes the text from the preview"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2500/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-03T11:00:40.000-0400",
      "body": "'screenshot-1' shows the missing text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T08:58:29.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T11:34:27.000-0400",
      "body": "The css file that was removed for this is still being referenced by ui-options-fss-sakai.html and UIOptionsPreview.html. The references should be removed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T11:41:13.000-0400",
      "body": "The changes for this fix are all in, and look good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-25T12:28:11.000-0400",
      "body": "Verified fix using:\n\nIE 6 (Win XP)\n"
    }
  ]
}
---
switching from high contrast to any other theme will remove some text from the page

Steps to reproduce:

1\) Open the sakai mock-up page\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Change the theme to "High Contrast" and save the change

3\) Now change to any other theme and save the change

Notice that the text under Add Tools is missing. It will reappear if you refresh the page.

        