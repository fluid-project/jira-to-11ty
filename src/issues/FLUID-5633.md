---json
{
  "title": "FLUID-5633",
  "summary": "Listeners bound using the IoCSS syntax using the IoC testing framework are never unbound",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-04-17T16:36:45.962-0400",
  "updated": "2024-07-22T10:35:01.185-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2018-02-20T10:31:57.393-0500",
      "body": "This was encountered again during work by the Astea team on the GPII's PSP survey dialog tests. These read:\n\n \n\n```java\nsequence: [{\r\n        func: \"{that}.app.keyIn\",\r\n        args: [\"snapset_1a\"]\r\n    }, [ // Test closing the survey using the break-out link\r\n        {\r\n            func: \"{that}.app.dialogManager.show\",\r\n            args: [\"survey\", gpii.tests.webview.getSurveyFixture()]\r\n        }, {\r\n            event: \"{that gpii.app.surveyDialog}.events.onSurveyCreated\",\r\n            listener: \"fluid.identity\"\r\n        }, {\r\n            func: \"{that}.app.dialogManager.survey.surveyDialog.executeCommand\",\r\n            args: [clickBreakOutLink]\r\n        }, {\r\n            event: \"{that}.app.dialogManager.survey.surveyDialog.events.onSurveyClose\",\r\n            listener: \"jqUnit.assert\",\r\n            args: [\"Survey was closed by clicking on the break-out link\"]\r\n        }\r\n    ], [ // Test that the survey will not close when clicking on a non-break-out link\r\n        {\r\n            func: \"{that}.app.dialogManager.show\",\r\n            args: [\"survey\", gpii.tests.webview.getSurveyFixture()]\r\n        }, {\r\n            event: \"{that gpii.app.surveyDialog}.events.onSurveyCreated\",\r\n            listener: \"fluid.identity\"\r\n        }, {\r\n            func: \"{that}.app.dialogManager.survey.surveyDialog.executeCommand\",\r\n            args: [clickNonBreakOutLink]\r\n        }, {\r\n            func: \"jqUnit.assertTrue\",\r\n            args: [\r\n                \"Survey was not closed by clicking on a non-break-out link\",\r\n                \"{that}.app.dialogManager.survey.surveyDialog.model.isShown\"\r\n            ]\r\n        }\r\n    ], [ // Test closing the survey using a close button within the content of the survey\r\n        {\r\n            func: \"{that}.app.dialogManager.show\",\r\n            args: [\"survey\", gpii.tests.webview.getSurveyFixture()]\r\n        }, {\r\n            event: \"{that gpii.app.surveyDialog}.events.onSurveyCreated\",\r\n            listener: \"fluid.identity\"\r\n        }, {\r\n            func: \"{that}.app.dialogManager.survey.surveyDialog.executeCommand\",\r\n            args: [clickCloseButton]\r\n        }, {\r\n            event: \"{that}.app.dialogManager.survey.surveyDialog.events.onSurveyClose\",\r\n            listener: \"jqUnit.assert\",\r\n            args: [\"Survey was closed by clicking on the close button within the content\"]\r\n        }\r\n    ], [ // Test closing the survey when a DOM element with id \"EndOfSurvey\" element appears in the survey.\r\n        {\r\n            func: \"{that}.app.dialogManager.show\",\r\n            args: [\"survey\", gpii.tests.webview.getSurveyFixture()]\r\n        }, {\r\n            event: \"{that gpii.app.surveyDialog}.events.onSurveyCreated\",\r\n            listener: \"fluid.identity\"\r\n        }, {\r\n            func: \"{that}.app.dialogManager.survey.surveyDialog.executeCommand\",\r\n            args: [addEndOfSurveyElement]\r\n        }, {\r\n            event: \"{that}.app.dialogManager.survey.surveyDialog.events.onSurveyClose\",\r\n            listener: \"jqUnit.assert\",\r\n            args: [\"Survey was closed automatically when its end has been reached\"]\r\n        }\r\n    ], [ // Test that the survey will not close if it does not need to close on submit\r\n        {\r\n            func: \"{that}.app.dialogManager.show\",\r\n            args: [\"survey\", gpii.tests.webview.getSurveyFixture({closeOnSubmit: false})]\r\n        }, {\r\n            event: \"{that gpii.app.surveyDialog}.events.onSurveyCreated\",\r\n            listener: \"fluid.identity\"\r\n        }, {\r\n            func: \"{that}.app.dialogManager.survey.surveyDialog.executeCommand\",\r\n            args: [addEndOfSurveyElement]\r\n        }, {\r\n            func: \"jqUnit.assertTrue\",\r\n            args: [\r\n                \"Survey was not closed when its end has been reached as it is not configured to closeOnSubmit\",\r\n                \"{that}.app.dialogManager.survey.surveyDialog.model.isShown\"\r\n            ]\r\n        }\r\n    ], {\r\n        func: \"{that}.app.keyOut\"\r\n    }]\n```\n\nIn this case the multiple attempts to bind {that gpii.app.surveyDialog} accumulated and caused the usual sequence overrun as seen above. Time for a fix ...\n\n \n"
    },
    {
      "author": "Cindy Li",
      "date": "2018-02-20T20:30:28.588-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/876) has been merged into the project repo master branch at 29c3e677e6405b0e288075cdf94d8936905d85af\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-09-13T16:09:11.821-0400",
      "body": "I believe I'm experiencing this issue while working on tests for my localized UIO component in [my FLUID-6300 branch](https://github.com/blueslug/infusion/tree/FLUID-6300)\n\nHere is the test sequence I'm trying to get working:\n\n```javascript\nsequence: [{\r\n    event: \"{prefsEditorBaseTest prefsEditor messageLoader}.events.onResourcesLoaded\",\r\n    listener: \"jqUnit.assertEquals\",\r\n    args: [\"defaultLocale is properly propagated to messageLoader\", \"fr\", \"{prefsEditor}.prefsEditorLoader.messageLoader.options.defaultLocale\"]\r\n},\r\n{\r\n    event: \"{prefsEditorBaseTest prefsEditor prefsEditorLoader prefsEditor}.events.onReady\",\r\n    listener: \"fluid.tests.uiOptions.prefsEditorLocalizedTester.verifyPanelMessages\",\r\n    args: \"{prefsEditor}\"\r\n},\r\n{\r\n    funcName: \"fluid.tests.uiOptions.prefsEditorLocalizedTester.verifySlidingPanelMessages\",\r\n    args: [\"{prefsEditor}\", \"prefsEditor\", \"Préférences de l'utilisateur\"]\r\n},\r\n{\r\n    func: \"{prefsEditor}.events.onInterfaceLocaleChangeRequested.fire\",\r\n    args: [\"es\"]\r\n},\r\n{\r\n    event: \"{prefsEditor messageLoader}.events.onResourcesLoaded\",\r\n    listener: \"jqUnit.assertEquals\",\r\n    args: [\"defaultLocale is properly propagated to messageLoader\", \"es\", \"{prefsEditor}.prefsEditorLoader.messageLoader.options.defaultLocale\"]\r\n}]\n```\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-09-13T17:02:40.671-0400",
      "body": "I have captured my failing case in this branch: <https://github.com/BlueSlug/infusion/tree/FLUID-5633>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-09-17T20:33:41.899-0400",
      "body": "Further failure cases discovered by Gregor Moss\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-10-05T10:24:08.113-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/935> ) into the project repo at bfbbf740eddd18ec17b604d0e4a785ec3033383d\n"
    }
  ]
}
---
The IoC Testing framework uses a private "ad hoc" scheme for allowing IoCSS-like syntax in event binding for test fixtures. Unfortunately this implementation is bugged - after the listener instance in a fixture sequence executes, the listener should be unbound - unfortunately, all the confused implementor has done is to unregister the distribution that would bind the listener again - rather than, in addition, removing the listener itself.

