---json
{
  "title": "SJRK-173",
  "summary": "Generalize media block view templates to inject special code",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-01-07T18:01:10.937-0500",
  "updated": "2019-01-08T15:41:12.804-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-175/",
      "key": "SJRK-175",
      "summary": "Review and combine Audio, Image and Video block code"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Review and combine the templates for media blocks (audio, image and video) such that the template itself does NOT know about the particulars of each type, rather the markup for each shall be injected by their respective components.

E.g. in the case of the video block, the particulars of the video element and the transcript will be injected into the template by the sjrk.storyTelling.blockUi.videoBlockViewer component.

Once complete, this can be applied to the media editor template as well.

        