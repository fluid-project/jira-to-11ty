---json
{
  "title": "FLUID-1699",
  "summary": "Add a feature to the jQuery UI Tabs demo for the keyboard-a11y plugin, showing how to support both interaction styles for selecting tabs.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-10-21T16:26:12.000-0400",
  "updated": "2011-02-22T16:27:53.888-0500",
  "versions": [],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-21T16:28:57.000-0400",
      "body": "I've committed a working version of this.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:53.887-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
There's been an interesting discussion on the jQuery-a11y mailing list about the different styles of keyboard interaction for Tabs. We should modify our jQuery UI Tabs demo to illustrate these styles.

I'll see if I can summarize the two  \
potential options:

1\. As per the style guide, a tab should be selected immediately upon  \
being focused with the arrow key.\
2\. Tabs should not be automatically selected when they get focus. The  \
user should be able to explore the list of tabs with the arrow keys,  \
and then press Enter or Space to select their desired tab.

There are a few factors to consider when choosing one or the other. If  \
you check out tabs on your desktop OS, you'll find that they behave  \
differently between the Mac and Windows. Windows uses style #1, while  \
the Mac more or less uses style #2.

The other issue that you mention is AJAX. If the contents of a tab are  \
loaded dynamically upon selection, it could be quite tedious for the  \
user if they have to wait for each tab to load as they cycle through  \
the list.

        