---json
{
  "title": "FLUID-4296",
  "summary": "UI Options: Settings \"emphasize links\" and \"make input larger\" don't apply to UI Options interface itself",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2011-06-20T11:20:42.528-0400",
  "updated": "2013-09-06T12:55:02.419-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-06-20T11:23:12.314-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-24T13:10:00.073-0400",
      "body": "This issue goes away with Justin and Mike's iframe version of fat panel UI Options @ <https://fluidproject.atlassian.net/browse/FLUID-3761#icft=FLUID-3761>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-30T16:12:31.435-0400",
      "body": "The issue still persists in other 2 versions of ui options: full page with preview & full page w/o preview.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-06T15:03:27.569-0400",
      "body": "In Fat Panel the 'make inputs larger' does not seem to work but the 'emphasize links' does.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:55:02.396-0400",
      "body": "The preferences for UIO have changed, but the one for enlarging inputs seems to take effect in the UIO Panel.\n"
    }
  ]
}
---
How to re-produce:

1\. Go to UI Options manual test (src/webapp/tests/manual-tests/html/SomeKindOfNews.html)\
2\. Turn on "Make Inputs Larger" setting, all the input boxes on the page content and UI Options UI (the checkboxes besides the textfield sliders) are set larger\
3\. Refresh the page, the enlarged input boxes on the page content stay same but those on the UI Options UI go back to the normal size.

The same issue on the other setting "Emphasize Links".

After some investigation, this is because fluid.uiOptions is instantiated and renders its interface after the instantiation of fluid.uiEnhancer where the saved settings are applied. These two settings look for \<a> or \<input> tags inside \<body>, which is unsuccessful since the ones inside UI Options itself are not rendered by fluid.uiOptions yet. Other settings are applied onto UI options UI successfully because those css classes are applied to uiEnhancer container, which is \<body>.&#x20;

        