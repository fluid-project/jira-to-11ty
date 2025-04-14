---json
{
  "title": "FLUID-5284",
  "summary": "switch from jslint to jshint",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-03-10T09:40:06.668-0400",
  "updated": "2014-04-22T13:21:17.555-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts",
    "Demos",
    "Framework",
    "Image Reorderer",
    "Inline Edit",
    "Keyboard Accessibility",
    "Layout Reorderer",
    "Pager",
    "Prefs Framework",
    "Progress",
    "Renderer",
    "Reorderer",
    "Sliding Panel",
    "Table of Contents",
    "Tabs",
    "Textfield Slider",
    "Tooltip",
    "Undo",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5297/",
      "key": "FLUID-5297",
      "summary": "Databinding tests fail in strict mode"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5298/",
      "key": "FLUID-5298",
      "summary": "strict mode breaks Infusion components in Safari"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-21T15:22:47.144-0400",
      "body": "Had some further discussion with @@Colin Clark in the channel today about some of the configuration options for jshint as well as not including the jshint comment in every file and just relying on the jshintrc file at the root for the default configuration.\n\n<https://botbot.me/freenode/fluid-work/2014-03-21/?tz=America/Toronto>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-04T16:09:20.972-0400",
      "body": "I've filed two pull requests\n\nOnly contains the jshint grunt task and related changes.\\\n<https://github.com/fluid-project/infusion/pull/489>\n\nContains the above as well as linting the code base\\\n<https://github.com/fluid-project/infusion/pull/490>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-11T09:05:10.926-0400",
      "body": "Need to update the wiki about this switch to jshint.\n\n<http://wiki.fluidproject.org/display/fluid/Laser+Eye+Checklist>\\\n<http://wiki.fluidproject.org/display/fluid/Coding+and+Commit+Standards>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-22T12:56:44.362-0400",
      "body": "The pull requests were merged at db5373a30e84c05a3eb0087f8659ab6bb1acfe4e\n"
    }
  ]
}
---
We've decided to make the switch from JSLint to JSHint. As part of this we'll need to update the lint comments at the top of the files, add a jshintrc file into the project, and update the build scripts to add in automatic running of jshint (jshint task, run jshint on file changes, run as a pre-commit hook).

<http://fluid.2324889.n4.nabble.com/linting-our-code-td8941.html>

        