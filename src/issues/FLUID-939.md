---json
{
  "title": "FLUID-939",
  "summary": "Change cursor on mouseover of un-opened inline edit field to a hand",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Allison Bloodworth",
  "date": "2008-07-17T23:36:20.000-0400",
  "updated": "2008-11-13T13:37:36.000-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
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
      "date": "2008-07-21T14:53:18.000-0400",
      "body": "Fixed at revision 5246 - \\\nThis is actually a \"recommendatory\" change made to the standard CSS styles - the standard style \"inlineEdit-invitation\" is the style class assigned to the invitation state of the inlineEdit, and for this behaviour, we recommend that to achieve this effect that the style definition receives the following (added to the standard samples in SVN such as \"announcement\" and \"manual test\"):\n\n.inlineEdit-invitation {\\\nbackground-color: #FFECB3;\\\n/\\* See <http://www.quirksmode.org/css/cursor.html#note> for cross-platform recommendation \\*/\\\ncursor: pointer;\\\ncursor: hand;\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:37:36.000-0500",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Due to the fact that the "unopened" (e.g. hasn't been clicked on and is not yet editable) inline edit field isn't really a text field at that point, and because the i-bar pointer on mouseover could be confusing to users (because clicking with it doesn't put the cursor in the same place the user clicks--it puts it at the end of the field only), we believe the cursor should be changed to a hand.&#x20;

It would be great if we could have this change made asap, before we do user testing. Thanks!

        