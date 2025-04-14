---json
{
  "title": "FLUID-4933",
  "summary": "Create configs for renderer components that will handle keys containing dots. ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2013-03-14T17:19:04.833-0400",
  "updated": "2015-06-15T09:51:18.113-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4935/",
      "key": "FLUID-4935"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-14T17:34:18.465-0400",
      "body": "Two places where you can see this type of configuration are:&#x20;\n\n1\\) In the ModelTransformation code:\\\n<https://github.com/fluid-project/infusion/blob/08f3b382d9d556c5c8d21b2f16e65851ed8a1c62/src/webapp/framework/core/js/ModelTransformations.js#L644-L653>\n\n2\\) In the GPII Lifecycle Manager:\\\n<https://github.com/GPII/universal/blob/164e165a1f74b5436e158825f7dda88c1487f2d7/gpii/node_modules/lifecycleManager/src/LifecycleManager.js#L138-L144>\n"
    }
  ]
}
---
We have come across several cases where we have a key in the model of a renderer component that contains dots. In order to handle this case, the renderer component requires custom getConfigs and setConfigs. We have begun to see this code cropping up in several places where it should really become part of the framework.

This is an example of a model with dots in it:&#x20;

model: {\
"<http://registry.gpii.org/applications/org.gnome.orca>": \[{\
value: {\
rate: null\
}\
}]\
}

This issue was discussed in the IRC channel starting at 15:39:01:

<http://wiki.fluidproject.org/display/fluid/fluid-tech+IRC+Logs-2013-03-14>

        