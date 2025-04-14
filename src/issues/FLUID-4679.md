---json
{
  "title": "FLUID-4679",
  "summary": "Investigate whether ChangeApplier sourceTracking algorithm needs to be improved for some complex cases",
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
  "date": "2012-03-22T17:05:42.797-0400",
  "updated": "2021-07-29T01:43:52.286-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5490/",
      "key": "FLUID-5490",
      "summary": "Restore \"source tracking\" facility in new ChangeApplier"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-28T01:34:35.258-0400",
      "body": "The above discussion ignores the fact that the implementation could be made much simpler and more correct by simply removing the use of ThreadLocals entirely. This should be done, and the collection of \"sources\" should be accumulated indefinitely as a part of the ChangeRequest object itself (and any smaller objects it ends up being fragmented into). This implies that ChangeRequest objects should not be considered copiable (by client code).&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-06-10T20:24:33.073-0400",
      "body": "Note that \"source tracking\" was removed entirely in the move to the new relay implementation of the ChangeApplier. There is an open JIRA for it to be restored: <https://issues.fluidproject.org/browse/FLUID-5490>\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-4633#icft=FLUID-4633> introduced a threadLocal system based on aligning source id counts with stack frames. It's possible that in some scenarios this may not be good enough if the set of changes which accumulate sources are not strictly nested on the stack.

We add +1 for a source on the way up the "stack" and -1 on the way down. This at least guarantees that we get back to 0 once the user returns to the point where they fired the "first" change, but really we want the sources to be ONLY accumulative until "this point" - "this point" being the point when "the original change" has finished being processed. In a complex case, you could imagine something like this:

change with source 1 fired --->\
change with source 2 fired --->\
<-- change with source 2 returns\
change with source 3 fired -->\
in HERE we want to still see source 2, even though it has returned!\
<-- change with source 3 returns\
<-- change with source 1 returns

This should be possible with a slightly different implementation of sourceWrapModelChanged - however, it involves having a good idea of what is "the first change" in a set which might not be so easy to define. We expect this to be easier to do than in the similar case of "instantiators" since in this case we have a well-defined scope, the ChangeApplier itself, which defines when a set of changes are interacting with "the same thing" - that is, any change which affects the same ChangeApplier on the same stack is clearly potentially part of "the same set of changes", which could interact with source tracking if it interacted with the same model paths in the applier as the other changes.

A further level of improvements would be needed in environments like node.js where everything is asynchronous - in this case we would need improvements to the "threadLocal" system itself, which would carry on the configuration from event to event which formed part of the "same set" of changes. The two sets of issues are rather similar, in that they require some reasonably good idea of "a single set" of changes, which should probably be implemented using the transaction system in the ChangeApplier.

        