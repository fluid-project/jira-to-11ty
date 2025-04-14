---json
{
  "title": "FLUID-2254",
  "summary": "Inline Edit Rich Text - can't tab into/ out of rich text editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Alison Benjamin",
  "date": "2009-02-17T15:40:11.000-0500",
  "updated": "2014-03-03T14:44:34.385-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "OS X 10.5, FF2\\\nFF2 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-03-12T18:46:06.000-0400",
      "body": "Unfortunately, this issue cannot be resolved. I've spent a long while struggling with FCK focus issues under FF2 and have concluded that it is not possible to influence it... it is also veyr unlikely the FCK team will devote any resources to it since FF2 is not a current browser.\n"
    }
  ]
}
---
two issues here when testing inline editor (rich text)&#x20;

Navigate to URL: \
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

@ "Lorum ipsum..." and "Lorem ipsum 2..."\
After you keyboard focus on one of these lines and press enter, you enter into the rich text editor. However, there is no blinking cursor. You cannot enter input into the text editor area.&#x20;

@  " Lorem FCK... "    "Lorem FCK 2..."  "Lorum ipsum..." and "Lorem ipsum 2..."\
If you have entered tab in the editor area (either by tabbing into the editor area or by mouse)  you can't tab out of the editor area to select "Save" or "Cancel".

        