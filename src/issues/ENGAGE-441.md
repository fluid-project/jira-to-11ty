---json
{
  "title": "ENGAGE-441",
  "summary": "VoiceOver reads the guestbook template text on the \"exhibition home\" page",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-02-23T14:07:50.000-0500",
  "updated": "2014-03-03T13:46:33.231-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-441/ENGAGE-441.patch",
      "filename": "ENGAGE-441.patch"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-12T11:08:50.000-0500",
      "body": "There's a bug in fss where fl-offScreen-hidden is documented as the class that will make content invisible to screen reader. This class will actually be accessible to screen reader since putting content of screen is still readable. Reported in FLUID-3525\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-12T13:59:16.000-0500",
      "body": "Yura and I looked at this more closely and determined that the div with id=guestbook-template which is using fl-offScreen-hidden is actually not used anywhere so we will remove it.&#x20;\n"
    }
  ]
}
---
VoiceOver reads the guestbook template text on the "exhibition home" page

Steps to reproduce:

1\) Turn on VoiceOver and navigate to the exhibition home page.

2\) Swipe through all of the elements on the page.

Notice that the last element on the page reads "The markup for the guestbook template is inserted here when run from the server."

This seems to be because of this markup.

\<div id="guestbook-template" class="fl-offScreen-hidden">\
The markup for the guestbook template is inserted here when run from the server.\
\</div>

The offscreen class will just move the node offscreen but it is still accessible by AT's. To make this text not visible to AT's we should make the div display: none or just mark the text as an html comment.&#x20;

        