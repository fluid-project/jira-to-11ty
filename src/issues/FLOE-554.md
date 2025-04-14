---json
{
  "title": "FLOE-554",
  "summary": "Add a way to easily change the front page graphic in wp-a11y theme",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-06-22T10:26:27.045-0400",
  "updated": "2018-06-22T10:36:07.478-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2018-06-22T10:36:07.478-0400",
      "body": "Currently there are two ways to do this:\n\n1. Upload the graphic using the built-in media uploader, find its path, then use the theme editor to change the path in front-page.php.\n2. Upload the image into the theme's image directory and replace the existing image. Or rename it and adjust the front-page.php file.\n"
    }
  ]
}
---
Right now the front page graphic path is hard-coded into the front-page.php code and the image included with the theme.

The wp-a11y theme should instead be configurable so user can easily upload their own graphic and change the front image.

        