---json
{
  "title": "FLUID-653",
  "summary": "When inside a module, shift-tab should put focus on the module.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-27T13:29:19.000-0400",
  "updated": "2011-01-10T14:13:27.079-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:45:36.619-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T14:13:27.001-0500",
      "body": "May have been fixed as part of the changes for Infusion 1.3. There were no environments listed, so it may only occur in a specific configuration.\n"
    }
  ]
}
---
Currently, shift-tab will put focus on elements in a previous module instead of putting focus on the module itself.&#x20;

To see this behaviour, use the uPortal example. Put focus on the 'calendar' portlet. Press tab - the title of the portlet now has focus. Press shift-tab - the 'Cancel' button of the 'bookmarks' portlet now has focus instead of the 'calendar' portlet itself.&#x20;

        