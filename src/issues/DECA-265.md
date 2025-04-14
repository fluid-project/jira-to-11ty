---json
{
  "title": "DECA-265",
  "summary": "The server has a lower size cap than the client when importing files",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-23T14:26:17.026-0400",
  "updated": "2012-06-11T16:27:53.371-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T08:09:15.855-0400",
      "body": "Changed the uploader in the client to have a max file size of 100MB. Due to FLUID-4713 the size is actually set to 102401 KB to allow a file of at most 100MB\n"
    }
  ]
}
---
The cherrypy server by default caps the body of a request to 100MB. The client is currently configured to cap at 400mb. This results in a 413 error being returned for anything larger than 100MB. Since 100mb seems to be a reasonably large size for now, we should cap the client at 100MB too.&#x20;

see the conversation from the IRC channel starting at 11:51:18\
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-05-23>

        