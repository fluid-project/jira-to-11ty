---json
{
  "title": "VULAB-69",
  "summary": "Existing Framework Investigation.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-11-03T11:28:26.000-0500",
  "updated": "2008-11-10T11:58:15.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-11-03T11:28:46.000-0500",
      "body": "vulab6\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-03T11:29:22.000-0500",
      "body": "A great article outlining the CodeIgniter license. It shows that it is BSD compatible. (which is what fluid is).\\\n<http://www.hopstudios.com/blog/is_codeigniter_actually_open_source/>\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-03T11:43:44.000-0500",
      "body": "I am looking at CodeIgniter because:\n\n* it follows the fluid mantra - \"A lightweight framework, with a bit of MVC to help make your app easier to write.\"\n* It is widely used and maintained (we can draw additional interest and support)\n* it has plugin architecture etc already setup.\n* focus on a small footprint\n\nWhy am I not looking at cakePHP\n\n* it is very large and is considered \"bloated\" to most programmers\n* distributed with the MIT License\n* is closer to a CMS then a framework (a framework will provide more transparency and versatility)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-03T17:00:23.000-0500",
      "body": "I sent an email to the list with some more pros and cons, I'll paste it here as well:\n\nOpenVULab is going to be undergoing some heavy reworking after the All-Hands-Meeting.\\\nWe are going to be moving to a real open source mvc framework to facilitate a few things:\n\n* plugins (survey tools as well as simple inclusion of fluid components)\\\n  &#x9;\\- data models (handle projects, surveys, etc, in a generic way that is easy to integrate with a new design)\\\n  &#x9;\\- proper page controllers (handle data outside of layouts)\\\n  &#x9;\\- logic / view separation\n\nWhy are we switching to a framework?\n\nCurrently there is no framework behind phpESP, and as we are trying to incorporate dynamic and complex things such as the ones listed above.&#x20;\n\nAny framework will have already written functionality and code to provide these things in a clean and easy manor.&#x20;\n\nWhat Framework then?\\\nI've selected 2 popular open source frameworks and I've outlined some of the pros and cons below:\\\nphpCake.org and CodeIgniter.com\n\nI've collected a basic \"plus\" and minus' below:\n\nPHP Cake:\n\nPluses:\n\n1\\. Stricter framework, better compliance with MVC.\\\n2\\. Bigger amount of modules\\\n3\\. Lots of examples and snipets\\\n4\\. VERY popular.\n\nMinuses:\n\n1\\. Much heavier than Igniter, more configuring to do.\\\n2\\. Its template system and smarty integration is kinda strange.\\\n3\\. The overall templates (display schemes) implementation has its own limits.\\\n4\\. You are committed to do things the cakePHP way\\\n5\\. Very poor documentation.\n\nCode Igniter\n\nPluses:\n\n1\\. Looser - more ways to do things.\\\n2\\. Easy configuration, nice loging capabilities\\\n3\\. MUCH Lighter - their goal is to be light and powerful.\\\n4\\. Template engine or (optionally) native php for views. Very light. (more control over views)\\\n5\\. AMAZING documentation (very easy to get others to help)\n\nMinuses:\n\n1\\. Less modules. (which is growing every day)\\\n2\\. Loose system has its own good and bad sides - less order in the source files.\n\nI prefer CodeIgniter, as I always want more control then more built-in features. Also, CodeIgniter is MUCH lighter and the documentation is leagues ahead of phpCake. Two things that I think are very much in line with the fluidproject. By choosing CodeIgniter we'd have less pre-made modules to choose from, but given that we have high standards in terms of UI and code, I think building out own modules is a better route anyway.\n\nHere is a blog post that breaks down the CodeIgniter License:\\\n<http://www.hopstudios.com/blog/is_codeigniter_actually_open_source/>\n\nphpCake uses the standard MIT Open Source License.\n\nAny questions? Comments? Personal Experiences?\n\n* Blake (the infamous FatalRemedy)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-11-10T11:58:15.000-0500",
      "body": "So far nothing has come up against CI, and I plan on moving forward with it. I've done further research into the components and library and its exactly what we want to use.\n\nI'm going to leave out this issue until after all-hands and we can push to have a laywer take a look to give the final \"OK\" on CodeIgniter.com\n"
    }
  ]
}
---
Investigate various php open source frameworks that would facilitate a MVC system to have surveys as plug-ins.

At this point the system needs to be completely re-written to follow a fluidproject benchmark. So, 2 branches of VULab will be developed. One "working" version (designed for all-hands meeting) and one built with a proper framework (using data models that are in the current VULab system)

Current candidate is: www.CodeIgniter.com

        