---json
{
  "title": "FLUID-4256",
  "summary": "Refactor formData invoker ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Mike Lam",
  "date": "2011-05-18T10:40:38.450-0400",
  "updated": "2011-06-21T13:13:21.351-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-18T10:41:40.577-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-18T16:33:14.907-0400",
      "body": "Pull request link :   <https://github.com/fluid-project/infusion/pull/49>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-27T08:46:57.893-0400",
      "body": "This is the updated pull request <https://github.com/fluid-project/infusion/pull/53>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-27T11:29:10.488-0400",
      "body": "Merged into the project repo at b62f829f9241ede17629bc3f4cda7cddc30b4675\n"
    }
  ]
}
---
The formData invoker needs to be refactored so that it is not resolved every time an HTML5 uploader is instantiated.   FF 3.6 does not support formData which causes the application to fail.

        