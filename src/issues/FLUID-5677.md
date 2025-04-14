---json
{
  "title": "FLUID-5677",
  "summary": "Renderer should return to applying jQuery.empty() when blasting old markup, to ensure that UI widgets are properly disposed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-06-03T14:41:51.800-0400",
  "updated": "2015-06-16T13:54:48.860-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5676/",
      "key": "FLUID-5676",
      "summary": "Renderer should return to applying jQuery.empty() when blasting old markup, to ensure that UI widgets are properly disposed"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-03T14:42:34.210-0400",
      "body": "See channel discussion on this issue at <https://botbot.me/freenode/fluid-work/2015-06-03/?msg=40908212&page=1>\n"
    }
  ]
}
---
Long ago, we decided to sideline the standard jQuery pipeline for removing markup from the document, based on $.remove() and $.empty() - in the days of CollectionSpace, we were faced with extremely large UIs for which the cost of $.empty() was too high, particularly in Firefox. At least on the supported browsers at that time, assigning "" to innerHTML was found to be orders of magnitude faster and adequately stable - although it seems we still have a very old switch which continues to use $.empty() on IE presumably for reasons of stability.

<https://github.com/fluid-project/infusion/blob/master/src/framework/renderer/js/fluidRenderer.js#L1497>

Today in work on the First Discovery tool we encountered YET ANOTHER tooltip accumulation bug, triggered by the fact that we were obliterating the markup holding a button over which a tooltip was displayed as part of the early part of renderer workflow - and only later trying to call the Infusion destructor for the component wrapping it, which was then no longer able to communicate to jQuery UI which tooltip should be destroyed.

The performance impact of $.empty() has probably ceased to be significant years ago, and we should just switch back to using it on all platforms. Note that during that era, jQuery UI destructors couldn't be relied upon to work reliably in any case: <https://forum.jquery.com/topic/jquery-empty-does-not-destroy-ui-widgets-whereas-jquery-remove-does-using-ui-1-8-4>

        