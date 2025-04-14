---json
{
  "title": "FLOE-398",
  "summary": "Test FD language panel scroll positioning",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2015-06-09T10:28:27.841-0400",
  "updated": "2015-11-03T12:54:25.567-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-333/",
      "key": "FLOE-333",
      "summary": "Scrolling through languages causes page to reload too often"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-08-12T13:55:40.896-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/94>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-08-13T13:30:16.987-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/94> ) into the project repo at 785468b063f6044882c2b3c471bbf3226ba039d8\n"
    }
  ]
}
---
To test the scrolling of the language panel, we are currently inspecting the "displayLangIndex" model property:

<https://github.com/fluid-project/first-discovery/blob/79576554f72687d708489d86ac38898298d4fa3d/tests/js/panelsTests.js#L200-L205>

The language panel has a model listener that scrolls the panel based on this model property. This test implementation verifies that the model is being updated as expected, but not that the model listener is working correctly and actually scrolling the panel.

During development, we found that testing the scroll position directly was not reliable across all browsers (in particular, Chrome on Mac with increased font size).

Investigate to see if we can get checking of the scroll position to work in a reliable manner:

<https://github.com/fluid-project/first-discovery/blob/79576554f72687d708489d86ac38898298d4fa3d/tests/js/panelsTests.js#L207-L227>

The commit that changed the test implementation:

<https://github.com/fluid-project/first-discovery/commit/94d3f591a7c8f94864e30ae199c83fe126dd6bd4>

        