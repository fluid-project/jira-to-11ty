---json
{
  "title": "FLUID-6",
  "summary": "Ctrl and Shift Cause Problems in Mouse Interaction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Shaw-Han Liem",
  "date": "2007-06-27T05:22:04.000-0400",
  "updated": "2007-10-22T17:12:41.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Windows XP SP2 Firefox 2.0.0.4\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-44/",
      "key": "FLUID-44"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2007-06-27T09:49:37.000-0400",
      "body": "Serious deficit which causes the component to \"fail\" - i have managed to persuade it to try to drag multiple items this way, with \"hilarious results\"...\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-07-30T14:43:20.000-0400",
      "body": "We'll take the following steps to resolve this one:\n\n1\\. Short term: disable or swallow use of the shift and ctrl keys for multiple selection, making the hilarious results Antranig saw impossible.\\\n2\\. Change the Lightbox/Reorderer to use a modifier other than ctrl for moving images with the keyboard (because it conflicts with the familiar mode of multiple selection on most platforms).\\\n3\\. Add explicit support for multiple selection of items with both the keyboard and mouse.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-03T17:41:40.000-0400",
      "body": "In dojo 0.9 beta, multiple selection can be disabled by setting the Source's \"singular\" parameter to true e.g setting \"dndlb.singular=true\" or passing the parameter in to the Source constructor.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-04T15:46:05.000-0400",
      "body": "I've disable multiple selection (rev 12545) - it shouldn't be a problem.\n\nI've been unable to produce any copy-related errors i.e. errors where dojo's use of the CTRL key for copying causes problems. Mixing the CTRL key and dragging does cause some style issues that I'm looking into addressing, but if anyone can provide instructions for reproducing any copy-related bugs, that would be very helpful.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-10-05T12:56:28.000-0400",
      "body": "I believe the CTRL-key related strangeness is not related to dojo's copy functionality. That strangeness is now captured in <https://fluidproject.atlassian.net/browse/FLUID-44#icft=FLUID-44>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-10-22T17:12:41.000-0400",
      "body": "Since we've moved to using jQuery UI's drag and drop this is no longer an issue.\n"
    }
  ]
}
---
The default behaviour of Dojo DnD is to capture Ctrl and Shift for 'multiple selection' and 'copy'. There seems to be some conflict with our handling of these key events which is causing some unpredictable behaviour.

        