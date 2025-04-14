---json
{
  "title": "DECA-240",
  "summary": "The \"complete\" response for a GET request to an export type is incorrect",
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
  "date": "2012-04-13T10:37:35.804-0400",
  "updated": "2012-05-18T14:25:38.891-0400",
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
      "date": "2012-04-13T12:06:41.578-0400",
      "body": "The big issue of the key being wrong, has been addressed.\n\nCurrently in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-server-iteration3>\n\nThe second part, the format of the url, has been filed under <https://fluidproject.atlassian.net/browse/DECA-241#icft=DECA-241>. It is still usable by the Decapod UI in the current format, though.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:25:34.393-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The spec for the response should look like:\
{ status: "complete", url: "<http://localhost:8080/library/'bookName'/export/pdf/type1>"}

However, the following is currently being returned.\
{"status": "complete", "downloadSRC": "/library/book/images/pdf/Decapod.pdf"}

Notice that the key for the url should be "url" instead of "downloadSRC". Also, the url is relative instead of a full path.

        