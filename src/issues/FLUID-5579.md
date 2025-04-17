---json
{
  "title": "FLUID-5579",
  "summary": "Assess the potential for modularising Infusion into one or more modules, and appropriate distribution scheme",
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
  "date": "2014-12-05T18:16:26.490-0500",
  "updated": "2020-11-10T10:16:21.308-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5521/",
      "key": "FLUID-5521",
      "summary": "Implement the \"Fluid module loading system\", capable of autonomously finding and loading modules throughout a directory tree"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5978/",
      "key": "FLUID-5978"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6359/",
      "key": "FLUID-6359"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-04T13:34:18.394-0400",
      "body": "Some further discussion on this.\\\n<https://pad.gpii.net/p/infusion-module-discussion-oct-4-2016-okg4ntt>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-02T08:55:42.811-0400",
      "body": "Some further discussion from the [fluid-work irc channel today](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-08-02.log).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-08-20T11:25:08.444-0400",
      "body": "It seems that workspace support is coming to npm v7, which may be released as early as this fall. More advanced features seem to be coming in v8. \n\n<https://blog.npmjs.org/post/186983646370/npm-cli-roadmap-summer-2019>\n\n> Workspaces\n>\n> First-class support for symbolic links means that workspaces will be trivial to implement. npm v7 will have at least the Workspace feature support of Yarn, and will set the stage for more advanced workspace features in v8.\\\n> At minimum, you’ll be able to keep multiple related packages all together in a single repository, and test changes in an integrated environment, without continually re-linking.\n>\n> Once Workspaces land, it’ll be possible to add more advanced workspace management features. For example, building, versioning, managing permissions, and publishing all the packages within a workspace together with a single command. That likely won’t be in 7.0, and may be pushed out until v8, depending on feedback and user demand. \n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-11-10T10:16:21.308-0500",
      "body": " [Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) have been implemented in NPM v7 which is currently a development release.\n"
    }
  ]
}
---
Our infusion image, stored in github at <https://github.com/fluid-project/infusion> , mixes together (at least) 3 different kinds of material, which are suitable for different audiences -&#x20;

i) cross-platform framework code (including the core framework, IoC, data binding, and parts of the preferences framework) which are suitable for all contexts, including the browser, node.js and possibly others\
ii) browser-dependent framework code (FluidView\.js etc.)\
iii) browser-dependent components (e.g. InlineEdit, Reorderer)\
iv) definitions to assist testing (jqUnit. IoC testing framework)

and for each of the above 4 categories there exist corresponding tests. Currently tests, together with definitions for iv) are consolidated across the above 4 areas in a top-level area named "tests".

pull requests such as <https://github.com/fluid-project/infusion/pull/544> have stalled since it is not really clear what we should do with our current npm image. We have made attempts to trim out browser-dependent code, but now that our node applications are starting to serve infusion to the browser, the issue has reopened - for development purposes, it would be helpful to serve broken-out versions of infusion from our own npm image.

Our last concentrated thought on this issue dates from end June 2014, summarised on this wiki page:  <http://wiki.fluidproject.org/display/fluid/Notes+on+Modularisation+of+Infusion>

The following post on the npm blog suggests that the npm team are aware of this kind of issue and hoping to provision npm as an element of the packaging for all JavaScript projects - <http://blog.npmjs.org/post/101775448305/npm-and-front-end-packaging> - however, the post acknowledges that npm by itself is inadequate and requires some form of additional infastructure/build process. Our experience with "bower" also shows it to be inadequate by itself.

For production client purposes we require a build step in order to build UIOptions' style sheets using "stylus". We also require a built image of the framework for these purposes.

It's still not clear how to integrate build steps into the process of acquiring and serving the framework. Ideally we would have a separate module just for this purpose - however, it's unclear where it would then check out the base image of the framework from in order to operate the build - would it check it out of git itself, based on its own revision?

In any case, it is clear that the development and review process of working with multiple modules (whether git or npm) is extremely painful and cumbersome, requiring multiple coordinated commits for related versions. This would be eased (but only slightly) if we moved over to more industry-standard practices for issuing releases. Part of the goals of our new module loader - <http://wiki.fluidproject.org/display/fluid/Notes+on+the+Infusion+Module+Loader> - relate to making an easy development and commit process for this workflow. JIRA at <http://issues.fluidproject.org/browse/FLUID-5521>

There was discussion on this subject in IRC this week starting at <https://botbot.me/freenode/fluid-work/2014-12-03/?msg=26724667&page=1> - the initial question was the fate of fluid.css within our npm module (currently excluded) which was required for the strategy of serving our framework image from our npm dependency.

        