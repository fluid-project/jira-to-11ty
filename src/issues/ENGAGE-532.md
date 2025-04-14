---json
{
  "title": "ENGAGE-532",
  "summary": "Change the navlist to not be dependent on the engageRenderUtils.js file",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-03-22T17:17:26.000-0400",
  "updated": "2014-03-03T13:44:20.244-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "NavigationList"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-22T17:17:40.000-0400",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-23T09:52:33.000-0400",
      "body": "Removed the dependence on engageRenderUtils.js. The tests are all still passing.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:11:47.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T09:25:30.000-0400",
      "body": "Rather than revert this useful condensation of logic, I suggest we simply review \"createRendererFunction\" and elevate to Infusion - as well as applying it to any other suitable components there (e.g. UIOptions). As far as I can see, the implementation in engageRenderUtils.js is pretty appropriate - I remember we have discussed the way that \"rendererOptions\" is nested within the overall options structure - do we still think this is appropriate?\\\nEventually we will construct a concept of \"renderer components\" ultimately culminating in RENDEROUR ANTIGENS but I think that the standardisation of workflow from createRendererFunction is helpful. I'm not terribly happy about the name - I guess we have multiple conventions for functions which \"unexpectedly\" act as \"creator functions\" - cf. \"makeChangeApplier\", \"createDomBinder\", etc. \\\nThis utility could probably be improved by making explicit its connection to the PARTICULAR model attached to the component. It is clear that the purpose of this utility is to create and attach a function centred on a particular \"view-bearing\" component and its tree/model. It might be better if, like \"createDomBinder\", it also binds it with a particular name e.g. \"render\" and also naturally takes in the inputs of that.options.selectors as well as that.model. Currently this implies accepting the \"overall that\" as the argument, although the upcoming IoC system will improve this. \\\nThe ideal way to bring this into the framework would be to attach it to the standard \"initView\" workflow. The simplest way for now might be simply to declare the item at the end of \"that.render\" as a standard subcomponent, and so this resolves the \"create\" naming ambiguity - we can simply declare&#x20;\n\nfluid.default(\"fluid.navigationList\", \\\n....\\\nrender: {\\\ntype: \"fluid.renderer.renderMethod\",\\\noptions: {\\\nrepeatingSelectors: \\[\"listItems\"],\\\nselectorsToIgnore: \\[\"listGroup\", \"linkContainer\", \"gridToggle\"]\\\n}\\\n}\\\nIn the absence of IoC, we declare that \"render\", like \"events\", is a \"standard options block\" which codes for a function with the signature (COMPONENT\\_OPTIONS, selectors, model)\n"
    }
  ]
}
---

        