---json
{
  "title": "FLUID-4351",
  "summary": "The Full page UIO demos need to be rooted to an actual content page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-07-25T12:07:22.196-0400",
  "updated": "2011-08-17T17:25:05.925-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/arrow_left.png",
      "filename": "arrow_left.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/arrow_right.png",
      "filename": "arrow_right.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/background_texture.png",
      "filename": "background_texture.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/Lato.zip",
      "filename": "Lato.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/Love_Ya_Like_A_Sister.zip",
      "filename": "Love_Ya_Like_A_Sister.zip"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/photo_apple.png",
      "filename": "photo_apple.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/photo_orange.png",
      "filename": "photo_orange.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/UI Options context demo.ai",
      "filename": "UI Options context demo.ai"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4351/UI Options context demo-01.png",
      "filename": "UI Options context demo-01.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-25T16:38:46.127-0400",
      "body": "After some discussion, it was decided that a whole new, slick demo page will be designed for the context (instead of using the SomeKindOfNews test page).\n\nI've implemented the SomeKindOfNews version for now: The mechanics will be the same regardless of the content of the page. The branch is:\\\n<https://github.com/acheetham/infusion/tree/FLUID-4351-newUIOContextDemo>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-25T16:39:30.501-0400",
      "body": "James, I'm passing this one over to your plate for the design portion.\n"
    },
    {
      "author": "James Yoon",
      "date": "2011-07-27T11:04:05.879-0400",
      "body": "Attached files for the UIO context demo\n"
    },
    {
      "author": "James Yoon",
      "date": "2011-07-28T10:36:42.742-0400",
      "body": "Typography + fonts:\n\nH1 text in: LoveYaLikeASister\\\n\"DISPLAY PREFERENCES\" text in: Myriad Pro Bold + Regular\\\nAll other text in: Lato\n\nH1 sub-header: 21pt, Light Italic\n\n\"Some helpful tips\": 21pt, Black\\\n\"1. User interface...\": 21pt, Light\\\n\"All three configurations provide...\": 16pt, Light\n\n\"Introduction\": 21pt, Light\\\n\"Lorem ipsum...\": 12pt, Light\n\n\"Email address\", \"Your comments\": 12pt, Regular\n\nColour:\n\nAll text in: #3E606F\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-07-28T14:45:57.392-0400",
      "body": "I've pushed an implementation of James' design to my github repo\\\n<https://github.com/acheetham/infusion/tree/FLUID-4351-newUIOContextDemo>\\\nand issued a pull request\\\n<https://github.com/fluid-project/infusion/pull/121>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-03T11:04:51.536-0400",
      "body": "James, could you have a look at the pull request?\n\n<https://github.com/fluid-project/infusion/pull/121>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-08T11:14:09.929-0400",
      "body": "I've updated the code to reflect the changes in the API from the recent merge of <https://fluidproject.atlassian.net/browse/FLUID-4353#icft=FLUID-4353> and comment to that effect on the pull request.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-11T09:35:43.338-0400",
      "body": "James has given me some verbal feedback on requested improvements to the demo. I'll work on those and ask for another review.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-11T16:16:54.379-0400",
      "body": "I've pushed updates to my github repo and commented on the pull request:\\\n<https://github.com/fluid-project/infusion/pull/121>\n\nHeidi, if you have a chance to check the CSS for me, that would be great. Either assign back to me for fixes or pass on to James for final approval.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-12T13:23:16.812-0400",
      "body": "James, I've made some final changes based on Heidi's feedback. When you have a minute, maybe you could look over my shoulder for a final sign-off?\n"
    },
    {
      "author": "James Yoon",
      "date": "2011-08-12T13:52:02.353-0400",
      "body": "Looks good. Closing this off.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-15T12:24:41.479-0400",
      "body": "Some temporary files were committed and the JS was not adequately reviewed.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-08-15T12:28:19.711-0400",
      "body": "Justin, I've issued a new pull request for this:\\\n<https://github.com/fluid-project/infusion/pull/138>\\\nCould you review?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-17T17:25:01.203-0400",
      "body": "Merged into project repo at 82298c8650e3b3ecb0fdb8e4ee666fdadad96096\n"
    }
  ]
}
---
Without being attached to a content page, the demos for the Full page versions of UIO don't make complete sense. (e.g. what does "cancel" do).

The plan will be:\
1\) Modify the current manual-tests UIO fat-panel test page (SomeKindOfNews.html) so that it has buttons taking the user to the two full-page versions of UIO, in addition to the fat-panel.\
2\) Modify the two full-page versions to\
a) add a "back to the website" link that will go back to the SomeKindOfNews.html page, and\
b) return that page on Cancel\
3\) Move the SomeKindOfNew page out of the manual tests folder and into the main demo folder.

This new one-page demo will effectively replace all three current separate demos, since it it will show off all three versions.

        