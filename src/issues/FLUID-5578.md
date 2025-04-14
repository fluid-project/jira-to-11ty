---json
{
  "title": "FLUID-5578",
  "summary": "Investigate potential for improving \"fail-fast\" behaviour of event listeners",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-12-04T14:58:31.873-0500",
  "updated": "2014-12-04T15:01:02.269-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5506/",
      "key": "FLUID-5506",
      "summary": "Implement constraint-based priority scheme to compute order of notifying listeners"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5499/",
      "key": "FLUID-5499",
      "summary": "Think about scheduling of effects within the framework - especially the destruction of components"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4890/",
      "key": "FLUID-4890",
      "summary": "Firing an event to a listener registered by a destroyed component should trigger an error immediately"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333",
      "summary": "Create support for \"abortable events\" in the framework, to deal with cases where the holding component is destroyed"
    }
  ],
  "attachments": [],
  "comments": []
}
---
One contributor to confusion during the "appalling events" ( <http://wiki.fluidproject.org/display/fluid/The+Appalling+Events+of+6+November+2014> ) was mismatch between expected behaviour of listener notification when modifying the set of listeners to an event from one of its handlers. Through long-established behaviour, the notification of listeners is progressed through a "frozen copy" of the listener list and is unaffected by modifications until the notification has finished. One exception to this is the existing "fail-fast" behaviour which aborts handling if the entire event is destroyed during the notification (presumably through destruction of its holding component) - implemented under <http://issues.fluidproject.org/browse/FLUID-4890> .&#x20;

There might be room for an implementation which is more aggressive in signalling errors in these situations - since many of them represent coding errors, since the user is presumably attempting to cause a behaviour which is not enacted. However it's not easy to characterise the situations we should flag as an error. Certainly a listener that removes **itself** from the listener list should be permitted - since this is a time-honoured pattern used in, e.g. APIs such as jQuery's once() etc. A listener which through its synchronous actions causes a different listener to be removed is probably an error - although in "appalling events" this was a less secure characterisation of the implementation error than one which could be made earlier (leakage of requests between stack frames).

Whatever behaviour we decide on should result in revisiting <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333> - if we implement "fail-fast" behaviour for removal, in the light of that our "instant abort" behaviour might seem cowardly. This was designed to eliminate errors propagated from destruction triggered by the IoC testing framework - typically on the last listener of a fixture, the framework begins destruction of the entire fixture tree. We've speculated in <https://fluidproject.atlassian.net/browse/FLUID-5499#icft=FLUID-5499> that a more stable pattern might result from only scheduling this destruction asynchronously - whilst scheduling ALL effects asynchronously seems like a step too far. There used to be a number of bugs in this area (e.g. FLUID-5361 ) that made avoiding these problems harder - but we should really make it possible and easy to ensure that the IoC testing framework's listener can be unconditionally last - thus increasing the clarity that destroying a component whilst there are still listener notifications left in the queue represents an implementation error. Therefore we should probably implement the constraint scheme for <https://fluidproject.atlassian.net/browse/FLUID-5506#icft=FLUID-5506> before we repent of our cowardice on "nulling listeners" for <https://fluidproject.atlassian.net/browse/FLUID-5333#icft=FLUID-5333>.

        