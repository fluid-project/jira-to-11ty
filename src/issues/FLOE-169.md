---json
{
  "title": "FLOE-169",
  "summary": "The keyboard focus styling for editor bold, italic, underline buttons are too similar with the active state styling",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2014-01-21T14:22:44.050-0500",
  "updated": "2014-01-21T14:23:00.890-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": "Firefox\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-169/editor button styling.jpeg",
      "filename": "editor button styling.jpeg"
    }
  ],
  "comments": []
}
---
1\. Open in firefox: <http://metadata.floeproject.org/demos/html/metadata.html>\
2\. Input some text in the editor and select the text\
3\. Click on any of the three editor buttons to turn on bold, italic or underline. The grey style for the active state applied to the clicked buttons;\
4\. Click on a button that was clicked at step 3;\
5\. The style for the active state is removed but since the keyboard focus is still on that button, the other type of the grey style for the keyboard focus is still on and very similar to the active style.

In the attached screenshot, "B" and "I" buttons have button the active state style applied while "U" button has keyboard focus style applied.

        