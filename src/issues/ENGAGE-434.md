---json
{
  "title": "ENGAGE-434",
  "summary": "Implement \"All in one page\" portalised solution to remedy performance issues in Engage on mobile devices",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-02-22T14:19:20.000-0500",
  "updated": "2010-03-09T15:19:45.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle",
    "Screen Navigator"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-342/",
      "key": "ENGAGE-342"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-496/",
      "key": "ENGAGE-496"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-434/ENGAGE-434-core.patch",
      "filename": "ENGAGE-434-core.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-434/ENGAGE-434-kettle.patch",
      "filename": "ENGAGE-434-kettle.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-03-04T02:32:55.000-0500",
      "body": "These two patches, against engage-core and engage-kettle, enable the use of minified/concatted build files \"MyEngage.js\" (which must be placed in engage root) and \"MyInfusion.js\" (which must be placed in infusion/src/webapp).\n"
    }
  ]
}
---
Initial performance measurements on the iphone suggest that even jquery.js, a dependency generally held benign, can take around 1.9s to be fully processed by the client runtime, even ignoring any transmission costs. (Interestingly this time is split up as 0.7s of raw execution time, with 1.2s presumably being spent while tokenising and parsing the file). Since this is an entirely unacceptable per-page overhead, we must implement a new delivery system that avoids whole-page transitions on navigation, and instead packages all shared dependencies into a single bundle which is delivered to a stationary "mobileHome" page, with transitions performed by AJAX and injection. This will require some reworking of the underlying framework and libraries (in particular, reliance on inspection of URL state on the clientside, as well as native facilities such as history.back() etc.) but is intended to be "unobtrusive" - that is, the "base application" will continue to be available using traditional HTTP semantics, for desktop machines among others.

Colin has a trial implementation of some of these concepts in the scratchpad at <https://source.fluidproject.org/svn/incubator/engage/client/trunk/screenNavigator/js/ScreenNavigatorLite.js>

        