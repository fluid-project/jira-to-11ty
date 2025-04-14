---json
{
  "title": "SJRK-311",
  "summary": "Add embedding of YouTube videos",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-21T18:13:09.402-0400",
  "updated": "2020-07-29T21:16:30.728-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-381/",
      "key": "SJRK-381"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Add the ability to embed YouTube videos into a story, and potentially other video services like Vimeo.

This should be made possible via the Video block, perhaps using a text box to take a YouTube video link and using this **instead** of an uploaded video.

Thought should be given to:

* how filling in this field will affect a potentially already-chosen video from the upload button
* allow the use of
  * youtube.com links (e.g. <https://www.youtube.com/watch?v=ESyrapafICE>)
  * youtu.be links (e.g. <https://youtu.be/ESyrapafICE>)
  * embed codes (e.g. \<iframe width="560" height="315" src="<https://www.youtube.com/embed/ESyrapafICE>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\</iframe>)

Adding previews of an embedded video within the Edit page will be tackled in <https://fluidproject.atlassian.net/browse/SJRK-353#icft=SJRK-353>, so defer this work unless both of these can be accomplished simultaneously.

Once this functionality is added, consider reviewing the stories that are already published and update them to use embedded videos instead of static links.

        