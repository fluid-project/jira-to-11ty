---json
{
  "title": "FLUID-2482",
  "summary": "UIOptions \"Reset\" and \"Cancel\" options are unclear, and should be supplemented",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "James Yoon",
  "reporter": "Antranig Basman",
  "date": "2009-04-02T15:05:26.000-0400",
  "updated": "2013-09-05T16:12:58.053-0400",
  "versions": [
    "1.0",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "All\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2838/",
      "key": "FLUID-2838",
      "summary": "\"Reset\" is a little misleading and could cause users much frustration if they lose a lot of work"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2425/",
      "key": "FLUID-2425"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-16T16:59:27.000-0400",
      "body": "Partly the issue here is a divergence from the wireframes. Cancel is supposed to close the UI Options interface. Reset removes all the user set preferences. Perhaps this will make the meaning of the buttons more clear.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-09-05T16:12:58.035-0400",
      "body": "This full page version of UI Options is no longer the recommended way to use UI Options. It is now only in manual tests to provide an example of how it would be possible to use UI Options in a full page mode. The PCP and PMT which were designed as part of the Cloud For All project show examples of recommended uses of full page UI Options. These do not include the reset and save and apply buttons.\n\n<http://wiki.fluidproject.org/display/fluid/Preference+Editing+Tools+Design>\n"
    }
  ]
}
---
The current UIOptions component has 3 options for global state control. "Reset", "Save and apply", and "Cancel". \
"Save and apply" is clear, but it is not clear that the meaning of "Reset" is "Reset to the values currently stored in persistence" (typically a cookie). \
The meaning of the "Cancel" button is entirely unclear - it seems to do nothing at all.\
I suggest instead of "Cancel" there be a button marked something like "Defaults" which returns all settings to an original default. I also suggest that "Reset" be expanded to "Reset to Saved" or something similar.

        