---json
{
  "title": "FLOE-265",
  "summary": "Contrast buttons don't allow 'default' to be selected",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2015-02-06T14:13:54.697-0500",
  "updated": "2015-11-03T11:20:21.768-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-02-11T10:29:50.469-0500",
      "body": "'for' attribute was wrong on a label. Fixed with merge for <https://fluidproject.atlassian.net/browse/FLOE-266#icft=FLOE-266>\n"
    }
  ]
}
---
On the First Discovery Tool contrast page, it's not possible to select the default colour scheme. It is initially selected, and that seems to be ok, but once you select anything else, you can't select the default choice any more. This happens no matter what is initially "checked" in the markup; default still doesn't work.

        