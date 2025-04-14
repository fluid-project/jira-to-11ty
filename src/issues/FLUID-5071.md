---json
{
  "title": "FLUID-5071",
  "summary": "turn on strict mode in all javascript files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2013-06-27T13:06:33.672-0400",
  "updated": "2015-06-15T10:36:01.293-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Framework",
    "Image Reorderer",
    "Inline Edit",
    "Keyboard Accessibility",
    "Layout Reorderer",
    "Pager",
    "Prefs Framework",
    "Progress",
    "Renderer",
    "Reorderer",
    "Sliding Panel",
    "Table of Contents",
    "Testing Infrastructure",
    "Textfield Slider",
    "Tooltip",
    "UIEnhancer",
    "UI Options",
    "Undo",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:36:01.291-0400",
      "body": "This was addressed in <https://fluidproject.atlassian.net/browse/FLUID-5284#icft=FLUID-5284> when switching to use jsHint.\n"
    }
  ]
}
---
we should make use of strict mode for all of the infusion javascript code.

For details on what strict mode is see MDN;\
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode>

For any code that will concatenated into the single MyInfusion.js file we must ensure that the strict mode is within our closure scope, so as not to force strict mode onto any of our 3rd party dependencies.

e.g.

(function ($, fluid) {\
use strict;

// infusion code

})(jQuery, fluid\_version);

        