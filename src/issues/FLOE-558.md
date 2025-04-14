---json
{
  "title": "FLOE-558",
  "summary": "Change category landing pages to use a better method ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-07-10T08:56:48.657-0400",
  "updated": "2018-07-12T15:52:48.848-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SNOW-26/",
      "key": "SNOW-26"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently in the theme, in order to create a landing page for a category, the content author needs to add a custom field "is\_landing\_page" with the value "true" to a Post and assign it to the category in question.

The sidebar.php would generate the navigation by finding the landing page for the category and then display all the other pages for the category.

 

This solution mostly works but has a number of issues:

1. It's not easy to find which Post is a landing page.
2. It's not easy to find a category's landing page.
3. It's possible to assign more than 1 landing page for a category - which is problematic.

There should be a better way to create landing pages for categories. Perhaps a custom post type of some sort?

        