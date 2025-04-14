---json
{
  "title": "FLUID-6352",
  "summary": "Switch to using hyphenation patterns from CTAN",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2018-11-16T09:55:23.322-0500",
  "updated": "2018-11-16T10:08:35.282-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6240/",
      "key": "FLUID-6240"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently the Syllabification enactor makes use of the [Hypher](https://www.npmjs.com/package/hypher) library to separate words into their syllables. Hypher makes use of language pattern files to do that splitting of the words based on language and locale. We've forked the repo with these patterns so that we can pull them in from NPM ( <https://github.com/fluid-project/hyphenation-patterns> ). We should explore creating our own set of pattern files in the Hypher format based on the pattern files from CTAN. ( <https://ctan.org/pkg/hyph-utf8> <https://github.com/hyphenation/tex-hyphen/tree/master/hyph-utf8/tex/generic/hyph-utf8/patterns/tex> ). This would provide us with the following:

* more supported langauges
* updated patterns
* more open license

Ideally we'll implement an automated process that can fetch the patterns from the CTAN repo and convert them into the properly formatted javascript files required by Hypher. The [nb-no.js](https://github.com/fluid-project/hyphenation-patterns/blob/master/patterns/nb-no.js) pattern was at one point converted from CTAN and can be used to understand how to transition from one form to another. I believe that the main points of the translation are:

* "." replaced by "\_"
* things in \patterns are transformed into a patterns object that is keyed by length with the value all of the patterns of that length concatenated into a single string
* things in \hyphenation being placed in a comma separated string in the exceptions property.
* replacing "-" with "\u2027"
* adding the other structures for adding the pattern to the Hypher namespace.

        