---json
{
  "title": "FLUID-5899",
  "summary": "Support multiple versioned deployment for infusion-docs deployment",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Cindy Li",
  "date": "2016-05-03T09:50:30.074-0400",
  "updated": "2022-03-14T13:21:15.772-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5896/",
      "key": "FLUID-5896",
      "summary": "Cannot deploy infusion-docs to the live site"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:21:15.737-0400",
      "body": "Migrated to Infusion Docs [Issue #224](https://github.com/fluid-project/infusion-docs/issues/224)\n"
    }
  ]
}
---
The infusion-docs deployment has an issue with the Windows platform that, when running the docpad deployment commands, docpad.js is somehow recognized as an executable, see <https://github.com/docpad/docpad/issues/561>. An attempt to fix it is to rename docpad.js to docpad-config.js and use docpad "-c" option to load in the renamed config file, but it causes <https://issues.fluidproject.org/browse/FLUID-5896> issue, so the attempt was reverted back.

Also, the deployment should be able to support multiple versioned deployment so that for example when Infusion 2.0.0 is released, the docs for 2.0.0 can be permanently deployed to <http://docs.fluidproject.org/infusion/2.0.0/>, see IRC discussions at <https://botbot.me/freenode/fluid-work/2016-05-03/?msg=65356315&page=1>

All these indicate it might be worth introducing grunt into infusion-docs that can check out the existing branch, copy to just one directory of it, commit it, delete the remote branch and then regenerate it.

A few references:\
Antranig's code of manual grunt copy task: <https://github.com/fluid-studios/infusion-onward-video-example/blob/master/Gruntfile.js#L30>\
An article of how to push a directory to a remote branch as a subtree: <https://gist.github.com/cobyism/4730490>

        