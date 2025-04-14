---json
{
  "title": "FLUID-6761",
  "summary": "The self voicing enactor throws error when using UIO+ with idrc site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2022-12-20T14:10:17.599-0500",
  "updated": "2022-12-20T14:53:21.826-0500",
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
3\. In Chrome, open <https://idrc.ocadu.ca/>, turn on text-to-speech, click "play" button;

In the browser console, this error is thrown:

```java
Uncaught DOMException: Failed to execute 'setStart' on 'Range': The offset 54 is larger than the node's length (0).
    at fluid.orator.domReader.highlight (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:379713)
    at invokeInvoker (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:97450)
    at fluid.event.invokeListener (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:152017)
    at togo (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:152433)
    at fluid.model.notifyExternal (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:145514)
    at fluid.concludeModelTransaction (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:146459)
    at fluid.event.firer.fire (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:128:25883)
    at Object.commit (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:165277)
    at that.fireChangeRequest (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:164353)
    at that.change (chrome-extension://ekjpcdffphimkhjlmloccennolakcomg/lib/infusion/dist/infusion-uio.js:137:161795)
```

This issue is also filed in UIO+ repository at <https://github.com/fluid-project/uio-plus/issues/42>.

        