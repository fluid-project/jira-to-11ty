---json
{
  "title": "SNOW-16",
  "summary": "Front panel showing more than 1 post at a time",
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
  "date": "2018-02-09T09:26:07.072-0500",
  "updated": "2018-07-12T15:40:13.892-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-09T11:46:48.840-0500",
      "body": "Simplified the block of code in snow\\_front\\_panel\\_sticky() instead of removing while loop:\n\n```java\nfunction snow_front_panel_sticky( $atts = array() ) {\r\n    /* Default Parameters */\r\n    $myatts = array(\r\n        'post__in'  => get_option( 'sticky_posts' ),\r\n        'posts_per_page' => 1\r\n    );\r\n    /* Merge category__and with the above parameters */\r\n    $allatts = array_merge($atts, $myatts);\n```\n"
    }
  ]
}
---
Front panels in the theme are showing more than 1 post at a time, e.g. in the Upcoming Workshops panel it shows both the landing page and an example post.

```java
/* Begin extending widget for Upcoming Workshops front panel */
function snow_front_panel_sticky( $atts = array() ) {
    /* Default Parameters */
    extract(shortcode_atts(array(
        'category__and' => 7,
        'posts_per_page' => 1,
        'post__in' => get_option( 'sticky_posts' ),
        'ignore_sticky_posts' => 1
    ), $atts));
    
    /* Query the posts */
    $the_query = new WP_Query($atts);
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();
            $return .= '<p><a href="' .get_permalink(). '" title="' . get_the_title() . '">' . get_the_title() . '</a></p>' . '<p>' . get_the_excerpt() . '</p>';
        }
    } else {
        // No posts found
    }    /* Restore original Post Data */
    wp_reset_postdata();
    
    return $return;
}
add_shortcode('snow_front_panel_sticky', 'snow_front_panel_sticky');
```

        