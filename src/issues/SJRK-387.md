---json
{
  "title": "SJRK-387",
  "summary": "Story Tool: Block field labels should persist",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2020-08-11T15:59:50.359-0400",
  "updated": "2020-08-11T16:00:55.338-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently, story block field labels are hidden until an author begins to type in the text field. This is kind of snazzy but not the most accessible approach. Although screenreaders will read the hidden labels, for visual users it could be jarring and confusing.

To avoid redundancy between labels and placeholder text, all placeholder text should read "Begin typing here". Together with the addition of persistent field labels, as well as with SJRK-380, this should make the overall block functionality clearer to authors.

 

        