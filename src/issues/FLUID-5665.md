---json
{
  "title": "FLUID-5665",
  "summary": "Save preferences into the model path \"preferences\" instead of the root",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-05-14T15:55:05.903-0400",
  "updated": "2017-02-27T15:49:13.481-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-331/",
      "key": "FLOE-331",
      "summary": "Save the state information into the central model"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-12T13:26:02.639-0400",
      "body": "The reason we would want to separate preference state from UI state, to start with, is to persist information such as in <https://fluidproject.atlassian.net/browse/FLOE-331#icft=FLOE-331>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-22T15:07:24.593-0400",
      "body": "Merged into trunk at revision 5263b0e75e3f36384f7e5e73089ed90f2d9217fd\n"
    }
  ]
}
---
The preferences framework currently saves all preferences at the root path so the saved structure looks like:

{\
contrast: "bw",\
textSize: 1.2\
}

In the first discovery tool, it needs to: \
1\. Also save the ui states such as visited panels, the current selected panel and some panel states;\
2\. Re-render the tool at preferences change, not at the state change.

The above structure results in a problem that there's no way to listener to the preferences change to re-render the tool.

To solve this problem, the preferences should be saved into a particular path "preferences". The new structure is:

{\
preferences: {\
contrast: "bw",\
textSize: 1.2\
}\
}

        