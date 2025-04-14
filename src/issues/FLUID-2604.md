---json
{
  "title": "FLUID-2604",
  "summary": "Make Pager body renderer pipeline more open for interception",
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
  "date": "2009-04-14T16:48:33.000-0400",
  "updated": "2013-09-06T12:24:16.121-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2777/",
      "key": "FLUID-2777"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Much as with the existing "onRenderPageLinks" hook, it is necessary to allow far more intervention into the details of the component tree construction process for the selfRender renderer for the pager body. This will allow, amongst other things, instantiation of row or table-spanning components such as the Reorderer, or a useful interception point for any markup decoration that, through choice or necessity, does not use the Renderer. \
Initial suggestion is a pair of events "onRenderBody" and "afterRenderBody".

        