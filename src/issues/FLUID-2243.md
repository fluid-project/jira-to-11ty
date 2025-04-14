---json
{
  "title": "FLUID-2243",
  "summary": "Can't use the keyboard to activate a link in an inline edit field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-02-16T22:55:59.000-0500",
  "updated": "2009-02-18T08:44:50.000-0500",
  "versions": [
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-17T11:00:06.000-0500",
      "body": "Fixed at revision 6518, assigned for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-17T12:23:03.000-0500",
      "body": "Summary of recent chat:\n\n(17:09:59) Bosmo1: We have agreed to change the \"return value semantics\" of activatable to \"browser defaults\", since we aren't aware of any code that ever depended on this - \\\n(17:10:26) Bosmo1: There was never any specification on the meaning of the return value of an activatable handler, but the majority of users would probably have expected it to agree with a normal event handler in any case\\\n(17:10:59) Bosmo1: To make this consistent, it would be even better if we changed the argument semantics to agree to the JQuery standard too, but that is too much of a change for this release, especially at this point\\\n(17:11:16) Bosmo1: So we will push out that argument normalisation to 1.0, as well as a general rethinking of activatable which has a number of issues with its API\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-17T18:01:32.000-0500",
      "body": "I've reviewed Antranig's second fix to this issue and it looks good. +1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T08:44:49.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Can't use the keyboard to activate a link in an inline edit field

Steps to reproduce.

1\) Open the rich text inline edit example\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Open one of the FCK rich text inline edit fields and add a link&#x20;

3\) Tab to the link and press the 'enter' key

Notice that the inline edit field opens in edit mode instead of activating the link

        