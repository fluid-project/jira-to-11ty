---json
{
  "title": "FLUID-5282",
  "summary": "Protocomponent utilities in RendererUtilities fail to support new model for ChangeApplier",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Antranig Basman",
  "date": "2014-03-04T05:13:04.232-0500",
  "updated": "2014-03-25T10:11:07.811-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3674/",
      "key": "FLUID-3674",
      "summary": "Current idiom for applying changes to models with ChangeApplier is inadequate for large-scale cooperation on extended models"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2014-03-18T20:51:57.436-0400",
      "body": "I have reviewed, tested, and pushed this fix to the project repo's master branch at revision 527d757fe8a1020a9356416e49791c7c925b8b3d.\n\nCindy Li can you confirm that this fix resolves the issue and close it if so?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-25T10:11:07.786-0400",
      "body": "Confirmed the merged fix does resolve the issue.\n"
    }
  ]
}
---
<https://fluidproject.atlassian.net/browse/FLUID-3674#icft=FLUID-3674> introduced major changes to the model semantic for the ChangeApplier. The scope of these is described at <http://wiki.fluidproject.org/display/fluid/New+Notes+on+the+ChangeApplier> . Unfortunately, one of the clients of the old ChangeApplier that got caught out is our own RendererUtilities for working on the so-called "protoComponents". Although we plan to remove all of this renderer architecture wholesale, we need to keep it working in the meantime. cindyli ran into this bug whilst working on the metadata component, original test case supplied at <https://github.com/amb26/infusion/pull/3/files> . This issue can be demonstrated a good deal more simply than this, and is caused by the fact that the entire protocomponent expansion pathway closes over the reference to "model" at the outset and will therefore ignore all changes supplied via the new ChangeApplier which repeatedly rebind this reference at the end of each transaction.

From RendererUtilities.js line 535:

var expandConfig = {\
model: options.model,

This evil runs deep! Rather than pollute all of this code with references to "holder" etc. a quick enough hack should be to manually rebind to the model whenever we receive a "refreshView" since is the only lifecycle point at which protocomponent work should be occurring. This fix to this doomed architecture only needs to be "good enough" ...

Both "options" and "expandConfig" -> "config" are sources of this reference pollution

        