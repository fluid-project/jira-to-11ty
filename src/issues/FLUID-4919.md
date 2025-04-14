---json
{
  "title": "FLUID-4919",
  "summary": "Rewrite Uploader to modern framework standards",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-02-19T05:47:13.557-0500",
  "updated": "2014-03-03T12:26:21.788-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4930/",
      "key": "FLUID-4930"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-03-08T03:35:09.236-0500",
      "body": "Notes on legacyBrowserFileLimit following discussion at San Diego: We agreed to eliminated the support for the peculiar method of XHR file upload required in Firefox 3.6 since this browser is very well outside the range of anything in our modern supported list. However, it was necessary to demonstrate that the new framework could support this requirement gracefully if it had been required. The issue was the highly non-standard signature to \\\nfluid.uploader.html5Strategy.local = function (queue, legacyBrowserFileLimit, options) {\n\nas well as pollution into its implementation. We decided that the new framework could have handled this without code pollution by a combination of the following techniques:\n\ni) A positive tag \"NoFormDataSupport\" to allow us to write a demands block targetting the existing fileSizeLimitSetting in the Firefox 3.6 case\\\nii) A custom mergePolicy for this setting which accumulated by computing the minimum value of all settings issued.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-05-02T17:28:50.601-0400",
      "body": "Merged in to trunk at revision d0f009b\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-08-01T09:53:38.773-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/378> ) into the project repo at af3bc113cb3f66ae2a6ab4d7f1ee1a1958453e4d\n"
    }
  ]
}
---
With the new framework implementation following FLUID-4330, FLUID-4873, FLUID-4914 and others, it should now be possible to rewrite the Uploader to remove the use of ad hoc framework features such as "fluid.alias" as well as making use of the new FLUID-4916/FLUID-4917 ProgressiveEnhancement implementation. At the same time, the Uploader and every subcomponent should be given a standard framework component lifecycle, using the "autoInit" grade (soon to become the default) and removing all calls to manual component initialisation functions. New power in the IoC framework should also be able to help with resolving non-standard signatures in many components and slimming down any initFunctions to the bare minimum. FLUID-4918-style "members" definitions will help here, with most of the remaining material being distributed onto new-style invokers, which gain considerable extra currency through the fix to FLUID-4709. Some code will remain, mostly through deficiencies remaining in our model cooperation system (FLUID-4258) and some remaining causes by which the action of components is unexplained, as well as lack of time for dealing with too many details on this release cycle. Work should proceed at least to the extent of pushing every subcomponent to participate in "autoInit".

        