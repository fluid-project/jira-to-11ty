---json
{
  "title": "FLUID-2333",
  "summary": "Re-evaluate the need and use of manual tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-11T09:25:47.000-0400",
  "updated": "2011-05-17T10:46:11.425-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3904/",
      "key": "FLUID-3904"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:15:04.000-0400",
      "body": "Clean Up Parade 1.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-31T09:07:28.000-0400",
      "body": "This is what has been done: (\\* indicates that there is more work to be done)\n\n\\*Inline Edit: Simple Text - keep for now, need to update the quick start example with all the functionality from this one\n\n\\*Inline Edit: Drop Down and Rich Text - keep for now, need to convert to starting point or standalone demo\n\nTable of Contents - promote to standalone-demo\n\n\\*Progress -  keep for now, need to convert to quick start example\n\n\\*Scroller - keep for now, need to convert to unit test\n\n\\*Renderer: Component types - keep for now, need to convert to quick start example\n\nRenderer: Radio Buttons - removed\n\nRenderer: Object entry -  removed\n\nRenderer: Test Renderer - removed\n\nRenderer: Tree generation - removed\n\nReorderer: Simple Portlets - removed\n\nReorderer: permissions - removed\n\nReorderer: simple list - removed\n\nReorderer: simple grid - removed\n\nReorderer: multiple reorderer -  removed\n\nReorderer: nested reorderer - removed\n\nReorderer: table reorderer - promoted to standalone-demo\n\n\\*Reorderer: dynamic reorderer - keep for now, needs to be converted to unit test\n\nMenubar - removed\n\n\\*Versioning - keep for now, needs to be converted to unit test\n\nanchors - moved to escalated&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:46:11.422-0400",
      "body": "The work for this issue is being continued under <https://fluidproject.atlassian.net/browse/FLUID-3904#icft=FLUID-3904>\n"
    }
  ]
}
---
Re-evaluate the need and use of manual tests.

Promote the necessary examples to the sample code

Replace manual tests with unit tests, where possible.

Should manual tests be included in the release bundle?

        