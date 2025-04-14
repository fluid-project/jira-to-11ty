---json
{
  "title": "FLUID-25",
  "summary": "Create a pluggable ajax connection object that encapsulates a particular strategy for posting item-order to the server.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T11:47:43.000-0400",
  "updated": "2007-10-22T14:06:28.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-8/",
      "key": "FLUID-8",
      "summary": "Lightbox and Fluid architecture needs to be factored properly"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-07-17T11:53:19.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-8#icft=FLUID-8> is now broken into a number of smaller issues related to reorderer refactoring (see reorderer component).\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-09-17T22:11:30.000-0400",
      "body": "The current design of the Reorderer provides a parameter for an orderChangedCallback function, which nicely encapsulates any type of connection strategy desired.\n"
    }
  ]
}
---
The Lightbox currently has a single, gallery-specific strategy for posting image order back to the server. When we abstract this code into a generic Reorderer, we will want to allow clients to create their own connection strategies for sending the new order of items back to the server.

We will move the gallery-specific connection code into a specific implementation of this Connection strategy. It will be helpful to also create a generic Ajax connection strategy to save clients time if they don't want to provide their own implementation.

        