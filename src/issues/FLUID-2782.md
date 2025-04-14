---json
{
  "title": "FLUID-2782",
  "summary": "Build scripts: \"dailyBuild\" target produces only minified code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2009-05-27T10:50:37.000-0400",
  "updated": "2011-01-20T15:09:42.572-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2717/",
      "key": "FLUID-2717",
      "summary": "Code deployed on build site should not be minified"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2782/FLUID-2782.patch.txt",
      "filename": "FLUID-2782.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-27T12:31:59.000-0400",
      "body": "I'm attaching a patch that allows the dailyBuild target to use the un-minified files while the deploymentBuild uses the minified files. I'd like a review of this patch before it's committed.\n\nNote: I've applied the patch to the build site to facilitate testing. It's been applied in\\\n\\~/continuum/working/36/build-scripts\\\non the build server. When the patch is committed, the build site should be reverted and a proper update done.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-06T14:47:09.000-0400",
      "body": "I've reviewed this change and it looks good. It should be committed once the repository unfreezes.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-06T14:51:30.000-0400",
      "body": "I noticed that the 'stop-deploy-start' shell script has been updated in the infrastructure directory already to work with this patch. The script will need to be updated on the server once the patch has been committed.&#x20;\n"
    }
  ]
}
---
Right now, the dailyBuild target deploys minified code to the build site. This makes testing and debugging of code on the build site difficult.

We need a way to deploy a war file that has unminified code in it.

        