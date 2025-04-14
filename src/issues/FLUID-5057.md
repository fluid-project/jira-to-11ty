---json
{
  "title": "FLUID-5057",
  "summary": "Replace separated panel background image with CSS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2013-06-17T10:30:07.871-0400",
  "updated": "2018-03-12T14:48:37.760-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "sparsh paliwal",
      "date": "2016-03-02T16:05:24.718-0500",
      "body": "<https://github.com/PaliwalSparsh/infusion/blob/master/src/framework/preferences/css/stylus/SeparatedPanelPrefsEditorFrame.styl#L29>\\\nI guess this is the place that needs change we can replace it with a css gradient like\\\nbackground: linear-gradient(to left, #f857a6 , #ff5858);\\\nor some pattern\\\nbackground:repeating-linear-gradient(-45deg, #de9dd4, #de9dd4 5px, white 5px, white 10px);\\\nPlease can you tell me how do I test it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-03T08:59:07.936-0500",
      "body": "@@sparsh paliwal I see you've forked the code, which is a good start. You'll probably want to make the change in a branch, and test it from there. Start by making your change in the styl file you indicated. This is a [stylus](http://stylus-lang.com) file. After you have made the change you'll need to run a grunt build which compiles the stylus changes into proper css. See: <https://github.com/fluid-project/infusion#developing-with-the-preferences-framework> for the command to run, and the rest of the README if you need help getting Grunt setup. After the build is complete run your code from some web server and open the UI Options and Prefs Framework demos. You should also run the unit tests just to be sure. We are currently testing in last versions of Internet Explorer, Chrome, Safari, and Firefox. If possible, please test in all of those browsers.\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-07T13:37:18.461-0500",
      "body": "Hey so i have removed the background texture and replaced it with a very similar color (hex-code: #bcb5ad). I have tried it on Google Chrome 64, Firefox 58 and IE 11 and there is near to no difference between the texture and the color. Here is the link to the fork where i made the change : <https://github.com/shadxx7/infusion/tree/FLUID-5057>\n\nIs it good enough or should i implement something different.\n\nThanks 🙂\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T09:58:00.796-0500",
      "body": "@@Mohamed Shadab that's looking good. Could you please file a pull request for the change. A couple things I noticed while looking at your branch:\n\n* it seems to be mixed with changes for another issue\n* if the background image isn't needed any more it should be removed from the source\n* the TODO comment in the stylus file where you made your changes may not be needed any more, please double check.\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-09T11:13:06.981-0500",
      "body": "Hey, thanks for the reply, i fixed the branch issue; it got mixed up with another issue i was working on. Also removed the bg image and TODO (After checking for any correlated issue). Made the Pull Request.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-12T14:48:33.995-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/882> ) at ea2d67ec6e9ed17608fcd50fe7705ed5db275f4d\n"
    }
  ]
}
---
If a cross-browser solution can be determined, it would be nice to replace the default theme's background image for the separated panel to be just CSS. We could then remove the entire uio/images directory since it's the only remaining image (we replaced the rest with font icons).

        