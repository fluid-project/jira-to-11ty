---json
{
  "title": "FLUID-6302",
  "summary": "Create a locale-aware component that makes it easier to for Infusion applications to respond to the browser-specified locale",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2018-07-17T16:48:10.976-0400",
  "updated": "2018-07-20T13:44:40.985-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6304/",
      "key": "FLUID-6304"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Capturing issues from some conversation about SJRK-113 and FLUID-6198...

1\) Locale-related code is concentrated in a few places in Infusion such as the resourceLoader and preferencesFramework grades. They aren't necessarily completely aligned in how they think about locale.

2\) Right now, locale is typically treated as a fixed member of the components - it's presumed to be set at component initialization and then not otherwise modified. As we've found as part of the SJRK work, this is not necessarily a valid way of thinking about locales.

3\) Locale-related code is a natural candidate for contextAwareness features such as:

* Tracking default browser preferred language (as related by <https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language)>
* Tracking user-initiated changes to language, such as through a UIO panel, or a language switcher on the page

Thus, proposed that we should eventually:

* create a locale-aware component using contextAwareness features that can be used by any other component wanting to implement locale-based features
* this component would act as a point of access to the following "information"
  1. the browser's preferred locale
  2. a user-initiated current locale that might be the same or different as #1
  3. an event containing information about changes to the state of #2

        