---json
{
  "title": "VULAB-168",
  "summary": "Tweak Config(s)",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-12T12:05:41.000-0500",
  "updated": "2014-03-03T14:44:42.675-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-168/VULAB-168.patch",
      "filename": "VULAB-168.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-12T12:05:47.000-0500",
      "body": "vulab16\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-17T13:55:29.000-0500",
      "body": "This is a CRITICAL patch for the vulab 0.5b deliverable release.\n\nThis patch fixes a bug that was not syning the new configuration file to the old one, and thus voiding the efficacy of the config.live.php (which is the core config file for installation)\n\nWithout this patch we do not have a single point of configuration.\n\nNOTE: intended for vulab 0.5b branch ONLY, not trunk.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T17:02:17.000-0500",
      "body": "I've reviewed this patch and committed at r6537. Eventually we'll probably want to consolidate these two config files.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T17:02:27.000-0500",
      "body": "Can you double check and verify the fix?\n"
    }
  ]
}
---
Tweak the configs to be more readable and to include all of the customizations required to get the system up and running.

        