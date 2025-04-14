---json
{
  "title": "FLUID-958",
  "summary": "Create global \"external contract\" for components with respect to \"model state\" and rendering therefrom",
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
  "date": "2008-07-21T16:23:39.000-0400",
  "updated": "2011-05-16T15:25:29.174-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "Inline Edit",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-780/",
      "key": "FLUID-780"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1079/",
      "key": "FLUID-1079"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-22T19:26:40.000-0400",
      "body": "A wiki housing for documentation and thoughts on this contract is now at <http://wiki.fluidproject.org/display/fluid/Component+Model+Interactions+and+API>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-07-31T14:42:50.000-0400",
      "body": "Some of these features can now be seen in draft within the inline-edit component and its undo add-on - in the form of the modelFirer, the render() method and the general model-driven idiom.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-19T21:18:59.000-0500",
      "body": "Informally, these concepts of a \"model for models\" have been generally agreed, but have not yet seen much exposure outside InlineEdit. Should review on delivery of final release.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T18:58:39.000-0400",
      "body": "We'll address a portion of this 1.3 when we promote Engage's createRendererFunction() to Infusion, and the rest will be addressed by Infusion 1.5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:39:44.996-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-03-25T00:07:40.174-0400",
      "body": "With the work on \"grades\" arriving in the 1.4 framework, in particular \"modelComponent\" and \"rendererComponent\", this nearly 3-yr-old JIRA may finally be closed.\n"
    }
  ]
}
---
In order to arrange more advanced cooperation between components and "component fragments" with regards render and model state, we need to draw up external contracts that participating components will enjoy. A particular and immediate example requirement is that of "undo" functionality - it should be possible to "decorate" an arbitrary component or selection of components with "undo-ability" at both a visual and functional level, part of which requirement is expressed by <https://fluidproject.atlassian.net/browse/FLUID-780#icft=FLUID-780>, "undo for individual InlineEdit" component.

Important requirements are that i) the state ("model") of each component is isolable and enjoys "reasonable" semantics, and that ii) an overal "re-rendering" of each participating component can be triggered in a uniform way given updates to this state.

        