---json
{
  "title": "FLUID-5416",
  "summary": "No screen reader feedback for announcing autocorrected input values.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T12:21:49.956-0400",
  "updated": "2017-09-26T12:44:37.722-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Slider"
  ],
  "environment": "IE 8 (Win XP) (NVDA 2014.2)\\\nChrome 35, FF 29, IE 9, 10, 11 (Windows 7)(NVDA 2014.2)\\\nSafari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-16T11:32:21.001-0400",
      "body": "Talked to joseph (aka clown) in the channel about this today.\\\n<https://botbot.me/freenode/fluid-work/2014-06-16/?tz=America/Toronto>\n\nQuote from joseph: \"Justin\\_o:  regarding autocorrect:  there is nothing in the aria spec to handle that.  The only thing that comes close is aria-invalid (true/false).\"\n\n<http://www.w3.org/TR/wai-aria/states_and_properties#aria-invalid>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-26T12:44:37.722-0400",
      "body": "In Safari 11 on macOS 10.13 corrected value is read if you use the enter key to input the value. However, if you tab away, the value is autocorrected but the label from the element navigated to is read.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the prefs framework demo\
<http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\) Open "show display preferences"

3\) Enter an out of range value in the text size textfield\
Notice that the value is changed to one that is within the acceptable range, but no indication of this was given by the screen reader.&#x20;

        