---json
{
  "title": "FLUID-1135",
  "summary": "\"Begin drag\" operation in the Reorderer is too slow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-08-12T12:44:43.000-0400",
  "updated": "2011-01-10T14:38:27.745-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1148/",
      "key": "FLUID-1148",
      "summary": "Implement new \"Drop Manager\" for the Reorderer"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-12T12:55:49.000-0400",
      "body": "Firefox 2 profiling:\n\nmouseStart\t1\t0%\t0ms\t468.75ms\t468.75ms\t468.75ms\t468.75ms\n\nsetDropEffects\t2\t0%\t0ms\t218.75ms\t109.375ms\t109.375ms\t109.375ms\\\nprepareOffsets\t1\t0%\t0ms\t78.125ms\t78.125ms\t78.125ms\t78.125ms\n\ndefaultAvatarCreator\t1\t0%\t0ms\t125ms\t125ms\t125ms\t125ms\t\\\nhelper\t1\t0%\t0ms\t125ms\t125ms\t125ms\t125ms\n\nmouseMove\t3\t0%\t0ms\t515.625ms\t171.875ms\t0ms\t500ms\n\nsetDropEffects causes a complete jQuery scan, needs to be cached (20% of startup time)\\\nprepareOffsets ditto, offsets in general are expensive (nearly 10ms a throw)\n\nCreating the avatar itself consumes 125ms which will be pretty hard to amortise...\\\nInterestingly the \"clone\" operation on the avatar only takes 15ms - probably the \"avatar cleansing\" can be accelerated a lot (perhaps by attacking the raw DOM in a single scan)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-17T18:13:48.000-0400",
      "body": "From rev 5353 there is now a \"fast cleanse\" strategy applied to creating the avatar, which has got creation time below 40ms on FF2. It has been reported that this also resolves <https://fluidproject.atlassian.net/browse/FLUID-774#icft=FLUID-774>. However I am still not happy with the avatar situation since there is now (and has to some extent always been) a \"sizing issue\" - the avatar does not naturally take up the same size that the same DOM material did in the document (which is not surprising, since we seem to take no care to ensure this). I am noticing this with the Lightbox, which appears \"longer and narrower\" than its original material, which may be a regression - however, certainly with the \"todo list\" I am seeing that again the draggable rows are much narrower and this has always been the case.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T12:59:49.000-0400",
      "body": "Since moving away from jQuery offsets, the equivalent of \"prepareOffsets\" is now around twice as fast -&#x20;\n\nupdateGeometry\t2\t0%\t0ms\t78.125ms\t39.063ms\t15.625ms\t62.5ms\tGeometricManager.... (line 248)\\\ncomputeGeometry\t10\t0%\t0ms\t78.125ms\t7.813ms\t0ms\t62.5ms\tGeometricManager.... (line 189)\n\nPending a final burst of optimisation...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T14:38:27.299-0500",
      "body": "Appears to have been fixed.\n"
    }
  ]
}
---
User testing has determined that the slow startup of a drag operation in the reorderer confuses some users and causes them to disbelieve in the affordance of draggability. This should be accelerated so that it can occur well within a perceptual cycle (closer to 100ms than the current near 500ms of the "portal" sample on FF1.x and FF2.x browsers)

<http://wiki.fluidproject.org/display/fluid/Layout+Customizer+User+Testing+-+Round+2+Results>

        