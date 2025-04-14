---json
{
  "title": "INFRA-48",
  "summary": ".git directories should not be exposed",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-10-14T13:20:54.790-0400",
  "updated": "2016-08-23T09:44:44.418-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-10-14T13:28:26.890-0400",
      "body": "I've modifed the staticsite and phpsite roles to include the following in the nginx configuration template:\n\nlocation \\~ /\\\\.(git|htaccess) {\\\ndeny                     all;\\\n}\n\nAdded .htaccess to in the mix even though we're not using Apache, since sometimes .htaccess contains sensitive data and could have been carried over from another deployment.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-10-14T13:44:56.458-0400",
      "body": "Deployed to websites in production. No issues found so far, works as expected.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2015-10-14T15:50:14.253-0400",
      "body": "Generally speaking I think blocking public web server access to any dotfiles by default is a good practice, so I'm all in favour of this.\n"
    }
  ]
}
---
The issue is explained here <http://www.jamiembrown.com/blog/one-in-every-600-websites-has-git-exposed/> and, while we don't have any .git directory exposed (last checked today), it makes sense to ensure that even if a developer or our automation was to deploy an app/website with a .git directory, that it would be blocked and not exposed.

        