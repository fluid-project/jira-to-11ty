---json
{
  "title": "FLUID-3647",
  "summary": "The keyboard a11y plugin will throw an exception if selectNext is called when there is NO_SELECTION",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-04-13T17:17:53.000-0400",
  "updated": "2014-03-03T13:43:14.060-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3647/FLUID-3647.patch.txt",
      "filename": "FLUID-3647.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-13T17:28:28.000-0400",
      "body": "patch <https://fluidproject.atlassian.net/browse/FLUID-3647#icft=FLUID-3647>.patch.txt will only call blur() if the return of selectionContext.selectedElement() is truethy.\n"
    }
  ]
}
---
If you run the keyboard-a11y tests you will notice that test 5.7 is failing due to an exception.

On line 372 of jquery.keyboard-a11y.js

selectionContext.selectedElement().blur();

When NO\_SELECTION is specified selectionContext.selectedElement() returns null.&#x20;

Calling blur() on null throws the exception

        