---json
{
  "title": "FLUID-1141",
  "summary": "Reorderer avatar should append container to <body>",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Jacob Farber",
  "date": "2008-08-14T09:10:04.000-0400",
  "updated": "2017-01-16T09:28:43.071-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.1.3",
    "1.2beta1",
    "1.2",
    "1.2.1",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-08-15T14:09:19.000-0400",
      "body": "Another point: if the draggable avatar was detached from its context, you would not see the numbers re-arranging themselves inappropriately in IE\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-03T10:25:22.000-0400",
      "body": "This appears to be causing the drop target to persist under the tab in the springboard example\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-08T14:12:24.000-0400",
      "body": "We will need to ensure that the visual styling of the avatar is preserved when it is placed outside the reorderer container.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T14:47:29.000-0400",
      "body": "Fixed at revision 5486\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-22T15:40:34.000-0500",
      "body": "I think we have determined, over time, that this was actually the wrong approach - we should return to the earlier appraoch of appending the avatar to the body, but also enable it to be \"co-moving\".\n"
    }
  ]
}
---
To give freedom of movement as required by the Reorderer and to avoid unwanted visual effects, the avatar should probably be injected as the very last element in the document.&#x20;

As an example, take a sortable ordered list. The avatar is appended to the container (an \<OL>), which creates 2 problems:\
1\) the avatar will increment the number to the list, so if I drag #3 in a 10 item list, the avatar becomes #11\
2\) the avatar is subject to all the CSS-P restrictions placed on the container (like overflow: hidden will crop out the avatar in unexpected ways)

A solution to this could be to place the avatar and the end of the document

        