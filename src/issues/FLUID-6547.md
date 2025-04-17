---json
{
  "title": "FLUID-6547",
  "summary": "Improve/repackage preferences framework \"enactors\" so that they can consume solutions registry configuration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-09-01T13:58:58.853-0400",
  "updated": "2020-09-01T13:59:23.577-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-09-01T13:59:14.213-0400",
      "body": "Original filled as <https://issues.gpii.net/browse/GPII-4276>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-01T13:59:23.577-0400",
      "body": "example solutions registry entry. <https://github.com/GPII/universal/blob/master/testData/solutions/win32.json5#L7285>\n\n* Would have one settings handler for every enactor.\n* Will include the configuration (e.g. there's a base grade for the class swapper type enactors, this would be configurations each to the particular preference enactor it works for)\n* Supported settings block will need to reference the related primary schema\n* Investigate use of preference maps, but in general should not have to modify the enactors themselves much\n* capabilities transformations handles the model mapping\n"
    }
  ]
}
---
This may not necessarily require rewriting of the existing enactors, but may possibly be implementable by providing some extra machinery surrounding them, together with possibly some extra metadata within their grades.

Right now it is difficult for users of the preferences framework to configure enactors since there is a documentation and comprehension burden in order to figure out which grade is responsible for some behaviour, override its options, and then arrange for that substitute enactor grade to be configured into the system. Instead, we should rely on the more mature ecosystem surrounding GPII solutions registry entries and settings handlers, and package each enactor that we currently have as a settings handler, with schemas supplied for its modifiable elements, etc.

This kind of requirement emerged from Alan Harnum's experiences when trying to add an extra CSS class name into the fluid.uiEnhancer.cssClassEnhancerBase. This is explained in \
<https://pad.gpii.net/p/uio-and-prefs-framework-requirements-2u194n92> starting at line 80 - the suggestion leading to this JIRA appears at line 102 under "radical suggestion".

Once we have split off responsibility for configuring enactors from the existing "auxSchema" it can instead be consumed in a third form of schema grade that holds material structured per solutions registry entries (more directly, in the form of the new "schema grades" that Tony Atkins \[RtF] will be implementing for the upcoming "live solutions registry). We can then take the opportunity to rename the existing "auxiliary schema" as something intelligible such as "presentation schema".

        