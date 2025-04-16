---json
{
  "title": "FLUID-6655",
  "summary": "redesign text style preference around types of fonts instead of specific ones",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-06T12:55:39.440-0400",
  "updated": "2022-11-17T12:56:49.728-0500",
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
      "url": "/browse/FLUID-6216/",
      "key": "FLUID-6216",
      "summary": "The default text style options aren't available across all platforms"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6754/",
      "key": "FLUID-6754"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Caren Watkins",
      "date": "2021-07-30T12:09:54.032-0400",
      "body": "I think a positive to this idea is the potential for more personalized choice. A challenge is meaning of these more general terms. If Serif and Sans were rendered in clearly Serif and Sans fonts that could help. Default and System could be explored by a user by interacting with them but the meaning–info you have in brackets–would not be clear. \n\n* default ( uses the font specified by the site )\n* system (uses the default system font e.g. [system-ui](https://caniuse.com/?search=system-ui) )\n  * for those who know how to change the system font to their preferred font–would default (because they've over ridden the site specified font) and system choices be the same font for them?\n* serif \n  * Would the word SERIF be visually rendered as a serif in the menu?\n  * when chosen does the UIO have a list of preferred serifs that it will ask the system to find? For example, first Georgia, second Times, if no luck any serif available.\n* sans serif\n  * same questions as above\n* OpenDyslexic\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-08-03T08:29:54.609-0400",
      "body": "Hi Caren Watkins, thanks for the feedback.\n\nI don't know if we'll be able to render the options in the same/similar font to what will be applied. We've tried that in the past with limited success. It worked in some browsers but not others. We'd have to see what's available with current CSS, or possibly a custom select box.\n\nRegarding [system-ui](https://drafts.csswg.org/css-fonts-4/#valdef-font-family-system-ui), it should pick up the OS's font. I don't know if that just means it's default option, or if it means the current. I'd assume the latter, but we'd have to do a bit of testing to determine. If the user had changed their browser's default style sheet, it may be that the site is already presented with whatever is used by the system, this might also be the case if the site itself used the same font.\n\nFor the serif and sans-serif options we would probably either just use the generic font-family (serif, sans-serif, ui-serif, ui-sans-serif) but could also pre-specify some. We're also probably going to move to an option where the site integrator will have more choice over what those actually become (see: <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605>). So the user would specify serif, but the site integrator might have different fonts specified to actually enact that preference. This could also be used to provide different font pairings for headers vs content, although they'd both be in the sans-serif or serif. In theory with an approach such as in <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> the integrator would have more freedom for how all of the options are actually enacted.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-08-03T09:05:52.232-0400",
      "body": "Here's a [codepen example](https://codepen.io/jobara/full/bGWjMWx) to test out system-ui, serif, and sans-serif across platforms.\n\n<https://codepen.io/jobara/full/bGWjMWx>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-11-17T12:56:27.059-0500",
      "body": "Added a new issue for system-ui, <https://fluidproject.atlassian.net/browse/FLUID-6754#icft=FLUID-6754>.\n"
    }
  ]
}
---
The current design for the text style preference is to provide a list of fonts to choose to apply to the page. I believe these were initially picked from common system fonts but they don't always work across platform.

As a potential redesign, we could have something like the following:

* default ( uses the font specified by the site )
* system (uses the default system font e.g. [system-ui](https://caniuse.com/?search=system-ui) )
* serif
* sans serif
* OpenDyslexic

This would hopefully allow for easier implementation both for developing UIO and for those integrating. And allow for things like font pairings to emphasize portions of the content when using the serif and sans serif options.

        