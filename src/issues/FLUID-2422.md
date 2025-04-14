---json
{
  "title": "FLUID-2422",
  "summary": "Implement individual option clearing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2009-03-31T09:58:15.000-0400",
  "updated": "2014-07-09T09:43:00.979-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:43:00.979-0400",
      "body": "@@joanna vass and @@Dana is this still a feature we'd want?\n"
    }
  ]
}
---
From the wireframe document: \
When a user changes a setting from the default value, that change is reflected in the preview window. Additionally, the option is highlighted (in this example, the green box) in the option pane to indicate that the user has set an override. With the highlight appears a "clear" action. Clicking the clear action removes the user-set preference for just that option, returning it to the default value. Such a clear action does not affect any other options.

See the wireframe for more information:\
<http://wiki.fluidproject.org/display/fluid/User+Interface+Options+Wireframes>

        