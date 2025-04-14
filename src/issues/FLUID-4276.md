---json
{
  "title": "FLUID-4276",
  "summary": "Template strings do not render properly being used a second time",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2011-06-01T15:43:34.139-0400",
  "updated": "2015-06-17T10:24:51.936-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-09T19:57:51.093-0400",
      "body": "This was fixed in revision 45a809365269fcafe30434edc2f300820a2bd44 committed to trunk on July 27 27th, 2011\n"
    }
  ]
}
---
Attempting to use an argument in a template string a second time results in it not being rendered properly.

Example:&#x20;

Event has the following argument \
args: \[\
{\
fileName: "{arguments}.0.name",\
srcURL: "{arguments}.1"\
}\
]

The template: "\<img src='%srcURL' alt='%fileName' class='igStyle-imageFrame' /> %fileName"

When the template gets rendered you will get literally %fileName printed instead of the value of the actual filename.

        