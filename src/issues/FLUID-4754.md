---json
{
  "title": "FLUID-4754",
  "summary": "\"Enhance links\" doesn't properly enhance links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-08-13T10:13:41.870-0400",
  "updated": "2013-08-16T10:55:02.651-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-08-13T16:08:43.636-0400",
      "body": "Merged into project repo at 2ff60076bd54c50e149da6e8155dbbeb2479a072\n"
    }
  ]
}
---
UI Enhancer's enhancement of links is not being applied very consistently. The enhancement is supposed to make links larger, bold and underlined. The styles that are used for this do not use the !important flag, so in many cases, the default styling of a site overrides the UIO enhancement and the links are not fully enhanced.

The proposed fix:

* UIEnhancer will add a single UIO-specific class to links (e.g. fl-uio-enhance-link) instead of the current three basic FSS classes (fl-text-underline, fl-text-bold and fl-text-larger). The definition of this single class will use !important on each of the three styles:

.fl-uio-enhance-link {

font-size: 125% !important;\
text-decoration: underline !important;\
font-weight: bold !important;\
}

* If a site **really** wants some links to not be underlined (or bolded, or enlarged) for some reason, even via UIO (for example, if a link is being used more like a tab), then it's up to the site implementor to add !important in their own styles to prevent UIO from acting. We will document this in the guidelines for how to make your site more amenable to UIO.

        