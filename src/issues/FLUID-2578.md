---json
{
  "title": "FLUID-2578",
  "summary": "Create additional, user-friendly APIs to allow users to create Renderer component trees more simply.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2009-04-08T18:14:11.000-0400",
  "updated": "2014-07-11T14:22:47.641-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3658/",
      "key": "FLUID-3658",
      "summary": "Elevate protoComponent expansion functionality developed for Engage into core framework"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4260/",
      "key": "FLUID-4260",
      "summary": "Implement system for multi-phased (per component), \"one-pass\" rendering of complex component trees (formerly, \"antigens\")"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5022/",
      "key": "FLUID-5022",
      "summary": "Create framework facility for declarative definitions for dynamic collections of subcomponents"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2578/FLUID-2578.expander.array.patch.txt",
      "filename": "FLUID-2578.expander.array.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2578/FLUID-2578-TreeBuilder-a.patch",
      "filename": "FLUID-2578-TreeBuilder-a.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-07-26T16:22:05.000-0400",
      "body": "Experimentation on different ways of generating a component tree. This is a super-raw proof-of-concept showing how component trees could be built up using a set of pre-built utility functions. The main goals here are:\n\n* provide an API with simple methods that match the goals of a Renderer user (eg. checkbox(), value(), container(), etc.)\n* Hide away the cutpoints structure and the colon suffix for IDs so the user doesn't have to deal with them\n* avoid a one vs. many distinction: if input is an array, a branch should automatically occur\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:06:04.000-0400",
      "body": "Some of this will be addressed with the promotion of the pseudo-component style of building trees from Engage into Infusion for 1.4. The rest will, hopefully, be address in 1.5 and 1.6.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T01:06:41.897-0400",
      "body": "A working and reasonably complete \"protoComponent expander\" is now in trunk as part of the <https://fluidproject.atlassian.net/browse/FLUID-3658#icft=FLUID-3658> work. This largely completes implementation of \"this strand\" of this issue - however, work will now continue on the other strand, based around \"renderer antigens\" (\"component grading\") and the IoC driven approach whereby declarative programming will be expressed in terms of \"IoC trees\" rather than \"renderer trees\".\n"
    },
    {
      "author": "y z",
      "date": "2010-12-07T15:24:26.903-0500",
      "body": "This patch modifies renderer utilities to take into consideration a case where the tree contains more than one expander in the expander array.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-07T15:48:32.859-0500",
      "body": "Removed from bug parade in favour of <https://fluidproject.atlassian.net/browse/FLUID-3882#icft=FLUID-3882>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-25T05:32:04.090-0400",
      "body": "This work (\"renderer antigens\") begins with the implementation of <https://fluidproject.atlassian.net/browse/FLUID-5022#icft=FLUID-5022>, facility for dynamically specified collections of subcomponents\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:22:47.641-0400",
      "body": "@@Colin Clark do you know if this issue has been resolved?\n"
    }
  ]
}
---
At the moment, the work of creating component trees in the Renderer can be complex in some situations, for example binding selections such as checkboxes or radio buttons. We need to build up a collection of user-friendly APIs that help to ease to work of binding data to our templates using the Renderer.

As part of this, we'll look at the structure of component trees, revisiting them in light of the selector-based approach used by many Renderer users today. This work will form the basis of a Renderer 2.0 release.

        