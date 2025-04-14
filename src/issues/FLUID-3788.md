---json
{
  "title": "FLUID-3788",
  "summary": "NVDA2010.2 reads out button disabled as button \"unavailable\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Golam Chowdhury",
  "date": "2010-10-07T16:36:42.189-0400",
  "updated": "2014-07-15T14:31:46.197-0400",
  "versions": [
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": "NVDA2010.2, IE8, FireFox.3.6.3\\\nFF 30, IE 11 (Win 7) (NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:48:01.172-0500",
      "body": "Please check if this is done and either close it or put it into another release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-15T14:31:46.197-0400",
      "body": "I believe it is just that NVDA announces disabled buttons as unavailable. We may want to consider moving focus off of the button so that it isn't announced.\n"
    }
  ]
}
---
Currently using NVDA2010.2, IE8, FireFox.3.6.3  reads out button disabled as "unavailable". This doesn't give the user the right information about what is actually unavailable. &#x20;

        