---json
{
  "title": "FLUID-4731",
  "summary": "the grunt build should produce a file specifying the build settings and information",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "reporter": "Justin Obara",
  "date": "2012-07-19T14:59:36.345-0400",
  "updated": "2024-07-16T13:57:51.217-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4731/Capture.PNG",
      "filename": "Capture.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:51:22.076-0400",
      "body": "Instead of this being a standalone file, perhaps it should be included in the banner/header of the concatenated infusion file.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-15T11:00:06.291-0400",
      "body": "Here's an example of the information we've been manually writing out for our custom builds\n\nThe version of Infusion included in this folder was created using a custom build from commit\n\ne511c9fc7eff7c57d3f8071e4be2664d89188f5c\n\nof the Infusion master branch\n\n<https://github.com/fluid-project/infusion/>\n\nusing the command line\n\ngrunt custom --source=true --include=\"tooltip, renderer, preferences, tabs, overviewPanel\"\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-03T10:55:52.397-0500",
      "body": "@Justin \\\nPresently grunt creates the same banner for \"custom\" and \"all\" build which goes like -\n\n/**! infusion - v2.0.0 Thursday, March 3rd, 2016, 8:44:09 PM**/\n\nSo I guess we need to just add the modules added in the custom file we can use the grunt.option(\"include\") to get the modules passed as parameters and add them in the banner and we are good to go. Please can you tell me if this would be good or we need to add something more.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-04T08:44:38.771-0500",
      "body": "sparsh paliwal well it's a bit different we really want to include the specific grunt command needed to create the file. Perhaps you could investigate if it's possible to get access to the command that was used to trigger the grunt build? We'd also like to have access to the specific revision that the build was created from. This is particularly important for cases where the build is from some point in development. Since this JIRA was first filed we've started posting dev releases on [NPM](https://www.npmjs.com/package/infusion). Meaning that it isn't entirely clear what the need for this work will be going into the future; however, it's still probably useful information to supply.\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-04T17:03:04.371-0500",
      "body": "Thanks Justin for the explanation closest we can go to our need with the grunt API is it provides all the arguments passed to command line in an array on using grunt.option.flags(), here it would return (I had straightaway put the array in the banner)-\n\n**/**! **infusion - v2.0.0 Saturday, March 5th, 2016, 2:52:18 AM --source, --include=tooltip, renderer, preferences, tabs, overviewPanel** **/**\n\n\\--source because for grunt,\\\n\"grunt custom --source=true\"  and  \"grunt custom --source\" are equivalent. \\\nwe can easily manipulate this to get the exact command line argument.\n\nFor the specific revision part(exact commit we are on) we can use the <https://github.com/mikaelkaron/grunt-git-describe/> grunt Npm task and we will use its commit-ish option.\n\nI have tried and found the following solutions. Please can you give your views on these.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-24T14:19:35.365-0500",
      "body": "The banner in the concatenated JS file now contains the revision and branch that the build was generated from, assuming it was built inside of a Git repo. This was done as part of the work for <https://fluidproject.atlassian.net/browse/FLUID-5832#icft=FLUID-5832>. However, an example grunt command for generating the build has not been provided. That part now also has to take into consideration the distribution builds which are programatically generated from the distributions configuration in the Gruntfile.\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-12T15:19:29.542-0400",
      "body": "Hey, i'd like to work on this, if it still needs to be done.\n\nAlso i'd like to know what information would go into such a file when generated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-12T15:44:45.076-0400",
      "body": "Mohamed Shadab we're starting to move away from creating zip packages and unpacking them into a project because we are moving more towards pulling in from NPM directly and copying over the necessary files.\n\n \n\nHowever, the idea of this issue was to cover the case where a custom build was made and you wanted to be able to reproduce it. We tended to write VERSION.md files like <https://github.com/fluid-project/floeproject.org/blob/master/lib/infusion/VERSION.md> . You can see that file includes the branch and revision that build was generated from as well as the specific grunt command used.\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-19T17:32:14.166-0400",
      "body": "Hey, so i have implemented this using a small grunt task which uses the file creator grunt plugin -<https://www.npmjs.com/package/grunt-file-creator> ; here is the branch i am currently working on (where it is implemented): <https://github.com/shadxx7/infusion/tree/FLUID-4731>\n\nHere is a screenshot of the buildInfo.md file being created using the function say \"grunt custom --include=jQuery\" -\n\n<!-- media: file a8e94de6-6b6d-41ff-a68a-2f416c571f61 -->\n\nPlease check it out and give your opinion. Thanks!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-20T10:22:14.631-0400",
      "body": "Mohamed Shadab I took a quick look at the Gruntfile.js in your branch. Some of the values are already available in the grunt config, such as pkg, revision, branch. Can you just access these from there instead of having to recall the methods to populate the values. Also what will happen in the case of running a \"grunt buildDists\" which runs several custom builds and outputs them to the dist directory? It would also be good if you could add the name of the build to the header and also probably as the file name. \n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-03-20T16:46:37.852-0400",
      "body": "Hey, \n\nI made the changes; please check them out - <https://github.com/shadxx7/infusion/tree/FLUID-4731>\n\nCheers\n"
    },
    {
      "author": "Mohamed Shadab",
      "date": "2018-04-03T09:30:03.042-0400",
      "body": "Hey, so did you check the changes i made? If yes, should I make a PR?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-05T09:40:26.650-0400",
      "body": "Mohamed Shadab I've only had time to skim over your branch so far. I think it would be easier to review as a PR though. So yes, please file one. Thanks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-16T13:57:51.217-0400",
      "body": "This was resolved with <https://github.com/fluid-project/infusion/pull/1046>  which not only moved away from using Grunt but also includes metadata about the build in a built file.\n"
    }
  ]
}
---
When a custom build is produced, a file should be generated specifying the date, version, revision, and command used to create it.

        