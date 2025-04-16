---json
{
  "title": "FLUID-6596",
  "summary": "Consider \"fail-fast\" scheme for rejecting configurations where mismatched versions of Infusion-aware modules have been loaded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-02-08T11:55:13.750-0500",
  "updated": "2024-07-17T08:11:27.643-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In attempting an upgrade of SJRK last week to the latest version of Kettle, Justin Obara ran into an obscure-looking error that was eventually traced to mismatched versions of Kettle being loaded through different transitive dependency paths.

<https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$zRkt-vrp8vjsoJrxNLCKAMqHlwh-CiWVecss52wxSf4?via=matrix.org>

> I found that the problem occurs when fluid-express-user loads its own kettle, after being included from src/server/serverSetup.js\
> At this point in the debug trace you get\
> Resolved infusion from path E:\source\gits\sjrk-story-telling\node\_modules\fluid-express-user\node\_modules\infusion\src\module to E:/source/gits/sjrk-story-tell ing/node\_modules/infusion 22:30:38.337: Registering module kettle from path E:\source\gits\sjrk-story-telling\node\_modules\fluid-express-user\node\_modules\kettle\
> So this kettle then smashes the old kettle from Infusion's module registry\
> And sadly kettle 1.x releases are not compatible with kettle 2.x releases as a result of the DataSource refactoring\
> Looks like fluid-express-user has a direct dependency on kettle 1.16.0

Whilst recent roadmapping discussions for Infusion (being accumulated at [Infusion planning meeting notes](https://docs.google.com/document/d/1Q7-MO9AE5lfRhWR5AuBlgxd3teOIt3IuNeh7Kqli0TI/edit) are suggesting that we may "park" development of the current version of Infusion after we have reached a moderately capable renderer, this kind of versioning issue is one that would afflict "any conceivable" Infusion and so work spent improving the experience here wouldn't be wasted.

More discussion at <https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$oJ2ntNIutSCds4hFmPBFCJgrE6EuyoSMjuCgfY8bgm0?via=matrix.org> -&#x20;

> This is why I'm at the moment inclining to the idea that, for now, it should be a hard error, reported at build or at least startup time, for multiple versions of Infusion-aware modules to be loaded in the same tree\
> At the moment, because of our poor factoring of Infusion, it's not totally hard-edged what it means "to be Infusion-aware" - since we've got all sorts of little libraries like node-jqunit which technically load Infusion but depend on practically none of it other than things for logging and some utilities\
> So my current idea is to declare that a module is "sufficiently Infusion-aware" if it registers any defaults, and then for it to be an error if two different modules with the same name register such defaults

        