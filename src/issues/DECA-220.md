---json
{
  "title": "DECA-220",
  "summary": "Remove ImportController and use the POST method from the PagesController instead",
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
  "date": "2012-01-18T11:31:35.243-0500",
  "updated": "2012-05-18T14:17:30.694-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-18T13:30:49.236-0500",
      "body": "The changes for the import update are in my bitbucket repos\n\n<https://bitbucket.org/jobara/decapod-ui-rest>\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n\nRequires changes from <https://fluidproject.atlassian.net/browse/DECA-193#icft=DECA-193>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:17:28.099-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Currently there are two means for importing images to the server. They both work the same. The ImportController should be replaced by the PagesController which fits into the RESTFul structure better.

        