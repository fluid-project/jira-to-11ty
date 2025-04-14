---json
{
  "title": "ENGAGE-88",
  "summary": "Create the directory structure for the Engage 0.1 release and move the relevant pieces from the incubator ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-09-21T15:56:50.000-0400",
  "updated": "2009-11-04T10:50:46.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-95/",
      "key": "ENGAGE-95"
    },
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-123/",
      "key": "ENGAGE-123"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-70/",
      "key": "ENGAGE-70"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:36:34.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T15:34:16.000-0400",
      "body": "Antranig and I further discussed the directory naming issue. Here's a transcript of our chat:\n\nWhat to call engage-client?\n\n\\[14/10/09 2:58:44 PM] Antranig Basman: Well, this whole issue seems a bit confused\\\n\\[14/10/09 2:58:48 PM] Colin Clark: And in fact, we currently run chunks of that code happily on the server\\\n\\[14/10/09 2:58:55 PM] Antranig Basman: I was glad you reminded me of the fact that **all** client code could in fact run on the server\\\n\\[14/10/09 2:59:02 PM] Colin Clark: for sure 🙂\\\n\\[14/10/09 2:59:04 PM] Antranig Basman: But not that we would really ever want it to\\\n\\[14/10/09 2:59:22 PM] Colin Clark: I guess if we could imagine a better name for the stuff in engage-client, we should consider\\\n\\[14/10/09 2:59:28 PM] Antranig Basman: yes\\\n\\[14/10/09 2:59:32 PM] Colin Clark: I could only come up with negative definitions\\\n\\[14/10/09 2:59:38 PM] Colin Clark: \"non-server-specific\"\\\n\\[14/10/09 2:59:41 PM] Antranig Basman: The trouble is, the design of it currently seems a bit confused in itself\\\n\\[14/10/09 2:59:45 PM] Colin Clark: or otherwise dorky names\\\n\\[14/10/09 2:59:47 PM] Colin Clark: Oh, for sure it is\\\n\\[14/10/09 2:59:52 PM] Antranig Basman: So it is further harder to know what to call it 😛\\\n\\[14/10/09 2:59:55 PM] Colin Clark: 🙂\\\n\\[14/10/09 3:00:12 PM] Colin Clark: I guess I'd argue that engage-client is currently just all the stuff that doesn't directly depend on Kettle APIs\\\n\\[14/10/09 3:00:21 PM] Antranig Basman: I guess the split between \"engage-client\" and \"engage-server\" is actually not good\\\n\\[14/10/09 3:00:28 PM] Colin Clark: no, not especially\\\n\\[14/10/09 3:00:39 PM] Antranig Basman: Can't we call it \"engage-core\"?\\\n\\[14/10/09 3:00:56 PM] Colin Clark: engage-core and engage-server or engage-services or engage-feeds or something?\\\n\\[14/10/09 3:01:10 PM] Antranig Basman: engage-core and engage-server seems good\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-11-03T16:26:59.000-0500",
      "body": "Most of the work for this issue is complete. The remaining work is captured under: <https://fluidproject.atlassian.net/browse/ENGAGE-168#icft=ENGAGE-168>\n"
    }
  ]
}
---
We need to discuss the directory structure that we want for 0.1, create it and then move kettle and other engage pieces from the incubator into the final directory structure.&#x20;

Here's a thread that outlines the discussion about directory restructuring for Engage:

<http://www.nabble.com/Engage-restructing-proposal-td25827497.html>

        