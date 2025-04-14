---json
{
  "title": "FLOE-505",
  "summary": "Make floeproject.org site responsive",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-04-19T11:57:43.979-0400",
  "updated": "2017-04-20T15:50:05.678-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-04-20T11:51:21.733-0400",
      "body": "First pass of this is done, using Foundation 6's flexbox-based grid: <http://foundation.zurb.com/sites/docs/flex-grid.html>\n\nBranch: <https://github.com/waharnum/floeproject.org/tree/FLOE-505>\n\nViewable via rawgit: <https://rawgit.com/waharnum/floeproject.org/FLOE-505/index.html>\n\nSummary of work:\n\n* replaced fixed-width layout of 76em with a max-width layout of 76-em\n* broke two-column layout into one-column layout on medium-size and smaller displays (1024px or under)\n* where necessary, replaced content layout based on fixed-width UL/LI with grid/column layout\n\nPossible considerations for further work:\n\n* column spacing is slightly different with the default Foundation behaviour - some time could be spent tweaking this\n* I didn't feel the irregular layout of the two-column content (images appearing to the left, to the right or above their related content, depending) translated well to a linear layout. I used column shifting to make this somewhat more consistent, but we may want to consider this further.\n\n \n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-04-20T12:08:12.916-0400",
      "body": "PR: <https://github.com/fluid-project/floeproject.org/pull/52>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-20T15:50:02.147-0400",
      "body": "[The pull request](https://github.com/fluid-project/floeproject.org/pull/52) has been merged into the project repo master branch at 5c7a712f4c14ad40a0453a245ad058d2a7b3824b\n"
    }
  ]
}
---
The floeproject.org site can be converted to responsive behaviour in advance of actually integrating mobile UIO with it.

Depending on complexity this may involve using Foundation's responsive grid, or possibly Gridlex: <http://gridlex.devlint.fr/> - will update with more information after the work is further along.

        