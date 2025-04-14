---json
{
  "title": "FLUID-1966",
  "summary": "CSS positioning styles for the inline edit dropdown component are not correct",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Antranig Basman",
  "date": "2008-12-12T10:34:52.000-0500",
  "updated": "2009-01-13T13:41:53.000-0500",
  "versions": [
    "0.6beta1",
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, Opera: WinXP (possibly others)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2116/",
      "key": "FLUID-2116",
      "summary": "The dropdown inline edit appears in the top left corner when clicked on"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1966/FLUID-1966.patch",
      "filename": "FLUID-1966.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-12T10:54:49.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-13T23:43:13.000-0500",
      "body": "This patch employs some CSS and markup changes, HOWEVER this solution requires more: in order to complete the effect of a fake inline combo box, something needs to push the content \"around\" the combo box to avoid having it block content following it. \\\nI suggest either not hiding the \"viewEl\" and adding to it the following css padding-right: {whatever the width diff between the viewEl and the combobox is} or using an inline element placeholder with the width of the combobox; either way, an inline element is needed to \"push\" the content around to complete the effect\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T10:45:21.000-0500",
      "body": "Before applying this patch, I was able to reproduce the bug in FF2 and Opera on Win XP. After applying the patch, the problem is still present - it looks unchanged.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-15T12:59:48.000-0500",
      "body": "Sorry, original was the wrong patch\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T13:43:08.000-0500",
      "body": "This new patch does fix the issue in FF2 on WinXP, but in Opera (in both WinXP and Mac OS X), the drop-down list jumps to the very top left of the entire window.\n\nAlso, I'm concerned that the patch is affecting the css file that comes with the jquery selectbox plugin, which is not our code. I don't know whether or not its something we might update at some point.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-15T13:56:25.000-0500",
      "body": "Hi Anastasia - it is fine to affect the plugin code, since this is where the bug lies - you can see the problem in their standalone demo. It is not a very \"core\" plugin. I also see the Opera jumping effect. However, we should make sure not to patch their CSS in a way which depends in any way on our own classes or infrastructure.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-12T13:36:45.000-0500",
      "body": "Bug Parade 0.7 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-12T16:18:55.000-0500",
      "body": "Deleted previous patches, attached patch which solves problem in all browsers but Opera 9.x\\\nThis is believed to be a nested positioning bug, as Justin confirmed this patch works in Opera 8.5\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-13T11:00:47.000-0500",
      "body": "I reviewed the patch and it looks great.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T11:22:56.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n\nNOTE that Opera 9.5 suffers from <https://fluidproject.atlassian.net/browse/FLUID-2116#icft=FLUID-2116>\n"
    }
  ]
}
---
The inline edit dropdown sample at <http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/dropdown.html> shows a CSS issue to do with the positioning of the popup for the selection control relative to the initiating control. This should really be positioned so that the top member of the list is directly below the "select box" which is displayed - however, on most browsers the dropdown list tends to overlap the selection box about halfway.

        