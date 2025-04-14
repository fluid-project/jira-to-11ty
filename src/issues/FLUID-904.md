---json
{
  "title": "FLUID-904",
  "summary": "Uploader inside a table element - removing a file from the list causes the uploader to disappear.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2008-07-15T16:14:04.000-0400",
  "updated": "2011-02-22T16:27:48.322-0500",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-16T15:24:23.000-0400",
      "body": "What is happening is this:\n\nThe Uploader searches for the table row that the Remove button is inside of, to know what to remove from the list\\\n$(this).parents('tr')   // here, 'this' is the remove button\n\nHowever, it is finding **all** ancestor table rows - including the row that the Uploader is inside of, and removing **all** of them.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-16T15:26:48.000-0400",
      "body": "The solution to this problem is to search NOT for a 'tr' element, but rather for the thing that is identified as the row we want to remove, i.e. to use some other form of specific naming of the thing, and not it's DOM element type.\n\nIn this case, I'm implementing a fix that looks for the parent with the correct ID.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:48.321-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
If the Uploader happens to be inside a table, clicking on the 'Remove' button causes the entire Uploader to disappear.

dev-iteration39

        