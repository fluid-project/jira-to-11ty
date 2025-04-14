---json
{
  "title": "FLUID-6078",
  "summary": "Links in Infusion-Docs for Model Transformation API still point at GPII wiki",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-11-17T10:32:17.681-0500",
  "updated": "2016-11-17T16:22:35.733-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-11-17T16:22:19.546-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion-docs/pull/105> has been merged into the master branch at b8f08002accfc6fcdbb6bedb2e5953d1b5626f56\n"
    }
  ]
}
---
All links in the Infusion-Docs related to Model Transformation API should point at the Model Transformation API docs page, and not to the GPII Wiki.

From the [IRC Channel](https://botbot.me/freenode/fluid-work/2016-11-17/?msg=76615743\&page=1):

if u search thru infusion-docs repo with this link: <https://wiki.gpii.net/w/Architecture_-_Available_transformation_functions>, there are a few pages having links pointing to it. those links should be repointed to <http://docs.fluidproject.org/infusion/development/ModelTransformationAPI.html>

        