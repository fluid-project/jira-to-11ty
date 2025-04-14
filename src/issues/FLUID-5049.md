---json
{
  "title": "FLUID-5049",
  "summary": "Missing icons in UIO preview demos",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "Cindy Li",
  "date": "2013-06-12T15:57:05.928-0400",
  "updated": "2013-06-17T11:24:35.221-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5049/missing icons.jpeg",
      "filename": "missing icons.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-17T11:24:31.537-0400",
      "body": "Merge pull request ( <https://github.com/fluid-project/infusion/pull/343> ) into the project repo at 8a7c36422733774acf25b3c6ffeffa864bbf2a19\n"
    }
  ]
}
---
1\. Turn on firebug\
2\. Open UI Options full preview or no preview demo in the tests/manual-tests directory, such as, <http://build.fluidproject.org/infusion/tests/manual-tests/html/uiOptionsFullWithPreview.html>\
3\. 3 errors complaining about the three missing icons:\
components/uiOptions/images/default/uio\_icon\_textanddisplay\_default\_18x18.png\
components/uiOptions/images/default/uio\_icon\_layoutandnavigation\_default\_18x18.png\
components/uiOptions/images/default/uio\_icon\_linksandbuttons\_default\_18x18.png

        