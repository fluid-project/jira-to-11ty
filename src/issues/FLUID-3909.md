---json
{
  "title": "FLUID-3909",
  "summary": "Rich Text Inline Edit - Pressing Cancel renders the Undo Edit link when no edits performed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2010-12-15T16:30:41.283-0500",
  "updated": "2024-07-22T13:49:46.613-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win7 IE8, IE9, FF3.6, FF4\\\nWinXP: FF 3.6, but NOT IE6\\\nMac OS 10.6: only for the CKEditor, not TinyMCE intermittently.\\\nmacOS 10.12: Safari 10\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5386/",
      "key": "FLUID-5386"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-22T12:27:26.263-0500",
      "body": "Doesn't seem to be a problem when using the keyboard only\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-07T16:41:01.804-0400",
      "body": "This seems to be related to the tooltip plugin.  If we look at the richtext inline edit demo, then we will notice that \"title\" is only added when we mouseover the element.   After some investigation, the problem seems to come from the options within fluid.tooltip().  More precisely, the following option seems to be the problem:\n\ncontent: function () {\\\nreturn \"Tooltip\";\\\n},\n\nWhen \"title\" is not defined in an element and the above option is specified, then a \"mouseover\" event will add a \"title\" attribute to the element, but does not remove the attribute on \"mouseout\". &#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-07T16:42:49.768-0400",
      "body": "More information on the option, <http://wiki.jqueryui.com/w/page/12138112/Tooltip>, look for \"content\"\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-07T17:22:06.173-0400",
      "body": "Added unit test, can be found on my github branch here: <https://github.com/harriswong/infusion/tree/FLUID-3909>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-08T10:29:07.503-0400",
      "body": "This occurs with just the jquery tooltip ui.  It's fixed in a later commit: <https://github.com/jquery/jquery-ui/commit/917d2b135891339cb02ce9cda5721faecae2a3ae>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-06-20T16:21:29.646-0400",
      "body": "Our tooltip version is Dec 03, 2010: <https://github.com/jquery/jquery-ui/commit/1fd34199efa9ddc35276b415cad8e7e37a6cc856#ui/jquery.ui.tooltip.js>\\\nThe update mentioned above is May 29, 2011: <https://github.com/jquery/jquery-ui/commit/917d2b135891339cb02ce9cda5721faecae2a3ae>\n\nOur current tooltip.js does not include this fix.  The full history tree of jquery UI 1.9 tooltip is here: <https://github.com/jquery/jquery-ui/commits/master/ui/jquery.ui.tooltip.js>. &#x20;\n\nNote: One of the reasons we did not upgrade tooltip to the newest version is destroy() becomes \\_destroy() in the newer tooltip version, and some of our functions started failing.\n"
    },
    {
      "author": "y z",
      "date": "2012-08-15T15:58:09.755-0400",
      "body": "Also happens when rich inline edit is closed on focus out.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T13:49:46.445-0400",
      "body": "Could not reproduce with Safari 17.5 and FF 128 on macOS 14.5\n"
    }
  ]
}
---
If no previous edits have been performed (i.e. if viewing a rich text editable field for the first time), entering Edit mode, and Cancelling renders the "Undo Edit" link.

To reproduce:

1\. Load <http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\
2\. Press Edit link.\
3\. Press Cancel.

Notice Undo edit link even though no edits were performed.

        