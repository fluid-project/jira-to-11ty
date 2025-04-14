---json
{
  "title": "STUDIO-25",
  "summary": "Improve focus styling in Wordpress' admin interface",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-12-09T16:11:19.924-0500",
  "updated": "2014-03-03T11:58:45.378-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-09T16:51:48.384-0500",
      "body": "I've pushed a first pass at this to my github, in the \tSTUDIO-25-wp-focus-styling branch. It might be a bit brute force and inelegant, but hopefully it's a start that can be refined.\n\nSome issues I've noticed so far:\n\n* when a menu is expanded, it is dark gray, so I've added a white border. The border only appears on the left and top.\n* the focus border is added around links that already have a colour change to indicate focus.\n* \\<input>s and \\<textarea>s don't get any border (though they do get the blinking cursor)\n* the two items in the \"Howdy...\" menu get keyboard focus, but the menu doesn't pull down, so there's nothing to see: confusing\n* tab order is not necessarily ideal\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-12-16T16:10:19.234-0500",
      "body": "I've pushed another branch into my github (<https://github.com/cindyli/studios.fluidproject.org/tree/STUDIO-25>) to\\\n1\\. Moved the fluid-studios-theme-specific css to customized the admin interface styles out of wordpress core css into the theme, which is named 'style-admin.css'.\\\n2\\. Enhance the focus styling of input fields and textareas. This enhancement doesn't work across all admin pages as some fields are styled by using their specific ids.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-19T12:16:51.565-0500",
      "body": "I spoke to Joanna and she prefers the highlight colour to be the same green from the view interface.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-19T13:35:03.878-0500",
      "body": "Merged into project repo at 895880b5ac83bea4defcb6055c91ebc133ab32c9\n\nThere are still some things in the admin interface that don't have focus highlighting. I'll open other issues for those.&#x20;\n"
    }
  ]
}
---
The Wordpress admin interface is keyboard accessible, but focus styling is poor, so as you tab around, it's hard to tell where focus is.

        