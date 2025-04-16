---json
{
  "title": "FLUID-6394",
  "summary": "The Orator's selectionReader control does not factor in margins for placement",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2019-08-13T14:34:30.521-0400",
  "updated": "2019-10-31T12:01:44.566-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "Self Voicing",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-283/",
      "key": "SJRK-283",
      "summary": "Selection Reader play button is not displayed in the correct location in the editor preview"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6394/orator demo issue.png",
      "filename": "orator demo issue.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6394/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-08-13T14:38:46.860-0400",
      "body": "screenshot.png shows the play button rendered below the selected text.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-09-05T12:40:31.875-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/960) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/b024bff871a7d4a73a3fc8f609d8dfd08149f209).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-10-03T12:38:39.590-0400",
      "body": "I've re-opened the issue. While the above PR addressed the issue found on <https://morphic.world/> with UIO+ and did not demonstrate any adverse affects on the prefs framework demo, it broken the Orator's own demo. Will update the description.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-10-03T13:30:50.987-0400",
      "body": "Added \"orator demo issue.png\" which shows the play button far above the selected text in the Orator demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-10-08T10:32:36.761-0400",
      "body": "In speaking with Jonathan Hung and Gregor Moss it came up that the absolute positioning is relative to the closest positioned parent. ( see: <https://developer.mozilla.org/en-US/docs/Web/CSS/position> ). The above code made the assumption that it was always positioning against the document. Also, it was discussed that it might be helpful to break this positioning piece out of the Orator so that it can can be used by other widgets in the future.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-10-31T12:01:39.830-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/963) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/345496b1c5fce5d64ee69a5b5415530ee1426aa9).\n"
    }
  ]
}
---
When determining its placement, the selection reader does not factor in the margin of its container. This can cause it to shift quite widely as seen in <https://issues.gpii.net/browse/GPII-3767>

 

The above was fixed with PR ( <https://github.com/fluid-project/infusion/pull/960> ); however, in doing so it broke the Orator's demo.

Steps to reproduce:

1. Open the [Orator demo](https://build.fluidproject.org/infusion/demos/orator/)
2. Select some text 

Notice that the play button is displayed far from the selection.

 

It seems that just factoring in the margins was an overly simplistic understanding of the issue. The Orator demo also has a margin but accounting for it, actually causes the play button to appear far away. It may in fact be related to the container that either the content and/or the play button is located in. For example, the CSS position style directive may play a part. 

Modifying the fluid.orator.selectionReader.calculatePostion like below has some success, but still cannot account for all cases. 

In the code example below we find the parent's position either using jQuery's `offset` or `position` functions. We use these to find the position of the element relative to the document. The DOMrect's provide positioning based on the viewport. So we use the parent's DOMRect to compare against the selection's DOMRect and attempt to use this to determine where the selection in in relation to the document position as found using the jQuery methods. We then use this to pass along CSS top and left properties to absolutely position the button. However, I've had mixed results when there is absolute and relative positioning in the Orator demo vs through UIO+ on the [https://morphic.world](https://morphic.world/) website. The position still isn't accurate across both cases.

```java
fluid.orator.selectionReader.calculatePosition = function (range, fontSize, offsetScale) {
        var edgeOffset = fontSize * (fluid.get(offsetScale, "edge") || 1);
        var pointerOffset = parseFloat($("html").css("font-size")) * 1.8;
        var rangeRect = range.getBoundingClientRect();
        var parent = range.startContainer.parentElement;
        var parentRect = parent.getBoundingClientRect();
        var isPositioned = $(parent).offsetParent().css("position") !== "static";
        var parentPosition = isPositioned ? $(parent).offset() : $(parent).position();        var position = {
            top: (parentPosition.top - parentRect.top) || - parseFloat($(parent).css("font-size")),
            left: parentPosition.left + (rangeRect.left - parentRect.left)
        };        if (rangeRect.top < edgeOffset) {
            position.top = position.top + rangeRect.bottom + pointerOffset;
            position.location = fluid.orator.selectionReader.location.BOTTOM;
        } else {
            position.top = position.top + rangeRect.top - pointerOffset;
            position.location = fluid.orator.selectionReader.location.TOP;
        }        return position;
    };
```

        