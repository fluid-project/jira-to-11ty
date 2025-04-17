---json
{
  "title": "FLUID-3085",
  "summary": "Tiny MCE quick start example causes an error when inserting an anchor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Michelle D'Souza",
  "date": "2009-08-11T09:20:05.000-0400",
  "updated": "2011-01-10T09:40:03.832-0500",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3295/",
      "key": "FLUID-3295"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-11T14:37:50.000-0400",
      "body": "Error 1:\\\nuncaught exception: Permission denied to get property Window\\.tinymce\n\nError 2:\\\nthis.params has no properties\\\nline 5 (tiny\\_mce\\_popups.js)\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T14:58:16.123-0500",
      "body": "Still an issue in Infusion 1.3. Tested FF3.6, Win7\n"
    }
  ]
}
---
To recreate the error:&#x20;

1\. load the inline edit quick start example\
2\. select the 'Example 4'  inline edit - this will open tiny mce\
3\. select the 'insert anchor' icon

This causes a popup window with two javascript errors in it.&#x20;

        