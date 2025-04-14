---json
{
  "title": "FLUID-2526",
  "summary": "Verify dependencies for InlineEdit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T11:06:29.000-0400",
  "updated": "2011-02-22T16:27:49.089-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure",
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-06T11:09:48.000-0400",
      "body": "There is an interesting detail to work out with jquery.tinymce.js. It's currently listed in the files for the component but it depends on tiny mce which of course we don't want InlineEdit to depend on.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-06T11:26:45.000-0400",
      "body": "Please also check the dependencies of fckeditor and tinymce in the 'lib' folder. &#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-04-07T11:52:30.000-0400",
      "body": "Added the tooltip plugin and undo to the dependencies. The custom file now works with all the inline edit demos.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.085-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        