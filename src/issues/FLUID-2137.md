---json
{
  "title": "FLUID-2137",
  "summary": "Skinning links are not displayed correctly after removing the simple layout skin: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-01-16T13:48:06.000-0500",
  "updated": "2013-10-04T10:31:11.517-0400",
  "versions": [
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": "Safari 3, Safari 4 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2137/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-16T13:52:53.000-0500",
      "body": "'screenshot-1' shows the skinning links in the wrong location\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-03T09:48:32.000-0500",
      "body": "I think this was fixed some time ago by a change in the implementation of the simple layout feature.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-03T09:52:14.000-0500",
      "body": "still happening in safari\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:17:20.279-0400",
      "body": "Testing version 1.4 with\\\n<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>\\\nI cannot reproduce this.\n"
    }
  ]
}
---
Skinning links are not displayed correctly after removing the simple layout skin

Steps to reproduce:

1\) Open the uPortal mock-up from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/portal/portal.html#>

2\) change the skin to the High Contrast Simple Layout

3\) remove the skin

Notice that the skinning links are still displayed as though they were in simple layout

        