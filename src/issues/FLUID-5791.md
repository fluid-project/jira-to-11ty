---json
{
  "title": "FLUID-5791",
  "summary": "Create markdown pages on the new documentation site to describe core Infusion APIs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-10-13T16:28:40.041-0400",
  "updated": "2017-02-27T15:49:11.263-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5461/",
      "key": "FLUID-5461",
      "summary": "Review framework API source code comments and compare to wiki pages"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5462/",
      "key": "FLUID-5462",
      "summary": "Generate Infusion Framework API docs from the source code using infusion-tags"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We need to get documentation for the core Infusion APIs, especially those in Fluid.js onto the new docs site, as well as document the contents of FluidPromises.js which so far have never had docs.&#x20;

It looks like it will be best to do this by hand, and produce some docs broadly similar to, say, those which are widely deployed for modules like node's - for example, <https://github.com/nodejs/node/blob/master/doc/api/http.markdown>

<https://fluidproject.atlassian.net/browse/FLUID-5461#icft=FLUID-5461> contains a helpful, but old review of what docs we had at 1.5 which in this area has not changed much

        