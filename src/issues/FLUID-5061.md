---json
{
  "title": "FLUID-5061",
  "summary": "Develope an \"auxiliary schema\" which containing the component specific settings for constructing instances of UIO/UIE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-06-20T08:36:11.875-0400",
  "updated": "2019-09-10T11:54:16.401-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5066/",
      "key": "FLUID-5066"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4907/",
      "key": "FLUID-4907"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-15T07:41:27.136-0400",
      "body": "Addressed with work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907>\n"
    }
  ]
}
---
The "auxiliary schema" is meant to accompany a primary schema (FLUID-4903, <https://fluidproject.atlassian.net/browse/FLUID-4904#icft=FLUID-4904>) for use by the UIO Builder (FLUID-4907) to generate the grades needed to construct a functioning UIO and/or UIE.

The "auxiliary schema" will not necessarily take either the format of a json schema nor a typical IoC default block. The goal is for it to be a declarative json structure that is flat, easy to transform, and easy to write. For example, we don't want to have things like expanders inside of it.

possible example:

```java
{
    "fluid.uiOptions.textSizer": {
        strings: {},
        template: "path.to.template",
        ...
    }
}
```

More info on the mailing list:

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-June/009115.html>

        