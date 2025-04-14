---json
{
  "title": "FLUID-2838",
  "summary": "\"Reset\" is a little misleading and could cause users much frustration if they lose a lot of work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Daphne Ogle",
  "date": "2009-05-28T22:15:31.000-0400",
  "updated": "2013-09-05T16:11:45.270-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2482/",
      "key": "FLUID-2482"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3973/",
      "key": "FLUID-3973"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2009-05-28T22:20:01.000-0400",
      "body": "After I played with this a bit, I realize by choosing Cancel the settings from previous sessions aren't lost.  I think the problem is that the Reset button is different from the Save and Apply and the Cancel.  The Reset only acts on the preview but the other two are sort of finalizing the action and closing out UI Options.  Perhaps moving Reset up closer to the preview or under the settings themselves would help?  And then the button name could be \"Reset All\".  This probably needs a little more thought.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2013-09-05T16:11:45.245-0400",
      "body": "This full page version of UI Options is no longer the recommended way to use UI Options. It is now only in manual tests to provide an example of how it would be possible to use UI Options in a full page mode. The PCP and PMT which were designed as part of the Cloud For All project show examples of recommended uses of full page UI Options. These do not include the reset and save and apply buttons.\n\n<http://wiki.fluidproject.org/display/fluid/Preference+Editing+Tools+Design>\n"
    }
  ]
}
---
I didn't expect the button to reset back to original settings.  If a user has done a lot of work, saved changes and later decides to go in an make another change but chooses reset, they may have lost a lot of work whether they meant to or not.  We should either have an undo or be more explicit with the button name, like, "reset to original" or something like that.

        