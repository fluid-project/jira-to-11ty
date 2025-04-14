---json
{
  "title": "FLUID-5834",
  "summary": "Error received when an ajax call back sets a model value on a component that has been destroyed",
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
  "reporter": "Cindy Li",
  "date": "2015-12-18T12:41:01.055-0500",
  "updated": "2024-07-22T10:35:25.142-0400",
  "versions": [
    "1.5.1"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": "Firefox, Chrome. Didn't test with Safari and IE\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2019-08-01T09:26:28.388-0400",
      "body": "Unfortunately the sample referred to in this report is in a branch which has been deleted. However, it is likely that this issue has been resolved some time ago by the guarding code now present in invokeInvoker at <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/FluidIoC.js#L1771>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2019-08-01T09:31:53.893-0400",
      "body": "The relevant behaviour is described in <https://issues.fluidproject.org/browse/FLUID-5333>\n"
    }
  ]
}
---
This issue can be re-produced by running the unit test - <https://github.com/cindyli/universal/blob/GPII-1245-demoFLUID5834/gpii/node_modules/gpii-oauth2/gpii-oauth2-authz-server/webTests/components/privacySettings/html/PrivacySettingsWithPrefs-test.html>

The test fails with the error:\
ASSERTION FAILED: Cannot resolve reference {arguments}.0 from component { typeName: "gpii.oauth2.editPrivacySettings" gradeNames: \["gpii.oauth2.editPrivacySettings","gpii.oauth2.privacySettingsDialog","fluid.rendererRelayComponent","fluid.commonRendererComponent","fluid.viewRelayComponent","fluid.commonViewComponent","fluid.standardRelayComponent","fluid.modelRelayComponent","fluid.commonModelComponent"] id: 7hpazkn5-307} which has been destroyed

The cause was because a couple of ajax calls set model values in their call back functions to the component, such as here: <https://github.com/cindyli/universal/blob/GPII-1245-demoFLUID5834/gpii/node_modules/gpii-oauth2/gpii-oauth2-authz-server/public/src/components/privacySettings/js/PrivacySettingsDialog.js>. However, at then, the component itself has been destroyed by the IoC testing framework.

The work around is to use fluid.isDestroyed() to check the existence of the component before setting model values.

        