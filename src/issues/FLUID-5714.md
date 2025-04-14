---json
{
  "title": "FLUID-5714",
  "summary": "The framework does not correctly merge invoker specifications when both \"func\" and \"funcName\" are used",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2015-07-21T15:45:26.415-0400",
  "updated": "2017-02-27T15:49:11.797-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5184/",
      "key": "FLUID-5184"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5714/infusion-invoker-merging-bug.zip",
      "filename": "infusion-invoker-merging-bug.zip"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2015-07-21T15:46:09.564-0400",
      "body": "Attached is a QUnit test that illustrates the issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-22T08:37:38.983-0400",
      "body": "The same thing happens when you have a \"this-ist\" invoker (i.e. {this: \"thisObject\", method: \"someMethod\", args: \\[]} ). Currently we have to null out the original properties when trying to override, but that requires the integrator to know what the underlying structure was.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T15:49:40.717-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The framework incorrectly merges invoker records (and possibly listener records as well?) when a user attempts to override an invoker bound to a "funcName" with a "func", or vice versa. Instead, it naively merges them, producing an invoker specification that looks like this:

{\
funcName: "foo.bar",\
func: "{thing}.baz"\
}

It seems like we should either elide the distinction between "func" and "funcName" in the framework, or introduce some special logic that will ensure they are correctly merged.

        