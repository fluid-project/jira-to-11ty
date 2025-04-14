---json
{
  "title": "DECA-255",
  "summary": "The exporter unit tests are failing in chrome",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-15T16:29:22.330-0400",
  "updated": "2012-07-10T13:49:39.525-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": "Chrome 18 (Ubuntu 10.04)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-251/",
      "key": "DECA-251",
      "summary": "The exporter and exportType unit tests are failing in Firefox"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-256/",
      "key": "DECA-256"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-09T13:28:39.385-0400",
      "body": "This is fixed with the changes to <https://fluidproject.atlassian.net/browse/DECA-256#icft=DECA-256>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:49:36.435-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
In fixing <https://fluidproject.atlassian.net/browse/DECA-251#icft=DECA-251>, the unit tests are now failing in Chrome. It appears to be a timing or asynchrony issue. The "Decapod Export: Init tests" and "Decapod Export: startImport" tests fail on alternate runs.

        