---json
{
  "title": "FLUID-5642",
  "summary": "Improve fluid.selectable plugin to accommodate browser native handling for selectable elements ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2015-04-21T14:51:56.257-0400",
  "updated": "2015-04-21T14:51:56.257-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
After applying fluid.selectable to a group of radio buttons in first discovery tool, the language panel, some issues occurred:

1\. When using arrow keys to navigate through radio buttons, the focus moves from one to the other but the checked state is not changed accordingly. The checked state always remains at the initial checked radio button;

2\. To solve the issue 1, register an event handler on the fluid.selectable option "onSelect" to manually set the checked state when elements become selected.&#x20;

onSelect: function (element) {\
(element).attr("checked", "checked");\
}

This does set the checked state but onchange event for the checked element is not fired correspondingly;

3\. To solve the issue 2, improve the manual handling to trigger the change event as well,

onSelect: function (element) {\
(element).attr("checked", "checked").trigger("change");\
}

The change event is fired and the language panel is re-rendered. However, only the first arrow key movement works as desired, the next arrow movement moves the focus back to the initial checked radio button. The following arrow key movement can only navigate in btw these two buttons and other radio buttons become non-navigable.

        