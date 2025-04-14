---json
{
  "title": "FLUID-5672",
  "summary": "The tooltip should be able to use the idToContent to set the jQuery Tooltip Widget items option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2015-05-29T07:44:32.237-0400",
  "updated": "2021-07-29T01:32:48.839-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-361/",
      "key": "FLOE-361",
      "summary": "FD tooltips can be read on both mouse in and mouse out of buttons"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2015-06-15T15:23:04.852-0400",
      "body": "Comments from Antranig in #fluid-work:\n\n\\[14:49] \\<Bosmon> simonjb - another useful piece of work would be to adjust the implementation so that it automatically skips disabled DOM nodes in fluid.tooltip.resolveTooltipTarget\\\n\\[14:49] \\<Bosmon> simonjb - <https://github.com/fluid-project/infusion/blob/master/src/components/tooltip/js/Tooltip.js#L61>\\\n\\[14:49] \\<Bosmon> This was something that we hacked in the FD tool at the last moment\\\n\\[14:50] \\<Bosmon> but it requires the implementor to explicitly add the wacky :not(\\[disabled]) annotation at the end of the tooltip items selector\\\n\\[14:50] \\<Bosmon> simonjb: <https://github.com/fluid-project/first-discovery/blob/master/src/js/firstDiscoveryEditor.js#L129>\n"
    }
  ]
}
---
Currently the tooltip component takes in an option for "items" which gets passed down to the widgetOptions and eventually makes it way directly into the underlying jQuery UI tooltip widget. The items option is used to define which elements should show the tooltip. <http://api.jqueryui.com/tooltip/#option-items>

The default in Tooltips.js is set to "\*", which means all elements. The result of this is that if a tooltip is set for an element that has child elements, a new tooltip is created as the mouse passes over each of these DOM elements instead of just the parent. (see: <https://fluidproject.atlassian.net/browse/FLOE-361#icft=FLOE-361>)

An alternative solution could be to make use of the idToConent to calculate the correct elements, by ID, to use for the items. However, because the tooltip supports both idToContent and a straight content model the items option is still required for the latter case. We will need to have appropriate logic to know when to attempt to calculate the items as well as the ability to update the items if any of the ID's in the idToContent model object are modified after initialization.

        