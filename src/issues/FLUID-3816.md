---json
{
  "title": "FLUID-3816",
  "summary": "Simple Inline Edit demo - JAWS not reading keyboard focus message properly in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-10-19T15:20:26.182-0400",
  "updated": "2010-10-20T10:53:05.238-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows XP, IE7, JAWS 11.0.1471\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-20T10:53:05.237-0400",
      "body": "IE 7 Does not have aria support\n"
    }
  ]
}
---
When placing focus on an inline editable text, JAWS reads "Link http\://\<Reads off URL> number underline." instead of the instructions to edit the text.

        