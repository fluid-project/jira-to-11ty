---json
{
  "title": "FLUID-3219",
  "summary": "Pager onModelChange event handling code does not update permutations map",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Jen Bourey",
  "date": "2009-09-30T21:43:41.000-0400",
  "updated": "2016-12-19T17:32:11.168-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3219/test-sorting.html.zip",
      "filename": "test-sorting.html.zip"
    }
  ],
  "comments": []
}
---
pager demo: <http://build.fluidproject.org/infusion/demos/pager/>

I'm attaching a page that demonstrates a strange issue I'm currently experiencing.  If you attempt to sort by one of the columns, then select another "type" from the drop down, an error of "row is undefined" is produced.

As far as I can tell, it looks like the pager contains a permutation object that is refreshed by the pager's internal code, but is not taken into account by the pager data-rebinding techniques we've used in the past.  The page contains a commented out line which sets pager.permutation to undefined.  When uncommented, this line prevents the page from producing javascript errors, though the pager items aren't always correctly sorted after the data re-bind.

I'm not quite sure when this issue appears, though it does affect 1.1.1 and didn't seem to be an issue in 0.8.

        