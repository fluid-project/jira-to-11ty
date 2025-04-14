---json
{
  "title": "FLUID-569",
  "summary": "Security: HTML should be filtered in OSDPL design pattern content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-05-07T10:39:49.000-0400",
  "updated": "2011-02-22T16:27:58.616-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-542/",
      "key": "FLUID-542",
      "summary": "HTML formating not working for Design Pattern content type"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-05-14T16:14:12.000-0400",
      "body": "HTML is now filtered, but further security evaluation should be carried out on Drupal.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:58.614-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Because of Fluid 542, full html is now allowed within OSDPL design pattern content. This should not be allowed for security reasons.

* determine subset of HTML tags allowed.
* create help text for OSDPL CCK form explaining what HTML tags are available.

        