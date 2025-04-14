---json
{
  "title": "FLUID-1319",
  "summary": "Inline edit unit tests have an uncaught exception",
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
  "date": "2008-08-27T11:24:59.000-0400",
  "updated": "2008-11-10T08:34:34.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-24T13:17:00.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:30:56.000-0500",
      "body": "This has been fixed at revision 5965 by simply unconditionally catching the exception. Note that this issue is investigated and characterised more fully as part of GWT in the following thread:\n\n<http://code.google.com/p/google-web-toolkit/issues/detail?id=1385>\n\nThe upshot is that the error occurs when attempting to setSelectionRange on any text control which is not currently \"physically embodied\" in front of the user, e.g. hidden as a result of being markup running in a test ase.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T08:34:34.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Inline edit unit tests have an uncaught exception. It is made visible by Firebug, but probably happens in the other browsers as well.

uncaught exception: \[Exception... "Component returned failure code: 0x80004005 (NS\_ERROR\_FAILURE) \[nsIDOMNSHTMLInputElement.setSelectionRange]" nsresult: "0x80004005 (NS\_ERROR\_FAILURE)" location: "JS frame :: <http://build.fluidproject.org/fluid/fluid-components/js/fluid/InlineEdit.js> :: setCaretToStart :: line 1" data: no]\
(no name)()labels-javascript (line 2557)\
these()labels-javascript (line 2148)\
getTransport()labels-javascript (line 2558)\
initialize("/plugins/dynamictasklist/completeTask.action?entityId=2883927\&task=Inline+Edit+-Simple+Text%28Oper...", Object)labels-javascript (line 2633)\
create()labels-javascript (line 2085)\
changeStatus("/plugins/dynamictasklist/completeTask.action?entityId=2883927\&task=Inline+Edit+-Simple+Text%28Oper...", li#alphaView.view)tasklist.js (line 217)\
onclick(click clientX=0, clientY=0)Current+Needs (line 1)

        