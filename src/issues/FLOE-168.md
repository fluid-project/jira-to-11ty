---json
{
  "title": "FLOE-168",
  "summary": "Clean up CSS in Floe project website",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-01-20T23:15:56.996-0500",
  "updated": "2020-09-23T08:48:58.858-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "FLOE Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Ned Zimmerman",
      "date": "2020-09-23T08:48:58.849-0400",
      "body": "Closing this in lieue of <https://github.com/fluid-project/floeproject.org/issues/184>.\n"
    }
  ]
}
---
The Floe website CSS needs to be cleaned up:

* remove odd formatting like -100% margins.
* convert px to em
* replace reset.css with normalize.css
* some legacy styling left over from Drupal?
* styles are not name spaced properly (i.e. website styles should be using a prefix like "floe-")
* IDs are used a lot to style elements - these should be replaced with more generic classes

        