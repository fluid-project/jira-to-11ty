---json
{
  "title": "VULAB-21",
  "summary": "Survey Tool Investigation into Build or Borrow",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-09-08T10:51:20.000-0400",
  "updated": "2008-09-23T13:56:42.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VULAB-24/",
      "key": "VULAB-24"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-21/LICENSE.php",
      "filename": "LICENSE.php"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-09-08T10:53:04.000-0400",
      "body": "The VULab team, as well as some key people from the Fluid community, have agreed that we will need to remove phpESP completely to properly conserve our IP throughout the VULab project while allowing the VULab project to grow into the powerful/accessible project we need.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-08T10:56:45.000-0400",
      "body": "via the mailing list, Mike Elledge provided a great report done by Ohio State University on usability of survey tools entitled \"Survey of Surveys\"\n\n<http://wac.osu.edu/workshops/survey_of_surveys/>\n\nThis survey gives great research into the usability of various survey tools out there, but as we are an open source project and need access to the source to properly integrate into VULab, we are currently looking into LimeSurvey:\n\n[http://www.limesurvey.org](http://www.limesurvey.org/)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-09T16:15:41.000-0400",
      "body": "I've attached the License file for LimeSurvey. Can someone who knows more then me take a look?\n\nCan we use a system that has a GNU license?\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-10T10:30:25.000-0400",
      "body": "I posted the license on the mailing list, and Colin took a look over as our resident law guru and we've discovered that LimeSurvey doesn't have the proper license for inclusion into VULab.\n\nsome more research will be conducted but at this point I believe that we will be building a new tool.\n"
    },
    {
      "author": "Former user",
      "date": "2008-09-15T21:49:18.000-0400",
      "body": "\\<SPAM>\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-18T12:54:19.000-0400",
      "body": "No open-source license compatible options have been found. We will be re-building the survey tool ourselves.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-23T13:56:42.000-0400",
      "body": "I wanted to take some time now, to expand on this issues and my thoughts behind it as this is a large decision to not be made lightly.\\\n\\=======\n\nI added this issue because I believe that we had hit a critical mass with VULab, in terms of what phpESP would support as well as what VULab COULD support.\n\nInitial,in the interest of time, VULab had opted to use phpESP, and modify it as needed. This is why currently, the way that the user travels from page to page is all phpESP, and the survey creation/completion process is governed by phpESP.\n\nOver the months of development and the research that went with it, phpESP started to show limitations. such as: no sessions/embed \\<input> control variables for workflow, and a general lack of separation between \"logic\" and \"view\"\n\nI'll quickly explain what I mean by these issues:\n\nSessions/Embed Input: Sessions are cookies that PHP (programming language of VULab) uses to store data while a user visits a site. Most sites use sessions to store data about where the user is browsing. As sessions are stored on the sever securely and are built directly into PHP, this greatly speeds up as well as secures the program. phpESP does not use sessions in this way. phpESP on the other hand stores all its information within the page itself, so that variables can be manipulated manually by the user, and PHP must take an extra step to access them. an Explanation of the \"Where\" System has been written here: <http://wiki.fluidproject.org/display/fluid/Where+Inclusion+System+Explained>\n\nGeneral Separation of Logic and View: This is relating to the style of programming. phpESP has been written so that the design AND the programming are in the same place. This is taught at all computer schools as a basic flaw in programming. Without going into detail as to the reasons why, it can be summarized by saying that this style of programming hinders any modification to the system as well as greatly limiting (and eventually shutting down) the expansion of the program.\n\nThese were the two major issues with the phpESP system, and until now could be worked around.\\\nIt is my opinion at this point that to continue the growth of VULab project we will need to rebuild our survey tool. This will offer us limitless expansion and the perfect integration into any existing VULab, or even fluid programs/system.\n\nI created this issue to discuss any possibilities of what we could use to replace phpESP, but all options were either not licensed in a way that would integrate with the fluidproject, or they were simply not open-source and only labeled as which because they were \"free\",\n\nMoving forward I believe that enough code has been replaced out of the phpESP system and the VULab codebase itself is strong enough that it can support the full weight of the survey tool, which is the ideal situation, in my opinion.\n\nhope this sheds some light.\n"
    }
  ]
}
---
Whether we want to use a pre-build open source system for our surveys or to create a new system from the ground up.

        