---json
{
  "title": "FLUID-2909",
  "summary": "website needs to only use fluidproject.org - remove references to www.fluidproject.org",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-03T15:28:41.000-0400",
  "updated": "2009-06-04T14:53:06.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2896/",
      "key": "FLUID-2896"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-04T11:02:35.000-0400",
      "body": "completed the edit to the config.php\\\nreviewed the entire website for links to www.fluidproject.org and replaced them with fluidproject.org\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-04T11:40:01.000-0400",
      "body": "Jamon recommended looking at <http://www.webweaver.nu/html-tips/web-redirection.shtml> for .htaccess help\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-04T12:00:21.000-0400",
      "body": "made an addition to the .htaccess file of&#x20;\n\nRewriteCond %{HTTP\\_HOST} .\\\nRewriteCond %{HTTP\\_HOST} !^example\\\\.com\\\nRewriteRule (.\\*) <http://example.com/$1> \\[R=301,L]\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-04T14:23:53.000-0400",
      "body": "completed this task.\n"
    }
  ]
}
---
After some discussion we have decided that www.fluidproject.org should re-direct to fluidproject.org and all links should reflect this

Edit conf for cmsms\
check and fix .htaccess\
ensure that links on the website all refer to fluidproject.org

        