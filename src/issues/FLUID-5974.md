---json
{
  "title": "FLUID-5974",
  "summary": "Dropdown inline edit throws an error when changing selection with the keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-09-29T12:43:36.139-0400",
  "updated": "2016-10-03T16:23:04.472-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-29T12:44:57.850-0400",
      "body": "@@Antranig Basman do you have a thought on how we should proceed with this. The dropdown inline edit is still not a fully supported component/feature in infusion.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-03T15:27:55.596-0400",
      "body": "The pull request <https://github.com/fluid-project/jquery.selectbox/pull/1> has been merged into the master branch at cb5b2f36a23304260286236414124e80006e27a0\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-10-03T16:22:57.646-0400",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/759> has been merged into the master at a1199e7ff7d856b30d63fd55412534069b3d63d8\n"
    }
  ]
}
---
After upgrading jQuery to v3.1 Dropdown Inline Edit throws an error ( lis.size is not a function ) from jquery.selectbox-0.5.js (line 149). This stems from the fact that the size function was removed from jQuery v3.0 ( <https://api.jquery.com/size/> ).

Steps to reproduce:&#x20;

1. Open the Dropdown InlineEdit manual test ( <http://build.fluidproject.org/infusion/tests/manual-tests/components/inlineEdit/dropdown/> )
2. Tab to the dropdown inline edit element
3. Press the Enter key to activate it
4. Use the arrow keys to move around
5. Notice that it doesn't change selection and that an error was thrown in the console.

Unfortunately it doesn't seem that the select box plugin is being maintained anymore. I've found a version up to 1.2, but it also makes use of the size function.

<http://stackoverflow.com/questions/1072239/is-it-possible-to-style-a-select-box/1072266#1072266>

We could do one of the following:

* patch the select box plugin&#x20;
* find a new plugin&#x20;
* create our own support for the select box&#x20;
* stop supporting a dropdown inline edit.

        