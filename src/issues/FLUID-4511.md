---json
{
  "title": "FLUID-4511",
  "summary": "Textfield-slider doesn't clear invalid text entry if it starts with digits",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-06T15:55:52.150-0400",
  "updated": "2015-06-26T10:12:06.109-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider",
    "UI Options"
  ],
  "environment": "Chrome 35, FF 29, Safari 7\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:20.525-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
If an invalid string starting with a digit is typed into the text portion of a textfield-slider, the value is correctly ignored at the time of entry, but the string is not cleared and replaced with the actual current value, as it would be if it started with a character. The invalid string is actually saved as the setting, and interpreted as the default of "1" when the page is reloaded.

To reproduce:

1\) Open a UI Options demo and enter 1.5 into one of the text fields, to set it up\
2\) To observe the **correct** behaviour, enter a string that starts with a letter into the field (e.g. "foo")\
Note that the string is cleared and the value of the text field is restored to 1.5\
3\) Enter a string that starts with a digit, e.g. "7foo"\
Note that "7foo" remains in the textfield (while the slider retains whatever the correct value was).\
4\) Reload the page\
Note that the text size has been reset to 1 (not the original 1.5), and the string "7foo" is still displayed in the text field.

        