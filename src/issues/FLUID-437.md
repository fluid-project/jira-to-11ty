---json
{
  "title": "FLUID-437",
  "summary": "Evaluate uploader \"upload from my computer\" in various contexts in uPortal, Sakai & Open Collections",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Daphne Ogle",
  "reporter": "Daphne Ogle",
  "date": "2008-04-04T13:16:21.000-0400",
  "updated": "2011-02-22T16:27:47.615-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Uploader",
    "UX: Component Design"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-04-04T13:19:43.000-0400",
      "body": "iteration07\n"
    },
    {
      "author": "Erin Yu",
      "date": "2008-04-15T11:21:32.000-0400",
      "body": "Task is reopened and included in iteration07\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-04-15T16:45:27.000-0400",
      "body": "Daphne, I've assigned this task to you because I understand that you'll fill in the Sakai contexts for the File Uploader\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.613-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
iteration07

We need to do some design work to abstract the File Uploader to the level appropriate for it to be reusable across many apps.  The goal is to identify the workflow that is reusable and the parts of the workflow that are specific to the various contexts.  The reusable workflow becomes the component.  The context specific aspects should either become a configuration on the component or development work that is required to implement the component described in a design pattern.

Applying the current designs, <http://bugs.sakaiproject.org/confluence/display/GAL/Add+Images#AddImages-desktop>, to other contexts for evaluation is one way to do this analysis.  We'll look at file upload in:

* Open collections (this is mostly images although some other media files are also uploaded)
* uPortal - Gary, cany you identify 1 or 2 contexts file upload makes sense?
* Sakai - upload in the Resources tool,  upload using the WYSIWYG editor (available in many tools like, wiki, syllabus, announcements).

Scenarios should be created for each of the contexts and a Cognitive Walkthrough completed and rough notes shared with the team.

Estimating 2 hours for each cognitive walkthrough and note creation. &#x20;

        