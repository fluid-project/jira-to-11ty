---json
{
  "title": "FLUID-4935",
  "summary": "resolverSetConfig option is not propagated from the renderer component grade to its applier.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2013-03-15T00:23:30.434-0400",
  "updated": "2014-03-03T12:25:33.942-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4933/",
      "key": "FLUID-4933",
      "summary": "Create configs for renderer components that will handle keys containing dots. "
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2013-03-15T00:27:54.698-0400",
      "body": "A fix strategy involves the following:\\\nUpdate renderer component grade's default mergePolicy and add a reference from changeApplierOptions.resolverSetConfig option to the top level resolverSetConfig option.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-15T00:59:26.256-0400",
      "body": "Note that this test case itself has now created a THIRD place where this configuration is copied in the framework. When <https://fluidproject.atlassian.net/browse/FLUID-4933#icft=FLUID-4933> is resolved, we must remember to catch this location too\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-03-15T01:01:15.186-0400",
      "body": "Thanks for the report, test case and fix, Yura - pushed to master at 46eff4c\n"
    }
  ]
}
---
The renderer component grade currently supports resolverGetConfig and resolverSetConfig options that would allow its user to customize parsing, accessing and setting strategies for it's data model.

However in case a user wants to customize a settings strategy, the actual set configuration is not propagated from the renderer component to its applier that handles the actual change requests.

The particular use case arose when we attempted to customize such configs for a model that contains escaped "." characters. Instead of the default parser attempting to parse the escaped "."'s as segments in the elPath, we wanted (to no success) to ignore them and use the whole key as a whole.

Example of the model:\
{\
"<http://registry.gpii.org/applications/org.gnome.orca>": \[{\
value: {\
rate: null\
}\
}]\
}

Example of the valuebinding:\
"${[http://registry\\\\.gpii\\\\.org/applications/org\\\\.gnome\\\\.orca.0.value.rate](http://registry/.gpii/.org/applications/org/.gnome/.orca.0.value.rate)}"

Custom config would need to look like this:\
{\
parser: {\
parse: fluid.pathUtil.parseEL,\
compose: fluid.pathUtil.composePath\
},\
strategies: \[fluid.model.defaultFetchStrategy, fluid.model.defaultCreatorStrategy]\
}

        