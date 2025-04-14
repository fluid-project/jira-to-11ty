---json
{
  "title": "FLUID-1819",
  "summary": "Uploader allows keyboard-triggered removal of files after upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-18T14:05:59.000-0500",
  "updated": "2009-06-03T13:46:27.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1824/",
      "key": "FLUID-1824",
      "summary": "[Keyboard accessibility] doesn't appear to be a way to make an elm un-activatable"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2010/",
      "key": "FLUID-2010"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-18T15:30:10.000-0500",
      "body": "Need a fix for <https://fluidproject.atlassian.net/browse/FLUID-1824#icft=FLUID-1824> to fix\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-16T12:20:40.000-0500",
      "body": "Using Antranig's very clean and easy to use Fluid.enabled() method, I have now rendered uploaded rows undeletable, thus closing this bug.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-19T08:40:53.000-0500",
      "body": "It seems that you can still remove the uploaded files using a combination of the keyboard and mouse.&#x20;\n\nUse the mouse to click on the check mark.\\\nUsing the keyboard tap the delete key.\n\nNotice that the file is removed from the queue\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-23T14:33:45.000-0500",
      "body": "Added a bit of code to the file queue remove file methods to check to see if a file have been already completed, and therefor should not be removed.&#x20;\n\nThis only applies to user initiated removes which use removeFileForRow() and not uploader instigated removes which use removeRowForFile(). So it is still possible for the component to remove files for some other reason.&#x20;\n"
    }
  ]
}
---
Desired behaviour for the Uploader is to prevent users from removing files from the file queue after upload. This is the current behaviour using the mouse, but the keyboard Delete key used to remove files from the queue is still active and working after upload.

        