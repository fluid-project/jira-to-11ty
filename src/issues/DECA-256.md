---json
{
  "title": "DECA-256",
  "summary": "The exporter unit tests throw errors",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-15T16:32:14.135-0400",
  "updated": "2012-07-10T13:52:00.692-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-251/",
      "key": "DECA-251",
      "summary": "The exporter and exportType unit tests are failing in Firefox"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-255/",
      "key": "DECA-255",
      "summary": "The exporter unit tests are failing in chrome"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-06T10:19:28.855-0400",
      "body": "Can't reproduce. I had to use the beta version of firebug to run the unit tests, as the stable version is too slow to handle all of the logging. It's possible that the pre-release version I had been using at the time had an issue. I've retested this with Firebug 1.10.0b2 and no errors are thrown.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-06T11:22:10.920-0400",
      "body": "I tried it again and the issues has reappeared. could have been a temporary respite due to the newer beta version of firebug.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-09T13:28:09.633-0400",
      "body": "Refactored the events. Used event aggregation to combine rendering events into a single event. This helps make it clear when all the export types have rendered. Also moved the onReady event to be triggered by the accordion instead of the event binder, since it is the last subcomponent to be initialized.\n\nThe changes can be found in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-ui-iteration4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:51:56.312-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
The exporter unit tests run with all the tests passing; however, many errors are thrown for fluid.fail.

        