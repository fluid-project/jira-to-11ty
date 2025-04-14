---json
{
  "title": "FLUID-1888",
  "summary": "ModuleLayout is not properly responsive to calls to refresh()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-12-02T12:58:37.000-0500",
  "updated": "2008-12-12T13:25:02.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-03T12:06:26.000-0500",
      "body": "Bug Parade  0.6 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-10T13:55:04.000-0500",
      "body": "Fixed at revision 6183\n\n\"layout\" property is now exposed via layoutHandler reference (also tested)\\\nnew Reorderer event \"onRefresh\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-12T12:34:10.000-0500",
      "body": "I reviewed the code and athena7 reviewed the functionality. Both look fine.&#x20;\n"
    }
  ]
}
---
Report from the IRC channels (athena7 from uPortal) - when using the ModuleLayout, a call to "refresh" does not allow a new column to be recognised. Setup was as follows:

var options = {\
selectors: {\
columns: ".portal-page-column-inner",\
modules: ".portlet-container",\
lockedModules: ".locked",\
dropWarning: "#portalDropWarning",\
grabHandle: "\[id\*=toolbar\_]"\
},\
listeners: {\
afterMove: movePortlet\
},\
styles: {\
mouseDrag: "orderable-dragging-mouse"\
}\
};

The base issue is that the ModuleLayout "constructor" does not "automate-ahead" the construction of its private "layout" object from the raw materials, and does not even expose it as public to allow these alterations to be effected manually.

        