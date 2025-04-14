---json
{
  "title": "FLUID-2783",
  "summary": "When changing sort method cursor over \"prev\" button becomes an arrow and not a hand (when active) in Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2009-05-27T11:01:27.000-0400",
  "updated": "2009-08-12T11:41:33.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Pager"
  ],
  "environment": "OPERA 9.6 - WIN XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To recreate:

* go to Sakai Example: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>
* click on the column header to sort the list
* click on any page number (not 1)
* notice when hovering over the prev button the cursor stays as an arrow and not a hand

        