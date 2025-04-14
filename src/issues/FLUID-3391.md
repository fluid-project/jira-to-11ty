---json
{
  "title": "FLUID-3391",
  "summary": "The wrapping of selection and reordering items via keyboard should be configurable",
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
  "date": "2009-11-26T15:42:32.000-0500",
  "updated": "2010-11-08T04:28:51.252-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/20100105_wrappingSwitch.patch",
      "filename": "20100105_wrappingSwitch.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.patch",
      "filename": "FLUID-3391.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v10.patch",
      "filename": "FLUID-3391.v10.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v11.patch",
      "filename": "FLUID-3391.v11.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v12.patch",
      "filename": "FLUID-3391.v12.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v2.patch",
      "filename": "FLUID-3391.v2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v3.patch",
      "filename": "FLUID-3391.v3.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v4.patch",
      "filename": "FLUID-3391.v4.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v5.patch",
      "filename": "FLUID-3391.v5.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v6.patch",
      "filename": "FLUID-3391.v6.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v7.patch",
      "filename": "FLUID-3391.v7.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v8.patch",
      "filename": "FLUID-3391.v8.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3391/FLUID-3391.v9.patch",
      "filename": "FLUID-3391.v9.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:24:47.000-0400",
      "body": "This will be a critical fix for future versions of Decapod, as well as being a great a11y improvement. I've assigned it to Jonathan to help coordinate it with Decapod.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:00:53.712-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-17T11:13:13.035-0400",
      "body": "Link to conversations from the fluid-work mailing list\\\n<http://old.nabble.com/Wrapping-around-in-ListReorderer-to26634522.html#a26750933>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-04T15:24:30.330-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-21T17:07:22.347-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>: <https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.patch gives the user the ability to turn on and off elements wrapping via keyboard.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-22T11:30:24.429-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>: <https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v2.patch made some code changes. Also it includes everything from <https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.patch.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-22T12:14:07.347-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v3.patch made some code changes. Includes everything from previous patches.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-10-22T13:50:39.067-0400",
      "body": "Hi Golam - this patch is pretty good and addresses the more difficult part of the problem, which is modifying the geometric strategies to account for wrap locking. However, in our original implementation it was revealed that a lot of subtle bugs can result from trying to use a Geometric strategy in the \"covariant\" direction of the Reorderer, that is, the direction specified as the dominant orientation in the top-level configuration. So what needs to be done is to create a \"disableWrap\" version of the logical strategy to be used in this case - so, for example, on this section of the patch for Reorderer.js\n\n@@ -675,7 +684,7 @@\n\nthat.getRelativePosition = \\\nfluid.reorderer.relativeInfoGetter(options.orientation,&#x20;\n\n* &#x20;               fluid.reorderer.LOGICAL\\_STRATEGY, fluid.reorderer.SHUFFLE\\_GEOMETRIC\\_STRATEGY, \\\n  \\+                 dropManager.disableWrap ? fluid.reorderer.SHUFFLE\\_GEOMETRIC\\_STRATEGY : fluid.reorderer.LOGICAL\\_STRATEGY   , fluid.reorderer.SHUFFLE\\_GEOMETRIC\\_STRATEGY, \\\n  &#x20;                 dropManager, dom);\n\nyou subsitute a goemetric strategy for the logical strategy in the case of disableWrap which will cause problems.\n\nSo, what the implementation requires is a modification of the getRelativeElement function (currently on line 455 of GeometricManager.js) to have signature\n\nfunction getRelativeElement(element, direction, elements, disableWrap) {\n\nAlthough I said on our phone chat that we might want to create new versions of all the strategies, I am thinking now this is probably rather silly. What there should be instead is a modification of all of the signatures of the existing strategies - so that we now have\n\nthat.logicalFrom = function (element, direction, includeLocked, disableWrap)\\\nthat.lockedWrapFrom = function (element, direction, includeLocked, disableWrap)\\\netc.\n\nsince actually EVERY strategy we have currently can be varied in this way.\n\nI couldn't see from your patch how it set about disabling wrapping for the ListReorderer - the \"disableWrap\" argument is present as configuration, and handed down to the dropManager - but as it stands now, the logicalFrom strategy would still perform wrapping? Which configurations of the Reorderer did you test your patch with?\n\nAlso, I don't believe we want this new behaviour to become the default - we can't change the behaviour of all reorderers for all existing users.\n\nAlso I want to query the subtask I see on this issue \"Turning wrapping on/off via a function call after initialization\" - what is motivating this task?\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-27T11:31:22.904-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>: <https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v4.patch contains all the changes from v1-v3 patches and necessary test cases. Note: still in process of refactoring some of the test cases&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-28T18:09:01.857-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v5.patch which contains everything from previous versions including test cases which was re-factored.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-10-29T15:22:22.418-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v6.patch which contains everything from previous versions including test cases which was re-factored.&#x20;\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-01T15:07:32.200-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v7.patch which contains everything from previous versions and re-factor of codes.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-01T16:36:13.584-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v8.patch contains all changes from previous versions.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-01T17:37:47.472-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v9.patch contains everything from previous versions.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-02T16:08:45.002-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v10.patch contains everything from previous versions and re-factored codes.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-04T04:42:31.254-0400",
      "body": "Hi golam - my suggestion for patch \"10\" is that it should be possible to make a better consolidation of the three \"step\" test functions than \"commonAction\". These functions overall all take the same arguments, and the points of variability are \\\ni) the different markup selected for \"focusItem\" which could be supplied as a function handle, ii) the different argument to bindReorderer, and iii) the difference in the precise method of simulating the keypress - which I'm not actually sure why this varies - why does moduleLayout use compositeKey and the other two use arg.key (ctrlKeyEvent) - would it be possible to consolidate these also?\n\nA suitable signature might be \\\nfluid.testUtils.reorderer.stepReorderer(container, options) where options contains \\\n{ \\\nreordererFn\\\nreordererOptions\\\ndirection\\\nexpectOrderFn\\\nexpectedOrderArrays\\\nfocusElementFn\n\nyou can then use fluid.invokeGlobalFunction(options.reordererFn, \\[container, options.reordererOptions]) to construct the reorderer etc.\\\nthen options.expectOrderFn(that, expectedOrderArrays\\[etc.]\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-04T18:07:51.722-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v11.patch contains everything from previous patches and some re-factored codes.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-05T05:11:31.783-0400",
      "body": "Hi there Golam - v11 of the patch looks good. Just to tidy up i) since just one function call now exists to \"commonAction\" it should simply be folded into the main body of the caller, especially since it has no particularly well-defined function of its own, ii) please ensure that all tabs are converted to spaces in the patch (see if someone can help you out with Eclipse/Aptana settings) and then we can get the patch committed - thanks for all your hard work on this, Antranig.\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2010-11-05T11:33:00.188-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-3391#icft=FLUID-3391>.v12.patch contains everything from previous patches and some code cleanup with JSLint.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-11-08T04:28:51.030-0500",
      "body": "Committed at revision 10190\n"
    }
  ]
}
---
The wrapping of selection and reordering items via keyboard should be configurable

Some users, for example those using AT's, may not want reorderer to wrap around. Currently if you move an item down it will wrap to the top after reaching the end. This may make it difficult for some users to know what the boundaries are.

        