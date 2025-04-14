---json
{
  "title": "FLUID-5102",
  "summary": "UIO Builder needs an easy way to specify the template that holds the panels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-07-26T11:14:21.404-0400",
  "updated": "2013-10-04T11:26:19.673-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-04T11:26:19.671-0400",
      "body": "This can be handled by supplying the correct configuration to the templateLoader\n"
    }
  ]
}
---
When someone is creating a prefs editor (such as the discovey tool, pcp, pmt) or even simply adding panels to UIO (e.g. video player), they need to override the HTML template that holds the panels (in UIO, this is the FatPanelUIOptions.html file, which contains list item elements, one for each panel).

Currently, the VideoPlayer overrides the file through a demands block for fluid.uiOptions.resourceLoader that specifies the path to its own custom file, like this:

fluid.demands("fluid.uiOptions.resourceLoader", \["fluid.videoPlayer.addMediaPanels"], {\
options: {\
templates: {\
uiOptions: "../html/VPUIOptions.html"\
}\
}\
});

Given that this is something that every prefs editor will need to do, it would be nice if there was an easier way to do it, perhaps as a top-level option to the builder-created uio, or even as a part of the auxiliary schema.

        