---json
{
  "title": "FLOE-24",
  "summary": "UIO table of contents has a few bugs",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-28T16:09:18.735-0400",
  "updated": "2012-08-03T18:12:51.700-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-25T14:47:40.430-0400",
      "body": "The extra \"Table of Contents\" always showing will be addressed in Infusion, through <http://issues.fluidproject.org/browse/FLUID-4723>. Once that's updated, we'll update the version of Infusion that OER Commons uses.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-25T15:11:49.501-0400",
      "body": "I've issued a pull request for the header fix for Infusion: <https://github.com/fluid-project/infusion/pull/224>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-26T14:43:45.534-0400",
      "body": "FLUID-4723 is fixed and the fix is in. I've upgraded Infusion in OER Commons.\n\nIt looks like the gap is also a problem that's present in Infusion and not in OER C: It appears in the UIO demo on the single-page versions (where the ToC should not be shown). I've created a JIRA for that: FLUID-4724\n"
    }
  ]
}
---
1\) The words "Table of Contents" are always visible, even on initial page load when learner prefs have never even been touched.

2\) In the Authoring view, turning on the table of contents results in a gap appearing at the top (nothing should happen since the Auth environment already has its own ToC)

3\) In the View mode for content authored using Open Auth, turning on the table of contents results in a gap appearing at the top (nothing should happen since the content already has its own ToC). Note that you have to turn the ToC on and off more than once for the gap to appear. Otherwise, this is the same as point #2.

        