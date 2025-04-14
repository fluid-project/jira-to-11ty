---json
{
  "title": "FLOE-171",
  "summary": "Create a central model structure that is more sensible to integrators",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-01-24T09:46:22.884-0500",
  "updated": "2014-08-05T08:45:52.352-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-06-02T12:31:59.808-0400",
      "body": "Submitted a pull request: <https://github.com/fluid-project/metadata/pull/25>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-08-05T08:45:48.251-0400",
      "body": "Pull request ( <https://github.com/fluid-project/metadata/pull/25> ) merged at 400487d4b7ccc1ec749e41c56f765f572029565b\n"
    }
  ]
}
---
Using the current model structure used by the video metada panel as an example:

{\
url: "",\
highContrast: false,\
signLanguage: false,\
flashing: "unknown",\
audio: "available",\
keywords: \[],\
captions: \[]\
}

This structure doesn't make much sense to integrators. A more easy-to-understand structure would apply to the metadata output such as:&#x20;

{\
url: "[http://url](http://url/)",\
metadata: {\
accessModel: \[],                // An array of any of these values: "visual", "audio"\
accessibilityHazard: \[],      // An array of one of these values: "flashing" or "noFlashing"\
accessibilityFeature: \[],     // An array of any of these values: "highContrast", "signLanguage", "captions"\
keywords: \[],                     // An array of any of these values: "dialogue", "soundtrack", "sound effect"\
},\
captions: \[{\
src: "[http://captionUrl](http://captionurl/)",\
language: ".."\
}, \
....\
]\
}

So, a central model with this structure can be exposed to integrators and use model transformation to transform it to the models required by media panels.

        