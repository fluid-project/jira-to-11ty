---json
{
  "title": "FLUID-2590",
  "summary": "flc-reorderer-dropWarning used for both DOM selection and styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-04-13T11:34:35.000-0400",
  "updated": "2009-08-04T09:56:00.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:26:59.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-28T15:01:23.000-0400",
      "body": "changed the css class from flc-reorderer-dropWarning to fl-reorderer-dropWarning and added this new class name into the markup for the demos\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-31T14:16:33.000-0400",
      "body": "I think we should put the styling back on the flc-reorderer-dropWarning class so that if people upgrade to 1.1.1 they don't need to change their markup. The full change is fine for 1.2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-31T14:24:19.000-0400",
      "body": "added the flc-reorderer-dropWarning stying back into 1.1.1 along side the fl-reorderer-dropWarning with a note to its deprication in 1.2\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-31T15:24:56.000-0400",
      "body": "I code reviewed this issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-04T09:56:00.000-0400",
      "body": "Verified fix using:\n\nFF3, IE 7 (Win Vista)\\\nFF3.5, FF2, Safari 3, Opera 9.6 (Mac OS 10.5)\n"
    }
  ]
}
---
flc-reorderer-dropWarning used for both DOM selection and styling

The flc- prefix is meant only for DOM Selection. Another class with an fl- prefix should be created for use with css styling

        