---json
{
  "title": "VULAB-118",
  "summary": "Create Initial Priortized List of Question Types",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-08T16:41:11.000-0500",
  "updated": "2014-03-04T08:26:26.735-0500",
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
      "date": "2008-12-08T16:44:07.000-0500",
      "body": "Currently phpESP has the following types in its database:\n\nOn the left we have the name, and the right we have the database table it uses. Notice that same type questions have the same tablename.\n\nYes/No \t \t        response\\_bool\\\nText Box \t \t        response\\_text\\\nEssay Box  \t        response\\_text\\\nRadio Buttons \t \tresponse\\_single\\\nCheck Boxes \t \tresponse\\_multiple\\\nDropdown Box  \tresponse\\_single\\\nRate (scale 1..5)  \tresponse\\_rank\\\nDate \t \t        response\\_date\\\nNumeric \t \t        response\\_text\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T16:49:32.000-0500",
      "body": "As I see it, I imagine the following core question types:\n\nQuestion\\\n1\\. Boolean Questions - Yes/No, True/False, etc.\\\n2\\. Text Input - Comments, Essay, Simple Text Forms.\\\n3\\. Multiple Choice - Checkboxes, Radios, Dropdown Menus.\\\n4\\. Rating Scales - Rating x...y, etc.\\\n5\\. Date - Birthdays, enrollment dates, etc.etc.\n\nThis is good enough to send out to the list, do it tomorrow morning so people have time to read it (mornings are best for list)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T16:49:40.000-0500",
      "body": "its almost done. lets push to vulab13\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-12T16:12:43.000-0500",
      "body": "I have the initial research finished and I'll come back to this issue once we get a little more into the code planning.\n"
    }
  ]
}
---
Form a prioritized list of the question types we want to include in VULab. Circulate a list to the mailing list with the existing questions and my tentative ranking.

Note that we should discuss what CORE types are required, and the possible "flavors" of each type as some question types will be redundant, ex. Boolean: (Yes, No vs. True, False, vs. On, Off)

        