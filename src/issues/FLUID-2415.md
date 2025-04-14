---json
{
  "title": "FLUID-2415",
  "summary": "Changing pages or number of items per page is very slow: Using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-03-26T10:07:54.000-0400",
  "updated": "2009-05-05T13:27:26.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "IE7 (Win XP, Win Vista)\\\nIE6(Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2322/",
      "key": "FLUID-2322",
      "summary": "Content rendered slowly: using IE"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Changing pages or number of items per page is very slow

Steps to reproduce:

1\) Open the sakai site setting  example from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html>

2\) Click on one of the page links

3\) Change the number of items per page

Notice that it takes a while for the content area to update

        