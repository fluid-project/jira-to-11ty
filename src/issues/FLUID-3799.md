---json
{
  "title": "FLUID-3799",
  "summary": "Create a new Keyboard Accessibility demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Jonathan Hung",
  "date": "2010-10-15T16:23:32.496-0400",
  "updated": "2010-12-15T20:04:46.535-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1120/",
      "key": "FLUID-1120"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-2653/",
      "key": "FLUID-2653",
      "summary": "The keyboard accessibility tutorial doesn't quite work"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3223/",
      "key": "FLUID-3223",
      "summary": "The accessible jquery tabs demo does not switch to a new tab when the enter or space key is pressed."
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-3731/",
      "key": "FLUID-3731",
      "summary": "Consolidate and Organize all current tabs demos/examples into one or two demos"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3799/FLUID-3799-selectors.patch.txt",
      "filename": "FLUID-3799-selectors.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3799/kb_demo.patch",
      "filename": "kb_demo.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3799/Keyboard a11y 2-01.png",
      "filename": "Keyboard a11y 2-01.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3799/Keyboard a11y 2-02.png",
      "filename": "Keyboard a11y 2-02.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3799/Keyboard a11y 2-03.png",
      "filename": "Keyboard a11y 2-03.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-10-15T16:26:24.361-0400",
      "body": "Attached incomplete wireframe.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-15T16:31:12.790-0400",
      "body": "A CSS-only 5-star widget. <http://www.pmob.co.uk/temp/star-rating2.htm> It's Tab-navigable, but we'll want to use the cursor keys on it.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-20T10:46:40.994-0400",
      "body": "Once we have the new keyboard-a11y demo, we'll be getting rid of old accessible tabs demos\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-20T10:51:41.313-0400",
      "body": "Once we have the new keyboard-a11y demo, a new tutorial will be written based on it\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-10-20T11:17:54.754-0400",
      "body": "I've created a branch in the incubator for this work:\\\n<http://source.fluidproject.org/svn/incubator/FLUID-3799-keyboard-a11y-demo/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-20T11:59:03.833-0400",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-01T15:24:56.801-0400",
      "body": "Updated design. Removed messages and updated keyboard instructions.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-16T13:53:32.371-0500",
      "body": "Michelle has reviewed the demo code, recommended improvements, and reviewed the improvements. I think this is ready for a final design review.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-16T13:55:05.273-0500",
      "body": "Jon, I think the code for this demo is pretty much done. When the uploader/pager crunch dies down, could you give it a design review, make any tweaks you might think appropriate? The demo is now accessible in trunk, from the demo portal.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-11-22T14:06:58.969-0500",
      "body": "Updated design for demo with thumbnails along top, and viewer below.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-23T16:30:17.198-0500",
      "body": "Tidies up the CSS, validates the html. \\\nTested on 10.6 FF & Safari, 10.5 FF & Safari, and Win prof IE8, IE7\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-26T16:33:21.715-0500",
      "body": "I think this demo is finally done. It could use one last code review.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-13T17:03:02.955-0500",
      "body": "Hi - I am reviewing the code for this demo. There are a few problematic aspects with the code, highlighted particularly by this line, which occurs at line 66:\n\nvar currImg = $(demo.imageViewer.selectors.image).attr(\"src\");\n\nIn general, the direct use of selectors rather than a component's DOM binder is not to be done - since this configuration is naturally scoped to a particular instance. I'm aware that this is special-purpose code just for this demo, but as we know, the first thing people do when they try to use a new framework is to cut 'n paste code from the demo code in the understanding that this is a best practice. This further highlights the fact that the configuration stored in demo.imageViewer is not properly stored for a component using fluid.defaults but is simply assigned into a global namespace. demo.imageViewer should be a proper fluid component and the line of code pasted above should use its DOM binder to access the image.\n\nLine 56 is also problematic:\n\nvar thumb = (evt.target.nodeName === \"LI\" ? $(\"img\", evt.target) : $(evt.target));\n\nThis makes assumptions not only about the DOM in general but also on the casing of nodeNames which can vary from browser to browser. All of these utility functions from line 26 to 69 should make use of a selector configured via a DOM binder rather than using hard-coded dependencies on node types.\n\nAs a general comment, the \"modern style\" is to expose functions like these as parts of a global namespace so that they can be maximally reused by other code. Again since this is part of a demo rather than framework code this is not critical but it is always helpful to illustrate what we currently believe to be best practices.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T09:58:13.434-0500",
      "body": "Antranig thanks for the review. Regarding line 56 (the check for nodeName \"LI\") - agreed: this definitely needs to be reworked. Regarding the broader question of whether or not the demo itself should be written as a component, this begs a larger question. I will bring the issue up on the fluid-work mailing list.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T10:55:01.891-0500",
      "body": "Reopening to address some of Antranig's comments\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T12:34:59.830-0500",
      "body": "This patch (FLUID-3799-selectors.patch.txt) addresses the second of Antranig's comments: the use of hard-coded element types instead of selectors. Selectors have been defined, and the selectable items have been slightly adjusted so that the activate event and the click event happen to the same element, eliminating the need to figure out where the actual event was.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-14T12:36:32.276-0500",
      "body": "Antranig, I've attached a patch (FLUID-3799-selectors.patch.txt) that addresses the second of your comments (see my comment on the JIRA for more information). Could you please have a look at it? As to re-implementing the whole demo as a component, please see my email to the list.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T20:00:42.424-0500",
      "body": "I've reviewed, tested, and committed Anastasia's latest patch for this issue, which appropriately refactors how we handle selectors throughout the demo. This is sufficient for Infusion 1.3. Given how rich and complex this demo is, I am inclined to agree with the idea that it's a good candidate for component-ification, but this work can easily be done for the Infusion 1.4 release instead.\n\nAnastasia, can you file a separate JIRA for the issue of converting the demo into a component, and I'll close this one.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-15T20:04:45.670-0500",
      "body": "Reviewed, tested, committed, closed.\n"
    }
  ]
}
---
Create a new keyboard accessibility plugin that demonstrates the purpose and usage of the component.

