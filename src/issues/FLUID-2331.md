---json
{
  "title": "FLUID-2331",
  "summary": "Update tutorial for UI Options/UI Enhancer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jorge Silva",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-10T17:07:56.000-0400",
  "updated": "2009-06-12T13:20:34.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Tech. Documentation",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2330/",
      "key": "FLUID-2330",
      "summary": "Implement cookies for persistence of UI Options preferences"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2332/",
      "key": "FLUID-2332"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-04-28T15:22:55.000-0400",
      "body": "I think we could consider this done.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-15T11:33:32.000-0400",
      "body": "There are problems with the current tutorial that should be fixed up.&#x20;\n"
    },
    {
      "author": "Jorge Silva",
      "date": "2009-05-15T11:51:15.000-0400",
      "body": "Added a bunch of detail and reminders.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-01T14:00:34.000-0400",
      "body": "JS - do you have time to try out the newly edited version of the tutorial.\n"
    },
    {
      "author": "Jorge Silva",
      "date": "2009-06-04T09:08:17.000-0400",
      "body": "I made some corrections to steps 4, 6 and 7. It should be pretty accurate now\\... should I close the ticket? (it wouldn't be a bad idea to have someone else go through the whole thing one last time).\n"
    }
  ]
}
---
* Will be based on the sakai demo: (<http://source.fluidproject.org/svn/fluid/infusion/tags/fluid-1.0/src/webapp/integration-demos/sakai/js/sakai.js>)
* Add notes on "flc-" selectors for actions like "reset", "cancel", etc... (eliminates the need to add a dialog("cancel") action on close)
* May add optional "how to make it look like the sakai demo" section (<http://source.fluidproject.org/svn/fluid/infusion/tags/fluid-1.0/src/webapp/integration-demos/sakai/html/ui-options-fss-sakai.html>)
* Add note on line "dialog\_container.dialog('option', 'position', 'center');" on the sakai demo (<http://source.fluidproject.org/svn/fluid/infusion/tags/fluid-1.0/src/webapp/integration-demos/sakai/js/sakai.js>)

        