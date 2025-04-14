---json
{
  "title": "FLUID-5120",
  "summary": "Implement the infusion build scripts with grunt",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-08-21T14:50:14.555-0400",
  "updated": "2014-02-18T08:14:45.386-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-08-23T08:40:42.657-0400",
      "body": "Justin's Branch:\\\n<https://github.com/jobara/infusion/tree/FLUID-5120>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-31T15:16:18.939-0500",
      "body": "We spoke in the channel today ( <https://botbot.me/freenode/fluid-work/msg/10401793/> ) about how to handle the css generation step. Until we decide on a css precompiled, we will remove the css generation build step and commit the generatedcss files straight to the repo. A README will accompany them describing the generation step so that it can be reproduced with the css precompiler.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-06T08:31:21.329-0500",
      "body": "Submitted a pull request to switch from ant to grunt based builds: \\\n<https://github.com/fluid-project/infusion/pull/461>\n\nThe functionality should be mostly the same with the following exceptions.\n\n1\\) css generation for the preference framework (This will be revived after a css preprocessor, less or sass, has been chosen, and the themes rewritten)\n\n2\\) url rewriting (This is used only for release testing. It is something that should be brought back in the future.)\n\n3\\) The names for the builds, as well as the command line arguments have also changed slightly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-18T08:14:35.388-0500",
      "body": "Pull request ( <https://github.com/fluid-project/infusion/pull/461> ) was merged into the project repo at ab2c0bf8cf0e4d22e7cd6979eaad132fb54b3fbb\n"
    }
  ]
}
---
Reimplement the infusion build scripts with grunt. To start with the new build scrips should have the same features as the existing ant based build scripts.

Feaures:&#x20;

* Minify js files
* Concatenate js files
* Create zip bundles
* Generate UIO Themes
* Rewrite URL's in demos/unit tests for relase testing
* change URL's to point at the concatenated js file
* Dependency Management
* Include modules
* Exclude modules

<http://wiki.fluidproject.org/display/fluid/Grunt+based+build+scripts+planning>

        