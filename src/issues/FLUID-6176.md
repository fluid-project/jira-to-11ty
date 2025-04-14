---json
{
  "title": "FLUID-6176",
  "summary": "Implement a highlight to indicate which text is being self voiced",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-08-01T09:15:07.714-0400",
  "updated": "2018-07-20T10:45:41.218-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6175/",
      "key": "FLUID-6175",
      "summary": "Implement a self voicing widget with a play/pause button"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6280/",
      "key": "FLUID-6280"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-08-02T09:00:50.597-0400",
      "body": "The onboundary event is fired at the beginning of the boundary. For example \"text to speech\" would fire 3 onboundary events at charIndex 0, 5, 8, and provide the event name \"word\".\n\n<https://developer.mozilla.org/en-US/docs/Web/Events/boundary>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-02T14:27:04.395-0400",
      "body": "MS Edge and FF also output charLength in the onboundary event. However, chrome and safari do not.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-02T16:25:17.521-0400",
      "body": "Example of using a range to select a portion of text. <https://jsfiddle.net/7zzg5z4e/5/>\n\n \n\nSee: <https://stackoverflow.com/questions/27435485/dom-range-setstart-setend> for an explanation and another example.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-03T16:09:36.837-0400",
      "body": "Another example where text is parsed and we insert a mark to highlight by word. <https://jsfiddle.net/7513d3dz/1/>\n\n \n\nHowever, the interval throws errors because of the insertion of the {{\\<mark>}}. When we insert the mark element, it actually changes the DOM structure. When we remove the {{\\<mark>}} element wrapping the text, it actually adds it back in as a new text node, rather than it rejoining the text node it had been part of.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-03T16:17:53.878-0400",
      "body": "Can use [normalize()](https://developer.mozilla.org/en-US/docs/Web/API/Node/normalize) to correct the text nodes after the `<mark>` is removed. In the example above this would need to be run like `data.parentNode.parentNode.normalize(), after the <mark>` is removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-03T16:32:52.662-0400",
      "body": "Updated the jsfiddle example with a working interval highlighting words. <https://jsfiddle.net/7513d3dz/2/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-03T16:35:54.467-0400",
      "body": "<https://jsfiddle.net/7513d3dz/3/> shows that it doesn't work with nested DOM nodes. It is failing on the normalize step.\n\n \n\n```java\n<p class=\"read-block\">\r\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown <a href=\"#\">printer</a> took a <strong>galley of <em>type</em> and scrambled</strong> it to make a type specimen book.\r\n</p>\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-04T03:43:53.787-0400",
      "body": "On further investigation, the above issue may not be specific to multi-level nested DOM elements, but rather having more than a single word in any nested DOM element.\n\nwould work:\n\n```java\n<p>\r\nsome text that is <strong>bold</strong>\r\n</p>\n```\n\nwouldn't work:\n\n```java\n<p>\r\nsome <strong>text that is bold</strong>\r\n</p>\n```\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-04T12:10:50.920-0400",
      "body": "The nested DOM issue was discussed in the fluid-work IRC channel ( <https://botbot.me/freenode/fluid-work/2017-08-04/?msg=89402736&page=2> ). We will try to keep a stack of DOM nodes when generating the ranges and inserting/removing the `<mark>`\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-08T10:45:23.517-0400",
      "body": "An example of an implementation that can handle nested DOM nodes ( <https://jsfiddle.net/7513d3dz/5/> ). This doesn't use a stack, but rather tracks the index of the child node, relative to its parent, and uses this to find the nodes reference. With this information, the node can be relocated after its parent has been normalized.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-11-01T10:21:46.127-0400",
      "body": "Spoke with @@Joseph Scheuhammer today and he suggested to use \\[Range|<https://developer.mozilla.org/en-US/docs/Web/API/Range>] to get the rendered text for self voicing and highlighting. This would hopefully avoid the text that is not rendered.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2017-11-01T10:48:59.317-0400",
      "body": "@@Justin Obara, the following seems to do the job by creating a range of selected text, but I've only tried FireFox:\n\n```java\nfunction makeAndGetSelectedText (root) {  // root is an element in the DOM\r\n    var range = document.createRange();\r\n    range.selectNode(root);\r\n    window.getSelection().addRange(range);\r\n}\r\nwindow.getSelection().toString();  // will produce a string of just the rendered text.\n```\n\nNote: use the `toString()` of the `Selection` object, not the `Range` added to that selection.  See [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) documentation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-19T16:12:24.242-0400",
      "body": "May be able to use innerText to get the rendered/visible text. <https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2018-05-01T17:04:32.249-0400",
      "body": "There's an issue with `innerText`, @@Justin Obara.  It will not return any CSS content associated with the element, just the DOM text.  Which belies the Mozilla documentation about retrieving the \"rendered\" text.\n\nFor example, given the following, `innerText` will be just \"A special paragraph\", but it *renders* onscreen as \"Special! A special paragraph, after special\":\n\n```java\n<style>\r\n  p.special:before {content: \"Special! \" }\r\n  p.special:after {content: \", after special\" }\r\n<style>\r\n...\r\n<p class=\"special\">A special paragraph</p>\n```\n\nYou can see it here: <http://clown.idrc.ocad.ca/Fluid/aria/cssContent.html>\n\nNote that users can neither select/highlight such CSS content, nor search for it, giving ample reason for authors to avoid adding content via CSS. I'm not sure if `Selection` objects suffer the same fate.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-05-02T08:58:24.519-0400",
      "body": "@@Joseph Scheuhammer thanks for the update. There was another issue with inner text in that if it is just called on a hidden element it will return the text. At the moment I'm using it as one means of testing if an item has rendered text. Although I suppose if it were the case that all of the text in a element were added with :before and :after, then it would be missed.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2018-05-02T10:08:57.374-0400",
      "body": "@@Justin Obara, following up on my statement: \"I'm not sure if `Selection` objects suffer the same fate.\"  They do.  Running the routine outlined in [my earlier comment](#comment-37532) yields \"A special paragraph\", just as `innerText` does. As before highlighting CSS content is a no-go.\n\nThanks for pointing out the issue with `innerText` and hidden elements. That just reinforces the fact that `innerText` has nothing to do with *rendered* text. It's strictly a DOM operation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-05-04T08:22:51.129-0400",
      "body": "@@Joseph Scheuhammer I've created a JSFiddle ( <https://jsfiddle.net/5ocossLq/1/> ) to demonstrate how the elements are checked. \n\nYes, if the element has text set only with pseudo elements, it will consider it to not have rendered text. Although in reality what I'm checking for is less about rendered text and more about text that should be read from the interface. For example text that has aria-hidden=\"true\" is not read, but text that is hidden offscreen is. At the moment we neither support highlighting nor reading of content added with pseudo elements. I've filed this as <https://fluidproject.atlassian.net/browse/FLUID-6280#icft=FLUID-6280>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2018-05-04T16:53:07.189-0400",
      "body": "@@Justin Obara I see what you are saying, and suggest that we stop using the phrase \"rendered text\", although I am hard pressed to say what phrase should be used instead.  That's partly because one can't rely simply on these factors in isolation.  Take offscreen text for example:  what is the result of a case where the text is both offscreen and has 'display:none'?  My intuition here is that it's not read – 'display:none' wins.  Also, consider focus and maybe focus-ability.  For example, what happens if an element has 'aria-hidden=\"true\"', but the element becomes focused, firing a focus event?  Screen readers will ignore aria-hidden here; the focus state wins.\n\nThen there is the conundrum of 'aria-hidden=\"false\"' and 'display:none'.  Some have said it should not be spoken by a screenreader while others would say it should be.  The type of user may be another consideration:  blind users should hear such text (maybe), but a sighted user with a cognitive impairment or a screenreader+magnifier user would not.  Hearing something that you can't see would be confusing.\n\nI wonder if the accessibility API would help here:  instead of \"rendered text\", let's speak of \"accessible text\".  According to [this article](https://www.marcozehe.de/2018/04/11/introducing-the-accessibility-inspector-in-the-firefox-developer-tools/) the AOM is supposed to land in FireFox 61, due this July.  I've tried out a beta in their nightly build with your JSFiddle.  Oddly, the text for the 'aria-hidden=\"true\"' is available in the tree, but perhaps this is a bug.  On the other hand, the accessibility inspector shows the text for CSS :before and :after.  Your example case that also uses these pseudo elements with a text node yields:\n\n* cell:\n  * statictext: \"before\"\n  * text leaf: \"Test\"\n  * statictext: \"after\"\n\nIn other words, the text specified by the pseudo elements are there in the AOM.\n\nOther points:\n\n* The proposed [JavaScript interface](https://wicg.github.io/aom/spec/#extensions-to-the-element-interface) to this information appears non-functional.  I don't know when it will be available.\n* The AOM is also in development for Chrome and Safari, but I couldn't find an ETA.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-05-07T10:46:09.550-0400",
      "body": "@@Joseph Scheuhammer I've renamed the method to hasTextToRead\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-20T10:45:41.216-0400",
      "body": "Addressed with PR ( <https://github.com/fluid-project/infusion/pull/903> ) for <https://fluidproject.atlassian.net/browse/FLUID-6177#icft=FLUID-6177> merged into the project repo at 272cf702d5bf749172c0ba2015ba00dcceb526b1\n"
    }
  ]
}
---
Based on the designs, <https://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1?preview=/32014373/34734325/uio_tts2.jpg>. 

As a page is being self voiced, the currently synthesized text should be highlighted. Likely this will refer to the block of text that is currently being read out of the queue. When paused, this block of text should remain highlighted.

        