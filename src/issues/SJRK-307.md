---json
{
  "title": "SJRK-307",
  "summary": "Add feature detection to keep site from breaking",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-10T13:05:19.095-0400",
  "updated": "2020-09-02T08:49:25.248-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-95/",
      "key": "SJRK-95"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-10-10T14:21:56.892-0400",
      "body": "Related to the Orator, the underlying Text-to-Speech component does provide a check that can be used with Infusion's context awareness or other conditional check.\n\n<https://github.com/fluid-project/infusion/blob/master/src/components/textToSpeech/js/TextToSpeech.js#L60-L62>\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-08-10T14:10:13.125-0400",
      "body": "Found an MDN article on browser and feature detection: <https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-09-02T08:46:14.521-0400",
      "body": "If the issue is only about using the Orator if the browser supports the speech synthesis api, we can use context awareness and the provided check from the Text-to-Speech component to only include the Orator when it is supported.\n\nIf the issue is around CSS we could use something like PostCSS to transpile modern CSS to variants that are supported in older browsers. See: <https://dev.to/adrianbdesigns/postcss-preset-env-babel-for-css-12hp>\n\nHowever with any of these we should way the benefit against costs like performance impacts, maintenance burdens, complexity and etc. \n"
    }
  ]
}
---
Add feature detection (using a library like Modernizr or equivalent) or make use of progressive enhancement/graceful degradation strategies in order to get the site functioning to a bare minimum standard on older devices. Browser detection specifically is not recommended, but would be an adequate short-term solution.

In particular, the Speech Synthesis API (which only has [partial support](https://caniuse.com/#feat=speech-synthesis) in older browsers)

An example of the current setup failing would be IE11 not supporting Speech Synthesis, and so the storyViewer component fails to load, so the site is effectively useless. This could be solved by disabling and/or not loading the Orator for browsers that don't support it.

This approach may also be useful with respect to the usage of CSS Grid or other features in HTML, CSS and JS which are not supported very far back.

        