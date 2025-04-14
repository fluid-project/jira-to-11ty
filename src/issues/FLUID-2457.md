---json
{
  "title": "FLUID-2457",
  "summary": "[Progress] Progress could use a few events for integrators to be able to use in integrations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-04-01T15:29:41.000-0400",
  "updated": "2014-11-05T12:52:34.876-0500",
  "versions": [
    "0.8",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3161/",
      "key": "FLUID-3161"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Golam Chowdhury",
      "date": "2011-01-11T09:58:59.611-0500",
      "body": "Events onProgressBegin and afterProgressHidden are added into version 1.3.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-17T10:34:55.524-0500",
      "body": "maybe an on update event would be useful. Then the user could keep other parts of the ui up-to-date with the amount of the progress.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:14:12.438-0400",
      "body": "These events have not yet been added as of the pre-1.5 evaluation\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-02T15:16:25.242-0400",
      "body": "Now we have the new ChangeApplier implementation, the progress bar should use a model to communicate updates\n"
    }
  ]
}
---
Progress currently has no events.&#x20;

For the moment I propose the following events:&#x20;

* onProgressStart
* afterProgressStop
* afterProgressComplete.&#x20;

This would allow integrators to make changes to either the Progress component or to UI elements outside of the Progress component in response to Progress events.&#x20;

        