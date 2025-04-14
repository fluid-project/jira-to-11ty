---json
{
  "title": "DECA-251",
  "summary": "The exporter and exportType unit tests are failing in Firefox",
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
  "date": "2012-05-14T14:57:18.124-0400",
  "updated": "2012-05-18T14:47:12.873-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-254/",
      "key": "DECA-254"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-256/",
      "key": "DECA-256"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-255/",
      "key": "DECA-255"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-15T10:49:49.336-0400",
      "body": "In chatting with Antranig (Bosmon) today in the channel, it seems that the cause is an extra bit of asynchrony imposed on subsequent calls to fluid.fetchResources. Since I've already fetched the resources and am passing them along wholesale, I'll just refactor the code to not call fetchResources if they are already provided.&#x20;\n\n<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2012-05-15>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-15T16:23:03.225-0400",
      "body": "Made the changes as described above. Created a wrapper function around fluid.fetchResources that checks first if the resourceText exists and will divert to just calling the call back function if it does. Also had to change the startImport tests to trigger on the afterExportersReady event instead of onReady.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:47:09.621-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The unit tests are passing in Chrome, so it is likely a timing issue.

        