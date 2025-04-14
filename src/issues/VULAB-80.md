---json
{
  "title": "VULAB-80",
  "summary": "Survey Shows Blank Page",
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
  "date": "2008-11-05T14:53:03.000-0500",
  "updated": "2014-03-04T08:28:43.156-0500",
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
      "date": "2008-11-05T14:53:09.000-0500",
      "body": "vulab6\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-10T10:39:58.000-0500",
      "body": "I've tracked down the error into the configuration file. Not sure whats causing the havok but it will be a little bug that will solve everything! I know.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-10T10:54:20.000-0500",
      "body": "ok, config files not bogarting the execution its something within the survey serving file. survey.php\n\npublic/project.php is the main controller that serves survey.php (which doens't seem to be executing atm)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-10T11:19:48.000-0500",
      "body": "ok, so... When we were pasting in the licenses for MANY of the files we included a character that gets outputted making a header() redirect impossible. I've finally gotten error\\_reporting on and I'm tracing thru the files.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-10T11:21:49.000-0500",
      "body": "huzzah! It was a mixture of small spaces being printed in some library includes and configuration paths not working outside of the /admin folder.\n\n🙂 all is good now.\n"
    }
  ]
}
---
When taking a survey (a tester taking a server) a blank page is shown. I suspect this is a small php execution error that is being suppressed.

(reported by Ron via Email to me)

        