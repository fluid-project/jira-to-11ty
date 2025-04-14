---json
{
  "title": "FLUID-4734",
  "summary": "Straightforward improvements to InlineEdit implementation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2012-07-20T18:01:36.095-0400",
  "updated": "2021-07-29T01:43:22.302-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6098/",
      "key": "FLUID-6098"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5011/",
      "key": "FLUID-5011",
      "summary": "Update InlineEdit component to modern framework standards"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-05-22T00:26:41.358-0400",
      "body": "Many of these points were handled as part of the <https://fluidproject.atlassian.net/browse/FLUID-5011#icft=FLUID-5011> work - in particular i) a) and iii) and part of ii) and iv) - also a further improvement of v) extracting all markup used by the component implementation into options\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-12T13:01:56.713-0400",
      "body": "close and refile what's remaining as specific issues.\n"
    }
  ]
}
---
Our InlineEdit component is one of our very oldest components, and contains a number of "implementation features" that would not appear in a new component which would be written today. Whilst we have a strong commitment to API compatibility, there are a number of low-cost improvements we could make today without compromising compatibility and also heading off possible bugs as well as improving consistency and reusability.

i) A group of issues referred to under <https://fluidproject.atlassian.net/browse/FLUID-4725#icft=FLUID-4725> - \
a) use of a mergePolicy rather than manual code for options defaulting\
b) migrating the tooltipText option up into strings as with defaultViewText\
c) <https://fluidproject.atlassian.net/browse/FLUID-4732#icft=FLUID-4732> - inserting component's options into the proper namespace\
d) amalgamating DOM element arguments for the highlight and edit mode binders - which implies\
ii) fixing up implementation of the range of event binding functions so that they are all consistent in accepting a multi-element jQuery as their first argument (where they currently accept any element-like thing) rather than their rather ad-hoc current use of fluid.wrap and fluid.unwrap\
iii) breaking out all of these utility functions into properly namespaced functions under fluid.inlineEdit rather than using our old-fashioned approach which still valued private anonymous implementation details. \
iv) improvement of argument names - the name "displayModeRenderer" should be replaced with something more descriptive (at least where this term doesn't appear in a public API), as well as the misuse of the term "selector" on line 718

        