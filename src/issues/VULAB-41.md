---json
{
  "title": "VULAB-41",
  "summary": "Plan API Structure",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-10-03T11:38:38.000-0400",
  "updated": "2014-03-04T09:04:36.146-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-10-03T11:38:46.000-0400",
      "body": "vulab3\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-07T12:40:57.000-0400",
      "body": "I imagine that the core systems will fall into some major objects:\n\n* Survey Plug-in Services\n* \\- organized in /services/ folder for cleanliness (next to godliness)\n* \\- to interact with the survey data layer\n* \\- the /services/ folder should include all api files to integrate within the system (for future reference)\n\n- Project Object Layer\n- \\- create/manage/all project data.\n\n* Survey Data Layer\n* \\- save urls for survey tool\n* \\- pull unique id from survey to tie to project\n* \\- Results\n* \\- - system?\n* \\- - plug-in survey tool results system?\n\n- Core System Layer\n- \\- Workflow control (outside of the survey tool)\n- \\- Sessions management\n- \\- All major functions not outlined\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-07T12:43:19.000-0400",
      "body": "note: I've named \"the api\" to \"services\"\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-20T10:41:36.000-0400",
      "body": "research complete. Writing document for wiki/list.\n"
    }
  ]
}
---
plan the larger scheme of how the classes of VULab and the api will interact with the survey tool

        