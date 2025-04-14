---json
{
  "title": "SNOW-14",
  "summary": "Dealing with stylus files in Wordpress",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Eloisa Guerrero",
  "date": "2018-02-06T13:20:44.307-0500",
  "updated": "2018-07-12T15:39:59.169-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2018-07-12T15:39:59.162-0400",
      "body": "This was documented in the Snow Readme\n\n \n"
    }
  ]
}
---
Wordpress at the moment does not seem to globally support compiling stylus files into css; see this Stack Overflow issue where the user tried to do so with a theme other than twentytwelve: [https://stackoverflow.com/questions/15592825/how-to-make-wordpress-style-css-work-as-a-stylus-styl-file](https://stackoverflow.com/questions/15592825/how-to-make-wordpress-style-css-work-as-a-stylus-styl-file\))

We would need to either:

1. Create a grunt task with the caveat that we'd need to create tests and would be very time consuming;
2. Understand how Wordpress works; there are plugins that process stylus files – see <https://wordpress.org/plugins/wp-stylus-processor/> which would be a good example to learn from if this is doable without using a plugin.

        