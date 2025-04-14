---json
{
  "title": "FLUID-6323",
  "summary": "Update text direction with UIO locale change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Gregor Moss",
  "date": "2018-08-17T16:14:42.767-0400",
  "updated": "2020-05-29T11:14:42.442-0400",
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
      "url": "/browse/FLUID-6322/",
      "key": "FLUID-6322",
      "summary": "Update Table of Contents values with locale change in UIO"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When the locale is changed in the localized version of UIO, the text direction should also be adjusted, where applicable. E.g. Farsi uses a right-to-left script, so the markup should be updated accordingly via the [HTML dir attribute](https://www.w3schools.com/tags/att_global_dir.asp).

Consider storing the text direction in the message files, along with the localized strings.

The value could be stored/updated here:

```javascript
localeSettings: {
    direction: "ltr"
}
```

        