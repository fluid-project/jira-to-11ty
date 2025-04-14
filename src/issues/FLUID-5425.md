---json
{
  "title": "FLUID-5425",
  "summary": "No notification of reordering",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T15:15:09.402-0400",
  "updated": "2016-11-08T15:49:52.646-0500",
  "versions": [
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Chrome 35 (NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Dinuka Desilva",
      "date": "2016-03-03T11:29:13.958-0500",
      "body": "Is there anyone currently working on this? I would like to give it a try 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-04T08:47:30.498-0500",
      "body": "@@Dinuka Desilva feel free to work on this. This was originally filed quite a while ago in terms of Chrome and NVDA releases, so you may want to start by testing it first.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-08T15:49:52.646-0500",
      "body": "Tried this again with Chrome 54 and NVDA 2016.3 on Win 10. It did give some brief information about reordering, but it was just the positions. (e.g. from 2 to 3). And there was no feedback for changing selection.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open a reorderer demo\
<http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/> \
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/> \
<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/>&#x20;

2\) Navigate to the reorderable items (note due to FLUID-5424 you'll need to manually switch to focus mode - NVDA+space)

3\) use the keyboard to reorder the elements\
Notice that there is no screen reader feedback provided.

        