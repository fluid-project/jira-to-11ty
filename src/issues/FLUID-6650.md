---json
{
  "title": "FLUID-6650",
  "summary": "Prefs Framework automated test fails on Android with non-default Display Size setting",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-07-05T15:29:38.178-0400",
  "updated": "2021-07-05T15:29:38.178-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Chrome 91.0.4472.120\\\nAndroid 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
On Android Chrome, if the user's device has a display size that is not default, the following automated tests will fail:

* Initial Rendering
* ScrollToPanel 2
* Click panel to go right test
* Click panel to go left test
* Scrolled to panel below bounds
* Scrolled to panel beyond bounds
* Separated panel initial panelIndex tester

To reproduce:

1\. On an Android 11 device go to device Settings > Display > Advanced > Display Size.\
2\. Set display size to small.\
3\. Run the Infusion automated tests.\
4\. Notice that 7 tests under the prefs framework will fail.\
5\. Set display size to default.\
6\. Re-run the automated tests and notice that all the tests will pass.

        