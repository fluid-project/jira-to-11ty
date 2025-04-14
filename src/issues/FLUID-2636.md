---json
{
  "title": "FLUID-2636",
  "summary": "GeometricManager code will throw \"nodeName is null or undefined\" in some circumstances in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-04-30T10:17:04.000-0400",
  "updated": "2009-11-13T09:01:10.000-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-04-30T10:18:51.000-0400",
      "body": "<http://www.quirksmode.org/dom/w3c_core.html> explains some of the oddities with nodeName/tagName. This code should probably simply be guarded, to prevent any-sized fragments from escaping the range of safe nodes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-22T09:04:05.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T23:00:36.000-0400",
      "body": "tagName replaced for NodeName and now properly guarded - hard to verify since problem is intermittent, but should be impossible now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:01:10.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Reported on IRC:

\[13:43:08 EDT(-0400)] \<dstn> In some portlets in uPortal 3.1, when we drag them, we get 'tagName' is null or not an object and it refers to line 4349 in fluid-all-0.8.js - I've pastebined a snippet of the lines here <http://fluid.pastebin.com/m5569805c> . It happens in IE6 and IE7.

Relevant code in GeometricManager.js is the following:

var isAttached = function(node) {\
while(node) {\
if (node.tagName.toLowerCase() === "body") return true;\
node = node.parentNode;\
}\
return false;\
};

        