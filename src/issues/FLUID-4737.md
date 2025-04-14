---json
{
  "title": "FLUID-4737",
  "summary": "Referencing a portion of the model as the args to a messagkey in the fluid.renderer.repeat expander will corrupt the component's model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2012-07-26T14:37:02.700-0400",
  "updated": "2014-03-03T12:50:20.857-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4737/FLUID-4737.patch",
      "filename": "FLUID-4737.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-26T14:47:52.728-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4737#icft=FLUID-4737>.patch is a unit test showing the issue. You can also look at the <https://fluidproject.atlassian.net/browse/FLUID-4737#icft=FLUID-4737> branch in my github repo:\\\n<https://github.com/jobara/infusion/tree/FLUID-4737>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-26T14:52:34.429-0400",
      "body": "In debugging I've tracked it back to resolveArgs in fluidRenderer.js\\\n<https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/renderer/js/fluidRenderer.js#L800-806>\n\nmore specifically to it's call to upgradeBound, which is also defined in fluidRenderer.js\\\n<https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/renderer/js/fluidRenderer.js#L115-128>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-30T10:14:19.195-0400",
      "body": "I tried this with the old style component tree, and had the same problem.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2012-08-02T22:01:20.913-0400",
      "body": "Reviewed and pushed to master at revision be0b2ff095fa3ea1b1cb4abd3e38e41462d333d1\n"
    }
  ]
}
---
If you use a reference to a portion of the model as the argument for a messagekey in the fluid.renderer.repeat expander, this portion of the model will be corrupted by having all it's key/value pairs converted to objects like key: {value: value}

        