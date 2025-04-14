---json
{
  "title": "FLUID-2059",
  "summary": "Reverse merge algorithm does not correctly preserve container objects",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Antranig Basman",
  "date": "2009-01-06T14:06:53.000-0500",
  "updated": "2009-01-12T10:58:21.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2071/",
      "key": "FLUID-2071",
      "summary": "Tech review of Subcomponents documentation"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T14:21:35.000-0500",
      "body": "Bug Parade 0.7 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-07T16:13:38.000-0500",
      "body": "It looks to me like this isn't really a bug. See the initSubcomponents unit test in FluidJSTests. Can someone review this for me?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-12T10:58:21.000-0500",
      "body": "This is not a bug, but rather an input error that had not yet been documented. It has now been added to the documentation: <http://wiki.fluidproject.org/display/fluid/Subcomponents>.\n"
    }
  ]
}
---
The "reverse" option to the fluid options merging algorithm does not correctly preserve the structure in the target of the merge. This merging policy is used when options supplied by subcomponents are submitted for merging against the top-level options structure. This leads to inconvenience, as well as some fragility, when these subcomponent options need to be customised by users. For example, in the uploader, in file&#x20;

<https://source.fluidproject.org/svn/fluid/image-gallery/trunk/web/src/main/webapp/AddImages.html>

the following section appears:

decorators: {\
type: "fluid.swfUploadSetupDecorator",\
options: {\
flash9URL: "../../fluid-components/flash/swfupload\_f9.swf",\
flash10URL: "../../fluid-components/flash/swfupload\_f10.swf",\
flashButtonImageURL: "../../fluid-components/images/uploader/browse.png"\
}\
}

the specification of "type" should be inherited from the default options and not require respecification unless it requires to be modified.

        