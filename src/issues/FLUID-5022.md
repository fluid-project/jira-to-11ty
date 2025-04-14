---json
{
  "title": "FLUID-5022",
  "summary": "Create framework facility for declarative definitions for dynamic collections of subcomponents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-05-19T23:17:30.738-0400",
  "updated": "2014-03-03T11:55:11.361-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4035/",
      "key": "FLUID-4035"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2578/",
      "key": "FLUID-2578"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-06-24T17:32:55.825-0400",
      "body": "Reviewed, tested and pushed to project master. Thanks for the new feature, Antranig!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:55:07.686-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/330> ) was merged into the project repo at e556e55f6c9c4a556bbc62676c475b58b8965c29\n"
    }
  ]
}
---
The creation of individual components is now extremely dynamic, as a result of facilities such as <https://fluidproject.atlassian.net/browse/FLUID-4916#icft=FLUID-4916> for dynamically resolved component grades. However, an important gap in framework functionality is drawing up the declarative configuration for designating subcomponents themselves in a dynamic way based on other options material.\
For example, the rewritten fluid.inlineEdits constructor for FLUID-5011 makes use of manual code for fabricating one fluid.inlineEdit subcomponent definition for each member of a jQuery selector. Other situations where this has occurred is in CSpace for dynamically creating component definitions for each page of a tabs control, and in the GPII for dynamically fabricating one component for each incoming web request.

In each case, this technique requires i) the manual fabrication of a subcomponent definition record, ii) the manual injection of this into the component's own options at the path "components".\[dynamically chosen name], and iii) a manual invocation of fluid.initDependent for the dynamically chosen name.

We should provide a facility for automating all of this work so that dynamically generated components are coded for by a dedicated kind of component configuration, and so we can deprecate and hide the API fluid.initDependent from public view.

This work will also interact with upcoming work on refactoring the Fluid Renderer - the operation of its custom "expanders" (repeat, condition, etc.) will be recast in terms of this kind of definition, since both of these require a component collection whose size and content cannot be known until certain options material has been seen.&#x20;

It will also be relevant for work in UIOptions where subcomponents will be generated automatically in response to schematic material.

        