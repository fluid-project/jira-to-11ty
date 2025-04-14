---json
{
  "title": "SJRK-336",
  "summary": "Orator highlighting stuck on first word",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-04-13T21:14:19.130-0400",
  "updated": "2020-04-14T08:50:41.450-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Infusion 3.0.0-dev.20191219T155607Z.32876d29c.<https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145>\n\nWitnessed in the following OS/browser combos:\\\nWindows 10 Pro build 1903, Chrome 81 (gaming rig)\\\nWindows 10 Pro build 1909, Chrome 80 (P52)\\\nWindows 10 Pro build 1909, Firefox 74 (P52)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-04-14T08:50:41.450-0400",
      "body": "The highlighting does require a lot of DOM mutations as it moves the highlight mark across. I wonder if it's just an issue with repainting and or some other memory/performance issue. Also were any other DOM changes happening when the Orator was started, maybe that's playing into it? Have you seen this on any other platform than Windows? I'm wondering if I'd be able to reproduce on macOS.\n"
    }
  ]
}
---
This issue is very intermittent and difficult to reproduce. I've only witnessed it three times on two different days. It was originally discovered during the most recent run through the [Manual Testing Grid](https://wiki.fluidproject.org/display/fluid/Storytelling+Tool+Manual+Testing+Grid) (at time of filing).

The orator component will read out the text as expected, but the highlighting will be stuck on the first word. I've tried to see if it's a particular field that trips it up (i.e. title vs. no title), but haven't had any luck nailing this one down.

**To reproduce:**

* load a story on the View page or create a new one in the Edit page and skip to the preview
* press Play on the Orator

**Expected:**\
Story will be read aloud and the highlighting will follow along

**Actual:**\
Story is read aloud, but highlighting is stuck on the first word

        