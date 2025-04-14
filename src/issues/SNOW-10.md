---json
{
  "title": "SNOW-10",
  "summary": "Enable categories on pages and show the navigational sidebar on the About Us page",
  "tags": "SNOW",
  "project": {
    "key": "SNOW",
    "title": "Snow"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Eloisa Guerrero",
  "date": "2018-02-02T13:46:58.218-0500",
  "updated": "2018-07-12T15:38:45.232-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-04T15:20:20.203-0500",
      "body": "From <https://stackoverflow.com/a/35087335>\n\nIn order for Wordpress to enable categories (and tags) support for pages, we need to register the taxonomy for those objects. Taxonomies refer to a way of grouping objects, and in our case, we want to group the object type of pages.\n\nAfter that they need to be included in the queries (access $query object) so that Wordpress knows to interact with this new addition to its taxonomy.\n\nLastly, add\\_action is the hook that will launch the functions. The add\\_action hook with tag 'init' initialises the function 'tags\\_categories\\_support\\_all' at the time that Wordpress loads. 'pre\\_get\\_posts' gives the function access to the $query object (which is passed by reference, meaning they don't have to be declared or returned).\n\n```java\n// add tag and category support to pages\r\nfunction tags_categories_support_all() {\r\n  register_taxonomy_for_object_type('post_tag', 'page');\r\n  register_taxonomy_for_object_type('category', 'page');  \r\n}\r\n\r\n// ensure all tags and categories are included in queries\r\nfunction tags_categories_support_query($wp_query) {\r\n  if ($wp_query->get('tag')) $wp_query->set('post_type', 'any');\r\n  if ($wp_query->get('category_name')) $wp_query->set('post_type', 'any');\r\n}\r\n\r\n// tag and category hooks\r\nadd_action('init', 'tags_categories_support_all');\r\nadd_action('pre_get_posts', 'tags_categories_support_query');\n```\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-04T15:35:37.673-0500",
      "body": "I have since recycled the above code, just renaming the functions and putting the add\\_action hooks after their corresponding functions for easier reading. \n\n```java\n// Add tag and category support to pages\r\nfunction allow_pages_tags_categories() {\r\n register_taxonomy_for_object_type('post_tag', 'page');\r\n register_taxonomy_for_object_type('category', 'page'); \r\n}\r\nadd_action('init', 'allow_pages_tags_categories');\r\n// Ensure all tags and categories are included in queries\r\nfunction add_queries_tags_categories($wp_query) {\r\n if ($wp_query->get('tag')) $wp_query->set('post_type', 'any');\r\n if ($wp_query->get('category_name')) $wp_query->set('post_type', 'any');\r\n}\r\nadd_action('pre_get_posts', 'add_queries_tags_categories');\n```\n\n \n"
    }
  ]
}
---
By default pages do not have categories, so we have to programmatically enable them via the functions.php file. Once we've enabled the categories, we have to split sidebar.php into sidebar-post.php and sidebar-page.php to use the create\_sidebar() function and show corresponding sidebars, specifically to enable this for the About Us page.

        