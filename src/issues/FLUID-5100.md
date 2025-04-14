---json
{
  "title": "FLUID-5100",
  "summary": "Convert build scripts to use grunt for minification task",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-07-25T07:51:41.388-0400",
  "updated": "2014-03-02T14:30:24.030-0500",
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
      "date": "2013-07-25T07:56:08.840-0400",
      "body": "Can look at the video player (<https://github.com/fluid-project/videoPlayer>) for inspiration on setting up grunt.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-08-07T16:03:00.372-0400",
      "body": "We discussed this process at the Aug. 7, 2013 Community Workshop. We stumbled a bit at the point of removing the existing ant-based minification from the existing scripts. A bit of further discussion in the channel (un-logged) narrowed our choices down to: continue to try to migrate the build process, one task at a time, over to grunt, or b) start fresh with a grunt-only version.\n\nConcerns over the grunt-only version included time: we're working on this an hour at a time.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-14T16:16:29.482-0400",
      "body": "At todays community meeting it was decided that, at least for the time being, we would start the grunt build scripts from scratch.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-14T16:16:47.570-0400",
      "body": "My branch:\\\n<https://github.com/jobara/infusion/compare/FLUID-5100>\n\nThe above branch has now be incorporated into the following:\\\n<https://github.com/jobara/infusion/tree/FLUID-5120>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-02T14:30:24.022-0500",
      "body": "Resolved with <https://fluidproject.atlassian.net/browse/FLUID-5120#icft=FLUID-5120>\n"
    }
  ]
}
---
We are in the process of converting the ant based build scripts to grunt. In this step we should replace the current yui based minification task with one based on grunt and uglify. Until the entire build script is converted to use grunt, we should drive the grunt tasks with ant.&#x20;

In addition to modifying the ant script and setting up the grunt task we will need to setup npm to install the necessary dependencies and add this as well to part of our build process.

grunt: [http://gruntjs.com](http://gruntjs.com/)\
uglify plugin: <https://npmjs.org/package/grunt-contrib-uglify>

        