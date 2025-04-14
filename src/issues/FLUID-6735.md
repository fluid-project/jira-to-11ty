---json
{
  "title": "FLUID-6735",
  "summary": "Distributing an implicit nested model relay cause a circular reference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2022-05-12T14:16:17.004-0400",
  "updated": "2024-07-22T10:35:21.082-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-05-12T14:22:54.977-0400",
      "body": "Added a test case <https://github.com/fluid-project/infusion/pull/1080>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-07-05T09:00:36.726-0400",
      "body": "From comment thread on pull #1080:\n\nFrom amb26:\n\nCheers [@jobara](https://github.com/jobara) - I reworked this test case in [#1081](https://github.com/fluid-project/infusion/pull/1081) which resolves the circular reference problem. As I remarked in the channel, the problem is caused by the \"misaligned\" material in the parent grade which can't avoid trying to resolve a reference into its model from its options as it constructs, which is not permitted in Infusion. If/when Infusion 6 is written, this class of problem will be removed by removing the distinction between \"models\" and \"general options\" but until then I'm not sure we can do much better about issuing a helpful diagnostic although I can try. Hopefully this reworking is good enough to let you make progress on your panelIndex issue\n\nFrom jobara:\n\n[@amb26](https://github.com/amb26) I was able to get past this issue in UIO+ by passing in a grade that contained the model configuration. Similar to what you described except I used the gradeNames directly.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2022-07-05T09:01:28.511-0400",
      "body": "Closed since we found an effective workaround and big improvements in this experience will need to wait for a framework rewrite\n"
    }
  ]
}
---
This was first discovered while trying to distribute the panelIndex to the local model path in UIO+ which uses a fullNOPreview prefs editor loader but displayed similar to the separated panel prefs editor. This occurred as the UIO was configured with a call to fluid.uiOptions and the options set on the prefsEditor option which is distributed down to the prefsEditor component.

The result is a circular reference error like: "Error in component configuration - a circular reference was found during evaluation of path segment "model of path ,model,panelIndex".

Some work arounds include supplying this configuration as part of a gradeName that is merged on top. Or distributing a record containing the specific configuration to the component's model.

        