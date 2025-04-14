---json
{
  "title": "FLUID-5510",
  "summary": "Use of wildcard expanders in the transformation framework is broke if outputpath is specified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2014-09-15T11:09:10.091-0400",
  "updated": "2020-02-27T14:01:08.145-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-12-03T14:36:01.844-0500",
      "body": "This looks like a helpful patch, but I think we should mothball this area of functionality for a while. It has never been terribly well implemented and not very powerful - and all the known uses of it (particularly in the GPII universal) have disappeared. We will keep tracking these use cases and see if we can evaluate what kinds of features we might need to cover them - in particular we need to implement a more regexp-like model including numbered backreferences so that the various segments matched by \"\\*\" can be distinguished in the output paths.\n"
    }
  ]
}
---
When using a wildcard expander in one of the rules, and have an output path in a nested rule functionality breaks. Instead of outputting to the relative outputPath, it attemps to match it as an input path (I think).

So for example, given the rules:\
{ \
"\*.a": {\
transform: {\
type: "value",\
inputPath: "",\
outputPath: "val"\
}\
}\
}

and the input model:\
{\
cat: {\
a: "meow"\
},\
dog: {\
a: "wrouf"\
}\
}

would be expected to result in:

{\
cat: {\
a: {\
val: "meow"\
}\
},\
dog: {\
a: {\
val: "wrouf"\
}\
}\
}

but this is not currently the case. Instead the transformation framework tries to match the current inputPath (eg. cat.a) plus the outputPath (val) in the inputModel (ie. cat.a.val), which obviously isn't present in the inputModel as this is what we're attempting to create with the output model.

        