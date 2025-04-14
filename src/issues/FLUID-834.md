---json
{
  "title": "FLUID-834",
  "summary": "Keyboard reordering doesn't work in Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-26T18:55:13.000-0400",
  "updated": "2008-09-30T11:30:50.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1626/",
      "key": "FLUID-1626"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-16T13:45:11.000-0400",
      "body": "Windows shortcuts for Opera\n\nCtrl+M = ?\\\nCtrl+J = manage transfers\\\nCtrl+k = new e-mail\\\nCtrl+I = (this will work for us)\\\nCtrl+ arrow = left and right activate the browsers forward and back actions\n\nMac shortcuts for Opera\n\nusing the Ctrl modifier and any of our navigation buttons does not seem to have any affect.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-24T16:35:01.000-0400",
      "body": "I am not quite sure of the characterisation of this issue, but it may have been fixed at revision 5669 which is an Opera-specific keyboard navigation fix. Please review -&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:24:13.000-0400",
      "body": "The ctrl key still doesn't function properly in Mac OS, it has been remapped to the command key. <https://fluidproject.atlassian.net/browse/FLUID-1626#icft=FLUID-1626>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:28:31.000-0400",
      "body": "The remaining portion of this bug is duplicated by <https://fluidproject.atlassian.net/browse/FLUID-1626#icft=FLUID-1626>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:30:50.000-0400",
      "body": "The majority of this bug is fixed, a portion is duplicated by <https://fluidproject.atlassian.net/browse/FLUID-1626#icft=FLUID-1626>, will close this issue and refer to <https://fluidproject.atlassian.net/browse/FLUID-1626#icft=FLUID-1626> now\n"
    }
  ]
}
---

        