---json
{
  "title": "SNOW-9",
  "summary": "Show the current menu indicator for posts that have subcategories",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eloisa Guerrero",
  "reporter": "Eloisa Guerrero",
  "date": "2018-02-02T13:40:17.738-0500",
  "updated": "2018-07-12T15:38:32.378-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-04T15:18:11.976-0500",
      "body": "To activate the breadcrumbs to the original/main category, we need to add 'current-menu-item' CSS class based on the 'current-post-ancestor' (or 'current-page-ancestor') class of the current page or post. Thus:\n\n```java\nfunction make_current_menu_item( $classes, $item ) {\r\nif (in_array('current-post-ancestor', $classes) || in_array('current-page-ancestor', $classes) || in_array('current-menu-item', $classes) ) {\r\n $classes[] = 'current-menu-item';\r\n }\r\n return $classes;\r\n}\r\nadd_filter( 'nav_menu_css_class', 'make_current_menu_item', 10, 2 );\n```\n\n \n"
    }
  ]
}
---
Right now the menu does not show the current indicator for posts with subcategories. Will need to programmatically get the current category of the post, and set its root category with the current-menu-item class so that the black line indicator for the correct category shows up on each of these posts.

 

See mockup (currently B\&W with white line indicator): <https://files.inclusivedesign.ca/f/33422>

        