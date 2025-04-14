---json
{
  "title": "SJRK-300",
  "summary": "Consider not serving browser tests outside dev env",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-25T16:30:34.517-0400",
  "updated": "2020-07-29T13:19:52.324-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-122/",
      "key": "SJRK-122",
      "summary": "Implement combined tests battery using testem"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Consider whether or not to serve browser (UI) tests outside of the development environment. Exposing the tests publicly may lead to issues in the future, if there are ever any tests added which could modify the server in any way (e.g. story creation integration tests).

Care should be taken to ensure the browser tests can still be run from the local docker-compose setup.

        