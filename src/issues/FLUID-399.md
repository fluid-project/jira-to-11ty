---json
{
  "title": "FLUID-399",
  "summary": "Elements with a precedence can be placed below those with none.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-03-24T12:33:02.000-0400",
  "updated": "2008-04-28T13:49:58.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Firefox 2 (Mac OS 10.5), IE7, FF2 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-466/",
      "key": "FLUID-466"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T13:49:08.000-0400",
      "body": "This is because the example permissions in the portlets.js file allows for moving portlets of higher precedence below portlets with no precedence.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:49:58.000-0400",
      "body": "This example has been moved to the 'manual' tests area and is only for development purposes.&#x20;\n"
    }
  ]
}
---
When reordering elements with a precedence assigned to it. You are able to place them under movable elements that do not have a precedence assigned to them. That is to say you could have a column of elemens like this (precedence 60, no precedence, precedence 50, no precedence).&#x20;

It is also possible to move items of higher precedence directly below items of lower precedence, both with mouse and ctrl-arrow movements.\
Link to site: <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>

        