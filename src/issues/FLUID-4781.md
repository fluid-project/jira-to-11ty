---json
{
  "title": "FLUID-4781",
  "summary": "The rich inline edit demo fails in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2012-08-24T09:50:58.909-0400",
  "updated": "2014-06-25T16:01:17.625-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE8 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4762/",
      "key": "FLUID-4762",
      "summary": "Fluid view unit test failing (Dead man's blur test - non-excluded component one, failing test #2)"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4762/",
      "key": "FLUID-4762"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4781/IE8 js error.jpeg",
      "filename": "IE8 js error.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.618-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
1\. Open up rich inline edit demo: infusion/src/webapp/demos/inlineEdit/rich/html/inlineEdit.html

2\. Turn on Tools -> Developer Tools

3\. Click on "edit" link of the first demo

4\. Throws javascript error "Object doesn't support this property or method" (FluidView.js, line 515 character 13)

        