---json
{
  "title": "FLUID-5745",
  "summary": "Add all useful components of Infusion, including those that are web-only, to the npm module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2015-08-18T14:58:15.057-0400",
  "updated": "2015-09-09T07:38:53.546-0400",
  "versions": [
    "1.9",
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "npm module"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2015-08-18T14:58:48.558-0400",
      "body": "@@Antranig Basman, @@Justin Obara, thoughts on this?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-03T14:34:31.499-0400",
      "body": "Merged in pull request ( <https://github.com/fluid-project/infusion/pull/631> ) into the project repo at a1e3d601478e57276d4143fca5bcbe00f9c6b0cd\n"
    }
  ]
}
---
I think I made a mistake when I first advocated for keeping the files that are included in our npm module as small and focused as possible. At the time, I imagined that the Infusion npm module would only be useful to developers who are running Infusion within Node.js.

However, npm is increasingly becoming a viable means for distributing web-based modules, too.

As a user of Infusion in projects that support both in-browser and Node-based execution, I've realized that the current arrangement creates a greater maintenance headache for me. Currently, I need to both:

1. depend on a particular version of the Infusion npm module
2. also keep a copy of all the web-specific Infusion files (e.g. FluidViews.js) in my project's source repository&#x20;

This is due to the fact hat the web-specific files are neither available in the npm module, nor in a suitable bower component. I have increasingly come to think that Bower is intractable for large projects, since it essentially requires build artifacts to live directly in the project's git repository. I do this, and it sucks.

It would be nice to just be able to run "npm install" and get all of Infusion in one shot, without having to keep any of it in my source tree.

So, I'm proposing that we include all the useful parts of Infusion in our npm package, including those that are browser-specific. We would still ensure that our Node module only require()s the ones that can be run in a DOM-free environment. Dependents of Infusion will still need to arrange to make their own concatenated/minified builds of Infusion (which seems reasonable for now); perhaps in the future we can use npm prepublish scripts to also produce commonly-used builds such as "core framework only" distributions.

        