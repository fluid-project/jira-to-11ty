---json
{
  "title": "STUDIO-17",
  "summary": "Change function names in functions.php to follow our new convention",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-12-08T15:11:30.452-0500",
  "updated": "2012-01-20T17:27:42.495-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-13T13:40:22.555-0500",
      "body": "In investigating how to address this issue properly, we realized we need to do a better job of completely separating our modifications from the original FSSFive theme. Johnny Taylor pointed us to the notion of Child Themes:\n\n<http://codex.wordpress.org/Child_Themes>\n\nWe are re-implementing the Studios theme as an official child theme of FSSFive. This will make upgrading FSSFive much simpler.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-14T09:14:12.920-0500",
      "body": "As of revision e8ccd26c101a765479dd2f4a2e58e89559173628 everything related to the studios theme from the current development branch has been moved into the studios child theme. There are several styling issues that need to be addressed.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-14T09:26:24.012-0500",
      "body": "The styling issues that I've noticed are:\n\n* gap between the top and the login button\n* font weight of the titles on the front page\n* footer styling\n* title on the posts tagged with page\n* paragraph styling inside a post\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-14T12:14:24.964-0500",
      "body": "There is also an issue with uploading images and having the thumbnail size be correct.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-14T13:46:04.466-0500",
      "body": "Merged into project repo at 16286a75b7832608384b8294203462c2dfabb7d0\n"
    }
  ]
}
---
We have decided in the irc channel to name php functions using underscore to separate words and adding the theme related prefix 'fl'.&#x20;

As part of this issue we should split FSS Five functions from Studios functions.&#x20;

        