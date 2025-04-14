---json
{
  "title": "FLOE-498",
  "summary": "Provide an option in the UIO Wordpress plugin to ignore internal copy of jQuery",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2017-02-27T11:59:28.914-0500",
  "updated": "2017-11-28T15:27:45.449-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UIO WordPress plugin"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-11-28T15:24:46.051-0500",
      "body": "After some discussion, the plugin should by default use jQuery in Safe Mode. An advanced option should appear in the plugin admin page that will allow the user to disable the jQuery version that comes with the plugin, and use the one they may already have on the site.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-28T15:27:45.449-0500",
      "body": "Documentation on using jQuery's noConflict <https://api.jquery.com/jquery.noconflict/>\n"
    }
  ]
}
---
The Wordpress UI Options plugin comes with its own copy of jQuery. This becomes a problem in situations where the Wordpress site already has jQuery.

The plugin should have an options page which allows the user to set UIO options.

        