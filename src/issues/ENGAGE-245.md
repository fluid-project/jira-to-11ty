---json
{
  "title": "ENGAGE-245",
  "summary": "Can not register multiple producers with the same source (as well as target).",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2010-01-15T17:08:05.000-0500",
  "updated": "2014-03-03T14:15:41.933-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-01-20T17:31:48.000-0500",
      "body": "Fixed at revision 9076. This is a (moderately) subtle issue relating to the semantics of renderHandlers and acceptors. In this case, two renderHandlers were attached at the same node in the acceptor tree, and ALSO both pointing at the same physical template directory. The first handler, noticing that it could find a template name matching the one required for the incoming segment, reported that it was the correct acceptor even though it did not have a matching producer - the producer was actually attached to the 2nd acceptor.\n\nThis fix only marks a rHA to report acceptance if it can discover both a template AND and producer matching the incoming segment - however, a more efficient approach would have rHAs \"agglomerate\" since at the moment fetch error records will accumulate quadratically in the rHA caches with respect to the number of distinct acceptors held at a node.\n"
    }
  ]
}
---
Example:\
one service is registered like that:

var handler = fluid.engage.mountRenderHandler({\
config: config,\
app: app,\
target: "exhibitions/",\
source: "components/exhibition/html/",\
sourceMountRelative: "engage"\
});

handler.registerProducer("view", function (context, env) {\
return {};\
});\
and the other one is:

var handler = fluid.engage.mountRenderHandler({\
config: config,\
app: app,\
target: "exhibitions/",\
source: "components/exhibition/html/",\
sourceMountRelative: "engage"\
});

handler.registerProducer("about", function (context, env) {\
return {};\
});

        