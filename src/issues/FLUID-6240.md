---json
{
  "title": "FLUID-6240",
  "summary": "Implement a syllabification preference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-01-22T08:24:07.083-0500",
  "updated": "2024-07-22T10:35:14.962-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6352/",
      "key": "FLUID-6352",
      "summary": "Switch to using hyphenation patterns from CTAN"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-01-22T08:24:31.266-0500",
      "body": "May be able to use <https://github.com/nlp-compromise/nlp-syllables> for parsing words into syllables. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-01-23T13:17:04.935-0500",
      "body": "Potential Issues:\n\nBreaking words up into syllables is dependent on context (usage/form of the word) and dialects (pronunciation).\n\ncontext: re•cord, rec•ord\n\npronunciation: cara•mel, car•a•mel\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-01-26T11:01:29.764-0500",
      "body": "Conversation with Alan Harnum in the channel about this today: <https://botbot.me/freenode/fluid-work/2018-01-26/?msg=96180428&page=1>\n\n \n\ntl:dr\n\nIt's hard, and accuracy at best would be 85 - 90%.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-02-05T15:37:08.315-0500",
      "body": "Based on feedback from the APCP UX team, it was recommended to go with Hypher for now. <https://wiki.gpii.net/w/Browser_Adaptation_Design_Research#Questions>\n\n \n\nWhile looking into it more, it seems that hypher requires language patterns that are LGPL licensed. To reduce any issues of breaking or confusing licenses, it's best that we link in these dependencies (e.g. through npm). \n\n \n\nSee: <https://botbot.me/freenode/fluid-work/2018-02-05/?msg=96512159&page=1>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-01T08:32:07.639-0500",
      "body": "Due to the licenses of the language pattern files, we may need to pull them in via NPM. We should probably work on this along with <https://fluidproject.atlassian.net/browse/FLUID-6253#icft=FLUID-6253>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-10-19T11:01:42.978-0400",
      "body": "Below is a review of how the Learning Tools performs with Microsoft Word from Office 365. \"?\" for UIO+ means that we need to determine how to handle the feature.\n\n \n\n| **Feature**                                      | **Learning Tools (Desktop)**      | **Learning Tools (Web)**                              | **UIO+**                                                   |\n| ------------------------------------------------ | --------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |\n| **Show Syllables**                               | view > learning tools > syllables | view > immersive reader > grammar options > syllables |  UIO+ > syllables                                          |\n| **Displays in Context**                          | sort of                           | no                                                    | yes                                                        |\n| **Is editable**                                  | yes                               | no                                                    | ? (probably not for inputs, but maybe for dynamic content) |\n| **Syllable separator included text selection**   | no                                | yes                                                   | yes                                                        |\n| **Syllabification affects screen reader output** | no                                | yes                                                   | yes                                                        |\n| **Syllabification affects self voicing**         | no                                | no                                                    | ?                                                          |\n| **Syllabification affects text search**          | no                                | yes                                                   | yes                                                        |\n| **Revertible**                                   | yes                               | yes                                                   | ?                                                          |\n\n \n"
    }
  ]
}
---
Implement a new preference for providing a syllabification adaptation to the content of a page. The enhancement should present words, in the content of the page, broken into their syllables. 

e.g. syl•la•ble

See:

* <https://issues.gpii.net/browse/GPII-2433>
* <https://wiki.gpii.net/w/Browser_Adaptation_Design_Research#Syllabification>

        