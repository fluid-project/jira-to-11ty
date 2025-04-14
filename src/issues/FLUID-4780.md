---json
{
  "title": "FLUID-4780",
  "summary": "Infusion tooltip does not update immediately after calling updateContent()",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alexey Novak",
  "reporter": "Alexey Novak",
  "date": "2012-08-24T09:33:58.676-0400",
  "updated": "2015-06-12T11:54:47.606-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VP-96/",
      "key": "VP-96"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-08-27T11:45:03.382-0400",
      "body": "Some research about the issue:\n\nThe solution which uses close() and open() functions inside of the videoPlayer does not sound as a good and nice solution.\\\nThe proposed fix should be done in the Infusion tooltip implementation.\n\n1\\) We checked the latest version of jquery ui tooltip 1.9 and it seems that the introduced changes are not significant ones and they do not take care of the problem related to the dynamic content update.\n\n2\\) Imagine we take the path of having a close()/open() solution in the tooltip implementation. First of all it is not a good solution. We tried and tested to use just open() w/o close() in updateContent function. It does not work. It seems that open()/close() rely on the self.current variable and changing/modifying this variable in our tooltip implementation does not look as a safe and a good solution either.\n\n3\\) We cannot just put open() and close() functions into updateContent() function since it would not work for the case when we need to update hidden tooltip's content. In order to handle this case we have to check for tooltip's css properties to find out if it is hidden or not. Doing this is the same as using .html() function since it is the same manipulations to find an element in DOM. Furthermore we have to come up with a powerful and smart way of figuring out if tooltip is hidden or not since the current tooltip has animations.\n\n4\\) pull request which has .html() change should have both lines which are present in the code currently: one which updates options of the tooltip and another one which updates inner html of the tooltip so that .html() does not break the state of the tooltip.\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-08-30T10:22:56.766-0400",
      "body": "Current work is in <https://github.com/anvk/infusion/tree/FLUID-4780>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-10-10T15:23:03.847-0400",
      "body": "I've continued Alex's work: add some comments and tests, and issued a pull request\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-10-11T12:17:25.369-0400",
      "body": "Temporary fix was merged into the project repo at c7cecd3b20a5e2d1cac8f6d3d8659ed410ddffb, however we should really upgrade jQuery UI to get the real fix.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-12T11:54:47.604-0400",
      "body": "This was likely addressed with changes to <https://fluidproject.atlassian.net/browse/FLUID-5185#icft=FLUID-5185>\n"
    }
  ]
}
---
User has to refocus on the element to see tooltip being updated after having called updateContent().

Scenario:\
Some form has a button with a tooltip "First"\
User hovers a mouse over the button and a tooltip appears on the screen with a text "First"\
With a timer set the tooltip changes its content to be "Second" using updateContent() function\
Tooltip continue to show "First" as a current tooltip\
User removes mouse from the button (removes the focus)\
User hovers a mouse cursor over the button and tooltip appears on the screen with a text "Second"

        