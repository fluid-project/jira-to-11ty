---json
{
  "title": "FLUID-511",
  "summary": "Key stroke captured when content of a selectable item has focus.",
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
  "reporter": "Michelle D'Souza",
  "date": "2008-04-16T09:04:27.000-0400",
  "updated": "2008-06-23T17:52:56.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This issue has always been a problem but was less obvious when the key strokes we were listening to were the arrow keys. Now that we also use letters we must ensure that we only capture the keystroke when one of the selectable items have focus.&#x20;

A good example of the problem can be seen in the the portlet reordering example.&#x20;

1\. Tab to a text box\
2\. Type 'i' \
3\. Instead of typing the character 'i' into the text box, focus is moved to the portlet above.

        