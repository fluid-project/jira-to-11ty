---json
{
  "title": "FLUID-5170",
  "summary": "If primary schema has fewer prefs than auxiliary schema has, panels are still created without errors, they just don't work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-04T16:11:55.187-0400",
  "updated": "2013-10-28T10:32:33.884-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-24T14:45:45.005-0400",
      "body": "Submitted a pull request ( <https://github.com/fluid-project/infusion/pull/423> )\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-28T10:32:30.807-0400",
      "body": "Merged Pull Request at 5b631da3519a797684a89a8fb494ca5a14ba2f22\n"
    }
  ]
}
---
If the aux schema includes panels and enactors for preferences that are not mentioned in the primary schema, then the panels will be rendered without any errors whatsoever, but they will be non-functional. It may be very hard for an integrator to diagnose the problem.

I would think we need to let the integrator know somehow that they're trying to render panels for prefs that aren't supported, either by not rendering the panels, or at least by throwing some kind of error or at least a warning in the console.

To reproduce:

Use the 'starter schema' demos\
Edit the "StarterSchemas.js" file to comment out most of the primary preference schemas.\
Watch the console, and run the demo.

You'll see that the panels are all there, but the ones for your commented-out prefs don't do anything, and you'll see that no errors appear in the console.

        