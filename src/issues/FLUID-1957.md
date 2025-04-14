---json
{
  "title": "FLUID-1957",
  "summary": "Caret not placed in rich text editor upon activation of inline edit field: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-12-11T09:41:14.000-0500",
  "updated": "2011-01-10T10:08:53.596-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\\\nFF3 (Win7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3375/",
      "key": "FLUID-3375",
      "summary": "Caret does not appear in textArea for rich text inlineEdit: using Firefox"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2206/",
      "key": "FLUID-2206"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:57:22.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-09T08:53:49.000-0500",
      "body": "Seems to only be an issue with FF2 now.\n\nquote from Antranig's comment on <https://fluidproject.atlassian.net/browse/FLUID-2203#icft=FLUID-2203>\\\n\"Secondly, there is much improved behaviour on initial focusing - that is, the control is correctly focused and the caret is moved to the end of the editable area on edit, at least, on those browsers which correctly implement the respective rich text control's APIs. This doesn't work on FF2, but it is possible that our hard-won hack in fluid.setCaretToEnd could be brought in to patch up this particular case.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-09T08:54:42.000-0500",
      "body": "Update environments\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-16T17:44:52.000-0500",
      "body": "I have tried fairly strenuously to get this to work, but the only really productive thing to do in FF2 is to disable any attempts to set focus to these kinds of controls since on TinyMCE this can even cause it to lock up and become uneditable. Since this only affects one (aging) browser I have downgraded it to minor and punted it forwards.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:42:49.132-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T15:26:18.530-0500",
      "body": "Occurs in FF3 as well. Sometimes the caret is not rendered, but typing will reveal that an invisible caret is at the end of the text.\n"
    }
  ]
}
---
Caret not placed in rich text editor upon activation of inline edit field

Steps to reproduce:

1\) Open the rich text inline edit example:\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Click on one of the lines of text to open up the inline edit field in edit mode

3\) Notice that the caret is not placed inside the rich text editor automatically

        