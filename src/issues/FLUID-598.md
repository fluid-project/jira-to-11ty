---json
{
  "title": "FLUID-598",
  "summary": "OSDPL: Left sidebar hover for parent menu links bleeds into Left padding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2008-05-14T11:36:52.000-0400",
  "updated": "2008-08-21T11:05:34.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": "Mac OS X, FF2, Safari\\\nWindows XP FF2\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1239/",
      "key": "FLUID-1239",
      "summary": "OSDPL Architecture: Investigate options for OSDPL menus"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-508/",
      "key": "FLUID-508"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T13:32:08.000-0400",
      "body": "futuretask\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-16T21:28:53.000-0400",
      "body": "This is no longer a problem as we are using the Nice Menus module for the menus. If we go back to the out of the box Drupal menu we will have to re-address it.\n"
    }
  ]
}
---
Parent menu links on left sidebar in OSDPL has hover underline that bleeds into the left padding.

Fine on IE7 on WinXP.

        