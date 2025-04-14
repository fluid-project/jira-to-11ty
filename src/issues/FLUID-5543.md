---json
{
  "title": "FLUID-5543",
  "summary": "Docs for how to override UIO defaults are incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-10-28T14:44:27.042-0400",
  "updated": "2014-11-10T11:02:18.282-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-10-28T15:09:44.221-0400",
      "body": "Currently new Fluid website is using UIO and the default 1.25 line-height is not enough. If possible I would like to be able to change the value to 1.6.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-11-05T12:21:25.730-0500",
      "body": "Justin and I walked through the process for a UIO component integrator to override a default, and it is onerous, to say the least.  We decided that: UIO users get UIO out of the box, as is, no customizations. If you want customizations, use the Builder yourself. I will update the docs to remove the wrong instructions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-11-10T11:01:54.986-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion-docs/pull/36> ) into the infusion-docs repo at 74a40a1c83cbbd9a77735d885398ec65010b3465\n"
    }
  ]
}
---
The latest UIO API documentation describes using fluid.defaults() to override the defaults for the preferences (for example, to set the default colour scheme to black on white, or the default font size to 2x), but trying to use the specified technique does not work.

<https://github.com/fluid-project/infusion-docs/blob/master/src/documents/UserInterfaceOptionsAPI.md>

        