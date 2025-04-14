---json
{
  "title": "ENGAGE-417",
  "summary": "French text encoding for Send dialogue in My Collection is funky",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "James Yoon",
  "date": "2010-02-19T14:28:49.000-0500",
  "updated": "2010-02-22T16:59:15.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Internationalization",
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-22T10:25:35.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-22T10:47:47.000-0500",
      "body": "The string had been corrupted through the process of making a patch. I have fixed up the string with the correct version from Hugues' e-mail to the list.\n\n<http://old.nabble.com/FE-0.3-bug%3A-%28French%29-My-Collection-send-email-instruction-text-encoding-to27654955.html>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T16:59:15.000-0500",
      "body": "I've reviewed and tested Justin's fix for this issue and it does indeed fix the problem. +1\n"
    }
  ]
}
---
Reads as "Nous enverrons le contenu de votre collection ‚àö‚Ä† l'adresse courriel indiqu‚àö¬©e."

        