---json
{
  "title": "FLUID-5838",
  "summary": "Some notes in docs need 'notes' styling",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2016-01-08T16:44:36.745-0500",
  "updated": "2021-06-22T13:33:37.981-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2016-01-28T16:19:31.122-0500",
      "body": "Lots of these un-styled notes were fixed as part of <https://fluidproject.atlassian.net/browse/FLUID-5804#icft=FLUID-5804>, including the Enactors and Panels ones mentioned above.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-24T14:38:12.437-0500",
      "body": "It should also be discussed if the notes should be marked up as&#x20;\n\n```java\n<aside>\n```\n\n&#x20;or other semantic tag instead of as a&#x20;\n\n```java\n<div>\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:33:37.978-0400",
      "body": "The note styling appears to have been addressed.\n"
    }
  ]
}
---
There are a few occurrences in the documentation of a note that is not styled using the 'note' styling (which adds a vertical bar to the left of the text).

I've found:

* Enactors page: "important note" under Preference Map
* Panels page: "important note" under Preference Map
* Builder page: Note under Options isn't formatting well; only first line is

        