---json
{
  "title": "FLUID-4504",
  "summary": "Focus styling not visible for the \"Save and Apply\", \"Reset and Apply\" and \"Cancel\" buttons in the \"... on black\" contrast themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2011-10-04T14:28:28.722-0400",
  "updated": "2011-10-07T14:02:26.718-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF 6 (Mac OS 10.6)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4512/",
      "key": "FLUID-4512",
      "summary": "Focus styling does not work in IE6 and IE7"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-10-05T13:50:12.686-0400",
      "body": "Merged Heidi's pull request <https://github.com/fluid-project/infusion/pull/183> into the project repo at 1cc4ed0b9200e1af2921ebe1415d48bb9eb91b04\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-06T12:01:18.046-0400",
      "body": "This actually turns out to be a bit larger than originally believed. In discussing this with James, Michelle, and Anastasia we decided that focus should be always added by the contrast themes. This means that they shouldn't rely on the fl-focus scoping.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-06T15:44:31.096-0400",
      "body": "The original fix which added the blue outline to the dialog's controls does NOT work for IE6 and IE7 on Win XP.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-07T13:23:33.435-0400",
      "body": "In discussing this more on list we have now decided that the proper way to address this, at this point, is to just simply add the fl-focus class into the demo.\n\nThis is discussed in more detail on an e-mail thread from the fluid-work list.\\\n<http://lists.idrc.ocad.ca/pipermail/fluid-work/2011-October/008186.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-10-07T13:54:07.013-0400",
      "body": "I've opened <https://fluidproject.atlassian.net/browse/FLUID-4512#icft=FLUID-4512> to address Anastasia's comment above.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-07T14:02:26.695-0400",
      "body": "Pushed Michelle's pull request <https://github.com/fluid-project/infusion/pull/185> into the project repo 1a4334608388675a792abf76175f429b230049ba\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the "Full No Preview" version of UI Options from the UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>

2\) Change the contrast theme to "White on Black" or "Yellow on Black" and save

3\) Using the keyboard, place focus on the  "Save and Apply", "Reset and Apply" or "Cancel" button. Notice that there is no visible focus styling

        