---json
{
  "title": "FLUID-6209",
  "summary": "Model changes from multiple sources that affect each other can result in race conditions to set the model value.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-10-04T12:53:00.561-0400",
  "updated": "2018-03-01T15:24:56.960-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6211/",
      "key": "FLUID-6211"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-10-06T07:21:55.380-0400",
      "body": "See @@Antranig Basman's suggestion from the fluid-work channel:\n\n<https://botbot.me/freenode/fluid-work/2017-10-05/?msg=91953620&page=4>\n\n \n\nLog:\n\n \n\n* [3:04 pm](https://botbot.me/freenode/fluid-work/msg/91953658/)\\\n  Justin\\_o - so my suggestion for now is that we adopt a protocol somewhat similar to the one in <https://wiki.gpii.net/w/Nexus_API#Bind_Model>\n* [3:04 pm](https://botbot.me/freenode/fluid-work/msg/91953679/)\\\n  Although we will want a few differences, some to be forward-looking to expected changes in the protocol, and some to adapt to our particular problem\n* [3:05 pm](https://botbot.me/freenode/fluid-work/msg/91953695/)\\\n  To start with, I suggest that you escape these message with an outer level of packaging, for a start holding a type field\n* [3:06 pm](https://botbot.me/freenode/fluid-work/msg/91953749/)\\\n  In this case, \"type\": \"modelChanged\"\n* [3:07 pm](https://botbot.me/freenode/fluid-work/msg/91953796/)\\\n  I suggest actually that you use this message sent by the \"visible Nexus\" as a prototype for your payload: [https://github.com/amb26/fluid-authoring/blob/F...](https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/server/js/VisibleNexus.js#L230)\n* [3:08 pm](https://botbot.me/freenode/fluid-work/msg/91953837/)\\\n  Only instead of \"messageGeneration\" you should put in a constantly increasing unique id \"messageId\"\n* [3:08 pm](https://botbot.me/freenode/fluid-work/msg/91953854/)\\\n  Then, in the other direction, you will send messages of type \"modelChangedAck\"\n* [3:08 pm](https://botbot.me/freenode/fluid-work/msg/91953860/)\\\n  Whose payload just consists of the id\n* [3:09 pm](https://botbot.me/freenode/fluid-work/msg/91953861/)\\\n  I think you can see where this is going 🙂\n* [3:12 pm](https://botbot.me/freenode/fluid-work/msg/91953990/)\\\n  One end of the bus will then maintain a hash of messaged, index by id, holding the unresolved promise corresponding to the model change\n* [3:12 pm](https://botbot.me/freenode/fluid-work/msg/91954004/)\\\n  The other end of the bus, once it has honoured the change, will send back a \"modelChangedAck\" back along the bus, and the corresponding promise will then get resolved and removed from the hash\n* [3:13 pm](https://botbot.me/freenode/fluid-work/msg/91954040/)\\\n  I expect this machinery won't in itself be sufficient to get rid of all of our races, but I think it is an essential part of it\n* [3:15 pm](https://botbot.me/freenode/fluid-work/msg/91954117/)\\\n  Well, perhaps this doesn't need to be as complex as this - it looks like a \"port\" probably guarantees that there can be at most one outstanding message at any time\n* [3:15 pm](https://botbot.me/freenode/fluid-work/msg/91954130/)\\\n  Although I don't so far see any written form of this guarantee : P\n* [3:17 pm](https://botbot.me/freenode/fluid-work/msg/91954177/)\\\n  These are the kinds of details which nerds never feel really necessary to write in their APIs\n* [3:17 pm](https://botbot.me/freenode/fluid-work/msg/91954181/)\\\n  Mainly because they have no idea how to express the types of them\n* [3:17 pm](https://botbot.me/freenode/fluid-work/msg/91954198/)\\\n  And if you can't express the type of something, it doesn't exist, right? : P\n* [3:19 pm](https://botbot.me/freenode/fluid-work/msg/91954235/)\\\n  I guess there's no reason to assume that at most one message can be outstanding\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-06T10:48:24.230-0400",
      "body": "Further discussion in the fluid-work channel:\n\n<https://botbot.me/freenode/fluid-work/2017-10-06/?msg=91989326&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-10T10:54:12.768-0400",
      "body": "Further channel discussion:\n\n<https://botbot.me/freenode/fluid-work/2017-10-10/?msg=92129943&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-16T10:36:32.563-0400",
      "body": "More discussion related to get/set <https://botbot.me/freenode/fluid-work/2017-10-16/?msg=92362062&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-19T12:05:21.973-0400",
      "body": "Concern about debouncing using the onRead/onWrite chains.\n\n<https://botbot.me/freenode/fluid-work/2017-10-19/?msg=92494854&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-20T09:17:37.060-0400",
      "body": "@@Antranig Basman based on our conversations there are three places I can think of to debounce the get/set requests for the datasource.\n\n1. The get/set invoker\n   1. Could have hooks or some built-in mechanism that can handle debouncing but the flag is disabled by default or something like that\n   2. Could require some extra invokers to wrap the get/set call, although this would seem to cause problems when moving between debounce and non-debounced versions\n2. The onRead.impl/onWrite.impl listener\n   1. Would possibly require the implementer of the listener to handle debounce\n   2. Could take the handler as an argument and use fluid.debounce as the handler, although this would add asymmetry with regards to the non-debounced version\n   3. Perhaps we have a new type of listener that debounces calls to it's handlers\n3. Within the promise itself\n   1. @@Antranig Basman mentioned possibly have cancellable promises, although it's not clear what the effect on the request chain would be\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-27T07:33:39.066-0400",
      "body": "Further discussion on debouncing ( <https://botbot.me/freenode/fluid-work/2017-10-27/?msg=92806229&page=1> )\n\n \n\nSummary:\n\nCreate a \"bufferingModelComponent\", it will know about two models, local and remote. If there is a discrepancy between them, it will attempt to synchronize. \n\nThe remote model is updated via a model listener on the local model. The changes will be debounced and update the remote model after a write to the external source is confirmed (if the two models are the same, it will not actually attempt to perform a write). There will be a specific method for reading from the remote source (e.g. read(), pull(), fetch()). This will also be debounced and update the local model and remote model values at the same time.\n\n \n\nNote that read and write operations will block each other, only 1 request can be in flight at a time. This is to prevent issues where a read returns while a write operation is being performed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-30T14:18:28.669-0400",
      "body": "Further discussion about \"bufferingModelComponent\"\n\n<https://botbot.me/freenode/fluid-work/2017-10-30/?msg=92913088&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-31T08:59:10.589-0400",
      "body": "Yes we still want only one in flight request at a time. Perhaps we'll need a queue for the request.\n\n<https://botbot.me/freenode/fluid-work/2017-10-31/?msg=92945976&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-10-31T14:47:09.164-0400",
      "body": "Some discussion about a potential implementation.\n\n<https://botbot.me/freenode/fluid-work/2017-10-31/?msg=92959036&page=2>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-06T12:37:48.382-0500",
      "body": "@@Antranig Basman and I had a discussion over Skype to further clarify and detail how to implement the model buffering component. This was captured in a gpii pad ( <https://pad.gpii.net/p/deracing-model-updates-vi24nlk> ).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-24T11:45:13.137-0500",
      "body": "Comments from @@Antranig Basman in the fluid-work channel. <https://botbot.me/freenode/fluid-work/2017-11-24/?msg=93879974&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-02-27T08:57:21.114-0500",
      "body": "I did some exploration into moving the afterFetch and afterWrite workflows into onFetch and onWrite respectively. The main issue preventing this is that the fireEventSequences used in the remote model, passes along the same payload to each listener ( <https://github.com/jobara/infusion/blob/6c4381917a85641beb6195a50006976f7ebad733/src/framework/core/js/RemoteModel.js#L108-L126> ). This was done so that the listeners could be treated more like real listeners and not have to return back the payload at each step to the next listener in the chain. However, the onWrite and onFetch events don't have a payload. The payload was passed along in the afterWrite and afterFetch events.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-03-01T15:24:52.126-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/867) has been merged into the project repo master branch at 420dd5d9853f1121ad500e1acf02a185eaaa6b81\n"
    }
  ]
}
---
In the prefs framework we have a datastore where all of the model values are saved. If the settings are auto saved and the panel values are automatically updated from the store, you can have a case where changing the values quickly causes a race condition. This has been exhibited through the work on UIO+ on chrome in Windows 10. See <https://issues.gpii.net/browse/GPII-2559> 

For examples of a stop gap solution, until the framework as a whole has better support for these types of cases, can be seen from work on pcpchannel.js

* <https://github.com/amb26/universal/blob/13a8f45683f88c6cf5ae6ff68f3eee8dff5cbc05/gpii/node_modules/flowManager/src/PCPChannel.js#L75>
* <https://github.com/amb26/universal/blob/13a8f45683f88c6cf5ae6ff68f3eee8dff5cbc05/gpii/node_modules/flowManager/src/PCPChannel.js#L144>

See Channel conversation: <https://botbot.me/freenode/fluid-work/2017-10-04/?msg=91895959&page=1>

        