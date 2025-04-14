---json
{
  "title": "FLUID-5362",
  "summary": "Convert the \"How Infusion Works\" wiki pages to Markdown and add to infusion-docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Simon Bates",
  "date": "2014-05-06T10:00:25.587-0400",
  "updated": "2014-07-04T12:05:10.681-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-13T09:50:09.298-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion-docs/pull/5>\n\nIncludes the conversions for the following pages:\\\n<http://wiki.fluidproject.org/display/docs/Component+Grades>\\\n<http://wiki.fluidproject.org/display/docs/Component+Lifecycle>\\\n<http://wiki.fluidproject.org/display/docs/How+to+Use+Infusion+IoC>\\\n<http://wiki.fluidproject.org/display/docs/Expansion+of+Component+Options>\\\n<http://wiki.fluidproject.org/display/docs/Declarative+this-ism+in+IoC>\\\n<http://wiki.fluidproject.org/display/docs/Progressive+Enhancement>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-23T11:51:47.000-0400",
      "body": "Submitted another pull request\\\n<https://github.com/fluid-project/infusion-docs/pull/8>\n\nIncludes conversions for the following pages:\\\n<http://wiki.fluidproject.org/display/docs/Renderer>\\\n<http://wiki.fluidproject.org/display/docs/How+To+Use+The+Renderer>\\\n<http://wiki.fluidproject.org/display/docs/Renderer+Component+Trees>\\\n<http://wiki.fluidproject.org/display/docs/ProtoComponent+Types>\\\n<http://wiki.fluidproject.org/display/docs/Renderer+Component+Tree+Expanders>\\\n<http://wiki.fluidproject.org/display/docs/Cutpoints>\\\n<http://wiki.fluidproject.org/display/docs/Renderer+Components>\\\n<http://wiki.fluidproject.org/display/docs/Renderer+Decorators>\\\n<http://wiki.fluidproject.org/display/docs/IoC+References>\\\n<http://wiki.fluidproject.org/display/docs/Event+injection+and+boiling>\\\n<http://wiki.fluidproject.org/display/docs/Options+Merging>\\\n<http://wiki.fluidproject.org/display/docs/Events>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2014-07-04T12:04:43.443-0400",
      "body": "I'm going to mark this task as done. We haven't converted all the pages but we have converted all the pages that have been assessed as up to date and helpful.\n\nBelow is a list of the unconverted pages together with Anatrag's assessment of the pages:\n\n<http://wiki.fluidproject.org/display/docs/Component+Configuration+Options>\\\n\"should probably be rethought\"\n\n<http://wiki.fluidproject.org/display/docs/IoC+-+Inversion+of+Control>\\\n\"needs more modern treatment and motivation\"\n\n<http://wiki.fluidproject.org/display/docs/Why+Inversion+of+Control>\\\n\"not inaccurate but bland and unhelpful\"\n\n<http://wiki.fluidproject.org/display/docs/Controlling+The+Timing+of+Subcomponent+Creation>\\\n\"ok but duplicates info in 'Subcomponent Declaration', should be rationalised\"\n\n<http://wiki.fluidproject.org/display/docs/Members>\\\n\"ok but seems rather brief; should be rationalised wrt. 'Component Configuration Options' etc.\"\"\n\n<http://wiki.fluidproject.org/display/docs/DOM+Binder>\\\n\"ok but I think reads confusingly\"\n\n<http://wiki.fluidproject.org/display/docs/Model+Transformation>\\\n\"ok but incredibly incomplete - we need to bring in info from <http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions>\"\n\n<http://wiki.fluidproject.org/display/docs/Transforms>\\\n\"good start but incomplete\"\n\n<http://wiki.fluidproject.org/display/docs/Transformation+Rules>\\\n\"hopeless\"\n"
    }
  ]
}
---
This is an umbrella task for the conversion of the "How Infusion Works" wiki pages to Markdown for infusion-docs. Please use this JIRA issue number when making commits for any of the "How Infusion Works" pages. We will track the status of each individual page on the Fluid wiki at:

<http://wiki.fluidproject.org/display/fluid/Infusion+Documentation+Plan>

        