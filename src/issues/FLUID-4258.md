---json
{
  "title": "FLUID-4258",
  "summary": "Create declarative syntax for wiring cooperating changeAppliers and registering guards/listeners",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-05-19T02:42:32.896-0400",
  "updated": "2014-11-18T20:22:16.440-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5077/",
      "key": "FLUID-5077"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3674/",
      "key": "FLUID-3674",
      "summary": "Current idiom for applying changes to models with ChangeApplier is inadequate for large-scale cooperation on extended models"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4195/",
      "key": "FLUID-4195",
      "summary": "Create new infrastructure for \"subappliers\", applying inverse model calculus to allow broadcast of changes to supermodel"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5115/",
      "key": "FLUID-5115",
      "summary": "Update the model relay component to handle model transformations"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-10-31T15:32:27.332-0400",
      "body": "Reviewed, tested, and merged at 1a34a9046c2d9ee4b6801f3df59f186af1b84c0f\n"
    }
  ]
}
---
Part of the framework work upcoming on the ChangeApplier requires it to be brought up to the same standards as the rest of the framework (IoC, event registration/boiling) as regards declarative configuration. It should be possible to wire together cooperating ChangeAppliers (those listening to each others events) using a declarative syntax (this relates to <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674>/FLUID-4195) as well as configuring in model-transforming elements (drawn from our upcoming ModelTransformation dialect) which are capable of transforming change streams (models) on read, and inversely on write-back (see "Boomerang" concepts of GET and PUT for "lenses" at <http://www.seas.upenn.edu/~harmony/> ).&#x20;

        