---json
{
  "title": "FLUID-3527",
  "summary": "Upgrade to jQuery 1.4.2 and jQuery UI 1.8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Justin Obara",
  "date": "2010-03-17T10:53:43.000-0400",
  "updated": "2011-01-30T11:58:20.309-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-536/",
      "key": "ENGAGE-536"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3527/FLUID-3527-ID.txt",
      "filename": "FLUID-3527-ID.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3527/FLUID-3527-SD.txt",
      "filename": "FLUID-3527-SD.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3527/FLUID-3527-UIO.txt",
      "filename": "FLUID-3527-UIO.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3527/qunit-FI.txt",
      "filename": "qunit-FI.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-17T12:05:50.000-0400",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T15:23:19.000-0400",
      "body": "Just running through the unit tests found these issues.\n\n1\\)\tjquery.keyboard-a11y \\\n⁃\t8.4 Died on test#4: handler is undefined  \\*\\***FIXED**\\*\\* (bug in the test, was using the old keyboard a11y api)\\\n2\\)\tInlineEdit\\\n⁃\tlots, about a quarter of them fail mostly with autosubmit\\\n3\\)\tImageReorderer (lightbox)\\\n⁃\tlots, has to do with cacheing\\\n4\\)\tLayoutReorderer\\\n⁃\thalf, has to do with cacheing\\\n5\\)\tReorderList\\\n⁃\t2 thirds, has to do with cacheing\\\n6\\)\tTextfieldSlider\\\n⁃\tall, can't locate and init slider \\*\\***FIXED**\\*\\* (missing jquery.ui.mouse.js)\\\n7\\)\tUIOptions\\\n⁃\tall, possibly because of the textfieldSlider \\*\\***FIXED**\\*\\* (missing jquey.ui.mouse.js)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T16:51:44.000-0400",
      "body": "Manual tests\\\n\\------------------\n\\\n1\\) dynamic-reorderer\n\n* fluid.dom.computeAbsolutePosition is not a function\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T17:34:22.000-0400",
      "body": "Components\\\n\\-----------------\n\n\n* UI Options\\\n  &#x9;\\- base is not a constructor (jquery.ui.widget.js) \\*\\***FIXED**\\*\\*\\\n  &#x9;\\- can't locate slider \\*\\***FIXED**\\*\\*\n\n- Inline edit\\\n  &#x9;\\- in edit mode the text from view mode isn't displayed\n\n* reorderer\\\n  &#x9;\\- reordering doesn't work\n"
    },
    {
      "author": "y z",
      "date": "2010-03-25T14:45:34.000-0400",
      "body": "Patch for the issue that updates integration demos.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-25T14:58:34.000-0400",
      "body": "Committed Yura's patch FLUID-3527-ID.txt &#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-03-26T11:14:44.000-0400",
      "body": "This is a patch for standalone demos.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-26T13:05:32.000-0400",
      "body": "Turns out slider also needs jquery.ui.mouse. Now All unit tests pass\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2010-03-26T15:53:59.000-0400",
      "body": "the major issue with the inlineEdit component with jQuery 1.4.2 is that the text of the element gets lost when the edit field instantiates.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-29T10:49:25.000-0400",
      "body": "Inline Edit issues\\\n\\=============\n\nline: 578\\\nfile: InlineEdit.js\n\nProblem: the call to index returns 0 instead of -1 when the element passed in is null or undefined.\\\n<http://api.jquery.com/index/>\n\nReorderer issues\\\n\\=============\n\nline: 248\\\nfile: GeometricManager.js\n\nProblem: .data(\"\") is now .data()\n\nline: 310\\\nfile: GeometricManager.js\n\nProblem: $.data(element) no longer returns a unique id\n\njQuery ui issues\\\n\\=============\n\njQuery ui files have all been renamed to have \"jquery.\" in front.\n\njQuery has added in a new files and dependencies:\n\njquery.ui.accordion.js depends on jquery.ui.core.js, jquery.ui.widget.js\\\njquery.ui.dialog.js depends on jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js\\\njquery.ui.draggable.js depends on jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js\\\njquery.ui.slider.js depends on jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js\n\njquery.ui.tabs.js requires new makup. This is only used in a demo though.\\\n<http://jqueryui.com/demos/tabs/>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-29T11:05:35.000-0400",
      "body": "InlineEdit failures (in tests) are caused by a jQuery APi change for 1.4 - the \"index\" method, as well as accepting an element, now will also function in a mode with \"no argument\", interpreting this search as for the index of the wrapped node within its siblings in the DOM. We now need to guard the operation in inlineEdit.js which supplies a sometimes empty \"source\" argument.\n\nReview for other uses of jQuery.index within the framework and deliverables:\n\nGeometricManager.js 456:             var index = $(elements).index(element) + folded;\\\nLooks safe, no apparent route for \"element\" to be null, and line 460 will blow if it is\n\njquery.keyboard-a11y.js 323:         var newIndex = selectionContext.selectables.index(elementToSelect);\\\nCall to selectElement is guarded against null elementToSelect at line 486, the other call is via evt.target at line 337\n\njquery-ui-accessible-tabs.js 32 and 50           tablist.tabs('select', tabs.index(tabToSelect));\\\nThis usage doesn't appear correct... the argument to the activatable function, as per implementation and docs, should be a browser event and not an element. How is this sample currently working?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-29T11:43:42.000-0400",
      "body": "Previous versions of jQuery.data() would allow us to get access to the private id associated with a DOM node. It appears that this API was considered \"undocumented\" and this functionality was removed in jQuery 1.4 - there no longer appears to be any way to get access to this information. Accordingly, we will fall back on a strategy based on a physical DOM id, operated by fluid.allocateSimpleId (this API did not exist at the time GeometricManager was designed). We had hoped to avoid disrupting the DOM in this way but over time the use of this new API has proved apparently safe and stable and is used throughout the framework. All Reorderer automated tests now pass again - fix for GeometricManager.js at revision 9743\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T18:40:56.000-0400",
      "body": "Last, minor issue to resolve before closing this issue: upgrading to the newest version of QUnit. Yura is in the process of working on this.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-31T17:16:35.000-0400",
      "body": "this patch has an example of a broken unit test due to the updated qunit.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:14:00.000-0400",
      "body": "I've reviewed Antranig's change to InlineEdit.js at r9742 related to the jQuery 1.4.2 upgrade and it looks good.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:15:08.000-0400",
      "body": "I've reviewed Antranig's changed to GeometricManager.js at r9743 and they look good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-15T09:17:25.000-0400",
      "body": "jQuery and jQuery UI have been updated and are part of the 1.2 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:35.583-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
Upgrade to jQuery 1.4.2 and jQuery UI 1.8

Also should update Qunit if a new version is available.

We are currently waiting for jQuery UI 1.8 final to be released before upgrading.

At this time we should also update to the latest A-grade support.

        