---json
{
  "title": "INFRA-165",
  "summary": "WordPress websites cannot update themselves with SELinux on",
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
  "date": "2018-04-23T10:25:34.414-0400",
  "updated": "2018-04-24T14:03:43.885-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-24T13:55:10.135-0400",
      "body": "* Moved all websites from /srv/www to /var/www (this is more aligned with CentOS/RHEL SELinux defaults)\n* Reset all SELinux settings back to factory defaults\n* Switch from permissive to enforcing mode\n* Enabled the \\`httpd\\_can\\_network\\_connect\\_db\\` boolean so php-fpm can connect to MySQL/PostgreSQL\n* Configured the following file contexts for Wordpress/Drupal/Joomla:\n\n```\nsemanage fcontext -a -t httpd_sys_rw_content_t '/var/www(/.*)?/tmp(/.*)?'\r\nsemanage fcontext -a -t httpd_sys_rw_content_t '/var/www(/.*)?/wp-content(/.*)?'\r\nsemanage fcontext -a -t httpd_sys_rw_content_t '/var/www(/.*)?/cache(/.*)?'\n```\n\nDue to these changes, updating website code through their UI will not work anymore because php-fpm doesn't have permission to write to anything besides the 3 directories listed above (even if traditional Unix permissions allow it).\n\nAffected servers: i-0013 and i-0018\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-04-24T13:56:12.588-0400",
      "body": "Relevant commits:\n\n<https://github.com/inclusive-design/ops/commit/64e032c2bfd99d7e0dbb32f66a983e2eb0ecc106>\\\n<https://github.com/inclusive-design/ops/commit/6ca94ed661f85dbfc58d4ec89fe1351ae1bd0473>\\\n<https://github.com/inclusive-design/ops/commit/b5f4be118e9575104425107f8b7e0be5211b70cb>\\\n<https://github.com/inclusive-design/ops/commit/93f655719f57cadf354183275af5edc5ff0f28f0>\n"
    }
  ]
}
---
Automatic update fails. Update page asks for FTP credentials.

        