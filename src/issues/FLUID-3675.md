---json
{
  "title": "FLUID-3675",
  "summary": "Create options merging and \"component grading\" infrastructure that will allow passage of destructible items",
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
  "date": "2010-06-17T20:20:12.340-0400",
  "updated": "2011-05-16T15:26:00.104-0400",
  "versions": [
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3505/",
      "key": "FLUID-3505"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3681/",
      "key": "FLUID-3681",
      "summary": "Create \"renderer components\" infrastructure, together with \"component grading\" building on createRendererFunction approach"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:04:44.870-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    }
  ]
}
---
It is increasingly required for a few "non-model-contract" items to be able to pass into components and survive the options merging process without being cloned. Ironically, one of these types of items are in fact models - whilst a model as a whole satisfies the "model contract", it is important for overall application model consistency for the SAME MODEL REFERENCE to survive being passed into a component unscathed. Reference consistency also requires implementation of a "cautious ChangeApplier" (see <https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674>). This should be implemented by \
i) Allowing a new strategy to be configured into options merging, tentatively named "preserve" which will specify that certain "protected paths" in the model hold object references which must not be cloned, but copied across wholesale\
ii) Creating infrastructure for "grades" or "categories" of component (model-bearing, view-bearing, renderer-bearing, or any valid combination of these) that spares users from the work of having to manually specify these in their own default options.

        