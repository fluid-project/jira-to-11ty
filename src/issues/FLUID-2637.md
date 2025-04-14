---json
{
  "title": "FLUID-2637",
  "summary": "Column Headers still sort,  when not set to sortable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-04-30T10:49:58.000-0400",
  "updated": "2009-11-13T09:01:47.000-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2637/FLUID-2637_patch_v2.txt",
      "filename": "FLUID-2637_patch_v2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2637/FLUID-2637_patch_v3.txt",
      "filename": "FLUID-2637_patch_v3.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2637/FLUID-2637_patch_v4.txt",
      "filename": "FLUID-2637_patch_v4.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2637/FLUID-2637_patch_v5.txt",
      "filename": "FLUID-2637_patch_v5.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2637/FLUID-2637_patch.txt",
      "filename": "FLUID-2637_patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2009-05-13T10:55:05.000-0400",
      "body": "Patch for the issue\n"
    },
    {
      "author": "y z",
      "date": "2009-05-13T11:22:59.000-0400",
      "body": "Updated patch for the issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:13:12.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-15T14:04:15.000-0400",
      "body": "Thanks for this patch, Yura - it works well for the basic functionality, but could perform better. It would be quicker to simply return null from the sorter where not required - although the remainder of this codepath may require fixing. Also, the CSS effect of producing a sort header needs to be prevented.\n"
    },
    {
      "author": "y z",
      "date": "2009-05-25T12:08:22.000-0400",
      "body": "Latest version of the patch:\n\n* some refactoring (not don't call that.options.sorter at all if the column is set to not sortable)\n* if column not sortable we now hide the arrows that indicate sorting order.\n"
    },
    {
      "author": "y z",
      "date": "2009-05-25T12:44:10.000-0400",
      "body": "more refactoring:\n\n* now only pass columnDefs to isSortable instead of OverallThat\n"
    },
    {
      "author": "y z",
      "date": "2009-05-25T13:03:00.000-0400",
      "body": "fixed a bug, isSortable now guarded against no sort Key&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T13:15:58.000-0400",
      "body": "Thanks for this patch - committed at revision 7228\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-26T09:07:38.000-0400",
      "body": "Sorting still partially works when sortable set to false.&#x20;\n\nClicking on a non-sortable header will return the pager to the first page, as well as change the sort order to the default sort order or the page.\n"
    },
    {
      "author": "y z",
      "date": "2009-05-26T13:19:21.000-0400",
      "body": "-updated the pager not to resort to default whenever the notSortable header is clicked\\\n-left the isSortable function, since it's nicely used in other functions other than just generateColumnClick and works as a safeguard\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-26T15:21:56.000-0400",
      "body": "Commited patch v5 - more work required since the CSS affordance of cursor, underlining and \"click to sort\" is still present on an unsortable column\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-26T20:00:24.000-0400",
      "body": "Final fix at revision 7256 - Pager now supports general affordance of top level \"decorators\" configuration which may arbitrarily affix to column headers. This functionality may be the Gateway to the South.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:01:47.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Column Headers still sort,  when not set to sortable

Reported by Athena 7 in the irc channel at 10:03 am (30 April 09)\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-04-30>

        