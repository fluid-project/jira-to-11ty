---json
{
  "title": "FLUID-2009",
  "summary": "Dropdown Inline Edit hard-codes selector of edit field to an ID",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2008-12-17T13:25:01.000-0500",
  "updated": "2008-12-18T10:38:55.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-17T13:32:45.000-0500",
      "body": "Justin, if you update the build site, you can test this using the Dropdown Inline Edit manual test page\\\n<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/dropdown.html>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-18T10:32:19.000-0500",
      "body": "I reviewed commit revision 6245 and it is fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T10:38:55.000-0500",
      "body": "Does not appear to introduce any new bugs\n\nVerified using:\n\nFF3, FF2, Opera 9.5, Safar 3.1 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The Dropdown implementation of Inline Edit uses an ID for the edit field in the manual test markup, and hard-codes the selector for it in the defaults for the component. This needs to be removed, or implementers will be forced to use the ID or override it (which is contrary to Fluid philosophy).

Bug Parade: 0.6 release&#x20;

        