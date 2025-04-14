---json
{
  "title": "FLUID-4934",
  "summary": "Research the viability of using icon fonts in UI Options in order to simplify the styling process",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Arash Sadr",
  "reporter": "Arash Sadr",
  "date": "2013-03-14T21:43:14.495-0400",
  "updated": "2013-04-29T10:30:04.655-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4994/",
      "key": "FLUID-4994"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4934/tumblr_lj6mxvSCdK1qz4fzao1_1280.gif",
      "filename": "tumblr_lj6mxvSCdK1qz4fzao1_1280.gif"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4934/UIO25490.zip",
      "filename": "UIO25490.zip"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4934/UIO-font-transformations.jpg",
      "filename": "UIO-font-transformations.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-03-15T08:51:39.619-0400",
      "body": "In terms of IE support it seems that anything below IE10 will not natively support ligatures (<http://caniuse.com/#feat=font-feature>). In some tests that Heidi and I did earlier this week we found that for IE8 and IE9 the text would be read by a screen reader, but nothing would be visually rendered on screen. It seems that symbol set has a way around this with javascript ( <http://help.symbolset.com/customer/portal/articles/792691-browser-support> ), so there may be a polyfil out there or some technique we can employ ourselves as a workaround.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-03-15T08:56:18.084-0400",
      "body": "Some additional notes about from symbolset about browser support, although it looks to be a bit out of date.\\\n<http://blog.symbolset.com/browser-support/>\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-03-15T11:28:54.974-0400",
      "body": "Font Awesome also claims that they support IE7+ (<http://fortawesome.github.com/Font-Awesome/>). But Both Font Awesome and Symbol set do not allow us to add our own icons.\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-03-15T13:12:54.351-0400",
      "body": "I have created and attached a font with ligatures (UIO.ttf), including our UIO icons for testing.\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-03-22T12:10:37.166-0400",
      "body": "I found this font that easily creates graphs by using ligatures. \"OpenType features are used to interpret and visualize the data. The data remains as editable text, allowing for painless updates.\"\\\n(<https://www.scribbletone.com/typefaces/ff-chartwell>)\\\nI think that this takes our advantages with ligatures to another level, and could make many elements more accessible.\\\nI have also attached an image (FF Chartwell) showing how it works.\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-03-26T16:26:51.102-0400",
      "body": "I have included new icons from UIO, and updated the icon font.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-04-08T14:37:49.875-0400",
      "body": "I was chatting with Arash about internationalization, and how we could try to get a screen reader to read something other than the ligature. For example:\\\n\\<span class=\"showDontSpeak\">tts\\</span>\\\n\\<span class=\"speakDontShow\">Text To Speech\\</span>\\\nThe first span should be displayed using the icon font but not spoken by a screen reader;\\\nthe second span should not be displayed at all, but should be spoken by a screen reader. This second span would be internationalized.\n\nThe question is: What CSS could we use to accomplish this?\n\nI checked the FSS. We don't have a class for \"show-but-don't-speak\", but ARIA has aria-hidden, which is supposed to be for this purpose. I did a bit of quick testing with this:\\\n\\<span aria-hidden=\"true\">tts\\</span>\\\n\\<span class=\"fl-hidden-accessible\">Text To Speech\\</span>\n\nVoiceOver and NVDA did the right thing here, but Jaws (with IE9) ignored the aria-hidden and spoke both strings.\n\nThis information might also be useful for <https://fluidproject.atlassian.net/browse/FLUID-4986#icft=FLUID-4986>\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-09T12:29:17.981-0400",
      "body": "Thanks Anastasia, this looks like a good way to go for this specific case.&#x20;\n\nThe aria-hidden doc states: \\\n\"Authors MAY, with caution, use aria-hidden to hide visibly rendered content from assistive technologies only if the act of hiding this content is intended to improve the experience for users of assistive technologies by removing redundant or extraneous content. Authors using aria-hidden to hide visible content from screen readers MUST ensure that identical or equivalent meaning and functionality is exposed to assistive technologies.\"\n\nI think in the situation of someone who, say, isn't blind but uses a screen reader, the markup would still behave in a reasonable, understandable way. I wonder if adding \"icon\" to the description would help clarify?  \"Text to Speech icon\" ?\n\nNot sure what the solution would be for Jaws. I'll ask Joseph when we chat about 4986.\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-09T12:30:33.700-0400",
      "body": "Arash, I'm assuming there's a limit to the length of a ligature? and spaces? ie. \"Text to Speech\" wouldn't be a viable lig?\n"
    },
    {
      "author": "Arash Sadr",
      "date": "2013-04-09T12:36:08.285-0400",
      "body": "Yes Heidi, we haven't had a problem with the length, but we can't have spaces between the words in ligatures.\n"
    },
    {
      "author": "heidi valles",
      "date": "2013-04-10T13:40:04.896-0400",
      "body": "Just had a big chat with Joseph about aria possibilities. He thinks (and I agree now!) that aria=\"hidden\" wouldn't be appropriate here. The \"MAY\" clause I referenced is somewhat controversial and may be removed at some point. Using aria=hidden on visual elements could be problematic for AT -  for example, it could affect the behaviour of a magnifier. It's possible other ATs might run into issues as well.\n\nUsing icon fonts is bleeding-edge in terms of ARIA, and no real solution is obvious at this time. Joseph will likely bring this up with the ARIA working group, which is cool.&#x20;\n\nOne option we thought of that should be tested is the possibility to set screenreaders to ignore foreign content: skipping over font icons that are represented by unicode (vs a ligature) might be possible and therefore we would not set ligatures for presentational icons.&#x20;\n\nSo in the choice of using an image with role=\"presentation\" vs. a font icon, there is no obvious winner in terms of accessibility. For screenreaders, images work best as they would be skippable, but for visual users, the icon fonts are rendered much better and are easily themable. As we're no strangers to cutting-edge, I think I lean toward the side of using font icons, as long as we properly document the way they behave with screenreaders. And perhaps there is a way to ignore unicode.&#x20;\n\nAlso worth noting is that text that is added via CSS through \"content:\" IS added to the accessibility tree for AT.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-04-29T10:09:15.084-0400",
      "body": "This was further discussed on the fluid-work mailing list.\\\n<http://lists.idrc.ocad.ca/pipermail/fluid-work/2013-April/009016.html>\n\nThe proposal put forward and accept is as follows.\n\nFormal Proposal Regarding Font Icons:\\\n\\==============================\n\nWe should use font icons for relatively simple images that can be represented using a single colour, or a few colours in cases where stacking is appropriate, and which need to be responsive to resolution, size, and colour changes on the fly.\n\nFor complex images, or those that do not require the responsiveness listed above, we should make use of either svg or raster images as appropriate.\n\nGuideline for using Font Icons:\n\n* Use PUA font icons\n* Provide a text alternatives for non-presentational uses\n* Add through CSS using classes\n* Apply the class to add the font icon to an element that will only contain the font icon\n  * e.g. \\<span class=\"addFont\"> font icon \\</span> where \"font icon\" would be the actual font icon displayed.\n"
    }
  ]
}
---
Wiki page: <http://wiki.fluidproject.org/display/fluid/Research+the+viability+of+using+icon+fonts+in+UI+Options>

