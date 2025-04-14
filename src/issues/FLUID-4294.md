---json
{
  "title": "FLUID-4294",
  "summary": "\"Make inputs larger\" should affect checkboxes and dropdowns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2011-06-17T13:29:55.653-0400",
  "updated": "2015-06-09T13:37:38.323-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
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
      "author": "heidi valles",
      "date": "2011-06-17T13:33:17.191-0400",
      "body": "for checkbox, setting height: 1.5em and width: 1.5em should be good\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-17T16:20:13.507-0400",
      "body": "At page refresh, the UI Options settings \"emphasize links\" and \"make input larger\" are applies to the whole page except UI Options interface itself. This is because fluid.uiOptions is instantiated and renders its interface after the instantiation of fluid.uiEnhancer. At the time that these 2 settings look for \\<a> or \\<input> tags inside \\<body>, the ones inside UI Options itself are not rendered yet. Other settings are applied successfully because those css classes are applied to uiEnhancer container, which is \\<body>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:51:51.967-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T09:52:34.547-0400",
      "body": "When talking to James the other day about UIO, he was suggesting the the checkboxes should be quadruple the original size.\n"
    }
  ]
}
---
The fl-text-larger should be added to \<select> dropdowns when "Make inputs larger" is checked.

Also, checkboxes should be made bigger - will need a different class name that sets the width/height.

        