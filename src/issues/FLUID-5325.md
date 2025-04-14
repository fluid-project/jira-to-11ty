---json
{
  "title": "FLUID-5325",
  "summary": "Review \"How Infusion Works\" and identify which pages are truthful",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2014-04-25T13:43:01.945-0400",
  "updated": "2014-05-06T09:45:58.453-0400",
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
      "author": "Antranig Basman",
      "date": "2014-05-06T01:34:57.891-0400",
      "body": "<http://wiki.fluidproject.org/display/docs/Framework+Concepts> - good\\\n<http://wiki.fluidproject.org/display/docs/Understanding+Infusion+Components> - ok\\\n<http://wiki.fluidproject.org/display/docs/Component+Configuration+Options> - ok but a mess as a result of fragment inclusion - will be hard to convert and should probably be rethought\\\n<http://wiki.fluidproject.org/display/docs/Understanding+Component+Options+And+Their+Defaults> - ok\\\n<http://wiki.fluidproject.org/display/docs/Component+Grades> - good\\\n<http://wiki.fluidproject.org/display/docs/Options+Merging> - needs to be inverted as with other pages, put declarative use first and deprecate procedural use\\\n<http://wiki.fluidproject.org/display/docs/Component+Lifecycle> - good\\\n<http://wiki.fluidproject.org/display/docs/IoC+-+Inversion+of+Control> - ok but needs more modern treatment and motivation\\\n<http://wiki.fluidproject.org/display/docs/Why+Inversion+of+Control> - not inaccurate but bland and unhelpful\\\n<http://wiki.fluidproject.org/display/docs/How+to+Use+Infusion+IoC> - ok\\\n<http://wiki.fluidproject.org/display/docs/Subcomponent+Declaration> - good\\\n<http://wiki.fluidproject.org/display/docs/Contexts> - good\\\n<http://wiki.fluidproject.org/display/docs/Invokers> - good\\\n<http://wiki.fluidproject.org/display/docs/Expansion+of+Component+Options> - ok\\\n<http://wiki.fluidproject.org/display/docs/Event+injection+and+boiling> - ok - should be moved with \"Events\"\\\n<http://wiki.fluidproject.org/display/docs/Controlling+The+Timing+of+Subcomponent+Creation> - ok but duplicates info in \"Subcomponent Declaration\", should be rationalised\\\n<http://wiki.fluidproject.org/display/docs/IoCSS> - good\\\n<http://wiki.fluidproject.org/display/docs/Declarative+this-ism+in+IoC> - ok\\\n<http://wiki.fluidproject.org/display/docs/IoC+References> - ok\\\n<http://wiki.fluidproject.org/display/docs/Members> - ok but seems rather brief. Should be rationalised wrt. \"Component Configuration Options\" etc.\\\n<http://wiki.fluidproject.org/display/docs/Infusion+Event+System> - good\\\n<http://wiki.fluidproject.org/display/docs/DOM+Binder> - ok but I think reads confusingly\\\n<http://wiki.fluidproject.org/display/docs/ChangeApplier> ok \\\n<http://wiki.fluidproject.org/display/docs/ChangeApplier+API> - good - misplaced in our current page hierarchy\\\n<http://wiki.fluidproject.org/display/docs/Model+Relay> - good\\\n<http://wiki.fluidproject.org/display/docs/Model+Transformation> - ok but incredibly incomplete - we need to bring in info from <http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions>\\\n<http://wiki.fluidproject.org/display/docs/Transforms> - a good start and a nice style of presentation where there is info but needs to be completed\\\n<http://wiki.fluidproject.org/display/docs/Transformation+Rules> - hopeless - see above\\\n<http://wiki.fluidproject.org/display/docs/Progressive+Enhancement> - mostly useless and obsolete. This functionality will be a bit of a mess in the delivered 1.5\\\n<http://wiki.fluidproject.org/display/docs/Renderer> and all pages under it - this stuff is up to date since the Renderer has not evolved for a while but needs to be treated specially since we are planning to abolish the Renderer\n"
    }
  ]
}
---
Review each of the pages under "How Infusion Works" and identify those which are truthful and up to date.

<http://wiki.fluidproject.org/display/docs/How+Infusion+Works>

Once the pages are identified, they can be converted to Markdown and added to infusion-docs.

        