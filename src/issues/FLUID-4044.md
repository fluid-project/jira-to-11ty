---json
{
  "title": "FLUID-4044",
  "summary": "Converting Inline Edit manual test to an automated test.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Golam Chowdhury",
  "reporter": "Golam Chowdhury",
  "date": "2011-01-25T14:32:42.795-0500",
  "updated": "2011-03-10T14:19:31.512-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4044/FLUID-4044.patch",
      "filename": "FLUID-4044.patch"
    }
  ],
  "comments": [
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-31T15:39:08.312-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4044#icft=FLUID-4044>.patch which has automated test cases for overriding tool tip text and editing inlineEdit cell. Also note the test case for multiple inlineEdit was already there.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-10T14:19:31.461-0500",
      "body": "Golam's branch was merged into the project repository at commit 6260c214c4a77f01c6ee.\\\nThe manual test was removed in commit 52a273637fe1990e2622.&#x20;\n"
    }
  ]
}
---
Three areas that are represented in that test:

1\. Two copies of multiple inline edits with undo - we need to make sure we cover containment within a group when using the multiple inline edit API\
2\. Overriding the tooltip text\
3\. Using inline edit to edit a table cell

Note: this is  a sub issue of FLUID-3904.

        