Creating icons is fairly easy, and there are a lot of free font-icon sets online. The issue is not the icons, but an application that gives us the ability to create a font out of our icons, and a way to create metadata such as ligatures for them.&#x20;

The reason why we think Icomoon <http://icomoon.io/> is our best option is because it provides us with a free offline application that gives us the ability to add our own icons (vectors) to their free icon sets. It also gives us the option to create ligatures for those icons. Free version of Icomoon has a CC Licence 'Attribution 3.0 Unported (CC BY 3.0)"&#x20;

Here are some other tools that we came across and might be useful:

let us add our own icons\
<http://fontstruct.com/>

Have ligatures (not changeable)\
<http://www.zurb.com/playground/foundation-icons>

Have ligatures (not changeable) - IE7+ support\
<http://fortawesome.github.com/Font-Awesome/>\
<http://fico.lensco.be/#code2> (not free)

Just icons\
<http://somerandomdude.com/work/iconic/>\
<http://typicons.com/>\
<http://www.entypo.com/>

not free\
<http://symbolset.com/>\
<http://pictos.cc/font/>\
<http://uicons.co/>\
<https://pictonic.co/>

Criteria used for evaluation:\
Illustrator: I used Illustrator to see what happens when we convert the icon fonts back to vectors, and also how the vectors would look if pixelated.\
InDesign: Testing OpenType options and abilities of the icon fonts. \
Chrome, Firefox, and Safari: Some of the icon font creators including Icomoon, contain an “index.html” file that could be tested with browsers. We tested this file with different browsers to see if the ligatures and text to speech work, and also to see if every icon is being rendered correctly.

Font icons are great because we can easily:&#x20;

* Change the size and color - Shadow their shape&#x20;
* Have different icon sizes in the same font&#x20;
* Do everything image based icons can do, like change opacity or rotate.&#x20;
* Add strokes to them with text-stroke or add gradients/textures with background-clip: text;&#x20;
* Convert them to text&#x20;

They also have some drawbacks:&#x20;

* We cannot have two-toned icons.&#x20;
* We cannot have other languages in metadata, and space is not allowed between the words in the metadata.&#x20;
* Alignment could become an issue&#x20;
* IE8 and IE9 do not support font-icons with ligatures.&#x20;

But before doing anything with these icons, we need to conduct some tests:&#x20;

* Investigate and see if there is a way around for IE8/IE9.&#x20;
* Test and see if PUA (Private use area) works with screen readers in our supported browsers.

        