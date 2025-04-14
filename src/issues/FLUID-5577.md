---json
{
  "title": "FLUID-5577",
  "summary": "Open up configurable point in IoC framework for contributed rules for validating component targets",
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
  "date": "2014-12-03T18:54:22.914-0500",
  "updated": "2015-06-16T14:03:48.110-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
FLUID-4890 implemented a very helpful "fail-fast" behaviour - if IoC resolution triggered by a listener or invoker detects that the housing component for its definition has been destroyed, a fatal error is raised immediately. The writeup for <http://wiki.fluidproject.org/display/fluid/The+Appalling+Events+of+6+November+2014> suggests that the soundest way of heading off errors similar to the one it describes, would be to allow Kettle to validate the request target of a dispatched method in the same way.

Our current guarding code is in fluid.makeStackFetcher -&#x20;

fluid.makeStackFetcher = function (parentThat, localRecord) {\
var fetcher = function (parsed) {\
if (parentThat && parentThat.destroy === fluid.destroyedMarker) {\
fluid.fail("Cannot resolve reference " + fluid.renderContextReference(parsed) + " from component " + fluid.dumpThat(parentThat) + " which has been destroyed");\
}

This is a highly performance-critical region of the code - but possibly we could afford the cost of a conventional event firing at this point to determine whether the current component is a request which mismatches the current "threadLocal" held within Kettle.

Alternative points would be to guard the head of invokeInvoker and     fluid.event.dispatchListener using a separate means. This would be less damaging to performance but slightly more bulky. A slight worry is that dispatchListener is a little irregular in its appearance on the dispatching codepaths.

Given we only have the power to guard the current component's methods directly, another possibility might be to register the guarding callback in its shadow - this would also cut down slightly on the impact of checking every component.&#x20;

In fact - this is the only practical scheme - since Kettle can have no idea about the identity of requests other than the one currently on the stack frame (except perhaps through an expensive "hasGrade" check). So we will need to supply two integration points - one for registering a validation function on a component on creation, and then the process of dispatching it.

        