---json
{
  "title": "FLUID-6205",
  "summary": "Replace \"marked\" with \"markdown-it\" in documentation repo...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-10-02T05:36:00.208-0400",
  "updated": "2018-05-24T03:56:29.813-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-10-02T05:52:55.996-0400",
      "body": "Assigning to @@Justin Obara for now, if @@Antranig Basman or anyone else wants to pick this up, feel free.\n"
    }
  ]
}
---
As mentioned recently [on the mailing list](https://lists.gpii.net/pipermail/architecture/2017-September/004657.html) and [on our wiki](http://wiki.gpii.net/w/Technology_Evaluation_-_Rendering_Markdown), other projects that use markdown are inheriting vulnerabilities via the ["marked"](https://snyk.io/vuln/npm:marked) library.  I have already replaced "marked" with "[markdown-it](https://github.com/markdown-it/markdown-it)" in gpii-handlebars.

Although there are fewer security concerns with the fluid-docs repo, ideally we would like:

1. To depend on and potentially contribute to only one markdown rendering library
2. To be able to write using the same markdown  across all our projects.

There is [a docpad plugin](https://github.com/tbusser/docpad-plugin-markit) that uses "markdown-it".  This ticket covers updating the fluid-docs repo to use that plugin.

        