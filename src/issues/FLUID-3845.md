---json
{
  "title": "FLUID-3845",
  "summary": "Simple Inline Edit text field is reading \"Edit Autocomplete\" with NVDA when entering Edit mode.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-11-18T11:58:27.844-0500",
  "updated": "2017-09-27T10:33:56.793-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3.6 NVDA 2010.1\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3811/",
      "key": "FLUID-3811"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3845/FLUID-3845-2.patch",
      "filename": "FLUID-3845-2.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-18T15:17:34.892-0500",
      "body": "Some more details:\n\n* issue seems to be present in NVDA 2010.1 and with v3939 dev snapshot in FF3.6.\n* JAWS does not read out \"Auto complete\".\n* NVDA and IE8 was tested, but inconclusive because of outstanding functionality issues with the inline edit demo and IE8.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-18T15:30:15.175-0500",
      "body": "Also seems to be the same issue reported at NVDA: <http://www.nvda-project.org/ticket/783#comment:2>\n\nThe issue was determined to be a Firefox issue.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-18T15:46:03.898-0500",
      "body": "Updated patch with comment and JSLinted.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-18T17:05:17.705-0500",
      "body": "We need to do some more design thinking and exploration before we put this fix into trunk. We are doing more then just controlling what the screen reader says, we are actually changing the default behaviour of the input and removing the browser's inbuilt autocomplete behaviour. We need to determine whether we are correct in assuming that having the browser read 'edit autocomplete' is in fact confusing and we also need to determine that we truly want to remove the default autocompleting behaviour. If we do decide that we want this behaviour we should consider exposing it in the public API so that people using the component can override this.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-27T10:33:21.471-0400",
      "body": "In FF 55 and NVDA 2017.3 it now says \"edit has autocomplete\" at the beginning.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-27T10:33:56.793-0400",
      "body": "Jonathan Hung do you think we can close this issues as won't fix? I think the behaviour is acceptable as is.\n"
    }
  ]
}
---
When entering edit mode, NVDA reads out "Edit Autocomplete" for editable fields. This should be removed to reduce confusion.

        