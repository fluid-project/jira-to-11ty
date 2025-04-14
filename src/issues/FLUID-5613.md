---json
{
  "title": "FLUID-5613",
  "summary": "transformOptions system for options transformation is inconsistent with respect to the expansion process",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-04-05T15:41:50.882-0400",
  "updated": "2015-04-05T15:42:34.291-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4187/",
      "key": "FLUID-4187",
      "summary": "Provide support for IoC-driven \"options chewing\", allowing options structures to be supplied to a component in a format matching an outdated API"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The "transformOptions" system delivered for FLUID-4187 has been little-used and harbours several inconsistencies. The logic as encountered during the FLUID-5249 rewrite used to read:

block\[block.simple? "target": "source"] = fluid.transformOptions(block.source, transformOptions);

which already reflects some ambiguity about whether this process is intended to occur post- or pre-expansion. Rewriting the paradigm test cases that we have for this feature, the "uploader compatibility tests", from their peculiar "all-but-one" options distribution to a more straightforward variant involving an IoC reference caused the implementation to fail.

The "IoC-driven" variant of these now reads:

fluid.defaults("fluid.tests.uploader.parentWrapper", {\
gradeNames: \["fluid.littleComponent", "autoInit"],\
components: {\
uploader: {\
type: "fluid.uploader",\
container: ".flc-uploader",\
options: "{parentWrapper}.options.uploaderOptions"\
}\
}\
});

The switch to an "all-options reference" seemed to kick the natural location of the options from "source" to "target" in the merge blocks, causing a failure. We made an ad-hoc adjustment in the framework implementation to&#x20;

var source = block.source ? "source" : "target";\
block[block.simple ]() = fluid.transformOptions(block\[source], transformOptions);

in order to make this feature work again, but this just reveals that we don't really understand quite what this semantic is meant to be - and/or else that the appearance of expanded and non-expanded material in mergeBlocks isn't sufficiently regular to allow us a clear implementation.

        