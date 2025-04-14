---json
{
  "title": "FLUID-3681",
  "summary": "Create \"renderer components\" infrastructure, together with \"component grading\" building on createRendererFunction approach",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-08-03T04:17:09.340-0400",
  "updated": "2011-05-23T02:23:42.211-0400",
  "versions": [
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4261/",
      "key": "FLUID-4261"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3675/",
      "key": "FLUID-3675"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-30T01:36:30.996-0400",
      "body": "A basic implementation of \"initRendererComponent\" is now in trunk as of rev 9998 - this automates the work of applying the renderer, fetching templates, configuring cutpoints based on the DOM binder as well as localisation via the string bundle. Work is still to come on \"grading\" (which is mostly done in a branch) and the \"antigenic/multipass\" system which is not yet started.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:04:26.413-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-03-25T00:46:22.083-0400",
      "body": "This implementation is nearly complete but needs still a fair number of tweaks\\\ni) Create \"auto-IoC\" mode, perhaps enabled by a particular grade, that will automatically enable IoC-aware decorators for any fluid decorators issued in the component tree by a renderer component\\\nii) Thoroughly review the layout of the options structure accepted by renderer components - there is a lot of very ropy manual options merging code in the chain, and even if we can't clear it all up, we should at least try to somewhat stabilise the API\\\niii) Perhaps make some early efforts to support some kind of \"antigenic\" mode involving multi-pass initialisation - most of the \"hard stuff\" in the framework required to make this work is now there, in the form of i) event-driven IoC instantiation, and ii) grade support\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-16T15:26:46.580-0400",
      "body": "This work is done, with the exception of \"antigens\" which we have decided to rename as \"phased components\", this will be allocated a new JIRA for 1.5.\n"
    }
  ]
}
---
It is now time to begin work on the other, more long-term approach to composition of renderer-bearing components (now that work from FLUID-3658 work on protocomponents is merged in). This involved exposing what were called "renderer antigens", being, "statically determinable renderer lifecycle points" from a component in its position in a complex component tree. At the very least, these allow the component to report the location of templates it requires, have these templates delivered to it (asynchronously) and then enter a further lifecycle point where the renderer is invoked and the component bound to markup. It is necessary therefore for the component to exist at at least 3 distinct lifecycle points. The configuration and location of elements such as the renderer, templates, renderer options, applier and model will become stereotypical and operated by a standard construction cycle.

        