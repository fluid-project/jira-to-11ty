---json
{
  "title": "FLOE-555",
  "summary": "Sidebar post query only returns 9 posts",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2018-07-05T12:32:34.922-0400",
  "updated": "2018-07-05T12:33:49.775-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Accessible Wordpress Theme"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The sidebar navigation only lists 9 posts for a category, even though there may be more.

A posts per page argument should be added to the query to return all items in sidebar.php:

 

```java
if ( ! empty( $category_current ) ) {
 $args = array(
 // get posts belonging to the current category.
 'post_type' => 'post',
 'posts_per_page'=>-1,
 'category_name' => $category_current[0]->slug,
 );
 $sidebar_query = new WP_Query($args);
```

 

        