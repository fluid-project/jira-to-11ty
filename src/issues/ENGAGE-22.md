---json
{
  "title": "ENGAGE-22",
  "summary": "Build a tagging component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-28T10:02:36.000-0400",
  "updated": "2009-11-10T10:51:50.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Tag"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-08-21T13:48:33.000-0400",
      "body": "Currently the tags component will display tags and provide an edit link which opens a textfield and puts in remove links beside each tag. The actual acts of adding and removing tags are not yet supported. This behaviour should probably be implemented using the utilities already in inline edit and in fact may require some refactoring of inline edit.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-22T14:51:45.000-0400",
      "body": "New upcoming designs for tagging is likely not going to include the ability to edit tags. I'm therefore going to remove the start of the functionality.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-09-24T12:02:58.000-0400",
      "body": "The basic tagging component has been built.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T10:51:50.000-0500",
      "body": "This is an umbrella issue whose children have all been closed\n"
    }
  ]
}
---
Based on the mobile wireframes: <http://wiki.fluidproject.org/display/fluid/Mobile+wireframes> build a tagging component. The component should allow users to add tags to an artifact, should display the tags, and should save them back to CouchDB.&#x20;

        