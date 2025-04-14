---json
{
  "title": "FLUID-6001",
  "summary": "Implement a system for automatically linting/validating  HTML ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-10-26T16:53:31.109-0400",
  "updated": "2021-07-29T01:48:09.765-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Build Scripts",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6010/",
      "key": "FLUID-6010"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-27T13:11:47.447-0400",
      "body": "From Joseph on GitHub ( <https://github.com/fluid-project/infusion/pull/769#issuecomment-256698148> )\n\n\"If you don't already know, the [Nu Html Checker](https://validator.github.io/validator/) page lists four ways of automating HTML checking, including a grunt plugin, a gulp plugin, integration with Travis CI, and integration with JSFiddle/JSBin.\"\n"
    },
    {
      "author": "Simon Bates",
      "date": "2016-10-28T14:26:46.008-0400",
      "body": "I've filed an issue about our missing role=row containers in the The Grid Reorderer and Image Reorderer:\n\n<https://issues.fluidproject.org/browse/FLUID-6013>\n"
    }
  ]
}
---
Like linting for JS files, we should implement a system to automatically validate / lint all of the html files. This includes full html documents and html fragments used for templates and etc.&#x20;

some options would be to use a service for the w3 validator <https://validator.w3.org/nu/> or some other javascript based linter that can be wired up through grunt.&#x20;

        