This emerged in work with the "first discovery tool" that had a sequence:

```javascript
sequence: [{
 listener: "gpii.tests.firstDiscovery.testInitButtonTops",
 args: ["{firstDiscovery}", "{that}"],
 priority: "last",
 event: "\{gpii.tests.firstDiscovery.langTests firstDiscovery}.events.onButtonTopsReady"
 }, {
 func: "{firstDiscovery}.prefsEditorLoader.applier.change",
 args: ["currentPanelNum", 3]
 }, {
 listener: "gpii.tests.firstDiscovery.testUnchangedButtonTops",
 args: ["{firstDiscovery}", "{that}.buttonTops"],
 event: "{firstDiscovery}.events.onPanelShown"
 }, {
 jQueryTrigger: "click",
 element: "{firstDiscovery}.prefsEditorLoader.prefsEditor.gpii_firstDiscovery_panel_textSize.dom.increase"
 }, {
 func: "\{firstDiscovery}.prefsEditorLoader.applier.change",
 args: ["currentPanelNum", 1]
 }, {
 listener: "gpii.tests.firstDiscovery.testChangedButtonTops",
 args: ["{firstDiscovery}", "\{that}.buttonTops"],
 event: "\{firstDiscovery}.events.onButtonTopsReady"
 }]
```

The IoCSS syntax is used with the first element, as always, to avoid triggering premature construction of the tree and confusing the manually issued QUnit timeout. Unfortunately, the selfsame event fires as sequence point 6 - the initial listener is still bound and causes a failure

Uncaught TypeError: Cannot read property 'execute' of undefined\
fluid.test.sequenceExecutor.that.execute @ IoCTestUtils.js:482\
fluid.test.composeSimple @ IoCTestUtils.js:303\
fluid.test.makeBinder.that.bind.wrapped @ IoCTestUtils.js:314\
fluid.event.invokeListener @ infusion-custom.js:12900

In fact, the sequence has finished, but listeners to the final event are still synchronously executing - so there is time for one more trigger of "that.execute" which attempts to trigger the sequence onto the 7th position - in fact, on behalf of the first listener, which did not believe it was the test-finishing listener.

The faulty code is in fluid.test.decoders.event in IoCTestUtils.js and reads:

```javascript
else if (analysed.path) {
    var id;
    bind = function (wrapped) {
        var options = {};
        fluid.set(options, ["listeners"].concat(analysed.path),{ 
            listener: wrapped, 
            args: fixture.args, 
            namespace: fixture.namespace, 
            priority: fixture.priority });
    id = fluid.pushDistributions(analysed.head, analysed.selector, [
        {options: options, recordType: "distribution", priority: fluid.mergeRecordTypes.distribution}
        ] );
    };
    unbind = function () {
        fluid.clearDistributions(analysed.head, id); 
    };
```

as is clear, the "unbind" action only revokes the distribution and does not take any action to eliminate the listener which the framework directed into the options via the fluid.set directive.

This is a little awkward since the listener gets bound declaratively and so cannot be unbound by instance. It seems that we could only resolve this by taking control of the listener namespace (we would have to advertise to fixture writers that this can not be controlled) and using it to set the listener into a uniquely guid-ed namespace in which we could then identify it.

In general this issue can't be solved before the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> work gets in and we gain the ability to write fluid.queryIoCSelector - since otherwise we could not discover the component holding the listener.

        