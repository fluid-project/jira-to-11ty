---json
{
  "title": "FLUID-6057",
  "summary": "No cue for using \"Delete\" key to remove items from file queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2016-11-10T16:42:23.327-0500",
  "updated": "2016-11-10T16:42:43.988-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6057/Screen Shot 2016-11-10 at 4.13.57 PM.png",
      "filename": "Screen Shot 2016-11-10 at 4.13.57 PM.png"
    }
  ],
  "comments": []
}
---
Currently in the Uploader, there is no cue for a keyboard-only user that the "Delete" key will remove an item from the list.&#x20;

Putting keyboard focus on an item in the queue shows styling that implies the delete button has focus. Pressing "Enter" or "Space" (which is the expected interaction to activate a button) does nothing.

Combine the lack of instruction with the ambiguous styling, a keyboard only user may conclude that they can not delete items.

        