---json
{
  "title": "SJRK-271",
  "summary": "Eliminate conflicting punctuation from arrayToString transform output",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-03T14:25:49.071-0400",
  "updated": "2019-09-03T14:25:49.071-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Consider handling grammatically conflicting punctuation in the arrayToString transform function, or extending the transform with another that would detect such cases.

From the [discussion for the SJRK-263 pull request](https://github.com/fluid-project/sjrk-story-telling/pull/37#pullrequestreview-282012328):

> Example:

1. Add a text block with text like "Some Text!"
2. Add another text block with text like "more text"
3. The output is "Some Text!. more text"; Notice the double punctuation "!.".

> I imagine that what happens with that will depend on the synthesizer used. Some might ignore it, others might read it as "dot". If you end up using the contentString for output the text visually, it will look strange and be incorrect. Also what about other languages that have different punctuation? It may be better not to try to add punctuation and just separate based on " "

> If we set the delimiter to " " then we won't get the pause between blocks, and the synthesizer may continue reading the next one as if it's all one sentence

1. Add a text block with text like "Some text"
2. Add another text block with text like "more text"
3. the output is "Some text more text", which will be read without pauses and could cause confusion

Also explore the possibility of not storing the contentString in the model at all. Perhaps even just using the Orator component to read through the content in the story instead.

        