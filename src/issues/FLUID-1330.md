---json
{
  "title": "FLUID-1330",
  "summary": "inline edit - control chars make field \"disappear\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-27T14:58:10.000-0400",
  "updated": "2014-07-07T15:42:09.069-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3 Opera & Saf1.3 on OSX10.4\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1315/",
      "key": "FLUID-1315"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2018/",
      "key": "FLUID-2018"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:52:04.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T15:01:22.927-0500",
      "body": "Still an issue in Infusion 1.3. Slightly difference because now we have a minimum width to an editable field, but not an minimum height.\n"
    }
  ]
}
---
According to the test plan:\
\----------------------------------\
Test 7: Edit With Special Characters

Procedure\
Open the browser and navigate to the specified URL\
Using the mouse, click one of the 'edit' links\
Attempt to edit the text by pasting in text containing special characters (e.g. new line, tab)\
Using the mouse, click on the 'save' button\
\----------------------------------\
There is no "save"button. In any case - the results are that the input area seemingly "disappears" - it actually becomes very small and is still there - it is visible with FF2, FF3, Opera, not visible with Saf 1.3

To duplicate:\
1\. Launch IE7 in WinXP\
2\. Load simple inline edit demo: <http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>\
3\. Edit caption - replace all text with a single space character.\
4\. Save.\
5\. The inline edit field becomes a slim area with an overlapping pencil icon.

        