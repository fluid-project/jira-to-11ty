---json
{
  "title": "FLUID-4208",
  "summary": "Re-factor the tests for UIOptions, UIEnhancer and Textfield Slider",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2011-05-06T14:06:13.169-0400",
  "updated": "2011-06-21T10:40:05.061-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:08:15.853-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-09T11:56:19.869-0400",
      "body": "Merged <https://github.com/fluid-project/infusion/pull/69> into project repo at b7bc4b134393ba0630976087d6ac506cf17fcb36\n"
    }
  ]
}
---
The tests for UIOptions, UIEnhancer and Textfield Slider need to be re-factored in the ways:

1\. Modify the existing tests since the parent, sub components have been re-constructed\
2\. New tests for the new sub-components\
3\. integration tests

        