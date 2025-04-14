---json
{
  "title": "FLOE-165",
  "summary": "Update icon font implementation",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-01-20T15:03:37.471-0500",
  "updated": "2014-03-04T12:49:44.931-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-126/",
      "key": "FLOE-126",
      "summary": "Create Icon Font set for FLOE Metadata editor demo"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-04T12:49:44.931-0500",
      "body": "The recommended method for hiding presentational font icons, as stated in <http://filamentgroup.com/lab/bulletproof_icon_fonts/>, is currently incorrect according to the ARIA spec.\\\n<http://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden>\n\nHowever, in talking to @@Joseph Scheuhammer it seems that this is the way that future versions of ARIA will go. However, Firefox still implements the spec'd behaviour, so we should wait till after they have modified their implementation to follow these guidelines.\n\n<https://bugzilla.mozilla.org/show_bug.cgi?id=945194>\\\n<https://bugzilla.mozilla.org/show_bug.cgi?id=974351>\n"
    }
  ]
}
---
We should update the icon font implementation based on the suggestions from <http://filamentgroup.com/lab/bulletproof_icon_fonts/>

        