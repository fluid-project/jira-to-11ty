---json
{
  "title": "FLUID-6322",
  "summary": "Update Table of Contents values with locale change in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-08-17T15:48:21.672-0400",
  "updated": "2024-07-22T10:35:19.912-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300",
      "summary": "Implement client-side rerender of UIO based on locale changes"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6323/",
      "key": "FLUID-6323"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-05T16:02:26.683-0500",
      "body": "Consider where to store the localized values. These may not necessarily be best stored in the same file as the panel messages.\n"
    }
  ]
}
---
When the locale is changed in UIO, the Table of Contents header and template values are not currently updated. These should also be reloaded and re-rendered, if applicable.

Previous hacky code from the uioMultilingualDemo grade of the Storytelling Tool:

```javascript
var tocHeaders = {
    "en": "Table of Contents",
    "es": "Tabla de contenido"
};

// Set the Toc Header String
uioComponent.options.multilingualSettings.tocHeader = tocHeaders[uioComponent.model.locale];

// Set the language on the body
```

        