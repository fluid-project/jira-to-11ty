---json
{
  "title": "FLUID-5708",
  "summary": "On off toggle styling needs to be update due to overflow into adjacent panels",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Kaye Mao",
  "date": "2015-07-16T14:23:36.895-0400",
  "updated": "2017-04-10T15:12:41.035-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5686/",
      "key": "FLUID-5686",
      "summary": "Checkboxes are represented inconsistently "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5538/",
      "key": "FLUID-5538"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5678/",
      "key": "FLUID-5678"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5738/",
      "key": "FLUID-5738"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5708/figure1.png",
      "filename": "figure1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5708/figure2.png",
      "filename": "figure2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5708/figure3.png",
      "filename": "figure3.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5708/figure4.png",
      "filename": "figure4.png"
    }
  ],
  "comments": [
    {
      "author": "Kaye Mao",
      "date": "2015-08-12T09:58:21.112-0400",
      "body": "New user interface styling includes new toggles <https://fluidproject.atlassian.net/browse/FLUID-5738#icft=FLUID-5738>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-11T14:48:32.365-0400",
      "body": "The figures attachments are missing; however due to the detailed descriptions, complexity of recreation, and need to completely refactor, I have not replaced them at this time. If someone has time to do that in the future before the on/off toggles are refactored, it would be appreciated.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-19T13:54:35.662-0500",
      "body": "The on/off toggles should be restyled as per new designs ( <https://wiki.fluidproject.org/display/fluid/%28Floe%29+User+Interface+%28Learner%29+Options+Mobile+and+Responsive+Design> )&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-19T15:08:29.757-0500",
      "body": "Look into reusing code developed in this PR <https://github.com/fluid-project/infusion/pull/726>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-09T15:05:54.535-0500",
      "body": "The on/off toggles should respond to the \"inputs larger\" adjuster.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-14T09:44:10.660-0500",
      "body": "First pass at styling using :before and :after pseudo elements. I'm afraid that this will be brittle though.\\\n<https://jsfiddle.net/cu09c3st/6/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-14T15:06:09.589-0500",
      "body": "Another options with more structure. Could clean up the CSS and class usage.\\\n<https://jsfiddle.net/zxm507Lg/1/>\n\nWorking implementation on Safari and Chrome:\\\n<https://jsfiddle.net/zxm507Lg/8/>\n\nCross-browser working implementation:\\\n<https://jsfiddle.net/zxm507Lg/11/>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-03T15:18:18.781-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/811> has been merged into the project repo master branch at bc7374793cd254f84b56750e9c10c3660398d4e1\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-04-10T15:12:41.035-0400",
      "body": "[The respective infusion-docs pull request](https://github.com/fluid-project/infusion-docs/pull/119) has been merged into the project repo master branch at 47114433f7ac15feafffc594080118e1f6732eae\n"
    }
  ]
}
---
To replicate navigate to infusion/examples/framework/preferences/conditionalAdjusters/

Make sure there are no elements before the toggle as the vertical spacing providing by the elements will prevent the bug from triggering.

Click on/off toggle, in the "on" state, there will be overflow onto the adjacent panels.

figure 1. In css, remove overflow hidden for the toggle. Toggling "on" in the speaking panel causes overflow into the increase size panel pushing the header down

figure 2. In css, remove "list-style: hidden". Assuming it's an overflow issue, the overflow onto adjacent panels is entirely fixed but the styling for the on-toggle is broken. Meanwhile the off-toggle is not affected. \
Removing resetting list-style to default in css fixes the overflow issue.

figure 3. There is an input checkbox hidden with css according to a foundation hack (see link below) that requires a "position: absolute" that when revealed is about the same size as the overflow space. \
Unhiding the hidden checkbox also fixes the overflow issue

Other notes: figure 4. display-inline will temporarily fix the issue as it will align the space for the hidden checkbox with the space for the visible toggle. However it introduces the overflow issues into the prefs framework demo. Most likely caused by some combination of the toggle styling and hidden checkbox.&#x20;

Suggested solution is to completely refactor the styling and semantics of the on/off toggle to make the toggle more robust and resolve this issue moving forward.

—

The foundation hack that is applied to the checkbox to make it visibly hidden but accessible: \
Show for screen readers only\
<http://foundation.zurb.com/docs/components/visibility.html>

.show-for-sr {\
clip: rect(1px, 1px, 1px, 1px);\
height: 1px;\
overflow: hidden;\
position: absolute !important;\
width: 1px;\
}

        