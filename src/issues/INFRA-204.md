---json
{
  "title": "INFRA-204",
  "summary": "wp-cli - Warning about HTTP_X_FORWARDED_PROTO",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-12T21:40:20.489-0400",
  "updated": "2018-08-12T21:57:30.928-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-12T21:57:30.895-0400",
      "body": "Applied fix to all WP sites.\n"
    }
  ]
}
---
```
/var/www/de8cc2ae /var/www
PHP Notice:  Undefined index: HTTP_X_FORWARDED_PROTO in phar:///usr/local/bin/wp/php/WP_CLI/Runner.php(1138) : eval()'d code on line 16
Success: WordPress is up to date.
```

<https://github.com/wp-cli/wp-cli/issues/2562>

        