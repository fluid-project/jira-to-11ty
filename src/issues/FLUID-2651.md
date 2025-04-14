---json
{
  "title": "FLUID-2651",
  "summary": "Inline edit: JAWS announces remove button as \"true\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Alison Benjamin",
  "date": "2009-05-07T10:01:19.000-0400",
  "updated": "2014-07-11T14:28:35.630-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "MacBook running JAWS 10 on XP with VMWare\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2652/",
      "key": "FLUID-2652",
      "summary": "JAWS announces that an inline edit area is a button"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2656/",
      "key": "FLUID-2656"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2651/section-info-inner-patch.txt",
      "filename": "section-info-inner-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:05:45.000-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-11T12:17:25.568-0500",
      "body": "It's likely that this one was addressed in the recent a11y/demo revamp sprint. Jon, are you able to test this one, and either close it, or if it's still present, update the \"affects\" version to include 1.3?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:28:35.605-0400",
      "body": "I believe this was from an old demo that no longer exists, and it seems that the error was specific to the demo and not the component.\n"
    }
  ]
}
---
The button to remove a row is read as "true" by JAWS.&#x20;

A more meaningful announcement could be used that pulls useful information from the DOM, e.g.: "Are you sure you want to delete row 5, Astronomy 7A S 105 LEC".&#x20;

        