---json
{
  "title": "FLUID-6257",
  "summary": "Reset values not properly being saved to store",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-03-07T10:42:30.748-0500",
  "updated": "2024-07-22T10:35:04.585-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-03-09T08:41:37.372-0500",
      "body": "It seems that after a reset, when the code filters down to the write method from the remoteModelComponent, the diff between the local and remote models ( <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/RemoteModel.js#L232> ) returns a falsey value. The result of this is to not send anything to the actual store because the component believes that it is already in sync. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T08:50:33.655-0500",
      "body": "Further investigation yields that when the preference is set in the separated panel it is automatically stored. However, the remote model isn't updated. This is why when a reset occurs the local and remote model both appear to be in the reset state and the reset values are not sent to the store.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T09:33:07.663-0500",
      "body": "It seems that the prefs framework configuration is missing an \"afterWrite\" listener to do a fetch. Fetches are what update the \"remote\" model. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T09:33:59.765-0500",
      "body": "being worked on with changes for <https://fluidproject.atlassian.net/browse/FLUID-6204#icft=FLUID-6204>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T11:22:27.805-0500",
      "body": "I spoke with @@Antranig Basman in the fluid-work IRC channel today regarding this.\n\n<https://botbot.me/freenode/fluid-work/2018-03-09/?msg=97684144&page=1>\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-12T11:10:01.832-0400",
      "body": "From a discussion in the fluid-work IRC channel today, @@Antranig Basman said:\n\n> I suggested updating the remote model after a write, but only after updating the IPC backing to actually give a reliable receipt for the handling of the remote write message\\\n> And to update the docs to clarify that this is what the resolution of the write promise is actually meant to mean 🙂\\\n> That is, it means a successful write, not just a successful writing of a message to write 🙂\n"
    }
  ]
}
---
Resetting changed preferences does not save the new reset state to the store.

 

Steps to reproduce:

1. Open the UIO Demo
   1. <https://build.fluidproject.org/infusion/demos/uiOptions/>
2. Open the prefs editor
3. Change a preference, e.g contrast
4. Click reset
5. Reload the page
6. Notice that the setting is still applied.

You can get the reset to work if you reset before any preferences have been changed. For example after a page reload, resetting will actually store the reset values.

        