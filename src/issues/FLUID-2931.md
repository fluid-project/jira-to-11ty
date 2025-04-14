---json
{
  "title": "FLUID-2931",
  "summary": "Determine server maintenance requirments",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-08T10:35:13.000-0400",
  "updated": "2009-11-25T11:02:37.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2937/",
      "key": "FLUID-2937",
      "summary": "modify build.xml to accomodate maven settings file in command line call to maven"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3038/",
      "key": "FLUID-3038",
      "summary": "create a builder.php file which is a conduit to hidden php files"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3360/",
      "key": "FLUID-3360"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-18T15:55:05.000-0400",
      "body": "One issue that I found was that the php.ini max\\_execution\\_time variable may need to be increased from 30sec. There is also a setting to do this in apache. How will this impact other php code running on same server?\n\nJamon has addressed this by setting the php\\_value max\\_execution\\_time 120 in .htaccess on sirius.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-18T16:02:42.000-0400",
      "body": "Also for the web version, I needed to put the settings.xml file in the location pointed to by the mvn-settings-file argument. Even if you want it to point to the default location of .m2/settings.xml, you need to put it there. It doesn't exist there in the default installation in windows or unix.\n\nThis issue has been addressed in <https://fluidproject.atlassian.net/browse/FLUID-2937#icft=FLUID-2937>\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-18T16:03:16.000-0400",
      "body": "Investigate cleaning up the /tmp directories - expiring the info via nightly cron job.\\\nA good command to do this would be \\\nfind /tmp/build/\\* -type f -cmin +1440 -exec rm -f {} \\\\;\\\nfind /tmp/products/\\* -type f -cmin +1440 -exec rm -f {} \\\\;\n\nWill also need to make sure that the permissions work so that this cron job can delete files created by nobody.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-15T14:37:48.000-0400",
      "body": "Need to find a way to hide the php code so that it cannot be hit by outside users.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-20T09:14:31.000-0400",
      "body": "Created php file to act as conduit to the actual php processing code.\n\nthis part of the issue is handled by <https://fluidproject.atlassian.net/browse/FLUID-3038#icft=FLUID-3038>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-11-04T19:01:44.000-0500",
      "body": "This issue is a very general one. The issues it mentions have either been fixed or have been superceded by more specific tickets.\n"
    }
  ]
}
---

        