---json
{
  "title": "FLUID-4850",
  "summary": "Implement \"test case grade\" to assist IoC-directed testing and event sequence testing",
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
  "reporter": "Antranig Basman",
  "date": "2012-11-21T13:13:21.337-0500",
  "updated": "2024-07-22T09:36:06.233-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1423/",
      "key": "FLUID-1423"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-12-19T14:52:20.493-0500",
      "body": "Ready for review, with some documentation at <http://wiki.fluidproject.org/display/fluid/The+IoC+Testing+Framework>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-01-25T17:17:08.352-0500",
      "body": "This is now available in trunk at revision 9f50f9\n"
    }
  ]
}
---
With the Community meeting of last week (14/11/12) we discussed the brief outlined in this earlier posting:

<http://lists.idrc.ocad.ca/pipermail/fluid-work/2012-October/008615.html>

The code output was as follows: <http://openetherpad.org/GTA1XnSt1g>

This should now proceed to an implementation -&#x20;

Entered below in case the pad dies:

// Old test version:\
var test = jqUnit.testCase("Cat test case");\
test.test("Sync test", function () {\
var catt = fluid.tests.cat();\
jqUnit.assertEquals("Sound", "meow", catt.makeSound());\
});\
fluid.defaults("fluid.tests.myTestTree",\
gradeNames: \["fluid.test.testEnvironment" ... others],\
components: {\
cat: {\
type: "fluid.tests.cat"\
},\
catTester: {\
type: "fluid.tests.catTester"\
}\
}

fluid.demands("something", \["fluid.tests.myTestTree"], ...\
); can now test the effect of writing a demands block, since this block has a scope which just consists of the test fixture\
fluid.defaults("fluid.tests.catTester",\
gradeNames: \["fluid.test.fixtureHolder", "autoInit"],\
fixtures: \[ /\* declarative specification of tests \*/\
testCase: "Cat test case",\
expect: 1,\
tests: \[{\
type: "syncTest",\
path: "{that}.testMeow"\
args: "{cat}" <-- problem here - we may have to use "Luke Skywalker syntax" here - since we want to find cat DOWNWARDS from the tree root rather than find it UPWARDS from here\
}]\
});

fluid.tests.catTester.preInitFunction = function (that) {\
that.testMeow = function(catt) {\
jqUnit.assertEquals("Sound", "meow", catt.makeSound());\
}\
};\
Framework grades: fluid.test.testEnvironment, fluid.test.fixtureHolder\
appalling proto-Skywalker syntax from UIOptions:\
uiOptionsTransform: {\
transformer: "fluid.uiOptions.mapOptions",\
config: {\
"\*.templateLoader":                                   "templateLoader",\
"**.templateLoader.**.templatePath.options.value":      "prefix",\
"\*.uiOptionsLoader":                                  "uiOptionsLoader",\
"\*.uiOptionsLoader.container":                        "container",\
"{cat}" <-- "upwards IoC context name specification" - matches context names and other rules\
downward syntax looks something like..... "{uiOptionsLoader}.container" - might be helpful to be visually distinctive from the upwards syntax\
OLD, sequential CSpace event testing code:\
adminUsersTest.asyncTest("Test search/unsearch functionality", function () {\
var adminUsers;\
var testOpts = fluid.copy(baseTestOpts);\
fluid.model.setBeanValue(testOpts, "queryURL", "../data/users/search.json");\
fluid.model.setBeanValue(testOpts, "components.adminListEditor.options.listeners", {\
"afterListUpdate.initalEvent": function () {\
adminUsers.adminListEditor.events.afterListUpdate.removeListener("initalEvent");\
jqUnit.assertEquals("Initially there are 4 users in the list", 4, adminUsers.adminListEditor.list.model.items.length);\
jqUnit.notVisible("Unsearch is invisible initially", adminUsers.options.selectors.unSearchButton);\
adminUsers.locate("searchField").val("test").change();\
jqUnit.assertEquals("Value in seatch fiels is 'test'", "test", adminUsers.locate("searchField").val());\
adminUsers.adminListEditor.events.afterListUpdate.addListener(function () {\
adminUsers.adminListEditor.events.afterListUpdate.removeListener("afterListUpdate");\
jqUnit.isVisible("Unsearch is visible after search", adminUsers.options.selectors.unSearchButton);\
jqUnit.assertEquals("There are 2 users in the list after search", 2, adminUsers.adminListEditor.list.model.items.length);\
adminUsers.adminListEditor.list.events.afterRender.addListener(function () {\
jqUnit.notVisible("Unsearch is invisible after unsearch", adminUsers.options.selectors.unSearchButton);\
jqUnit.assertEquals("There are 4 users in the list after unsearch", 4, adminUsers.adminListEditor.list.model.items.length);\
cspace.tests.onTearDown.fire(adminUsers.adminListEditor.details);\
start();\
});\
adminUsers.locate("unSearchButton").click();\
}, "afterListUpdate");\
adminUsers.locate("searchButton").click();\
}\
});\
fluid.staticEnvironment.cspacePage = fluid.typeTag("cspace.users");\
fluid.staticEnvironment.cspaceTestEnv = fluid.typeTag("cspace.userAdminTests");\
adminUsers = cspace.admin(".csc-admin-users", testOpts);\
});

        