---json
{
  "title": "ENGAGE-158",
  "summary": "Loading circle image is flickering for a second as a blank square, before loading.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2009-10-21T14:03:32.000-0400",
  "updated": "2017-12-22T09:44:16.418-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-482/",
      "key": "ENGAGE-482",
      "summary": "Ensure all components are amenable to being displayed within the Screen Navigator"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-351/",
      "key": "ENGAGE-351",
      "summary": "Users should be shown a \"loading...\" screen when pages take a noticable amount of time to load"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:24:20.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-24T11:57:37.000-0500",
      "body": "These are related issues for the loading screen when navigating from one page to another\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:16.416-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Loading circle image should not flicker, before it's loaded on the page.

Go to: <http://build.fluidproject.org:8095/engage/demo/index.html> . Click on any of the browse demos and notice that the loading circle is displayed as blank square before the image is actually loaded.

        