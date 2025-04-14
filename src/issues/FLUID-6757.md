---json
{
  "title": "FLUID-6757",
  "summary": "Rendering and other methods for the selection reader are not invokers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2022-12-01T16:25:55.077-0500",
  "updated": "2024-07-22T10:35:01.904-0400",
  "versions": [
    "4.5"
  ],
  "fixVersions": [
    "4.6"
  ],
  "components": [
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Many of the methods used by the selection reader, in particular those for rendering and queueing speech, are not exposed as invokers. This makes it difficult to override. For example, in work on The Accessibility Exchange, we needed to override the \
fluid.orator.selectionReader.renderControlState method because it will set the text as an aria-label on the button instead of the text node of an element. However, this function is both used directly as a model listener and inside of the fluid.orator.selectionReader.renderControl. As a work around, I just overrode the global instance of fluid.orator.selectionReader.renderControlState because I couldn't change an invoker to use a different method.\
 \
The functions used by the selection reader and other orator related components should be exposed as invokers as needed. 

        