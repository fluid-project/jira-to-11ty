---json
{
  "title": "FLUID-3798",
  "summary": "the onLeaveContainer and onUnselect unit tests are failing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-10-15T15:15:34.924-0400",
  "updated": "2010-11-02T16:42:06.685-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-15T15:15:47.768-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-29T14:52:58.419-0400",
      "body": "Seems related to the commit to <https://fluidproject.atlassian.net/browse/FLUID-3721#icft=FLUID-3721> at revision 10031. A new condition was added to the cleanUpWhenLeavingContainer function, which seems to be causing the onLeaveContainer and onUnselect functions not to fire.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-29T17:14:54.552-0400",
      "body": "Fixed at revision 10166 - test cases were faulty in that they were expecting a \"leave\" event to be serviced for a selectable that had been incorrectly set up - in fact it contained 0 elements due to missing any selectableSelector etc. configuration. However this reveals that these test cases are poorly organised and written in an unfavoured style - rather than exposing static utilities which operate on an assumed shared instance, the selectables instance needs to be made explicit and all of the various constructor calls consolidated. The error arose through an inconsistency in the configuration style of \"quickMakeSelectable\" and that used elsewhere. It is possible that this organisation dates from the time before the keyboard-a11y selectables was packaged as a \"that\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-01T09:28:14.228-0400",
      "body": "The unit tests seem to be passing again.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-02T16:42:06.683-0400",
      "body": "The test modifications look good.&#x20;\n"
    }
  ]
}
---
These unit tests were only working on Firefox but seem to be broken there as well now.

<http://swarm.fluidproject.org/?state=runresults&run_id=8715&client_id=600>

        