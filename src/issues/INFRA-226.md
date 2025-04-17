---json
{
  "title": "INFRA-226",
  "summary": "Unable to upload files to the IDRC website",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2019-01-22T15:15:56.811-0500",
  "updated": "2020-05-14T07:35:41.462-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2019-01-22T15:17:00.113-0500",
      "body": "For now I am working around this issue by uploading the file to the Wiki and then linking to it from the IDRC site.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-04-10T18:32:09.370-0400",
      "body": "Jonathan Hung could you try uploading images directly now? I've changed the settings on that folder to something that may work.\n\n```\nsudo chcon system_u:object_r:httpd_sys_rw_content_t:s0 images\r\nsudo /usr/sbin/semanage fcontext -a -t httpd_sys_rw_content_t /var/www/993da6cd/images\n```\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2020-05-14T07:35:41.428-0400",
      "body": "The IDRC website has been moved from Joomla to Wordpress/static/Netlify, so I'm closing this issue.\n"
    }
  ]
}
---
Attempting to upload a file to the IDRC website results in an error:

"**Warning**\
Warning: Failed to move file: /var/www/993da6cd/tmp/phplHEZXJ to /var/www/993da6cd/images/IDRC-Child-Safeguarding-Policy.pdf"\
 \
"**Error**\
Unable to upload file."\
 To reproduce: # Login

1. In the Admin dashboard go to Sidebar > Media > select green "Upload" in the top-left corner.
2. Error should occur.

 

        