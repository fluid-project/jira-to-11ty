---json
{
  "title": "FLUID-6488",
  "summary": "Keyboard-a11y failure in \"activatable\" on Firefox and Fedora",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2020-04-10T08:28:40.590-0400",
  "updated": "2020-05-14T14:01:27.982-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Fedora 31, Firefox 75\\\nmacOS 10.15.4, Firefox 75\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6487/",
      "key": "FLUID-6487"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6488/FLUID-6488-IE11-keyboard-a11y-failure.png",
      "filename": "FLUID-6488-IE11-keyboard-a11y-failure.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-04-15T16:55:37.798-0400",
      "body": "This is also failing when running off the build site, at least on macOS with FF 75. <https://build.fluidproject.org/infusion/tests/framework-tests/core/html/Keyboard-a11y-test.html?testNumber=17>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-15T17:03:01.487-0400",
      "body": "Looks like this is related to the [simulated key event](https://github.com/fluid-project/infusion/blob/1280f700cb248ae8c7f5e1d5e0bc2435bc552acd/tests/framework-tests/core/js/Keyboard-a11yTests.js#L119).  According the [document.createEvent() docs](https://developer.mozilla.org/en-US/docs/Web/API/Document/createEvent) on MDN, many of the methods used with createEvent have been deprecated. We should use [event constructors](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) instead.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-16T08:36:44.522-0400",
      "body": "More specifically the [KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent) should be used.\n\n \n\nNote: keyCode, charCode and which properties are also deprecated. May need to switch to use key or code instead.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-16T09:21:38.938-0400",
      "body": "I've been experimenting with this. I am able to get the Error in Firefox after switching to KeyboardEvent constructor. However, the onLeaveContainer tests are failing. It seems that we cannot simulate a tab press. Maybe just moving focus or calling blur on the element would be enough in the test. \n\nRegarding keyCode being deprecated, we still need to use it in the tests because they keyboard-a11y plugin is specifically looking for keyCodes. We'd need to re-write it using \"key\" or \"code\" instead. The benefit of doing this would be that we could drop the jQuery UI dependency for the keyCodes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-16T09:57:18.030-0400",
      "body": "the test \"Leaving container: onUnselect\" will work with blur, but \"Leaving container: onLeaveContainer\" is explicitly for tabbing out. I don't see a way that we can exercise this anymore.\n\nsee: <https://github.com/fluid-project/infusion/blob/1280f700cb248ae8c7f5e1d5e0bc2435bc552acd/src/framework/core/js/jquery.keyboard-a11y.js#L358-L370>\n\nI did try to switch to using the \"which\" property, but it still didn't work.\n\n \n\nThese keyboard synthesis tests only run in Firefox due to the [guardMozilla()](https://github.com/fluid-project/infusion/blob/1280f700cb248ae8c7f5e1d5e0bc2435bc552acd/tests/framework-tests/core/js/Keyboard-a11yTests.js#L411-L417). However, changing to use KeyboardEvent may allow us to run most of these tests in the other browsers as well.\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-16T10:11:55.059-0400",
      "body": "I've filed <https://fluidproject.atlassian.net/browse/FLUID-6492#icft=FLUID-6492> for updating the keyboard-a11y plugin to use \"key\" or \"code\" event properties.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-04-17T13:52:59.679-0400",
      "body": "I found that whilst there was code to get the keyboard-a11y tests to run on IE11, they didn't actually pass in my testing. I get 4 failures starting with \"activate with Enter key\" as per the attached screen shot\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-04-17T13:55:51.394-0400",
      "body": "Reported IE11 Version: 11.0.9600.18499 Update Versions: 11.0.36 (KB3191492)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-27T09:26:17.144-0400",
      "body": "@@Antranig Basman I've tested this using a Windows 8.1 VM running IE 11 Version: 11.0.9600.19678 Update Versionss: 11.0.185 (KB4550905). The tests are passing there. If it's an issue with different versions of IE 11, should we consider not supporting it at all for the tests?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-27T09:27:25.308-0400",
      "body": "I also tested using a Windows 10 VM running IE 11 Version: 1.846.11763.0 Update Versions: 11.0.160 (KB4525106) and it was also working. \n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-04-28T12:41:14.088-0400",
      "body": "Hi @@Justin Obara - I've tried testing with another IE11 at my disposal which reports itself as Version: 11.0.9600.19002, Update Versions: 11.0.60 and whilst the keyboard-a11y tests indeed run fine, I get various other test failures, e.g. in the Caching-test.html I get \"Unable to get property 'clear' of undefined\" and the IoC testing framework tests hang, unless they are run with the Developer Tools console open.\n\nIf you are amenable, I agree that we should cease to advertise IE11 as a supported browser for Infusion as of now, since it seems the effort of testing reliably with it exceeds what we can manage as a community. If you agree, I'll file a separate Jira for the update of our docs and testing configuration to reflect this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-04-28T14:26:32.321-0400",
      "body": "@@Antranig Basman I wonder what's causing those other issues.\n\nWhile I'm not a fan of maintaining IE 11 support, you had suggested that we make this upcoming release the last one to support IE 11. That way we had an option for our users to come back to. If we drop support for IE 11 now, we can either put out a beta or some other release that still officially supports IE 11 or just note that the 2.x line is the last that supported it.\n\nAlthough I think what we should do first is to check with the community to see if there is any need for maintaining IE 11 support right now. I believe that will help us to better decide what path forward to take.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-04-28T19:47:06.033-0400",
      "body": "Yes, I had indeed suggested that, but this was before it became clearer what the true costs of claiming robust IE11 support might actually be. It is indeed regrettable that IE11 usage is still stubbornly hovering somewhere around the 1-2% range.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-05-14T14:01:27.982-0400",
      "body": "@@Antranig Basman the feedback from the fluid-work list has all been in support of no longer officially supporting IE 11. See: <http://fluid.2324889.n4.nabble.com/Proposal-to-remove-IE-11-support-from-Infusion-td10852.html>\n\nPlease feel free to update the documentation and other resources as you suggested.\n"
    }
  ]
}
---
Failed in CI at <https://github.com/fluid-project/infusion/pull/981>

 

```java
not ok 14 Firefox 75.0 - [879 ms] - Framework Tests: /tests/framework-tests/core/html/Keyboard-a11y-test.html
    ---
        stack: >
            runLoggingCallbacks@http://localhost:7357/tests/lib/qunit/js/qunit.js:1611:19
            pushFailure@http://localhost:7357/tests/lib/qunit/js/qunit.js:998:22
            run@http://localhost:7357/tests/lib/qunit/js/qunit.js:212:10
            run/<@http://localhost:7357/tests/lib/qunit/js/qunit.js:366:10
            process@http://localhost:7357/tests/lib/qunit/js/qunit.js:1459:24
            start/<@http://localhost:7357/tests/lib/qunit/js/qunit.js:484:12
            
        message: >
            keyboard-a11y: activate with Enter key: Died on test #5 @http://localhost:7357/tests/framework-tests/core/js/Keyboard-a11yTests.js:419:12
            @http://localhost:7357/tests/framework-tests/core/js/Keyboard-a11yTests.js:607:3
            : Operation is not supported
        Log: |
```

 

        