---json
{
  "title": "FLUID-6760",
  "summary": "The self voicing enactor throws error when using UIO+ with wikipedia",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2022-12-20T14:08:35.310-0500",
  "updated": "2022-12-20T14:55:13.347-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To reproduce:

1\. In the UIO+ source code, modify "uioPlus.enactor.selfVoicing" in enactors.js to remove the \`distributeOptions\` block that disables the page level reading in the self voicing component;\
2\. In a terminal, run "npm run build". Install the built UIO+ in Chrome.\
3\. In Chrome, open <https://en.wikipedia.org/wiki/Main_Page>, turn on text-to-speech, click "play" button;

In the browser console, \`lang is undefined\` error is thrown.

After a debugging, this error is originated from [this line in Orator.js](https://github.com/fluid-project/infusion/blob/main/src/components/orator/js/Orator.js#L681) because \`parsedBlock\` is an empty array so \`parsedBlock\[0].lang\` is \`undefined\`. The reason that an empty array of \`parsedBlock\` is pushed into \`that.parseQueue\` is from [this block](https://github.com/fluid-project/infusion/blob/main/src/components/orator/js/Orator.js#L572-L574). On the wikipedia page, many text blocks fit into this condition \`(lastQueue.length && lastQueue\[0].lang !== lang)\`. Those blocks have text but in a different language from what's defined at the page level.

This issue is also filed in the UIO+ repository at <https://github.com/fluid-project/uio-plus/issues/43>

        