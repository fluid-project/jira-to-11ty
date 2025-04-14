---json
{
  "title": "FLUID-125",
  "summary": "Can't use keyboard to view full size image when in alphabetical sort.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-26T15:02:45.000-0500",
  "updated": "2007-12-18T15:22:34.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Mac OS 10.5.1 using Firefox 2.0.0.9\n",
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-121/",
      "key": "FLUID-121",
      "summary": "Can't use keyboard to view full size image when in alphabetical sort."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-12T15:36:44.000-0500",
      "body": "\\<script  type=\"text/javascript\">  fluid.initLightbox(\" ... \");\\</script> disappears from the code when switching to Alpha sort.\n\nOnce selecting Alpha sort order, the Gallery frame refreshes and the Fluid Lightbox Javascript disappears.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-13T11:03:59.000-0500",
      "body": "If this behaviour is intentional (i.e. no dragging when alpha sorted), then there should be some onscreen indication that dragging is not possible.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-18T15:22:34.000-0500",
      "body": "Keyboard functionality is intentionally not available in Alphabetical sort.\\\nSee related: <http://bugs.sakaiproject.org/jira/browse/GAL-63>\n"
    }
  ]
}
---
When tabbing through the links on a page, only the top level items gain focus. This means that when the lightbox is in alphabetical view, the pictures cannot be tabbed to and openned in with the keyboard.&#x20;

        