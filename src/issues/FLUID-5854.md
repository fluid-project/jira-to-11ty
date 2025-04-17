---json
{
  "title": "FLUID-5854",
  "summary": "type of stylesheet files, browser cannot get almost all the .js references",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Alexis Zambrano",
  "date": "2016-02-03T16:32:35.672-0500",
  "updated": "2021-03-23T13:29:55.509-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "Linux 64bit\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-02-04T09:15:33.827-0500",
      "body": "Alexis Zambrano, you'll have to run a build to generate the css files from the stylus (.styl) files. Stylus is a css preprocessor. You can find information on how to run builds at <https://github.com/fluid-project/infusion#how-do-i-create-an-infusion-package>, specifically for generating the css files you'll need to follow <https://github.com/fluid-project/infusion#developing-with-the-preferences-framework>.\n\nI'm not sure what issue you are having with the js files though. One thing to keep in mind is that you'll need to run the demos from a web server and not directly off of your file system, as there are ajax calls that most browsers will block when run directly from the file system.\n\nPlease let us know if this addresses the issues, so that we'll know if anything needs to be addressed for this ticket. You can also contact us through our IRC channel and mailing list. ( <https://wiki.fluidproject.org/display/fluid/Collaborate> ).\n"
    },
    {
      "author": "Alexis Zambrano",
      "date": "2016-02-29T21:49:56.394-0500",
      "body": "Justin Obara. I've solved that problem. Thank you. Now I'm working in mixing prefsEditors-master with a MVC framework to develop an accessible website and I figured out how to inject all .css and .js files for every view. Can you tell me please how customizable are the components in general?. Because I want to change the functionality of some of them but there are so many files that I got confused. For example, I want that the \"more contrast\" button has more options to change the contrast configuration, not only one. I mean 4 options to change contrast=4 clicks. Thank you for your attention\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-01T09:45:41.167-0500",
      "body": "Alexis Zambrano Glad to hear that you problem was solved. I'm assuming that this issue can be closed now. As for your new question I suggest that you post that question to the Infusion-Users list ( <http://lists.idrc.ocad.ca/mailman/listinfo/infusion-users> ), and it would be helpful if you could provide some wireframes and/or an expanded explanation of what you are trying to accomplish.\n"
    }
  ]
}
---
I have some problems.

1st: The type of stylesheets is not .css, is .styl and I don´t why, at the moment of to run for example de uiOptions demo, almost all the .js references doesn´t work, I´ve cloned the git repo from this: <https://github.com/fluid-project/infusion/>. but doen´t work like if I see a Demo from this: <http://build.fluidproject.org/infusion/demos/>.

Please helpme

        