---json
{
  "title": "SNOW-15",
  "summary": "WP spitting out an error; expecting a function, getting an array",
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
  "date": "2018-02-06T16:18:39.679-0500",
  "updated": "2018-02-09T11:37:22.783-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-07T08:26:17.357-0500",
      "body": "This is line 282-289 in class-wp-hook.php\n\n```java\n// Avoid the array_slice if possible.\r\nif ( $the_['accepted_args'] == 0 ) {\r\n$value = call_user_func_array( $the_['function'], array() );\r\n} elseif ( $the_['accepted_args'] >= $num_args ) {\r\n$value = call_user_func_array( $the_['function'], $args );\r\n} else {\r\n$value = call_user_func_array( $the_['function'], array_slice( $args, 0, (int)$the_['accepted_args'] ) );\r\n}\n```\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-07T08:27:21.411-0500",
      "body": "Reverting to using functions worked:\n\n```java\nfunction snow_upcoming_workshops() { \r\nregister_widget( new snow_panel_widget('snow_upcoming_workshops','Upcoming Workshops','8'));\r\n}\r\nadd_action('widgets_init', 'snow_upcoming_workshops');\r\nfunction snow_feature_article() { \r\nregister_widget( new snow_panel_widget('snow_feature_article','Feature Article','22'));\r\n}\r\nadd_action('widgets_init', 'snow_feature_article');\r\nfunction snow_featured_content() { \r\nregister_widget( new snow_panel_widget('snow_featured_content','Featured Content','23'));\r\n}\r\nadd_action('widgets_init', 'snow_featured_content');\n```\n"
    },
    {
      "author": "Eloisa Guerrero",
      "date": "2018-02-09T08:51:53.388-0500",
      "body": "Paired with @@Michelle D'Souza yesterday and to solve the problem instead of rolling back, in the foreach loop we used an anonymous function and assigned it to variable $register\\_panel and put that in add\\_action so that it would satisfy the condition of using a function. Important to note that in PHP, functions have a new scope so \"use\" is required to pass in values from outside of the function. In this case we passed in $new\\_widget to get its information.\n\n```java\nforeach ($snow_panels as $panel) {\r\n    $new_widget = new snow_panel_widget($panel['id'], $panel['title'],   $panel['category']);\r\n    $register_panel = function() use ($new_widget) {\r\n        register_widget( $new_widget );\r\n    };\r\n    add_action('widgets_init', $register_panel);\r\n}\n```\n"
    }
  ]
}
---
 

Getting this error (not visible) all over the site

```java
PHP message: PHP Warning:  call_user_func_array() expects parameter 1 to be a valid callback, function 'snow_featured_content' not found or invalid function name in /home/vagrant/sync/wordpress/wp-includes/class-wp-hook.php on line 286" while reading response header from upstream, client: 10.0.2.2, server: _, request: "GET / HTTP/1.1", upstream: "fastcgi://unix:/var/run/php-fpm/php-fpm-wordpress.sock:", host: "localhost:10080", referrer: "http://localhost:10080/alternative-mouse-systems/"
```

This is coming from functions.php – I believe it is this line that's spitting out the error:

```java
add_action('widgets_init', $panel['id']);
```

Instead of functions I've put in the snow panels in an array like so:

```java
/* Centralised array for the SNOW panel information */
$snow_panels = array(
'snow_upcoming_workshops' => array(
'id' => 'snow_upcoming_workshops',
'title' => 'Upcoming Workshops',
'category' => '8'
),
'snow_feature_article' => array(
'id' => 'snow_feature_article',
'title' => 'Feature Article',
'category' => '22'
),
'snow_featured_content' => array(
'id' => 'snow_featured_content',
'title' => 'Featured Content',
'category' => '23'
)
);
```

when it is expecting a function, i.e. snow\_upcoming\_workshops(), but getting an array instead.

Might have to revert to putting them back into functions so that this error doesn't show up anymore. 

        