---json
{
  "title": "FLUID-4244",
  "summary": "Renderer component types manual test page missing json2 dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2011-05-16T12:53:25.955-0400",
  "updated": "2011-06-14T09:49:02.824-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Renderer"
  ],
  "environment": "IE 8 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4244/renderer-component-may-30-2011.png",
      "filename": "renderer-component-may-30-2011.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:01:17.860-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T15:55:48.691-0400",
      "body": "Related to json2 removal. <https://github.com/fluid-project/infusion/commit/3e45b80f11b88b3b42982c50f23c7eafa3d1244a>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-30T16:00:23.980-0400",
      "body": "I tried running WinXP + IE8 on master and <http://build.fluidproject.org/infusion/tests/manual-tests/html/renderer-component-types.html>.  Cannot reproduce anymore. &#x20;\n\nI have also attached a screenshot renderer-component-may-30-2011.png\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-31T14:54:21.356-0400",
      "body": "Cannot reproduce as of:\\\ncommit 01a994f19c5adcba2594ac322a828961a02daada\\\nDate:   Mon May 30 15:45:40 2011 -0600\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-06-14T09:49:02.822-0400",
      "body": "I tried it from the daily build site today and also couldn't reproduce the issue\n"
    }
  ]
}
---
The renderer-component-types manual test is missing the json2 dependency.

Steps to reproduce:

1\) Open the renderer component types manual test\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/renderer-component-types.html>

Notice there is an error on the page because of the missing json2 dependency

        