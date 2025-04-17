---json
{
  "title": "FLUID-6499",
  "summary": "Add swap value to font display",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Pull Request",
  "reporter": "Teddy",
  "date": "2020-05-15T13:00:44.580-0400",
  "updated": "2020-05-20T11:22:41.999-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6499/fontdisplay.html",
      "filename": "fontdisplay.html"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-05-19T15:32:06.190-0400",
      "body": "I found a nice summary of the various features and it includes a demo of what the effects will look like on a slow connection.\n\n[https://font-display.glitch.me](https://font-display.glitch.me/)\n\n\"swap\" is a means of combating FOIT (Flash of Invisible Text) however, this potentially leads to FOUT (Flash of Unstyled Text). \n\nIt seems that depending on what the use of the font is for, we may use a different strategy (auto, block, swap, fallback, optional). Also it sounds like auto is typically something like block. From the site linked above they recommend \"block\" for icon fonts and \"optional\" for the main body text.&#x20;\n\nI think \"block\" or \"auto\" makes sense for the icon fonts. For the body text provided by UIO's \"text style\" option, it's not so clear what would be better: \"optional\", \"fallback\" or \"swap\". The risk being FOUT versus getting the fallback style instead of the primary font family requested.\n\nI'm curious about others thoughts on this.\n\n \n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-05-19T15:42:04.194-0400",
      "body": "Thanks for this investigation, Justin. I have a couple thoughts:\n\n1. For UIO's body text, it seems like swap is preferable to the others; my understanding is that the text would be displayed in the default font while the custom font is loaded, and then the custom font would be swapped for the default font? If that's the case then that seems preferable to having the text momentarily disappear while the custom font is loaded. Let me know if I'm misunderstanding this.\n2. For the icons, I think it might make sense for us to explore using SVG icons instead of icon fonts, which is would require a separate JIRA. It's my understanding that icon fonts are generally discouraged now that SVG has broad browser support. A couple of links:\n   * <https://css-tricks.com/icon-fonts-vs-svg/>\n   * <https://www.zachleat.com/web/font-display-icon-fonts/>\n\nCurious to hear others' thoughts.\n"
    },
    {
      "author": "Teddy",
      "date": "2020-05-19T15:44:14.372-0400",
      "body": "Great discovery Justin Obara! I feel like this would be a great thing we can decided on as a team during Thursdays check-in. Till then I'll play around with these options to familiarize myself with them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-19T16:06:31.912-0400",
      "body": "Ned Zimmerman \n\nFor point 1, I agree that not using \"auto\" or \"block\" for the font family provided by UIO's \"text style\" preference makes sense. However, I'm not sure that \"swap\" is the best alternative. Curious to know what you all think about using \"fallback\" and \"optional\" as well. The big issue being that the screen flashes and layouts reflow if the font is applied late/slow. \n\nFor point 2, I actually did research into this a while back, and a little recently related to the wecount site, but honestly we should do another review to see the current landscape. Anyways you can see my research on the wiki ( <https://wiki.fluidproject.org/display/fluid/Research+SVG+Icons> ). When using SVG icons we need to be able to modify the styling, e.g for contrast. That will limit our options for how to embed the SVG icon into the page. The two best options I've seen for this are 1) adding the SVG's inline 2) Making use of `<use>`. The former has issues of making the templates harder to read/maintain and we lose the benefits of caching/preloading. The latter is my preferred choice but the problem is with the URL to the SVG sprite. In our case where the icons are included in HTML templates this is problematic because the URL is relative to the page the template is inserted into rather than to the template itself. So we won't know what that URL should actually be. Possibly the component could be modified to manage that. If you're interested, the icons we use are all generated from <https://github.com/fluid-project/infusion-icons> The icons are provided there as SVGs and build run to generate an icon-font from them. This means that switching to SVG icons shouldn't be too much work as we have easy access to the same artifacts. It also makes updating and generating new icon fonts pretty easy.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-19T16:07:29.671-0400",
      "body": "Teddy please let us know what you find out and thanks for continuing to explore it.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-05-19T16:12:30.008-0400",
      "body": "Justin Obara, the article is very helpful. Thanks.\n\nFor text, I agree with Ned Zimmerman that, \"swap\" is preferable as the text in the fallback font will show up from the start to avoid the short period of showing invisible texts.\n\nFor UIO icons when there isn't a fallback, using any of these values won't help because the only choice is to wait for icons to be download and ready. Using \"block\" and \"auto\" make sense.\n\nAs the goal of Teddy's pull request (<https://github.com/fluid-project/infusion/pull/991>) is to deal with the lighhouse complaint for the load of \"PrefsFramework-Icons.woff\", which falls into the \"UIO icons\" category. Using \"swap\" for this web font in particular will stop the lighthouse from complaining but won't improve the performance.&#x20;\n\nHowever, it would be useful to visit other UIO/infusion font-face used for displaying texts.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-20T11:22:41.999-0400",
      "body": "I've added a simple example page (fontdisplay.html) that can be used for comparing the various options. It's a good idea to also test by setting the throttling options in the browser's dev tools.\n"
    }
  ]
}
---
Leverage the [font-display CSS feature](https://web.dev/font-display/?utm_source=lighthouse\&utm_medium=devtools#how-to-avoid-showing-invisible-text) to ensure text is user-visible while webfonts are loading.

        