---json
{
  "title": "FLUID-126",
  "summary": "The Reorderer adds namespaced attributes to the DOM without declaring the namespace if necessary.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-11-26T16:24:53.000-0500",
  "updated": "2008-03-11T18:57:26.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-123/",
      "key": "FLUID-123",
      "summary": "Reorderer call to getAttribute(\"aaa:activedescendent\") sometimes fails in IE6 with \"Invalid argument\" error."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-48/",
      "key": "FLUID-48"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-11T18:57:26.000-0400",
      "body": "The Reorderer now uses jARIA for adding ARIA roles and states.&#x20;\n"
    }
  ]
}
---
The Reorderer inserts ARIA states and properties dynamically into the DOM, such as "grab" and "activedescendent." It prefixes those attributes with the "aaa:" namespace, which is a good thing, but never checks to see if aaa: has been defined properly. For markup that doesn't already include this namespace, the Reorderer should insert it dynamically. Here's an example of the offending code:

this.\_updateActiveDescendent = function() {\
if (this.activeItem) {\
this.domNode.setAttribute ("aaa:activedescendent", this.activeItem.id);\
} else {\
this.domNode.removeAttribute ("aaa:activedescendent");\
}\
}

        