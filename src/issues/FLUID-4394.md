---json
{
  "title": "FLUID-4394",
  "summary": "Separated Panel UI Options' iFrame HTML page (SeparatedPanelFrame.html) doesn't play nice with a concatenated build of Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2011-08-08T19:24:17.627-0400",
  "updated": "2024-07-22T14:06:17.646-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0",
    "4.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5052/",
      "key": "FLUID-5052"
    },
    {
      "type": "Related to",
      "url": "/browse/VP-333/",
      "key": "VP-333"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-13T13:38:53.595-0400",
      "body": "This issue is very closely related to <https://fluidproject.atlassian.net/browse/FLUID-5052#icft=FLUID-5052>, but that issue also addresses the use cases where the integrator's path to MyInfusion.js might not be what an automatic head rewrite script would assume.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:06:17.438-0400",
      "body": "Resolved with <https://fluidproject.atlassian.net/browse/FLUID-6749>\n"
    }
  ]
}
---
The HTML file for Fat Panel UI Options' iFrame, FatPanelUIOptionsFrame.html, contains links to each individual Infusion JavaScript file required by UI Options to run. When using a concatenated build of Infusion, this causes two problems:

1\. if the individual JS files have been pruned out of the deployment bundle, errors are thrown and UIO does not successfully load (due to the missing JS files)\
2\. if the individual JS files are still in place, the iFrame will load slower than it would if it were using the concatenated build instead

This is an easy issue to work around by changing the \<head> of the file to link to MyInfusion.js instead of the individual files, but will cause upgrade headaches in the future, since users will have to remember make this change each time they upgrade.

In a future release of UI Options, we will need to consider the prospect of rewriting \<script> and \<link> tag URLs in templates during the Infusion build process.

        