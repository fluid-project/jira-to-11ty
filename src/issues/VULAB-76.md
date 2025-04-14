---json
{
  "title": "VULAB-76",
  "summary": "Activate Now not working.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-11-04T15:12:29.000-0500",
  "updated": "2008-11-04T16:34:34.000-0500",
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
      "date": "2008-11-04T15:21:34.000-0500",
      "body": "vulab6\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-04T16:16:25.000-0500",
      "body": "I just realized that an \"active now\" is a little ackward programming wise as the project cannot be made active until after the project is saved and when the project has surveys etc. So there would be an additional \"save\" or \"finish\" project option.\n\nSo I am going to move the activation settings into the \"activate\" section.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-04T16:34:34.000-0500",
      "body": "I've chosen to rework the entire system which will solve this problem in a way, but the new issue is closer to a duplicate with a more specific purpose (no investigation, only the solution)\n\n<https://fluidproject.atlassian.net/browse/VULAB-78#icft=VULAB-78> is new more targeted issue.\n"
    }
  ]
}
---
Originally reported by Ron, Taken from VULAB-73

4\. got a redundant message asking if I wanted to activate the project even though at the beginning I checked Activate now&#x20;

        