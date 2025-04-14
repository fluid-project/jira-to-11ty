---json
{
  "title": "FLUID-5401",
  "summary": "Text to speech audio starts another TTS audio track (Mouse and Keyboard)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "beth.mejsullivan",
  "date": "2014-06-03T18:33:36.311-0400",
  "updated": "2024-07-22T15:13:11.000-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework",
    "Text To Speech"
  ],
  "environment": "Safari, Chrome\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:10:23.521-0400",
      "body": "Now that we are using the Web Speech API the issue is slightly different. For one FF is not currently supported, but Chrome and Safari are. Secondly, on re-openning the panel, it seems something from the panel is read instead of the content on the page continuing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T15:13:11.000-0400",
      "body": "Could not reproduce with FF 128 and Safari 17.5 on macOS 14.5\n"
    }
  ]
}
---
<http://wiki.fluidproject.org/display/fluid/Preferences+Framework+QA+Test+Plan>

State Tests:\
Test 14: Mouse, Close and Re-open

Procedure\
Complete Test 13\
Using the mouse, click the "Hide" button\
Using the mouse, re-open Display Preferences\
Expected Results\
The selected options should still be set\
The main window should display the effects of the selected options\
Display Preferences should display the effects of the selected options\
Actual Results\
Expected Results happen... and...\
When the "text to speech" toggle is on before you click "hide", and then re-open display preferences - the "text to speech" starts all over and back on top of the "text to speech" that is already reading. This is very  overwhelming.

Test 15: Mouse, Reset

Procedure\
Complete Test 14\
Using the mouse, click the "Reset" button\
Expected Results\
The options should all be set to the initial default values\
The main window should be reset to the initial default styles\
Display Preferences should be reset to the initial default styles\
Actual Results\
Expected results occur except only one of the text to speech tracks stop automatically. Then the other one finishes reading the Overview Panel and then stops.

***

Same issues with Keyboard interaction

Test 29: Keyboard, Close and Re-open

Procedure\
Complete Test 28\
Using the keyboard, tap the 'tab' key until the "Hide" button has focus\
Using the keyboard, tap the 'enter' key to close Display Preferences\
Using the keyboard, tap the 'tab' key until the element to open the Display Preferences button has focus\
Using the keyboard, tap the 'enter' key to open Display Preferences\
Expected Results\
The selected options should still be set\
The main window should display the effects of the selected options\
Display Preferences should display the effects of the selected options\
Actual Results\
Expected Results happen... and...\
When the "text to speech" toggle is on before you tab to "hide" and hit enter, and then tab to "display preferences" and hit enter to re-open display preferences - the "text to speech" starts all over and back on top of the "text to speech" that is already reading. This is very overwhelming.

Test 30: Keyboard, Reset

Procedure\
Complete Test 29\
Using the keyboard, tap the 'tab' key until the "Reset All" button has focus\
Using the keyboard, tap the 'enter' key to reset the options\
Expected Results\
The options should all be set to the initial default values\
The main window should be reset to the initial default styles\
Display Preferences should be reset to the initial default styles\
Actual Results\
Expected results occur except only one of the text to speech tracks stop automatically. Then the other one finishes reading the Overview Panel and then stops.

        