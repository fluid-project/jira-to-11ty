---json
{
  "title": "FLOE-413",
  "summary": "Data entry form field validation",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2015-08-21T14:21:41.837-0400",
  "updated": "2015-08-21T14:21:41.837-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The validations include:

* Label field:\
  &#x20; 1\. Pre-set to "Section 1", "Section 2" etc;\
  &#x20; 2\. When fields are made empty, set back to pre-set values

- Value field: \
  &#x20; 1\. Only accept number (integer or float) and is greater than or equal to 0\
  &#x20; 2\. Display a warning and does not update chart preview if entry is invalid

        