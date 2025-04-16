---json
{
  "title": "FLUID-6342",
  "summary": "Sequence Transform ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Steven Githens",
  "reporter": "Steven Githens",
  "date": "2018-09-20T22:11:04.915-0400",
  "updated": "2018-09-26T19:34:59.302-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Steven Githens",
      "date": "2018-09-20T22:12:38.993-0400",
      "body": "Antranig Basman or anyone else.  Any comments on this appreciated (or maybe something I missed in the sequence impl that does allow passing payloads).  I'm happy to implement this.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-09-21T04:14:55.002-0400",
      "body": "I think what you see as the weakness of fireTransformEvent, \"that you need to have a series of components to create listeners and events on\" is the main strength of it. Once you are working with an pipeline that is any more than trivial, you want to be programming \"in the open\" - in the sense explained by the paper on the \"Open Authorial Principle\" - <https://github.com/amb26/papers/blob/master/onward-2016/onward-2016.pdf>\\\nThis implies that\\\ni) It should be easy for further authors to contribute further stages of the pipeline slotted in between existing ones created by the first author(s)\\\nii) It should be easy for further authors to override particular stages of the pipelines with implementations held on unrelated component(s)\\\nNeither of those are possible with the implementation/workflow that you've implemented which is why I think we should discourage it. fireTransformEvent is certainly a bit clunky in the current incarnation, but I think the answer to that is to help people achieve the effects of it with less syntax and formality, along the lines suggested in <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events> . Do have a read of both of these resources and let me know what you think -&#x20;\n"
    },
    {
      "author": "Steven Githens",
      "date": "2018-09-24T19:22:17.878-0400",
      "body": "I'm still reviewing those papers, but I'd like to think this really isn't much different than other cases in the IoC system that use array-like or ordered things, such as unit tests. \n\nWe handle the non-trivial case alright, but in my example linked above, it's really a really trivial use case. 3 single functions, called in order, that each take the payload from the previous function.  I'd like to think we could express this is some sort of simple data block that would allow swapping them out, rather than create events/listeners for each one.\n\nFrom an authorial standpoint say if a future author wanted to change the final lookup of the record ( return dbDataStore.findById(lookupData.prefsSafeId) ), perhaps from our couchdb store, to an LDAP lookup or something, ideally they could just swap out the last portion.\n\nIs there an existing bit of infrastructure in infusion, perhaps from the work done to order sequential test cases, that I could adapt to do this?\n\n \n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-09-26T08:49:15.655-0400",
      "body": "We only support arrays in other places such as in the IoC Testing Framework because we haven't had time to take up the improved alternatives, for example the grade sequence system implemented in <https://issues.fluidproject.org/browse/FLUID-5903> . Please try to go ahead with the events/listeners approach as in fluid.fireTransformEvent or perhaps provide some forms of utility or wrapping function to cut down on the bureaucracy. Good luck with continuing to read the papers!\n"
    },
    {
      "author": "Steven Githens",
      "date": "2018-09-26T19:34:59.302-0400",
      "body": "Thanks, I took at look at the completed <https://fluidproject.atlassian.net/browse/FLUID-5903#icft=FLUID-5903> ticket, and looked again at the IoC testing docs.  I think for now I will adopt a similar (if not exact, then a subset) syntax from the \\`sequence\\` entry in infusion based tests, which I guess will be implemented under the covers with \\`fluid.fireTransformEvent\\`.  I don't think it should take long for the first stab at it for the initial use case which inspired this ticket.  Because the calls for the use case are so simple, I feel somewhat strongly about them being grouped/authored together in the component so that it's easy to understand the workflow and there isn't overlapping confusion with the rest of the existing events/listeners on the preferences server component.\n"
    }
  ]
}
---
In the infusion promises implementation we currently have 2 pipeline algorithms, fluid.promise.sequence and fluid.promise.fireTransformEvent.

Using sequence is a very nice and easy way to arrange a set of tasks to complete one at a time, and fireTransformEvent is nice for chaining to together multi-process workflows in the application.

In this ticket I proposing either adding another pipeline, \`sequenceTransform\`, or modifying \`sequence\` slightly to perform chaining payloads.  The issue is that regular \`sequence\` doesn't have a facility (as far as I can tell), to make the payload from a previous task in the chain to the next task. \`fireTransformEvent\` is nice for certain workflows, but for performing a simple chain of operations, it's rather cumbersome and a little confusing to create a set of listeners and events for it on a component. Also, it requires that you have to have a series of components to create listeners and events on.

Ideally, for this I want nearly the same signatures as \`sequence\` such as the abilitiy for the array to contain: values, promises, functions returning promises. But for members that are functions returning promises, the ability to have the payload from the previous item passed in, or to have it added to the \`options\` Object that may be also passed in at the creation of the sequence pipeline.

I have created a small version prototype of this stand alone on some work in the GPII prefs server:

<https://gist.github.com/sgithens/ee60f26ad4f12747c8230ed1af530941>

This is missing the ability to have the array include values and raw promises, but using the tooling in FluidPromises.js I'd like to either add this new function, or modify fluid.promise.sequence to make it possible.

 

 

 

        