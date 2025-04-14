---json
{
  "title": "FLUID-3819",
  "summary": "Upgrade changeApplier and renderer pipeline to permit passage of custom implementations for getBeanValue/setBeanValue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-10-26T17:11:38.702-0400",
  "updated": "2011-01-15T15:46:42.269-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3819/FLUID-3819.failing.test.patch",
      "filename": "FLUID-3819.failing.test.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3819/FLUID-3819.patch.txt",
      "filename": "FLUID-3819.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3819/FLUID-3819.renderer.test.patch.txt",
      "filename": "FLUID-3819.renderer.test.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3819/FLUID-3819.tests.patch.txt",
      "filename": "FLUID-3819.tests.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-26T17:30:03.001-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-04T04:25:32.519-0400",
      "body": "Implemented at revision 10176. Comment:&#x20;\n\nReimplementation of core utilities getBeanValue and setBeanValue using new strategy of \"strategies\" - adjustment of all framework pathways (change applier, renderer and renderer components) to permit transport of custom strategies to these utilities. New test cases for \"renderer components\" as created via \"initRendererComponent\". Bugs fixed as a result of these cases: a) proper cloning of UIBound components in protoComponent expander to ensure unshared state of expanded with repeat decorator, b) typo of $() for ${} in default options for protocomponent expander in renderer component, c) fluid.isArrayable now no longer crashes on empty argument, allowing d) fluid.each and fluid.transform to transform empty argument. Support for new merge policy of \"noexpand\" suitable for use with \"protoTree\" argument to a renderer component and others. Support for multiple merge policies targetted at a path (comma-separated in string).&#x20;\n\nCurrent incomplete issues with implementation: i) not possible to specify a strategy adjusting access to the root model path of \"\", ii) no test cases covering changeApplier with strategy iii) no test cases for \"resources\" supplied for a renderer component (fluid.fetchResources in need of some more engineering to deal with coordinating joinsets)\"&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-11-18T15:21:47.810-0500",
      "body": "Patch adds missing cases of propagation of resolverGetConfig renderer option down to the fluid.model.getBeanValue call. Also adds an extra branch reporting a failure inside fluid.messageLocator when messagecodes are not provided.\n"
    },
    {
      "author": "y z",
      "date": "2010-11-18T15:22:41.623-0500",
      "body": "Hi Antranig, could you please review  the  patch . Thanks\n"
    },
    {
      "author": "y z",
      "date": "2010-11-18T16:11:56.207-0500",
      "body": "Attached test cases\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-19T01:12:58.252-0500",
      "body": "Yura's fixes and further test cases applied at revision 10294\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-15T10:23:23.408-0500",
      "body": "I'm wondering about the \"null iteration\" test that was added to FluidJSTests which doesn't seem to do anything. Am I missing something?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-15T16:38:05.335-0500",
      "body": "I added an assert to the null iteration test so that it's more clear what the test is doing. This has now been reviewed.&#x20;\n"
    }
  ]
}
---
A crucial piece of functionality required for CollectionSpace is to pass "schema-aware" embodiments/alternative implementations of the core functions getBeanValue/setBeanValue so that the renderer, for example, may act on such "schema-embodied models"

        