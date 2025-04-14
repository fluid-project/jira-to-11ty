---json
{
  "title": "ENGAGE-365",
  "summary": "Create stopgap technique for embedding one template-driven component within another",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Antranig Basman",
  "date": "2010-02-10T04:05:55.000-0500",
  "updated": "2014-03-03T14:11:27.034-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-12T13:31:26.000-0500",
      "body": "Stopgap technique is now available in trunk, making use of utility \"fluid.kettle.fetchTemplateSection\" in kettleCore.js - see guestbookSpouts.js and its clients ExhibitionView.js, ArtifactView.js for details of use. This required some changes to the core infusion framework and engageClientUtils.js to enable direct sourcing of templates.\n\nA \"de facto\" practice now consists of the following (unsatisfactory) workflow of i) invoking the renderer (generally through the utility createRendererFunction) to produce an initial pass at component markup, and then ii) after the fact, invoking initSubcomponents for the subcomponents which require further use of the renderer after the base markup is in place.\n\nThese subcomponents **could** be attached as decorators to the base subcomponent tree but would then not participate in any of the IoC or options merging infrastructure. This use case requires thorough-going reworking of all the framework infrastructure involved under the heading of RENDEROUR ANTIGENS , perhaps pushed out to the 0.5 release.\n"
    }
  ]
}
---
ENGAGE-309, <https://fluidproject.atlassian.net/browse/ENGAGE-310#icft=ENGAGE-310> requires us to embed the "guestbook" tool within the space two "top-level" Engage components. In order to provide some form of support for the 0.3b pilot release, we need a stopgap technique that will let us preview this both on the client and the server - a mid-scale solution requires the "head collection" path to be dusted off within the renderer (not used since Paris 2008) so that URLs are correctly rewritten and aggregated in the head. Continuing, the utilities within engageClientUtils need to be thoroughly sandblasted and turned into a draft "2-phase initialisation" API for components, allowing them to expose a "(re)bind to DOM" operation allowing them to be rehoused onto different (or freshly existing) markup. Finally, the full maturity of this pathway leads to "RENDEROUR ANTIGENS".\
For now we will operate a simple technique involving recognising a distinguished comment sequence within the markup template, malignly reconstructing subcomponent trees during a render operation, and insisting that users manually organise their include collection within head to take account of the requirements of any subcomponents that they will be initialising.

        