---json
{
  "title": "FLUID-6554",
  "summary": "The use of special chars traps UIO combined settings of \"toc + syllables\" into infinite loops",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2020-09-23T14:23:58.113-0400",
  "updated": "2020-10-07T14:36:46.684-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6554/Screen Shot 2020-09-23 at 1.48.10 PM.png",
      "filename": "Screen Shot 2020-09-23 at 1.48.10 PM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-09-24T12:06:35.067-0400",
      "body": "I don't believe that this is specifically an issue of ToC and syllabification but more generally has to do with dynamic content that contains the special character and syllabification. Syllabification has a mutation observer that will apply syllabification to content that is dynamically loaded. In the case of ToC if, you add it before syllabification it appears to work okay, but if you reload the page or add ToC after syllabification, you can run into the issue mentioned above. Will need to do more investigation onto what the exact cause is.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-28T10:00:56.225-0400",
      "body": "In further digging I think there are a few things combining to cause this issue. \n\n* [Splitting on soft hyphens](https://github.com/fluid-project/infusion/blob/4e0124e9af46da914f1365d2aed117b749195cde/src/framework/preferences/js/SyllabificationEnactor.js#L360-L361) to inject a real separator at the suggested hyphenation point.\n* Injecting markup for the separator, to force visible hyphens\n* DOM mutation listener to pick up dynamic content and apply the hyphenation\n\nPutting those altogether, when we encounter a word with a soft hyphen, we injection a separator; which uses a span with content set to \".\". Because this is new dynamic content, the mutation observer picks it up and tries to run the hyphenation on the new markup. However, because the individual text node is separated into multiple text nodes, due to the insertion of the separator span, all of those are considered new text nodes. The result is that we again try to add a separator for the soft hyphen and an infinite loop occurs.\n\nPotential solutions:\n\n* Prevent the mutation observer from triggering on changes related to the addition of the separator\n* Replace/remove soft hyphens\n* Don't inject markup for the separator\n\nThe above need to be reviewed to ensure that all of the requirements for the syllabification enactor remain: e.g\n\n* syllabify dynamic content\n* remove and re-apply syllabification\n* copy/cut & paste text without including separator\n* search text without interference from separator (i.e. search as though no separator is present).\n\n \n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-09-29T12:09:30.681-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1009) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/cb1c25bc880e37d5fbc4ceecbc31bc2ad5610e99).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-29T16:17:06.947-0400",
      "body": "In thinking more about the issue: (see: [fluid-work channel logs](http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2020-09-29.log))\\\n \\\nSo there is a soft hyphen already existing in the source text. When we pass it through hypher it also adds soft hyphens for the splits, but because there is one already in the text it uses that existing one. This is probably what we want, although our algorithm now doesn't know that the soft hyphen was in the original text so our calculations are now a character off and it leaves the original soft hyphen in the text. The next thing that happens is we inject the separators which cause a dom mutation and triggers the mutation observer. Which in turn triggers the process again. Because the soft hyphen is at the front it splits the same text node into two segments but now the soft hyphen is at the front and has a length of 0. So we are also putting a separator in front and constantly replacing the same text node with the same content.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-29T18:01:01.166-0400",
      "body": "We will need to add some logic to handle the soft hyphen at the start of a segment. We can either do this by simply stripping it out or by replacing it with some empty span, similar to the separator markup but with no visible content. To revert syllabification in the former case we would replace all separator instances with soft hyphens; in the latter case we would replace the empty span with soft hyphens and remove all the separator markup as is currently being done.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-10-07T14:36:42.864-0400",
      "body": "[The 2nd pull request](https://github.com/fluid-project/infusion/pull/1010) that fixes this issue discovered later has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/d1a0055d4ba2647162a48ef1692c468ab37681fe).\n"
    }
  ]
}
---
[WeCount website](https://wecount.inclusivedesign.ca/) uses soft hyphens (

```java
&shy;
```

) for long words in headings so these words break at places that soft hypens are specified on small screens.

However, when UIO are set to enable both "table of content" and "syllables", the use of soft hyphens (probably other special characters too) triggers the rendering of table of content into infinite loops and the page hangs.

[A branch](https://github.com/cindyli/infusion/tree/FLUID-6554) is created to demonstrate this issue. In this branch, demos/prefsFramework/index.html has been modified. The heading "Background Information" has been modified to "Back\&shy;ground Information".

1\. Check out the branch: <https://github.com/cindyli/infusion/tree/FLUID-6554>;\
2\. Access the demo page of preferences framework;\
3\. Turn on UIO "table of content" and "syllables";\
4\. The page hangs. Stop the page loading, the syllable sign appears many times at the spot that the soft hyphen is used. See attached screenshot.

        