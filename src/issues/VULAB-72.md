---json
{
  "title": "VULAB-72",
  "summary": "Copying Survey Templates (From Active Project)",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-11-03T12:32:37.000-0500",
  "updated": "2008-12-01T13:19:56.000-0500",
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
      "date": "2008-11-03T12:32:47.000-0500",
      "body": "pushed to vulab8 due to all-hands meeting prioritizing.&#x20;\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-03T12:38:03.000-0500",
      "body": "Thanks for JohnC for the report!\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-27T14:12:48.000-0500",
      "body": "So, there are 3 tables that need to have their records duplicated and the ids changed.\n\nsurvey, question, and question\\_choice.\n\nthe survey row duplication currently works, (I tricked the survey tool into thinking it was saving a new survey rather then an existing one), but the questions are not duplicated. So I need to put in a trigger in the survey\\_update function (or after) that duplicates the question rows that pertain to the surveyid, and then the question\\_choices that pertain to the question id.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-27T17:23:22.000-0500",
      "body": "Ok, so I've coded in a session variable that is thrown when the \"create from new\" option is triggered. This session various tells survey\\_update to load the questions associated with the survey and import the data again but when NEW survey\\_id. It does the same for question options. I'm going to test it out and see if its working....\\\n(its currently live)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-01T13:03:30.000-0500",
      "body": "So I've tried it again, and I don't think its working... and I really dont see why it isnt... I am duplicating the apropriate rows etc, but they arn't being associated properly.\n\nI'm considering just using javascript to pre-populate the information or something.... phpESP was NEVER designed to work like this and the survey creation process has been mostly untouched (and the results recording system is one in the same) and thus is poorly designed code.\n\nAt this point I really don't know how to duplicate a survey AND all its questions as the information spans 4 tables, and uses functions designed to for specific purposes which are very bloated as they don't use any object oriented programming. so I think this issue has come to a standstill until we decide what we are doing with the framework..\n\nBecause...\\\nWith a framework inplace this functionality would total 5 lines of code and would work with actual objects that can be instantiated, populated, and saved - all of this w/out directly touching the database tables. The time it would take me to hack this single function into the existing system would amount to 50% of the core system being written on a new framework.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-01T13:19:56.000-0500",
      "body": "I'm closing this issue until we figure out the framework issues. I'll re-open another issue with more specific limitations we need to overcome if/when we need to.\n"
    }
  ]
}
---
Once a project has been activated the questions don't copy when copying a survey into a new project.\
(from project creation step 2: copy survey from...)

        