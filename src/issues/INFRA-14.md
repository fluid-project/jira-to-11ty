---json
{
  "title": "INFRA-14",
  "summary": "Ensure all Wordpress sites have basic security configuration in place",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2015-08-07T11:13:43.164-0400",
  "updated": "2015-09-04T09:35:43.179-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2015-09-04T09:35:43.177-0400",
      "body": "All Wordpress websites have iThemes Security plugin installed and they're all at Wordpress 4.3 version.\n\nAdditionally, minor version upgrades are now automatic for Wordpress so no work is required.\n"
    }
  ]
}
---
* Ensure iThemes Security (formerly Better WP Security) is installed.
* Ensure automatic update for minor versions are enabled

As of 2015-08-07, this is the list of Wordpress websites from the VM Contents spreadsheet:

www\.inclusivedesign.ca\
dev.inclusivedesign.ca\
hackathon.inclusivedesign.ca\
mobile-accessibility.idrc.ocadu.ca\
deep.idrc.ocadu.ca\
clinic.idrc.ocadu.ca\
snowvids.idrc.ocadu.ca\
snow-dev.idrc.ocadu.ca

        