---json
{
  "title": "INFRA-223",
  "summary": "Insufficient privileges broke plugin install",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Jonathan Hung",
  "date": "2018-10-23T12:01:24.419-0400",
  "updated": "2018-10-23T12:54:52.415-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "SNOW, Wordpress\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-10-23T12:54:08.079-0400",
      "body": "Fixed as follows:\n\n* SSH'd into server\n* changed to the production SNOW install directory at **/var/www/afe0ab1f**\n* removed these two lines from **wp-config.php**\n  * define('WP\\_CACHE', true); //Added by WP-Cache Manager\\\n    define( 'WPCACHEHOME', '/var/www/snow-dev.idrc.ocadu.ca/wordpress/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager\n* At this point, the Super Cache plugin could be disabled\n* Turned off maintenance mode\n\nI believe this issues relates to the WPCACHEHOME variable pointing to a nonexistent directory. Possibly this is what the plugin sets by default, but because the install failed the plugin could not be properly configured to use the correct directory.\n"
    }
  ]
}
---
I was looking into [SNOW-39](https://issues.fluidproject.org/projects/SNOW/issues/SNOW-39?filter=allopenissues) and it appears to be a caching issue. I tried installing the Super Cache plugin (<https://wordpress.org/plugins/wp-super-cache/)> but it failed upon install. It appears there are insufficient privs.

See: <https://snow.idrc.ocadu.ca/wp-admin/options-general.php?page=wpsupercache>

Now the PHP error is appearing on all pages. I have put up a Maintenance message on the site for now.

What would be the ideal solution in this case? Should we grant specific permissions this case only, or should we find another solution?

        