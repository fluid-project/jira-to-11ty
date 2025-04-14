---json
{
  "title": "FLUID-3680",
  "summary": "Create transactional variety ChangeApplier that is capable of collecting a sequence of change events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-08-02T01:20:39.081-0400",
  "updated": "2014-03-03T13:42:55.914-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T02:53:43.698-0400",
      "body": "Merged into trunk at 9969. Transactionality is working, but basic \"change application\" semantics still need some further thought and review. Currently there is the awkward asymmetry between changes which are applied at the root and those applied elsewhere. Also the \"careful change applier\" needs to be implemented - but the more I think about it, the more there might be some subtleties in its implementation. What happens with arrays, for example.\n"
    }
  ]
}
---
Crucial functionality is the ability to collect a sequence of incoming change events, and pen them up in a "transactional world". The holder of the "transaction" sees a private copy of the model with changes applied one-for-one, but external observers of the model do not see any changes until the transaction is "committed". As well as the ability to rollback a complex series of changes that have resulted in a constraint violation or been cancelled, this is also a form of API that is broadly useful when considering models which are from time to time committed to a server - it's appropriate for several changes to be collected on the client and then committed in a single bulk operation to the client. This will be immediately useful for CollectionSpace as well as being a crucial part of the implementation of the "new pager".

        