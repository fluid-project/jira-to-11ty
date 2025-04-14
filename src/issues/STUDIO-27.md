---json
{
  "title": "STUDIO-27",
  "summary": "Tag line should contain the users name instead of their user id. ",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michelle D'Souza",
  "date": "2011-12-12T09:33:35.497-0500",
  "updated": "2014-03-03T13:01:59.267-0500",
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
      "author": "Michelle D'Souza",
      "date": "2011-12-12T10:17:36.216-0500",
      "body": "Joanna has asked for a few other tweaks on the tag line:\n\n1\\. italicize 'posted on' and 'by'\\\n2\\. bold date\\\n3\\. bold name\\\n4\\. make the name a link to posts by the user\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-12T11:03:48.568-0500",
      "body": "Wordpress allows users to choose for themselves how their name is publicly displayed. The current implementation uses that user-chosen display. I chatted with Michelle, and we feel that this is an acceptable way to go. Michelle will adjust the students' accounts to set their preferred display name to their name instead of their 'username.'\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-12T11:05:26.264-0500",
      "body": "Michelle, Cindy and I discussed making the name a link to posts by the user. This end up being a link to posts **posted** by the user, which is different than the tag just under the line. These tags link to posts that have that tag. We decided that having two links that look the same but link to different things would be confusing, so we agreed to leave the name in the \"Posted by\" line not a link.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-12T11:57:06.614-0500",
      "body": "Merged into project repo at 9616ad5a78db97b6c2cb73983888c9a3a4b398fe\n\nI've updated the student account to show their name instead of their login id.&#x20;\n"
    }
  ]
}
---

        