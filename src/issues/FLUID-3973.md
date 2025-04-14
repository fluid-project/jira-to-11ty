---json
{
  "title": "FLUID-3973",
  "summary": "Selecting reset changes the preview pane to default, but user has to press \"save and apply\" for the changes to take effect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "James Yoon",
  "reporter": "Jen Chow",
  "date": "2010-12-20T15:57:02.797-0500",
  "updated": "2013-09-05T16:09:39.965-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Win XP IE6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2838/",
      "key": "FLUID-2838",
      "summary": "\"Reset\" is a little misleading and could cause users much frustration if they lose a lot of work"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-09-05T16:09:39.939-0400",
      "body": "This full page version of UI Options is no longer the recommended way to use UI Options. It is now only in manual tests to provide an example of how it would be possible to use UI Options in a full page mode. The PCP and PMT which were designed as part of the Cloud For All project show an example of a well designed full page UI Options. These do not include the reset and save and apply buttons.&#x20;\n\n<http://wiki.fluidproject.org/display/fluid/Preference+Editing+Tools+Design>\n"
    }
  ]
}
---
When user selects "save and apply" or "cancel," they immediately see the effects of their selection on the page. When user selects "Reset" though, changes are only shown in the preview pane. They have to click "save and apply" before they actually get to see the effects. May be a minor inconsistency in expectations, since the three buttons are grouped together.&#x20;

        