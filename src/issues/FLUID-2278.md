---json
{
  "title": "FLUID-2278",
  "summary": "Script tag referencing a non-existent file causes errors",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2009-02-20T11:32:41.000-0500",
  "updated": "2009-02-20T12:15:29.000-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Opera\\\nIE 6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-02-20T11:35:04.000-0500",
      "body": "Trimpath file declaration has been removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-20T12:12:31.000-0500",
      "body": "commit was review by antranig\n\nQuote from IRC channel\n\n\"FLUID-2278 is fine\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-20T12:15:29.000-0500",
      "body": "Verified using:\n\nIE 6 (Win XP)\\\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Script tag referencing a non-existent file causes errors&#x20;

\<script type="text/javascript" src="lib/trimpath.js">\</script>

in site\_setting\_members.html

This causes an invalid character error in IE 6 (when run locally) and an Linked Script Not Loaded error in Opera

        