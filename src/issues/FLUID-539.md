---json
{
  "title": "FLUID-539",
  "summary": "Can't use the \"Tab\" key to navigate out of reorderable tabs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-04-28T13:09:41.000-0400",
  "updated": "2010-12-09T10:11:06.669-0500",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, Opera 9.6 (Mac OS 10.5, WinXP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-862/",
      "key": "FLUID-862"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1185/",
      "key": "FLUID-1185"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-861/",
      "key": "FLUID-861",
      "summary": "Cannot tab off of accessible jQuery tabs: using FF"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1185/",
      "key": "FLUID-1185",
      "summary": "cannot use the keyboard to navigate away from sortable jQuery Tabs, using Opera 9.5"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T22:36:30.000-0400",
      "body": "Fixed at revision 5567\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:33:00.000-0400",
      "body": "Tested in (FF2, Opera 9.5 (Mac OS 10.5, WinXP)  and the issue still occurs.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-18T17:36:38.000-0400",
      "body": "This has been investigated in some detail now, with no real understanding of the issue emerging. There is a possibility that the particular markup used here is implicated - that is, an anchor tag within the \\<li> which occupies more physical space than its parent. Basically a tab order cycle results, with the next focus target after the active tab being considered the container itself, possibly via the intermediate of the anchor. An interesting focus effect has been observed on FF2 whereby a container with tabindex is considered focused if one of the elements within it are focused. This is particularly visible in the portal sample - putting focus onto one of the dropdowns for example on the top right portlet.&#x20;\n\nThere was an experimentation with a \"dynamic tabindex\" version of the keyboard accessibility plugin, but this appears to create more instability in focus than it resolves.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:57:29.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-30T11:11:25.000-0500",
      "body": "This issue needs to be escalated to Mozilla - from what I can recall of the investigation, we seemed to verify that the issue was not dependent on any Javascript which was fired during the tab keypress, therefore it has to be a defect in the browser. If it doesn't occur in FF3, that just leaves Opera...\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T10:11:06.647-0500",
      "body": "No longer appears to be an issue. Tested Dec 9, 2010 on FF3.6 and IE8, Windows.\n"
    }
  ]
}
---
You are able to use the "Tab" key to navigate into the set of reorderable tabs, but are not able to use the "Tab" key to leave them.&#x20;

For FF2 on WinXP you are able to use the arrow keys to navigate away from the set of reorderable tabs, after pressing the "Tab" key a second time.

Test Site: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

        