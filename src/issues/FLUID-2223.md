---json
{
  "title": "FLUID-2223",
  "summary": "Clean up the contract for UI Options and UI Enhancer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2009-02-11T15:20:41.000-0500",
  "updated": "2009-03-25T10:03:27.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "FSS",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T13:28:13.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-23T16:47:35.000-0400",
      "body": "A lot of changes in the API have happened from the start of this issue. They include:\n\nUI Enhancer was renamed from Skin and became a Fluid Infusion component.\\\nUI Enhancer has state\n\n* defaultSiteSettings which is the integrator's defaults\n* model which is the current settings\\\n  fssMap in UI Enhancer was renamed to classnameMap\n\nUI Options:\n\nThe properties renderModel, originalModel and savedModel were removed from the 'that'.\\\nThe events onReset, onCancel and afterRender were added and fired appropriately.\\\nTwo subcomponents were added: textMinSize and lineSpacing.\\\nThe selectors were changed to use the flc namespace.\\\nThe 'preview' selector was removed.\\\n'savedSelections' was removed from the options and is now pulled out of UIEnhancer.\\\n'renderModel' was broken up into something more understandable: 'strings' and 'controlValues'\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-23T16:48:32.000-0400",
      "body": "It would be good if Colin could code review this since he code reviewed and made suggestions several times during the implementation.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T10:03:27.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The contract for creating a UI Options component needs to be refined. Integrators using FSS for their own styling need to communicate this to UI Options.&#x20;

More events need to be created and fired including onCancel.&#x20;

        