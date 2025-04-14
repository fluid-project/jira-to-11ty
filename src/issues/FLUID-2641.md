---json
{
  "title": "FLUID-2641",
  "summary": "fluid.copy does not successfully clone raw arrays",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-05-01T17:39:19.000-0400",
  "updated": "2011-02-28T16:45:18.705-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Steven Githens",
      "date": "2009-05-01T17:43:45.000-0400",
      "body": "An example.\n\nThe original object to copy was like:\n\n\\[{\"id\":17,\"title\":\"Another one 13\",\"sortIndex\":0,\"openDate\":1241110260000,\"dueDate\":null,\"requiresSubmission\":true,\"inAndNewLink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/viewSubmissions/17\",\"linktext\":\"0/0\"},\"opentext\":\"Open: Thu Apr 30 12:51:00 2009\",\"editlink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment/17\",\"linktext\":\"Edit\"},\"duplink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment?duplicatedAssignmentId=17\",\"linktext\":\"Duplicate\"}},{\"id\":14,\"title\":\"Another one \\\n\\[snip]\n\nEssentially, an array of maps/objects.\n\nAfter returning from fluid.copy it is instead a map with numeric keys to maps, resulting in obviously cabberwonky behavior.\n\n{\"0\":\\\n{\"id\":17,\\\n\"title\":\"Another one 13\",\\\n\"sortIndex\":0,\\\n\"openDate\":1241110260000,\\\n\"dueDate\":null,\\\n\"requiresSubmission\":true,\\\n\"inAndNewLink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/viewSubmissions/17\",\"linktext\":\"0/0\"},\\\n\"opentext\":\"Open: Thu Apr 30 12:51:00 2009\",\\\n\"editlink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment/17\",\"linktext\":\"Edit\"},\\\n\"duplink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment?duplicatedAssignmentId=17\",\"linktext\":\"Duplicate\"}},\\\n\"1\":{\"id\":14,\"title\":\"Another one 8\",\"sortIndex\":1,\"openDate\":1241110260000,\"dueDate\":null,\"requiresSubmission\":true,\"inAndNewLink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/viewSubmissions/14\",\"linktext\":\"0/0\"},\"opentext\":\"Open: Thu Apr 30 12:51:00 2009\",\"editlink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment/14\",\"linktext\":\"Edit\"},\"duplink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment?duplicatedAssignmentId=14\",\"linktext\":\"Duplicate\"}},\"2\":{\"id\":18,\"title\":\"Another one 12\",\"sortIndex\":2,\"openDate\":1241110260000,\"dueDate\":null,\"requiresSubmission\":true,\"inAndNewLink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/viewSubmissions/18\",\"linktext\":\"0/0\"},\"opentext\":\"Open: Thu Apr 30 12:51:00 2009\",\"editlink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment/18\",\"linktext\":\"Edit\"},\"duplink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/assignment?duplicatedAssignmentId=18\",\"linktext\":\"Duplicate\"}},\"3\":{\"id\":15,\"title\":\"Another one\",\"sortIndex\":3,\"openDate\":1241110260000,\"dueDate\":null,\"requiresSubmission\":true,\"inAndNewLink\":{\"target\":\"/portal/tool/5e18d3ca-e11e-46d3-a3e6-e20dba11e6e6/viewSubmissions/15\",\"linktext\":\"0/0\"},\"opentext\":\"Open: Thu \\\n\\[snip]\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-15T14:48:02.000-0400",
      "body": "Fixed with test case at revision 7178\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:18.703-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
The base of a body to be copied is assumed to be a hash.

        