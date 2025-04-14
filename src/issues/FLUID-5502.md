---json
{
  "title": "FLUID-5502",
  "summary": "IoC testing framework mishandles any case of \"two listeners in a row\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-08-29T19:00:37.397-0400",
  "updated": "2014-10-02T16:31:37.808-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5345/",
      "key": "FLUID-5345",
      "summary": "Failure with sequence ending with 2 listener elements in a row in IoC Testing Framework"
    }
  ],
  "attachments": [],
  "comments": []
}
---
We have a related issue, <http://issues.fluidproject.org/browse/FLUID-5345>, in which anomalous results are reported in the case of writing two "listener" type sequence points in an IoC Testing framework fixture in a row. By the current "imagined semantics" of the testing framework, this kind of sequence "usually" represents an error - since if we are waiting for two events in a row, it is extremely likely that the firing sequence of them is undefined. That is, if the testing framework itself does not provoke the firing of the 2nd event in the sequence, it is likely that the autonomous results of the component(s) under test could quite easily have caused them to fire in the opposite order.

This argument that the firing sequence is undefined and that the fixture is invalid has been correct often enough that it has obscured the fact that the IoC testing framework itself has a bug in this case. It turns out that we  actually have no test fixtures for the framework itself that exercise this, and so this has always been highly likely in any case.&#x20;

Today in IRC <https://botbot.me/freenode/fluid-work/2014-08-29/?msg=20671620&page=3> debugging an issue involving test cases for the feedback tool, we ran into a case where neither order of a set of such listener fixtures would run (both would block). This code had recently been changed from one where the two events would follow synchronously, into one where one listener asychronously triggered the event listened to by the other. This is a clue to the nature of the bug - however, in order for the IoC testing framework to be more helpful, we should really respecify the semantic of this situation, since it has come up and caused problems often enough.

What should really happen is that the framework should glob together any number of consecutive fixtures into a single large "boiled event" - and be happy to accept any ordering of fires to move on beyond the combined fixture. This would apply a "don't-care nondeterminism" model to this situation which is typically what the user really wanted in the first place.

Right now, as a workaround, we always recommend that the user's fixtures be rewritten to combine together any consecutive number of "listener" type fixtures into a single fixture that verifies all the conditions simultaneously.

As a stopgap fix, we could get the framework to error with a diagnostic on encountering this case, since we now realise that it will generally mishandle it.

        