---json
{
  "title": "FLUID-6381",
  "summary": "Explore making use of prefers-color-scheme and prefers-reduced-motion CSS media features with UIO ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-07-10T11:09:37.888-0400",
  "updated": "2021-11-03T14:37:47.713-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-07-10T11:57:14.455-0400",
      "body": "Suggestion from Mike Gifford:\\\n \\\nSo this ultimately is probably adding another pane in the editor. \\\n \\\nWhen arriving to the site for the first time Fluid UI would make note of the preferences of the browser and make them available in the new pane. A user could choose to override the browser in the pane. \\\n \\\nDark mode is most likely already defined if you’ve got Fluid UI installed. In which case, this should be what a new visitor first see if they have dark mode enabled. It would make sense to somehow highlight this in the list of contrast options that the browser defaults are being engaged vs the site default color scheme. \\\n \\\nIf a browser supports dark mode and prefers motion, but a user doesn’t have it enabled, it would be useful to point users to a list about how to set the defaults for the browser or OS. If the browser doesn’t support it, there is no need to tell the user anything about it. \\\n \\\nThe big challenge that I see with things like prefers-reduced-motion is that there is no way to set that from a standard UI pattern.  Adding it to Fluid UI gives users the ability to control this but also an easy way for developers to test for it. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-17T10:19:35.181-0400",
      "body": "JSFiddle Examples for the media features:\n\n* [prefers-color-scheme](https://jsfiddle.net/snfmaLvw/23/)\n* [prefers-reduced-motion](https://jsfiddle.net/fk0pqLud/2/)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-30T15:07:01.407-0400",
      "body": "Talked about these at today's Design Crit. Some suggestions around how to display, seemed mostly to point at providing options for users based off of these. Perhaps this makes some preferences showcased.\n\nAnother possibility is to provide this as an option for browsers/OS that don't expose these features or to request as an override to not apply them to a specific site. In both cases this would require more implementation or configuration from the integrator.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-07-30T15:08:55.550-0400",
      "body": "We could also look at adapting UIO itself based on these media-features, although during the Design Crit there was cautions about making assumptions and broad sweeping changes based on binary values that may not fully reflect the users preferences. (e.g. what constitutes necessary animations and how is deciding what is necessary - integrator or user).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-11-03T14:37:47.713-0400",
      "body": "If we'd like to make a UIO Preference for reducing motion/animation independent of the media query it would be possible to remove CSS related animations and transitions. However, JS related animations for example would still have to be done by the integrator. \n\n \n\nSee [comment](https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$LZ6wUxUgRhOUt5duOmpbQWs-TQqM2iocD7qOBerwMIM?via=matrix.org) in Fluid-Technology matrix channel on Nov 3, 2021.\n"
    }
  ]
}
---
`[prefers-reduced-motion|https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion] and [prefers-color-scheme|https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme] are two new CSS media features that could be used with UI Options (or the prefs framework) to react to the user's system preferences. We should explore how to best leverage this system information to enhance the user's experience. `

        