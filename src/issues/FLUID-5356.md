---json
{
  "title": "FLUID-5356",
  "summary": "The Table of Contents enactor picks up the overviewPanel headers",
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
  "date": "2014-05-02T10:23:36.747-0400",
  "updated": "2016-03-03T08:52:19.266-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "Prefs Framework",
    "Table of Contents",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Abhishek Bansal",
      "date": "2016-03-02T16:37:35.939-0500",
      "body": "I am not able to find any link in Table of Contents  related to any headers from the overviewPanel.\\\nCan you please give me a screenschot or something.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-03T08:52:01.597-0500",
      "body": "Abhishek Bansal thanks for looking at this. It does appear to have been fixed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-03T08:52:19.263-0500",
      "body": "Appears to have been fixed with changes to <https://issues.fluidproject.org/browse/FLUID-5697>\n"
    }
  ]
}
---
The Table of Contents enactor will pick up the headers from the overviewPanel if the panel is open when the enactor is enabled. This is an issue as it leaves links to the anchors that can not be reached when the panel is hidden, and the overviewPanel itself isn't really part of the demo.

Steps to reproduce:

1\) Open the UI Options demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/>

2\) Leaving the overviewPanel open, turn on the Table of Contents preferences\
Notice that it provides links to the headers in the overviewPanel

3\) Close the overviewPanel

4\) Click on a link in the Table of Contents related to one of the headers from the overviewPanel\
Notice that nothing happens.

        