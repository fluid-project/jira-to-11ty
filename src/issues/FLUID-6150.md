---json
{
  "title": "FLUID-6150",
  "summary": "Text Size adjuster does not trigger em based media queries",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2017-04-03T11:10:08.777-0400",
  "updated": "2017-04-03T11:10:08.777-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When defining a media query to change styles like layouts for mobile vs desktop, one may use px or relative values (e.g. em) to determine the size. Using a relative value allows the browser to switch to the mobile media query as a user zooms with the + key. However this will not work with the text size adjuster. Relative unit media queries are based off of the initial value ( <https://www.w3.org/TR/css3-mediaqueries/#units> ) and do not take into consideration any style declaration. For the text size adjuster we set the font size off the `<html>` element to trigger the size change.

 

What this means in practice is that if a user uses the browser's zoom feature, the mobile version will be displayed, but if they use the text size adjuster from the prefs framework, it will just increase the font size. 

 

This can cause potential layout / styling challenges for integrators as they approach the cut off points for their media queries as well as for layouts for small screens.

        