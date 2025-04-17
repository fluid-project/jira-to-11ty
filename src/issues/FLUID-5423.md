---json
{
  "title": "FLUID-5423",
  "summary": "Progress is not announced.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T15:07:43.148-0400",
  "updated": "2024-07-23T07:34:12.862-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Progress"
  ],
  "environment": "Chrome 35, FF 29 (Windows 7)(NVDA 2014.2)\\\nSafari 7 (Mac OS 10.9)(VoiceOver)\\\nSafari 10 (macOS 10.12)(VoiceOver)\\\nSafari 17.5 (macOS 14.5)(VoiceOver)\\\nMS Edge (Win 10, Narrator)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-12T14:06:43.608-0400",
      "body": "May be related to the fact that the \"submit\" button retains focus. If progress bar itself has focus, it will announce the progress.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-16T11:44:35.296-0400",
      "body": "We may want to update the demo to autofocus the Progress bar after the submit, so that the demo is more informative.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-17T09:44:59.549-0400",
      "body": "Joseph Scheuhammer and I talked about this in the channel today, and compared with an example from the open ajax alliance.\\\n<https://botbot.me/freenode/fluid-work/2014-06-16/?tz=America/Toronto>\\\n<http://www.oaa-accessibility.org/example/27/>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2014-06-18T10:24:06.171-0400",
      "body": "The ARIA mapping document has a section on a11y events, including aria-valuenow and aria-valuetext  \\[1].  These are the events that the browser is to emit when aria-valuenow/aria-valuetext change.  Summarized below – note that aria-valuetext changes do no spawn events for either of UIA express nor pure UIA:\n\naria-valuenow:\n\n* MSAA + UIA Express:  EVENT\\_OBJECT\\_VALUECHANGE\n* MSAA + IA2: EVENT\\_OBJECT\\_VALUECHANGE\n* UIA: ValueProperty change.\n* ATK/AT-SPI: object:property-change:accessible-value.\n* AXAPI: AXValueChanged.\n\naria-valuetext:\n\n* MSAA + UIA Express:  not mapped (no event)\n* MSAA + IA2: EVENT\\_OBJECT\\_VALUECHANGE\n* UIA: not mapped (no event).\n* ATK/AT-SPI: object:property-change:accessible-value.\n* AXAPI: AXValueChanged.\n\nI tested the open ajax example Justin cited above \\[2] and the fluid demo \\[3] in two ways.  One way involved running the examples with Orca on GNOME/Linux.  The other was to see what events FF was emitting on Win7, using AccProbe.\n\nFor the GNOME/Linux tests, Orca spoke a sequence of \"percent complete\" speeches.  That is, both examples worked.\n\nFor the FF/Win7/AccProble tests, a sequence of EVENT\\_OBJECT\\_VALUECHANGE events were emitted.  This matches the mappings spec (MSAA+IA2) for changes to aria-valuenow. FF is emitting the documented a11y events on Win7.  And, although not checked with an inspector, it's likely FF is emitting the ATK/AT-SPI events for the Orca tests.\n\n\\[1] <http://www.w3.org/TR/core-aam-1.1/#mapping_events_state-change>\\\n\\[2] <http://www.oaa-accessibility.org/example/27/>\\\n\\[3] <http://build.fluidproject.org/infusion/demos/progress/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-07-14T15:33:49.782-0400",
      "body": "Possible related issue: <https://github.com/nvaccess/nvda/issues/913>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the progress demo\
<http://build.fluidproject.org/infusion/demos/progress/>

2\) Click on "submit" \
Notice that the progress bar is moving but there are no audio updates/indications of it.

        