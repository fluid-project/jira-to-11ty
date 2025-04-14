---json
{
  "title": "FLUID-513",
  "summary": "Merge tabindex plugin into keyboard a11y plugin, and move out of sandbox and into main svn",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2008-04-21T14:57:43.000-0400",
  "updated": "2008-05-13T09:53:17.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:38:28.000-0400",
      "body": "The plugins have been moved out of the sandbox for the 0.3beta1 release. They still need to be merged.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-05-12T21:00:13.000-0400",
      "body": "I moved the tabindex code into a separate closure so it's clearer that it is a separate module from the key nav code.\n"
    }
  ]
}
---

        