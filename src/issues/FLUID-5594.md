---json
{
  "title": "FLUID-5594",
  "summary": "Improve \"distributeOptions\" system so that different sources of options can be independently routed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-02-07T13:47:21.351-0500",
  "updated": "2021-07-29T01:33:19.910-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5258/",
      "key": "FLUID-5258",
      "summary": "distributeOptions behaviour is inconsistent with respect to expansion context"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5614/",
      "key": "FLUID-5614",
      "summary": "Options merging process is faulty in the case of \"double deep trees\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:34:11.343-0400",
      "body": "Note: this behaviour will probably be implemented together with the INTENTIONAL SHADOW required by the Nexus work and <https://fluidproject.atlassian.net/browse/FLUID-5614#icft=FLUID-5614>\n"
    }
  ]
}
---
A long-standing eyesore has been the UIEnhancer's custom component, "fluid.originalEnhancerOptions" . This has been used to capture any options received from the user, in order to redistribute them to other enhancers (e.g. ones in an iframe, etc.). This behaviour is described by <https://fluidproject.atlassian.net/browse/FLUID-4409#icft=FLUID-4409>. Our "distributeOptions" system is now nearly powerful enough to express this clearly. Currently, "distributeOptions" will distribute the entirety of the options received at a site, including defaults. If, as it seems from discussion surrounding this implementation in the UIEnhancer, we want to only distribute changed options, we should augment the distributeOptions syntax so that it can exclude some sources of options - for example

optionType: "user"

could signal that defaults would be ignored. There's no need to go into the full detail of all the mergeBlocks supported by the interior machinery - "user" would include distributions and demand (before they are abolished) as well as direct user options and subcomponent options. This syntax would run alongside that implemented by our other distributeOptions enhancement, "expandAtTarget", implemented for <https://fluidproject.atlassian.net/browse/FLUID-5258#icft=FLUID-5258>.

        