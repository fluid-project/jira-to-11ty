---json
{
  "title": "FLUID-4265",
  "summary": "Create a UIOptionsStore which encapsulates defaultSiteSettings and settingsStore",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-05-26T11:00:08.063-0400",
  "updated": "2011-06-07T16:26:33.195-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-26T13:29:51.587-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-03T12:31:27.875-0400",
      "body": "Merged into <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267> branch at 4faf4acfa010d11919ee9df0cd93113f7548b09e\n"
    }
  ]
}
---
Currently the defaultSiteSettings are part of UIEnhancer defaults instead of being a separate entity that is injected into both UIEnhancer and UIOptions when they require it.&#x20;

Here are the code review comments from Antranig:

One resolution would be to reorganise the lines 242-245 to be delivered by a demands block, that only acted when a {uiEnhancer} was in scope. It is still problematic that so many defaults are defined within UIEnhancer itself - for example, the settingsStore and the defaultSiteSettings etc. I would move these out into a 3rd, largely dependence-free component called something like UIOptionsStore - they would be injected into both UIEnhancer and UIOptions from some shared location. This should just be specified as "fluid.uiOptions.store" and only resolved as "cookieStore" via a demands block. Right now, someone advising this implementation would have to issue a demands block against "fluid.uiEnhancer.cookieStore"

        