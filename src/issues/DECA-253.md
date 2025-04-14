---json
{
  "title": "DECA-253",
  "summary": "Keyboard focus becomes trapped after adding files to the Uploader",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-05-15T10:44:07.849-0400",
  "updated": "2012-05-18T14:47:23.839-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-16T12:22:24.774-0400",
      "body": "It seems to only be an issue with Firefox as it is working fine in Chrome\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-16T12:45:30.546-0400",
      "body": "I've fixed the issue by pushing focus onto the \"Add More\" button. To do this i just needed to create a new selector to find the last multi file input, and then use the focusWithEvent facility of the uploader to move focus there after the dialog closes.&#x20;\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:47:20.959-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
After using the keyboard to add a file to the Exporter, keyboard focus becomes trapped somewhere - there is no focus styling on any element on the page, tabbing does not change focus to any element on the page, and pressing Enter doesn't do anything.

To reproduce:\
1\. Load Decapod Exporter\
2\. Using keyboard, tab to the "Browse files" button.\
3\. Press enter to bring up the file browser.\
4\. Select a file.\
5\. Notice that the focus is now trapped.

The problem doesn't appear if the user opens the file browser and then closes it without selecting a file.

        