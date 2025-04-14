---json
{
  "title": "KETTLE-55",
  "summary": "Refactor dataSource away from clumsy getImpl/setImpl pattern towards symmetric implementation using pseudoevents",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-01-09T10:20:12.812-0500",
  "updated": "2020-09-30T12:15:28.731-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/KETTLE-61/",
      "key": "KETTLE-61"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The core dataSource implementation structure predates the introduction of the onRead/onWrite pseudoevents representing a data transform pipeline. It assumes that the actual backing implementation (whether over the network, fs, etc.) is configured using a hardwired invoker named getImpl/setImpl. As well as being clumsy, this creates real configuration problems such as those seen in KETTLE-54 - if the backing implementation were folded in to the data pipeline, say using a standard namespace named "backing", it would then be possible to configure listeners after this point in the chain, which would then be "only notified in the case of a successful read/write".

We have a further opportunity with respect to KETTLE-52 - the user would really like to be able to access "in-flight" information such as the actual http request but with the current backing implementation this is lost - see the pre-flood implementation in <https://github.com/fluid-project/kettle/blob/master/lib/dataSource-url.js#L207>

We should take the opportunity to insert this into the "promise sequence store" which is supplied by the pseudoevent firer in the core - that is into a field in this "options" structure <https://github.com/fluid-project/kettle/blob/master/lib/dataSource-core.js#L263> .&#x20;

Remember to keep in mind the distant roadmap sketched out in <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events> and the growing duality between an "element" and a "component". In Kettle server, "requests" are genuine components and the gap needs to be closed up between this setup and the "lightweight" one in dataSources.

        