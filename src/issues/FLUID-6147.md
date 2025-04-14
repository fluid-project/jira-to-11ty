---json
{
  "title": "FLUID-6147",
  "summary": "Improve framework's error semantics to be able to cleanly back out a constructional unit in the case of failure",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-03-11T22:49:09.905-0500",
  "updated": "2024-07-22T10:35:31.172-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The framework's error semantics, as currently operated by the central error reporter `fluid.fail` have always been very crude and modelled on the "stop the world" semantics imported from simplistic authorial environments such as those seen in the C/C++ and Java languages. Kettle operates a slightly more subtle variety of these but only to the extent that a current HTTP request will be properly closed before passing control to the global failure handler, but this has been special-cased in an undesirable manner.

These semantics are now seen as highly authorially inappropriate, especially when dealing with open authorial environments such as the Nexus where constructional gestures may be being serviced concurrently on behalf of a variety of different clients. We should be able to back out any current transactional unit in the case of an error, as well as ensuring that these units remain referentially isolated until they have been committed. This will also require some (currently somewhat ambitious) interaction between the constructional transaction system and the model transaction system - as well as allowing "init" transactions to be abortable, we also need to prevent the "transaction globbing system" from globbing across constructional transaction units.

This kind of error system was referred to as the "ball of fire" system in the early GPII days (Linz), as attested in issues like <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333>.

        