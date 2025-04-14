---json
{
  "title": "FLUID-3866",
  "summary": "Message resolution needs to support hierarchical bundles, with corresponding upgrade for \"renderer components\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-11-30T14:53:43.226-0500",
  "updated": "2014-03-03T13:40:13.509-0500",
  "versions": [
    "1.2.1",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-30T15:56:24.398-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-07T16:27:26.993-0500",
      "body": "Fixed at revision 10335\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:33:10.208-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1\n"
    }
  ]
}
---
Our current approach for localising and internationalising components, the use of the "strings" section in component options and the "messageLocator" infrastructure currently located in the renderer, can not scale. Most mature applications will require string or message bundles at various levels of scope - and at the least, it must be possible to link together resolution for a message from either a component or in the renderer to a default "parent bundle" if the message key is not found in the local "strings".\
Other capabilities required: \
i) Support for "heterogeneous bundles" which may use a different resolution strategy at each level of containment\
ii) New "parentBundle" option recognised by renderer components\
iii) Provision of bundle resolver function as part of the package created by "renderer components"\
This should also be moved to the core framework, since accessibility support for many of the core components require access to this functionality

        