---json
{
  "title": "FLOE-448",
  "summary": "Inline edit components do not not update display when ENTER/RETURN is pressed after editing",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-01-26T12:35:28.854-0500",
  "updated": "2016-01-26T15:07:33.872-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-01-26T15:07:33.869-0500",
      "body": "tracked it down to a leftover model relay issue from an earlier attempt at connecting the inlinedit components to other models, which i'd forgotten to remove from the component definition after i realized it wouldn't work; turns out it was working, but only in the wrong direction\n"
    }
  ]
}
---
The inline edit components used to enter the chart title and description are not behaving as expected. Pressing ENTER/RETURN when editing appears to update the underlying model's \`value\`, but the display does not change to the new value.&#x20;

This occurs whether or not the \`submitOnEnter\` option is set to \`true\`.

Finishing the edit with TAB behaves as expected.

        