This will replace existing keyboard accessibility demos and be the basis for the tutorial documentation.

For this demo, an thumbnail can have 4 states: focus, selected, focused & selected, and neither (it's a bit clumsy, but helps demonstrate the plugin). If a thumbnail has focus, it does not mean it is shown in the viewer. The user needs to explicitly **select** the image to be viewed. This way the user can move focus to other images while their previous selection stays constant until changed.&#x20;

Here is the breakdown of the keyboard interaction:

1\. The interface is loaded and the first thumbnail is **selected** (but not focused) and shown large in the main viewer.

2\. The user presses tab once and focus moves to the "Keyboard Instructions" link container. The keyboard instructions immediately appear without any need for user action. (if needed revealing the instructions can require keyboard interaction as to not annoy the user with an overlay)

3\. The user presses tab again and **focus** moves to the first thumbnail and **selects** it, or **focus** moves to the last **selected** thumbnail.&#x20;

4\. If the user presses Space bar on a thumbnail that already has focus, nothing happens.&#x20;

5\. If the user presses Right or Left arrow keys, the **focus** will move to the next image. Performing this action will not change the **selection**.

6\. If focus is in the thumbnail filmstrip and the user presses Tab key, the focus then moves to the main image. If there is Alt Text associated with the image, it will be presented visually to the user.

7\. The user presses tab and focus now moves from the main image to the 5-Star ranking widget. Upon focus of this container, instructions are presented to the user letting them know that Left and Right arrow keys will change their selected ranking.

8\. With focus on the 5-star widget, the user can press left to decrease, or right to increase the ranking. The value selected persists during the demo session.

Notes on mouse interaction:\
Mouse interaction behaves the same way as the keyboard interaction. Whenever an interesting container gains focus by clicking, an instructional message appears to let them know what they can do. The only significant addition to the mouse interaction is the hovering behaviour:

1\. User can mouse hover over a thumbnail and it changes to the **focus** style, but the previous **selection** stays the same.\
2\. The 5-star widget will react if the user is hovering over it. For example, if the user hovers over the 3rd star, stars 1, 2, and 3 will activate showing the user the result if they click where they are hovering.

Implementation detail on the 5-star widget:\
I have seen an unordered list implementation of the 5-star widget that uses CSS only and reacts to mouse hovers without any Javascript. The only Javascript required for the 5-star widget is to keep track of the rank values for each image during the demo. This way there is some persistence to the user's rankings in a single session of the demo.

Keyboard wrapping for the reorderer is enabled.

        