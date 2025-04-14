---json
{
  "title": "FLUID-5119",
  "summary": "move lookupMsg function from SlidingPanel.js to framework",
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
  "date": "2013-08-20T09:04:57.058-0400",
  "updated": "2014-03-26T16:19:32.516-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Sliding Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5180/",
      "key": "FLUID-5180",
      "summary": "Simplify process for using messages from message bundles in the preference framework"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-15T15:12:32.018-0400",
      "body": "May want to consider moving the code changes from <https://fluidproject.atlassian.net/browse/FLUID-5180#icft=FLUID-5180> to the framework instead of the one from slidingPanel.js\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:15:14.822-0400",
      "body": "Submitted pull request <https://github.com/fluid-project/infusion/pull/419>\n\nThe pull request doesn't move the lookupMsg to the framework, but rather removes it completely. <https://fluidproject.atlassian.net/browse/FLUID-5180#icft=FLUID-5180> defined a new lookup method, which is employed in the SeparatedPanelPrefsEditor's instance of slidingPanel.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-26T16:19:32.516-0400",
      "body": "pull request merged at 861d635d56c7546c764d23cf40e7f96e85516b17\n"
    }
  ]
}
---
The code to look up messages in a message bundle for non-renderer components is currently in SlidingPanel.js. However, this seems like a useful function that should be moved to the framework as a general utility for any component to use. It looks like the discovery tool will already need to make use of this.

Current code:

fluid.slidingPanel.lookupMsg = function (messageResolver, value) {\
var looked = messageResolver.lookup(\[value]);\
return looked ? looked.template : looked;\
};

<https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/SlidingPanel.js#L72-L75>

        