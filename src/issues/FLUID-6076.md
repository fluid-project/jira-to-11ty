---json
{
  "title": "FLUID-6076",
  "summary": "In Edge - The Overview Panel can not be closed using the Asterisks button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Jonathan Hung",
  "date": "2016-11-16T10:28:41.095-0500",
  "updated": "2016-11-16T11:16:14.676-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": "Windows 10, Edge\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2016-11-16T11:16:14.644-0500",
      "body": "It seems that the issue resolves itself after updating to the latest Windows 10 Anniversary update.\n"
    }
  ]
}
---
It seems that the Asterisks button on the Overview Panel can not be activated using the keyboard in Edge. It works in other browsers (IE11, FF). This causes a situation where the only way to open the Panel again is to reload the demo.

To reproduce:\
1\. Using Edge open any demo with an Overview Panel (i.e. Uploader demo)\
2\. Tab until the Asterisk button is focused.\
3\. Press Enter to close the panel.\
4\. Notice that nothing happens.

        