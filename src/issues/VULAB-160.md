---json
{
  "title": "VULAB-160",
  "summary": "Create Generic app_controller.php",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-01-27T15:46:04.000-0500",
  "updated": "2009-02-12T11:48:43.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-160/VULAB-160.patch",
      "filename": "VULAB-160.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-27T15:49:13.000-0500",
      "body": "vulab15\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-02T15:35:57.000-0500",
      "body": "adds /app/app\\_controller.php to the svn which is the main controller that all controllers are extended from as the standard controller definition is:\n\nPageController extends AppController {\\\n...\\\n}\n\nThis goes into the /app/ folder and not into /app/controllers/ because it is a special case and is used as a parent controller to all controllers within the applicaiton. We need to put in methods that we want in all Controllers here.\n\nNOTE: at this point this controller may not be exactly how we want it, but I want it into svn as this point to patch off of for the future.\n"
    }
  ]
}
---
CakePHP's controllers all extend Class: AppController and you can extend the native controller by creative an app\_controller.php of your own.

So we need to add in functions that we want to be available to all controllers. (At this point, basic CRUD functions)

        