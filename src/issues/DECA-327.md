---json
{
  "title": "DECA-327",
  "summary": "There is no mechanism for cancelling background tasks",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-10-10T09:25:52.755-0400",
  "updated": "2012-10-10T09:38:07.038-0400",
  "versions": [
    "0.5",
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-10-10T09:27:14.189-0400",
      "body": "Currently the BackgroundTaskQueue only tries to execute the queued function, but doesn't retain any pointers to it. <https://bitbucket.org/jobara/decapod-0.7-server-iteration2/src/1a304061d6d3/utils/backgroundTaskQueue.py?at=trunk#cl-47>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-10-10T09:38:07.038-0400",
      "body": "Another area to look at would be the invokeCommandSync function from the utils. This is used to call the command line tools. However at the moment it will only return once the command line tool finishes executing. <https://bitbucket.org/jobara/decapod-0.7-server-iteration2/src/1a304061d6d3/utils/utils.py?at=trunk#cl-151>\n"
    }
  ]
}
---
When a long process is run in the background (e.g. genpdf, image conversion, dwarping) there is no means of killing the running process. The user could refresh the UI, but the process would still be executing on the server.&#x20;

        