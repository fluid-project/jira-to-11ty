---json
{
  "title": "FLUID-6201",
  "summary": "Textfield stepper does not report the input value, but rather reads a character from the label.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-09-26T12:57:15.524-0400",
  "updated": "2017-09-26T12:57:24.339-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Control"
  ],
  "environment": "Chrome 61 (NVDA 2017.3, Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. Ensure that NVDA is running
2. Open the [Text field control demo](https://build.fluidproject.org/infusion/demos/textfieldControl/) in Chrome
3. Tab to the Textfield Stepper

Notice that the value is read as "selected T" instead of 1.

        