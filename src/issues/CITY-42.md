---json
{
  "title": "CITY-42",
  "summary": "Update Infusion for Inclusive Cities",
  "tags": "CITY",
  "project": {
    "key": "CITY",
    "title": "Inclusive Cities"
  },
  "type": "Task",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2018-12-07T09:15:51.498-0500",
  "updated": "2019-01-22T11:14:52.657-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2018-12-21T15:37:19.800-0500",
      "body": "At this point, I don't know what process was used to prepare the Infusion that is currently in website-cities.\n\nI have tried:\n\n```java\n> grunt custom --include=\"uiOptions\"\n```\n\nAnd that produces an 'infusion-custom.js' of approximately the same size as the one in the website-cities repo. However, the 'infusion-custom.js.map' is a different size and the 'src' directory contains much more stuff than the one in website-cities.\n\n```java\n> dir .\\build\\\r\n\r\nMode                LastWriteTime         Length Name\r\n----                -------------         ------ ----\r\nd-----       2018-12-21   3:29 PM                src\r\n-a----       2018-12-21   3:29 PM         674107 infusion-custom.js\r\n-a----       2018-12-21   3:29 PM         617112 infusion-custom.js.map\r\n-a----       2017-08-10   4:19 PM          12369 Infusion-LICENSE.txt\r\n-a----       2018-12-21   3:03 PM          12257 README.md\r\n-a----       2018-12-21   3:03 PM           8585 ReleaseNotes.md\r\n\r\n> dir .\\build\\src\\components\\\r\n\r\nMode                LastWriteTime         Length Name\r\n----                -------------         ------ ----\r\nd-----       2018-12-21   3:29 PM                inlineEdit\r\nd-----       2018-12-21   3:29 PM                orator\r\nd-----       2018-12-21   3:29 PM                overviewPanel\r\nd-----       2018-12-21   3:29 PM                pager\r\nd-----       2018-12-21   3:29 PM                progress\r\nd-----       2018-12-21   3:29 PM                reorderer\r\nd-----       2018-12-21   3:29 PM                slidingPanel\r\nd-----       2018-12-21   3:29 PM                switch\r\nd-----       2018-12-21   3:29 PM                tableOfContents\r\nd-----       2018-12-21   3:29 PM                textfieldControl\r\nd-----       2018-12-21   3:29 PM                textToSpeech\r\nd-----       2018-12-21   3:29 PM                tooltip\r\nd-----       2018-12-21   3:29 PM                uiOptions\r\nd-----       2018-12-21   3:29 PM                undo\r\nd-----       2018-12-21   3:29 PM                uploader\r\n\r\n> dir ..\\website-cities\\static\\js\\lib\\infusion\\\r\n\r\nMode                LastWriteTime         Length Name\r\n----                -------------         ------ ----\r\nd-----       2018-08-30   9:51 AM                src\r\n-a----       2018-08-30   9:51 AM         692801 infusion-custom.js\r\n-a----       2018-08-30   9:51 AM        2124926 infusion-custom.js.map\r\n-a----       2018-08-30   9:51 AM          12369 Infusion-LICENSE.txt\r\n-a----       2018-08-30   9:51 AM           9991 README.md\r\n-a----       2018-08-30   9:51 AM           8137 ReleaseNotes.md\r\n\r\n> dir ..\\website-cities\\static\\js\\lib\\infusion\\src\\components\\\r\n\r\nMode                LastWriteTime         Length Name\r\n----                -------------         ------ ----\r\nd-----       2018-08-30   9:51 AM                slidingPanel\r\nd-----       2018-08-30   9:51 AM                switch\r\nd-----       2018-08-30   9:51 AM                tableOfContents\r\nd-----       2018-08-30   9:51 AM                textfieldControl\r\nd-----       2018-08-30   9:51 AM                textfieldSlider\r\nd-----       2018-08-30   9:51 AM                textToSpeech\r\nd-----       2018-08-30   9:51 AM                uiOptions\n```\n"
    },
    {
      "author": "Simon Bates",
      "date": "2018-12-21T15:38:36.477-0500",
      "body": "I'll check with Justin in January and hopefully it'll be a fairly quick process to verify and update.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-01-05T09:41:34.005-0500",
      "body": "Simon Bates I'm trying to remember if the src directory always included all of the original source or not. I don't think it did, but not sure when this may have changed. We did make some changes recently to pull in third party dependencies from NPM, and had to make some adjustments to the build scripts then. So it may have occurred with those changes. However, we did always need to do some pruning of the source directory as it always included JS files that were already bundled up in the concatenated JS file. We typically include all this information in a VERSION.md file accompanying the infusion src. \n\nLately we've just been pulling in Infusion from NPM directly. The NPM package comes with a distribution for a UIO custom build (see: <https://unpkg.com/infusion@3.0.0-dev.20181204T213346Z.2ca90f6e6/dist/> for examples). You'll also need to setup some copying of the necessary templates, message bundles and etc. It's a bit of work to setup initially but once it's all done it makes updating and keeping track of the version much easier. Let me know if you'd like to do this and would need some help getting things set up.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-08T10:56:35.546-0500",
      "body": "I chatted with Justin and we decided on the following approach:\n\n* We will automate the updating/preparing of UIO for the Cities site using NPM and Grunt\n  * We'll add a `package.json` and `Gruntfile.js`\n* We will store the UIO build for the Cities site (the output of the automated process) in the website-cities repo\n* NPM and Grunt need only be run when updating UIO – for regular site builds, Hugo is used only\n* The `Gruntfile.js` will copy files from the UIO distribution in Infusion to the Hugo static directory, replacing the files there (see <https://unpkg.com/infusion@3.0.0-dev.20181204T213346Z.2ca90f6e6/dist/>)\n\nDocument this process:\n\n* In the README.md for website-cities\n* And update <https://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html> with notes on this approach\n"
    },
    {
      "author": "Simon Bates",
      "date": "2019-01-22T11:14:52.657-0500",
      "body": "Options for managing UIO are being documented here:\n\n<https://wiki.fluidproject.org/display/fluid/Managing+UIO+in+a+project>\n"
    }
  ]
}
---
From Justin:

"Alan filed a FLUID-6357 the other day when it was observed that the aria-expanded was added to the wrong UIO element on the Inclusive Cities site. This has been addressed in Infusion and I’ve cut a new dev release that includes the fix (3.0.0-dev.20181204T213346Z.2ca90f6e6).&#x20;

In addition, Antranig mentioned to me the other day that the text was moving on page load in Chrome. This was an issue that he had also mentioned quite a while ago and we also fixed a bug in Infusion that was causing it. However, it doesn’t appear that the instance of Infusion was updated after that. This latest version should address both of those problems."

        