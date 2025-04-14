---json
{
  "title": "FLUID-2792",
  "summary": "Saving rich text content, without making changes, will still render the undo control",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-05-27T15:04:45.000-0400",
  "updated": "2009-08-07T15:02:03.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2792/FLUID-2792.patch",
      "filename": "FLUID-2792.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2792/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:30:16.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-07-29T11:31:13.000-0400",
      "body": "I think the problem happens in the finish() function\n\nvar finish = function (that) {\\\nvar newValue = that.editView.value();\\\nvar oldValue = that.model.value;\n\nvar viewNode = that.viewEl\\[0];\\\nvar editNode = that.editField\\[0];\\\nvar ret = that.events.onFinishEdit.fire(newValue, oldValue, editNode, viewNode);\\\nif (ret === false) {\\\nreturn;\\\n}\n\nthat.updateModelValue(newValue);\\\nthat.events.afterFinishEdit.fire(newValue, oldValue, editNode, viewNode);\n\nswitchToViewMode(that);\\\n};\n\nI expect that\n\nvar ret = that.events.onFinishEdit.fire(newValue, oldValue, editNode, viewNode);\\\nif (ret === false) {\\\nreturn;\\\n}\n\nWill do some compare of the Values and decide to return or go on and show undo. The new\\\nand old are different due to \"\\n\" in the old text.\n\nnew\n\n\\<p>After a hiatus, \\<strong>Portishead\\</strong> is back with their first studio album in 6 years. \\<em>Third\\</em> brings back the familiar and the new, and none of this is best exemplified than in the track \\<em>Machine Gun\\</em>. It seems that regardless of how \\<strong>Portishead\\</strong> sounds now, the one thing that has stayed constant is their refusal to be ordinary.\\</p>\n\nold\\\n\\n \\<p>After a hiatus, \\<strong>Portishead\\</strong> is back with their first studio \\n album in 6 years. \\<em>Third\\</em> brings back the familiar and\\n the new, and none of this is best exemplified than in the track\\n \\<em>Machine Gun\\</em>. It seems that regardless of how \\<strong>Portishead\\</strong> \\n sounds now, the one thing that has stayed constant is their refusal to be ordinary.\\n \\</p>\\n\n"
    },
    {
      "author": "y z",
      "date": "2009-07-31T15:04:06.000-0400",
      "body": "the patch properly cleans up the text content of the tag that is being loaded into the editor the first time.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T16:38:58.000-0400",
      "body": "Thanks for this patch, applied at revision 7706\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-06T10:43:01.000-0400",
      "body": "Updated patch to account for more wrinkles of whitespace normalisation for TinyMCE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-06T13:48:12.000-0400",
      "body": "It seems to still not be working in IE and Opera\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-07T13:11:17.000-0400",
      "body": "More thorough fix at rev 7730:\n\nChange of strategy to deal with wider category of normalizations for IE, Opera etc. HTML accessor now changed back to previous release, and new configuration of modelComparator allows pluggable change detection strategies.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-07T15:02:03.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Saving rich text content, without making changes, will still render the undo control

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>

2\) Open one of the rich text inline edit fields into edit mode

3\) Immediately save

Notice that the undo control is rendered, even though there are no changes to undo

        