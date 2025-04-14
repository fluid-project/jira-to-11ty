---json
{
  "title": "FLUID-4267",
  "summary": "Create a merge branch of all the ongoing UI Options work so that we can see the in progress, integrated work that is not quite ready to be pushed into the project repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-05-26T16:02:38.988-0400",
  "updated": "2011-06-21T10:09:48.172-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-27T10:52:16.797-0400",
      "body": "I will be merging my UIO test page into this branch, from my branch:\\\n<https://github.com/acheetham/infusion/tree/FLUID-4203-newUIOptionsPage>\\\nThis is a page that contains many different types of fields, styles, etc. to try to get good coverage of transformations.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-27T10:53:06.194-0400",
      "body": "I will also be merging in the yellow/black themes from\\\n<https://github.com/acheetham/infusion/tree/FLUID-4218-yellowBlackThemes>\\\nonce they are complete (next week).\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-27T13:30:55.442-0400",
      "body": "New UIOptions test page branch 4203 added at commit 77d6c95a154c1dccc302, based on\\\n<https://github.com/acheetham/infusion/tree/FLUID-4203-newUIOptionsPage> \\\nThe test page is in the standalone-demos folder for now.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-05-27T16:59:56.058-0400",
      "body": "Merged in:\\\n<https://github.com/heidiv/infusion/tree/FLUID-4229>  (full no preview)\\\nand\\\n<https://github.com/jobara/infusion/tree/FLUID-4023> (fss clearfix)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T11:58:32.371-0400",
      "body": "Edited the description to list all the branches merged into the branch.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T12:16:53.270-0400",
      "body": "Our expectations for the branch on May 31, 2011 are:\n\n* UI Enhancer and Slider tests pass\n* Full Preview UI Options demo is working\n* Full without preview demo is working\n\n- UI Options tests fail\n- Fat Panel UI Options demo is not working\n- Integration demos are not working\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T12:25:05.705-0400",
      "body": "When pushing to this branch, please do the following three things:\n\n1\\. make sure everything that **was** working is still working \\\n2\\. update the JIRA to state what branch you've merged or if you made the change directly what JIRA it was for \\\n3\\. comment on the JIRA with the branch expectations after your push\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-05-31T12:41:55.675-0400",
      "body": "Merge the following changes from my branch <https://github.com/cindyli/infusion/tree/FLUID-4216> for <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216> @commit 8010b01799e3d6b660e0&#x20;\n\n1\\. implemented the multiplier for font size and line spacing;\\\n2\\. modified the textfield slider to increment in 0.1;\\\n3\\. set the default min/max values on the sliders for font size and line spacing to 1;\\\n4\\. use px instead of pt for font size.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T15:08:35.974-0400",
      "body": "The UI Enhancer tests are now broken - Cindy is looking at reviving them.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-05-31T15:10:42.740-0400",
      "body": "Merged in <https://github.com/michelled/infusion/tree/FLUID-4235> which changes the contract of the UIEnhancer and introduces a page enhancer that is stored in the static environment.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-01T14:26:10.558-0400",
      "body": "Merged in more changes for <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216> at commit a87ecf64aaf40354573c:\n\n1\\. Fixed the broken UI Enhancer tests due to my previous commit; \\\n2\\. Implemented a component to apply specific css styles to the options on the dropdown list of \"text style\" and \"colour & contrast\" that each option targets for; \\\n3\\. Modified the UI Options tests to adapt the text size multiplier; \\\n4\\. Changed a couple of file permissions from 755 to 644.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-02T14:46:16.171-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230> updated:  Fat Panel component added, aria Tabs and tab wrapper component added, dependency files updated. &#x20;\n\n* Fat Panel now working, tho live preview is including UIO itself and shouldn't (<https://fluidproject.atlassian.net/browse/FLUID-3761#icft=FLUID-3761>).\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-03T11:14:08.858-0400",
      "body": "Merged <https://fluidproject.atlassian.net/browse/FLUID-4228#icft=FLUID-4228>: js file for FullPreview version, updated demo to use it.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-03T12:32:46.561-0400",
      "body": "Merged in <https://github.com/michelled/infusion/tree/FLUID-4265> at revision 4faf4acfa010d11919ee9df0cd93113f7548b09e\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-03T12:40:07.940-0400",
      "body": "Our expectations for the branch on June 3, 2011 are:\n\n* All tests pass in FF\n* All three demos are working\n\n- Integration demos are not working&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-03T14:46:11.678-0400",
      "body": "Merged <https://github.com/michelled/infusion/tree/FLUID-4262> at f21c2ab5432ea14a35ac9ca950f6e306aea81cb0\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-03T16:40:09.596-0400",
      "body": "Pushed in the fix for <https://fluidproject.atlassian.net/browse/FLUID-4277#icft=FLUID-4277> at revision 1c25cfac4a50e63bb3e3 to fix the asynchronous template loading issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-06T10:34:28.493-0400",
      "body": "The full list of commit logs for this branch is:\n\nMerge branch 'FLUID-4267'\n\n* <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>:\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4277#icft=FLUID-4277>: Sloved the async template loading issue that causes the ui options tests fail on firefox.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4262#icft=FLUID-4262>: Fixing the integration demo to work with the new settings.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4262#icft=FLUID-4262>: Reviving the uiEnhancer.updateModel\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Removed preview image dir from demo\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Added full no preview component and added to demo\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4265#icft=FLUID-4265>: Split the store tests out from UIEnhancer. Added Store.js to the demos and tests.  Moved the demands block for set\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4228#icft=FLUID-4228>: De-tabbed, linted js file\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4228#icft=FLUID-4228>: Created js file for Full with Preview version of UIO and added to demo\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>: Refactored the textfieldSlider tests slightly.  More tests to be added in the <https://fluidproject.atlassian.net/browse/FLUID-4208#icft=FLUID-4208> branch.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: fixed path to ariaTabs in demo\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4265#icft=FLUID-4265>: Pulling the storage strategy for settings out of UIEnhancer. Moving defaultSiteSettings into uiOptions.store.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: style clean up, removed fat demo js file (not used)\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>:  Move validateValue() tests out of UIOptions and into TextFieldSlider tests\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fixed save button check\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Dependency updates\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Reverted UIO amalgateClasses work, moved tabs to be subcomponent of UIO instead of FPanel, moved ariaTabs and adde\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>:  Make validateValue() function of the textSlider public and add unit tests for this function\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Added almalgateClass to fetchResources in UIOptions.js, so it waits for control templates to load as well. Add pri\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>: Added UIO component unit tests.  Much more to follow.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216>: Implemented a component to apply specific css styles to the options on the dropdown list of \"text style\" and \"colo\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fat panel js, commenting out enhancer to debug\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fat panel js, UIOptions as subcomponent\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4235#icft=FLUID-4235>: Fixing a bug in the UIEnhancer which references 'container' instead of 'that.container'. Updating FullPreviewUIOpt\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4235#icft=FLUID-4235>: Created the pageEnhancer and moved the global UIEnhancer into the static environment. Started to remove UIOptions \\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fat Panel js\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216>: 1. implemented the multiplier for font size and line spacing; 2. modified the textfield slider to increment in 0.1\\\n  &#x20;    FLUID\\_4267:  Auto-save component option\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Clean up for control templates, affecting full with and without preview UIOptions layouts\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4267#icft=FLUID-4267>: removed the comment on event bindings that was introduced by mistake.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Uncommented bindhandler line\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Cleaning up css for control templates and full UIOptions\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4203#icft=FLUID-4203>: Adding UIOptions test page.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Styling control templates for full no preview. Cleaning up css in general\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4229#icft=FLUID-4229>: Added control templates to Full no preview\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Linting\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Fixing up unit tests and component code with Justin\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Converted the animation to invokers\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Fixing up unit tests and component code with Justin\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fat Panel styling\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Fat Panel styling\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4216#icft=FLUID-4216>: Replaced all {controls}s with {uiOptions}s and fixed unit tests.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Adding control templates to fat panel\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Adding JQ UI tabs to fat panel layout\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Moving jq UI tabs from /demos/lib to /lib\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Moving jq UI tabs from /demos/lib to /lib\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4230#icft=FLUID-4230>: Merging, adding JQ UI tabs to fat panel layout\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Added events to Sliding Panel component. Unit tests need tweaking\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Added events to Sliding Panel component. Unit tests need tweaking\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4203#icft=FLUID-4203>: Re-adding test file after graph-flip fix caused reversion.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Refactored Sliding Panel component and started unit tests\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Removed tabs js, to be replaced with jQuery UI tabs\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Getting live preview basically working\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Fixed vertical alignment of columns\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-4217#icft=FLUID-4217>: Start of the SlidingPanel component\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Fixing column styling in full page no preview UIO\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Tabs component in the works\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Sliding panel component almost done, tab component half done\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Separated out full page UIO styles\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Refactoring CSS to separate out full page UIO styles\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Removed standalone demos, moved into regular demo area; created new demo for no preview UIO\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Starting the tabs component\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Creating new full page without preview template\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Fat Panel styling\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Separated full page with preview configuration out, and made UIOptions.css a global stylesheet for all configurati\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Fixed paths in full preview demo, continued work on fat panel\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Styling and markup tweaks to the full page UI options to match wireframes\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Fat panel work, tabs\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Tweaking layout styles and adding cancel and save icons\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Restructuring UIO demos to include different layouts, adding Fat Panel version\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Modified slider styling.\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Clean up of UIO for 1.4 styling\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: UIO 1.4 styling\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Backed-out the rich dropdown\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Adding in rich dropdown jquery ui plugin\\\n  &#x20;    <https://fluidproject.atlassian.net/browse/FLUID-3782#icft=FLUID-3782>: Adding in rich dropdown jquery ui plugin\\\n  &#x20;    Starting changes to UIO for 1.4, based on James's mockups\\\n  &#x20;    Starting changes to UIO for 1.4, based on James's mockups\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-06T10:35:42.279-0400",
      "body": "Branch merged into project repo at: aa5efc1e1a20aaa152f2e7e2d4edfbb35e08c5ea\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T10:09:48.166-0400",
      "body": "<http://issues.fluidproject.org/browse/FLUID-3761> was also fixed in this branch&#x20;\n"
    }
  ]
}
---
There is a lot of simultaneous and inter-related work happening on UIOptions right now which isn't quite ready to be pushed into the project repo. I will create a branch that merges all this work together.&#x20;

These are the branches that will be merged:

<https://github.com/heidiv/infusion/tree/FLUID-3782>\
<https://github.com/heidiv/infusion/tree/FLUID-4230>\
<https://github.com/cindyli/infusion/tree/FLUID-4216>\
<https://github.com/heidiv/infusion/tree/FLUID-4217>\
<https://github.com/acheetham/infusion/tree/FLUID-4203-newUIOptionsPage> \
<https://github.com/acheetham/infusion/tree/FLUID-4218-yellowBlackThemes> \
<https://github.com/heidiv/infusion/tree/FLUID-4229>\
<https://github.com/jobara/infusion/tree/FLUID-4023>\
<https://github.com/cindyli/infusion/tree/FLUID-4216> \
<https://github.com/michelled/infusion/tree/FLUID-4235>\
<https://github.com/michelled/infusion/tree/FLUID-4265>\
<https://github.com/michelled/infusion/tree/FLUID-4262>

Changes made directly are:

FLUID-4221\
FLUID-4208\
FLUID-4228

        