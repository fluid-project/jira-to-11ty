---json
{
  "title": "FLOE-102",
  "summary": "Link Formatting in Write Step do not work properly",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alexey Novak",
  "date": "2012-11-01T09:13:58.201-0400",
  "updated": "2012-11-01T10:41:44.261-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Link formatting has an awkward user experience.\
Link formatting is applied even when user clicks Cancel or manages to close the Link dialog\
Therefore Save button is totally useless and link formatting would be applied even when user clicked the button by mistake.

Link dialog is only mouse accessible for existing links in the content. There is no way for a user to change an existing link using a keyboard only.

Users are able to change link formatting color with Text Color button which can be very confusing. Once user changes color on text and the link there is no way differentiate between those two.

Links in the content should have a screen reader support.

        