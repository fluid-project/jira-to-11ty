---json
{
  "title": "FLUID-11",
  "summary": "Navigating away from Lightbox loses domNode parent, causes error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Anastasia Cheetham",
  "date": "2007-06-27T11:34:28.000-0400",
  "updated": "2007-10-22T17:49:43.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "IE on Windows\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-06-29T09:48:50.000-0400",
      "body": "Could be related to this dijit tooltip bug:\\\n<http://trac.dojotoolkit.org/ticket/1526>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-01T14:30:05.000-0400",
      "body": "This might be fixed with dojo 0.9, and should only be addressed after we upgrade\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:49:43.000-0400",
      "body": "Likely fixed with the move to jQuery UI's drag and drop\n"
    }
  ]
}
---
In IE on WIndows:\
Navigating away from the Lightbox e.g. by activating the thumbnail link, causes the following error message:

"this.domNode.parentNode is null or not an object"

        