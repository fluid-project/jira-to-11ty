---json
{
  "title": "FLUID-2169",
  "summary": "OSDPL: Roll out workflow into production content and site (Checklist)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-28T11:41:20.000-0500",
  "updated": "2009-03-20T11:49:18.000-0400",
  "versions": [
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-17T14:54:48.000-0500",
      "body": "Iteration29\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-03-20T11:49:18.000-0400",
      "body": "Done.\n"
    }
  ]
}
---
The following is a checklist of tasks to do when rolling out the workflow into production:

* switch from serial to uidp for:  redirects, workflow\_ng, and states
* Update Views to use real data.
* Create redirect for pages for each state: Draft, Comments, Review, Published.
* Remove "Viewable By Everyone" checkbox from pattern form.
* Test workflow on production datatype
  * Pattern Authoring States change properly
  * Review States change properly
  * "Stamps" change with states when Viewed.
  * Visibility and permissions set appropriately per state.
  * Redirects occur properly on each user action.
  * after Redirect, a proper message is displayed for feedback
  * test node permissions for each state.
* documentation for Editors
* documentation about the Workflow
* implement any remaining Views that will help the user navigate and interact with the workflow

Postponed features until after roll-out:

* interface for activity log
* Remove "Finish" tab and move publishing options to every tab.
* Add help text regarding which fields are required and required for publishing
* change right sidebar for content highlights
* change left sidebar for navigation
* add panel to top of main page and content that gives interaction options.
* notifications
* content sharing to other networks

        