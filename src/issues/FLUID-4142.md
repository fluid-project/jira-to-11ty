---json
{
  "title": "FLUID-4142",
  "summary": "Expansion preservation is not honoured when full argument list appears in demands block",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-03-14T04:13:31.320-0400",
  "updated": "2014-03-03T13:14:03.112-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-14T04:38:06.996-0400",
      "body": "A test case was constructed to test what it seemed like this bug was - but in fact there is not such a bug. The error is in the specification of the demands block supplied above, since the component options specified in the arguments to the demands block are corrupted by the extra key \"options\". When using the \"full arguments form\" of a demands block, the component's options are simply presented literally (in this case, as the 2nd argument). The \"options\" key is only used when breaking down the arguments list into the \"pseudo-argument\" form where keys are added directly to the demands block or subcomponent specification.\n"
    }
  ]
}
---
Options, which, for example are marked as "noexpand" do not have this policy honoured if a full argument list is supplied in a demands block - for example:

Hi Antranig so these are the details:

my demands block:

fluid.demands("uploader", "cspace.recordEditor", \["{recordEditor}.dom.uploader", {\
options: {\
mergePaths: \["{options}", {\
model: "{recordEditor}.model",\
applier: "{recordEditor}.options.applier"\
}]\
}\
}]);

In this case, the material mentioned in "mergePaths" undergoes expansion, even though it is listed as one of the "core inviolable" nonexpanded paths in fluid.preserveFromExpansion

        