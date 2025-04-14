---json
{
  "title": "FLOE-142",
  "summary": "Change tab order in metadata features panel to clarify Video feature options (FF+VO)",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2014-01-06T15:28:41.158-0500",
  "updated": "2014-01-14T09:04:56.488-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": "Firefox, VoiceOver\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-149/",
      "key": "FLOE-149",
      "summary": "Radio button groups are not properly structured - they should appear in a fieldset with a legend, and labels for each radio."
    }
  ],
  "attachments": [],
  "comments": []
}
---
Note: this applies to Firefox (with VO) only.  The exisiting tab order works well in Chrome and Safari.

At the moment the initial tab order in the features panel jumps from the "Video" heading to the radio button group "video has flashing visuals" (the checkbox options are skipped).  When the tab order cycles back around to the video features, the checkbox options are included in the tab order, followed by the individual radio buttons "Yes", "No" and "Not sure".&#x20;

If possible the tab order should be changed so that the content of the Video features panel (check boxes and radio button grop) are not in the initial tab order.  Then, when the tab order cycles back around, the order should be: heading ("Video"), followed by the two check boxes, followed by the radio button group heading "video has flashing visuals...", followed by the individual radio buttons ("yes", "no", "not sure")

        