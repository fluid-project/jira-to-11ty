---json
{
  "title": "FLUID-4871",
  "summary": "Enhance the progressive enhancer so that it can distinguish between browser and non-browser environments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2012-12-18T06:05:51.521-0500",
  "updated": "2024-07-22T09:35:48.996-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Progressive Enhancement"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-18T15:45:56.959-0500",
      "body": "This was required as part of the <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850> and <https://fluidproject.atlassian.net/browse/FLUID-4886#icft=FLUID-4886> work delivering the IoC-based testing framework in a node.js-based environment (<http://issues.gpii.net/browse/GPII-77>)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2013-01-18T16:00:20.196-0500",
      "body": "I noticed, installing Infusion as an npm module directly from Github, that the ProgressiveEnhancement.js file is being .npmignored.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-01-25T17:02:55.535-0500",
      "body": "Now that <https://fluidproject.atlassian.net/browse/FLUID-4886#icft=FLUID-4886> has hit trunk, this patch can be safely committed - the previous version of ProgressiveEnhancement.js would bomb out in node.js. Thanks for this patch, Colin - committed at revision 86ec577\n"
    },
    {
      "author": "y z",
      "date": "2013-01-31T16:51:18.839-0500",
      "body": "There's an issue with loading infusion in node environment since we are creating a window stub when loading the framework in node. This results in the original check always returning true and thus failing on the consequent reference to jQuery framework.\n"
    },
    {
      "author": "y z",
      "date": "2013-02-05T08:58:03.458-0500",
      "body": "Merged into master at rev: 37074a2f1070bc3a948706869f22e5d58c57d36d\n"
    }
  ]
}
---
Right now, ProgressiveEnhancement.js is only capable of discriminating between different browser environments, and will fail on being executed outside a browser, for example, in node.js. However, it contains some basic algorithms which are useful in all environments, and should be enhanced so that it a) doesn't fail outside a browser, b) helps clients to discriminate browser vs non-browser environments by use of appropriate type tags.&#x20;

        