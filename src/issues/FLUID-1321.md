---json
{
  "title": "FLUID-1321",
  "summary": "Undo returns to the original state, not the previous state",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:32:55.000-0400",
  "updated": "2008-10-06T09:01:42.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T00:56:21.000-0400",
      "body": "Resolved at revision 5550\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T09:11:19.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-10-01T15:59:24.000-0400",
      "body": "I am experiencing the same problem again. When I edit something twice, it toggles between the very last edit and the original state. It should only toggle between the very last edit and the edit just before that. I'm on Mac OS 10.5 with FF3.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-03T14:26:46.000-0400",
      "body": "This seems to have come back as a result of the fix to <https://fluidproject.atlassian.net/browse/FLUID-1594#icft=FLUID-1594>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-03T14:27:19.000-0400",
      "body": "dev-iteration44\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-10-03T16:21:17.000-0400",
      "body": "I think I've fixed this one without re-introducing <https://fluidproject.atlassian.net/browse/FLUID-1594#icft=FLUID-1594> again, i.e. both bugs should now be fixed. Hopefully, I haven't introduced or re-introduced anything else. Tests pass, and it all seems to work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-06T09:01:42.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Undo returns to the original state, not the previous state. If i make two changes the first change is ignored.

Steps to reproduce:

1\) Open the bSpace demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit one of the inline edit fields, make sure to save it so the undo icon appears.

3\) Re-edit the same inline edit field.

4\) Pressing the undo/redo button will toggle between the original state and the last edit. It should toggle between the last and second last edits.

dev-iteration43

        