---json
{
  "title": "FLUID-6525",
  "summary": "Placeholder text are not styled by contrast themes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-07-02T15:55:48.166-0400",
  "updated": "2020-07-15T13:37:50.930-0400",
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
      "type": "Dependence",
      "url": "/browse/FLUID-6009/",
      "key": "FLUID-6009",
      "summary": "Improve the presentation of disabled elements and placeholder text"
    },
    {
      "type": "Duplicate",
      "url": "/browse/SJRK-186/",
      "key": "SJRK-186",
      "summary": "Placeholder text doesn't respond to UIO contrast themes"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6525/black on brown placeholder text.png",
      "filename": "black on brown placeholder text.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6525/black-on-yellow_placeholder_text.png",
      "filename": "black-on-yellow_placeholder_text.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6525/black on yellow placeholder text .png",
      "filename": "black on yellow placeholder text .png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6525/placeholder text with black on brown theme.png",
      "filename": "placeholder text with black on brown theme.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6525/yellow on black placeholder text.png",
      "filename": "yellow on black placeholder text.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-02T15:57:50.503-0400",
      "body": "\"placeholder text with black on brown theme.png\" shows the low contrast between the placeholder text and the background in the black-on-brown theme.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-02T16:01:19.315-0400",
      "body": "Dana do you have any thoughts on how we might best address styling for placeholder text when the contrast themes are applied?\n"
    },
    {
      "author": "Dana",
      "date": "2020-07-06T14:51:49.157-0400",
      "body": "Justin Obara Deleted previous comment because I think I misunderstood what you were describing. The black on brown theme is not a low-contrast theme, so the placeholder text should still pass for contrast, is that right? Using #363636 is as light as we can go for the placeholder text on the brown background (B69A6D) and still pass WCAG AA for normal-sized text, so we could try that.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-06T15:28:38.054-0400",
      "body": "Added another example \"black-on-yellow\\_placeholder\\_text.png\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-06T15:30:33.909-0400",
      "body": "Dana I guess the basic issue is that we do not style the placeholder text at all at the moment. So it always shows up in the browser default styling. I'm not exactly sure how to best handle it for the binary contrast themes like black-on-yellow, where we only use two colours. It would be hard to distinguish the placeholder text from the other text on the page. In the case of black-on-brown, that is a theme that using several colours so adjusting the colour to something that has better contrast but doesn't look like the rest of the text on screen might be fine.\n"
    },
    {
      "author": "Dana",
      "date": "2020-07-06T16:00:31.693-0400",
      "body": "thanks Justin Obara and sorry I missed that screen shot attachment the first time. Firefox seems to be doing something different than what you're seeing, I've attached a few screenshots. What browser are you using?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-06T16:14:56.232-0400",
      "body": "Dana I was testing with Safari. The screenshots you posted gave me an idea. We could implement a similar behaviour across browsers by setting the colour of the placeholder and then specifying a lower opacity. Here is a jsFiddle with a quick example. <https://jsfiddle.net/j15gyedp/> You can adjust the colour and opacity values to experiment.\n"
    },
    {
      "author": "Dana",
      "date": "2020-07-07T11:51:57.076-0400",
      "body": "Thanks Justin Obara I think that's a great idea. I'll do some testing with the UIO contrast theme colours.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-07-15T13:37:47.242-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/999) that fixes this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/fffee177a7cbe9c1f78d98bb74bffc7b8db274bb).\n"
    }
  ]
}
---
The contrast themes do not style placeholder text. Placeholder text already has low contrast but when used with some contrast themes it is almost completely unreadable.

The placeholder text can be styled using the placeholder pseudo element.

<https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder>

        