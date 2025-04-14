---json
{
  "title": "FLUID-4187",
  "summary": "Provide support for IoC-driven \"options chewing\", allowing options structures to be supplied to a component in a format matching an outdated API",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2011-04-18T18:45:01.193-0400",
  "updated": "2015-04-05T15:42:34.331-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4917/",
      "key": "FLUID-4917",
      "summary": "Implement \"demands block horizon\" system enabling demands block resolution to be cut off when meeting first instance of a context name"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5613/",
      "key": "FLUID-5613"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-30T15:54:28.754-0400",
      "body": "Related to json2 removal. <https://github.com/fluid-project/infusion/commit/3e45b80f11b88b3b42982c50f23c7eafa3d1244a>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-25T04:54:32.296-0400",
      "body": "Some basic support was delivered for this in the 1.4 release, with successive improvements continuing to the point of <https://fluidproject.atlassian.net/browse/FLUID-4330#icft=FLUID-4330> where we now have a system where the \"transformOptions\" block can be both IoC and options-delivered - current showcase implementation is in UploaderCompatibilityTests.js . The system referred to as \"tag groups\" was implemented as <https://fluidproject.atlassian.net/browse/FLUID-4917#icft=FLUID-4917> under the name of \"demands block horizons\"\n"
    }
  ]
}
---
This was supplied in an ad hoc "monkey patching" form for the 1.3.1 release. For 1.4 we require to be able to do this in an IoC-driven way, allowing the reimplemented version of the Uploader component to accept options which are in the format used for previous releases. This feature implementation needs to interact in a detailed way with both the IoC and options merging systems. In particular, the options to be transformed in the merge chain are all of those EXCEPT for the component's own defaults, which are presumably supplied by the same implementor as the implementation. Options supplied directly by the user and contributed via demands blocks potentially need to be transformed. Also, the resolution of the required version number needs to be IoC driven - it should be possible to achieve the effect of "scoping" the directive for options transformation using the possibilities available for IoC scopes. This requires an improvement to the IoC system itself in the form of "tag groups" - it should be possible to direct that a group of tag names (type names) form part of a mutually exclusive group for resolution purposes, with the first one seen able to pre-empt resolution of the others - this will prevent indeterminism in the case that multiple version directives are seen in the same scope.&#x20;

        