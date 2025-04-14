---json
{
  "title": "FLUID-5103",
  "summary": "Can't move a dynamically added element until another element has been moved.",
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
  "reporter": "Michelle D'Souza",
  "date": "2013-07-26T14:57:48.013-0400",
  "updated": "2014-03-03T11:31:02.422-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF 22\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4049/",
      "key": "FLUID-4049",
      "summary": "Automate dynamic reorderer manual-test"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-07-26T15:15:23.262-0400",
      "body": "We should probably move this manual test to a unit test so this issue is caught faster in the future.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-02-09T03:47:20.917-0500",
      "body": "A fix is at <https://github.com/fluid-project/infusion/pull/463> - the issue to automate this test is at <https://fluidproject.atlassian.net/browse/FLUID-4049#icft=FLUID-4049> which I have linked and commented\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:31:00.594-0500",
      "body": "The pull request was merged into the project repo at 796e6cdc49399308b528b8fc5721462c07add56e\n"
    }
  ]
}
---
When elements are dynamically added to the Reorderer, they are not immediately moveable. The behaviour is different with the mouse and the keyboard. With the mouse, it is not possible to pick up the new element. With the keyboard, the user can select the element but when they try to move it, the element above is moved instead. In both cases, if another element is moved first, the newly added element can then be moved normally.&#x20;

<http://build.fluidproject.org/infusion/tests/manual-tests/html/dynamic-reorderer.html>

Steps to reproduce with the mouse:\
1\. Click the 'New Div' button\
2\. Attempt to move the newly created div with the mouse\
Notice that you can't pick up the element

Steps to reproduce with the keyboard:\
1\. Tab to and activate the 'New Div' button\
2\. Tab to the Reorderer and use the arrow keys to select the newly created div\
3\. Attempt to move the newly created div up\
Notice that the element above the newly create div is moved instead

        