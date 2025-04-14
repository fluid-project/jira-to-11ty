---json
{
  "title": "FLUID-589",
  "summary": "OSDPL Form: Modify pattern data entry form to allow entry of multiple examples",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-13T12:59:46.000-0400",
  "updated": "2014-04-02T16:35:54.157-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-13T13:00:24.000-0400",
      "body": "Iteration21\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-07-07T18:54:50.000-0400",
      "body": "Added 1 day to the original estimate for this bug. Appears to be a bigger task than originally anticipated.\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-08-05T00:09:02.000-0400",
      "body": "This module **may** solve this problem for images (only): <http://drupal.org/project/node_images>, but requires further investigation.&#x20;\n\nAnother option would be to create a custom compound field, as described here: <http://www.darcynorman.net/2008/05/02/creating-a-custom-compound-field-for-cck/>.&#x20;\n\nAnother option to solve this problem generally, though it doesn't seem to work for images, is to use this module: <http://drupal.org/project/fieldgroup_table>. It often seems not to be working, but you need to remember both to select \"multiple\" on the group's configuration page **as well as** all the data elements which are in the group. This tripped me up before.\n\nThis thread: <http://drupal.org/node/232184> also says, \"As nothing provided this feature (I heard CCK will allow this when released for Drupal 6...), I was obliged to develop my own \"all-in-one\" CCK Field\" so it may be worth investigating Drupal 6 to see if it works there.\n"
    }
  ]
}
---
Currently Drupal doesn't allow for multiple entry of CCK fieldgroups. This is what we really need in order to allow folks to enter multiple image examples of patterns, each with an image attribution (this is a fieldgroup). We have a fieldgroup called "Solution Image (group\_solution\_image)," and if we could entire multiple instances of this, that would solve the problem. Perhaps this is an easy change to the CCK fieldgroup module? Here is a Drupal bug which brings up this very issue: <http://drupal.org/node/232184#comment-876226>, the Addnode module some of the posts in that thread refer to: <http://drupal.org/project/addnode>, and the bug I entered when I was exploring solving this problem with CCK fieldgroup table: <http://drupal.org/node/206814>.

Alternatively, Nate Angell suggested that perhaps we should create a new content type, Example or Image, which includes both an Image and an Image Attribution. Then if we associate design patterns with examples/images somehow, people can "attach" multiple examples to a design pattern. This is illustrated on his website with the "Related Supporting Materials" which are "attached" to a "Teaching & Learning Practice."&#x20;

My issue with this solution is that people don't think like relational databases I don't want them to have to enter a pattern, then "attach" examples to it--I think this should most likely occur as all part of a single workflow. Additionally, there would also be some work done to style the pattern page (which displays an entered pattern, e.g. <http://osdpl.fluidproject.org/content/file-upload>) so that the examples appeared in the correct place. Since we could potentially have different types of examples/images, from an example of the design problem to an annotated solution example to additional examples (see <http://groups.ischool.berkeley.edu/ui_designpatterns/webpatterns2/webpatterns/pattern.php?id=6>), I'm not even sure if this is possible.&#x20;

I'm hopeful we can just modify the code so that we can enter multiple CCK fieldgroups. That would be a great contribution to give back to Drupal. 🙂

        