---json
{
  "title": "FLUID-3841",
  "summary": "improve focus styling for FF & IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "heidi valles",
  "date": "2010-11-16T10:57:21.703-0500",
  "updated": "2014-03-03T11:20:13.096-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3841/buildercss.patch",
      "filename": "buildercss.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3841/ff_check.png",
      "filename": "ff_check.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3841/ff_hover_elsewhere.png",
      "filename": "ff_hover_elsewhere.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3841/ff_uncheck.png",
      "filename": "ff_uncheck.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3841/ie_click_text.png",
      "filename": "ie_click_text.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-11-16T11:13:42.962-0500",
      "body": "also IE - clicking on module header creates column outline on mouse down&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-16T12:02:05.244-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-17T11:24:50.816-0500",
      "body": "There's another weird IE issue - when an input is focused, its corresponding label changes to yellow but in IE, if you select a checkbox with keyboard, the label colour change doesn't happen until you move your mouse.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-17T14:26:07.023-0500",
      "body": "fixes ff border issue, and ie column outline issue\n\ndoesn't fix focus remaining despite hovering elsewhere (its correct how it is, even if it seems weird) or IE not changing module header colour when input focused.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.093-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
There is a yellow outline on focused elements.&#x20;

safari - ok

ie8 - column gets outline if clicking on module paragraph.&#x20;

* column gets outline on mousedown when clicking on module header

ff - checkbox gets outline, interfering with hover styles, by clicking on module header

* checkbox outline remains after selecting module with mouse and moving away

        