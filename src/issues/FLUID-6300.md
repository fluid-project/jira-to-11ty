---json
{
  "title": "FLUID-6300",
  "summary": "Implement client-side rerender of UIO based on locale changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-17T16:45:18.347-0400",
  "updated": "2024-07-22T10:35:27.343-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6198/",
      "key": "FLUID-6198",
      "summary": "Migrate multilingual UIO code from SJRK Storytelling to Infusion"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6341/",
      "key": "FLUID-6341"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6323/",
      "key": "FLUID-6323"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6301/",
      "key": "FLUID-6301"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6312/",
      "key": "FLUID-6312"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6322/",
      "key": "FLUID-6322"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-07-31T16:54:09.943-0400",
      "body": "Once implemented, add this change to the \"Using grades\" example\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-09-24T16:24:02.244-0400",
      "body": "The \"using grades\" example update has been moved to a separate issue: <https://fluidproject.atlassian.net/browse/FLUID-6341#icft=FLUID-6341>\n"
    }
  ]
}
---
Implement UIO re-rendering on the client side based on changes in the locale.

Since a part of this also requires forcing `fluid.resourceLoader` to reload resources based on the new locale, should this functionality become part of `fluid.resourceLoader` directly? Should locale become a mutable (model) state on `resourceLoader`, with a modelListener that reloads the resources, or should it implement a `changeLocale` invoker or similar?

This work includes adding tests

        