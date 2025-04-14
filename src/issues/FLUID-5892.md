---json
{
  "title": "FLUID-5892",
  "summary": "Refactor fluid.slider to be able to use native <input type=\"range\"> instead of jQuery UI slider widget",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-04-19T14:30:28.588-0400",
  "updated": "2016-07-11T14:19:46.754-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-04-19T14:37:00.470-0400",
      "body": "Thanks Alan - this is very interesting. Are there any accessibility implications to switching to the use of the native range control? Is it typically read adequately by screenreaders and operable via the keyboard? Also, were you able to narrow down which part of the jQuery UI slider implementation is responsible for the failure within an iframe? Perhaps there is a workaround for it, which might be quicker to implement than the investigation above.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-04-19T14:57:58.266-0400",
      "body": "@@Antranig Basman - from what I could tell, the issue is with mouse tracking when the jQuery is not the one referenced from within the iframe.&#x20;\n\nIf you look at my branch at <https://github.com/waharnum/infusion/tree/FLUID-5698> you can see the following if you look at either the UIO or Preferences demo:\n\n* no errors are thrown\n* attempting to interact with the slider results in the mouse tracking not happening in the iframe, but in the context of the parent document (you can click on the slider button to \"capture\" it, then move the mouse down into the parent document and move left and right to move the slider)\n\nI examined the code (both for fluid.slider and the jQuery UI slider) and looked around a little online, but didn't see an obvious way to work around the issue. I suspect it's the same one as the tooltip UI. That said, I didn't spend a huge amount of time looking - did the issue with the tooltip UI show any possible workarounds?\n\nAs for the accessibility - it sounds like it should be as good or better as the jQuery UI slider assuming the use of ARIA. There's a test page at <https://thepaciellogroup.github.io/AT-browser-tests/test-files/input-range.html> that shows it being operable with the keyboard. I also know @@Justin Obara and @@Jonathan Hung have been using \\<input type='range'> in their recent PHET work, so perhaps they can comment?\n\nI'm hoping replacing the jQuery UI widget with the native HTML one will be fairly straightforward but am prepared to abandon it in favour of other approaches if it proves not to be or has accessibility issues.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-19T17:47:04.701-0400",
      "body": "Sounds good, @@Alan Harnum - at a guess from your description, the problem may lie in the following block of code - <https://github.com/fluid-project/infusion/blob/master/src/lib/jquery/ui/js/jquery.ui.slider.js#L166> - since it seems that the slider follows a \"roll your own\" approach for binding to mouse events rather than depending on the (presumably) much more well-tested jQuery UI draggable library. It would probably take us longer to research the problem and fix it (or, alternatively, go through a cycle of jQuery + jQuery UI upgrades) than it would to revert to the native HTML5 range control, so I'm in favour of the latter if the accessibility story is good as it seems to be.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-04-21T08:39:49.720-0400",
      "body": "@@Alan Harnum @@Antranig Basman the accessibility of the range slider is very good. I've also tested it with JAWS, NVDA, VoiceOver on Safari, IE 11/Edge, Firefox, Chrome and it works really well.\n\nThe only exception being in IE11 - I ran into a quirk where the slider appeared as text input fields if the content was loaded directly from the filesystem and not served via a server. This was true for me in VirtualBox, it may not be an issue on a native machine.\n\nYou can play with slider implementation we have for PhET here: <https://jhung.github.io/john-travoltage-html/>\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-04-21T09:37:26.294-0400",
      "body": "Thanks @@Jonathan Hung that's really good information.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-07-05T10:12:26.564-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/724> has been merged into the infusion master branch at f48d47f9144a91bd47c326da03dd4e3b92dd4396\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-11T14:19:46.754-0400",
      "body": "Merged infusion-docs PR ( <https://github.com/fluid-project/infusion-docs/pull/93> ) at f5af742ba3f4f4099d8027c391de14ab4e33074c\n"
    }
  ]
}
---
At the time of the implementation of the original preferences framework components, the new [HTML5 Form Additions](https://www.w3.org/wiki/HTML5_form_additions) were not at a standard level of support in current browsers, so the jQuery UI slider was used to implement the fluid.slider component.

In reviewing FLUID-5698 it seems the use of the jQUI slider is one barrier to being able to remove some or all of the redundant Javascript from the HTML for the SeparatedPanelPrefsEditorFrame that's included in an \<iframe>. So I propose trying to replace the jQUI-based slider with one based on the native (and now apparently fully supported in all current browsers) "range"-type input.

Using a native form control obviously has a number of other potential advantages besides the improved performance and behaviour we'll get.

        