---json
{
  "title": "FLUID-93",
  "summary": "Viewing moved images after reordering, shows the incorrect image",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-05T13:32:25.000-0500",
  "updated": "2007-11-29T19:19:00.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-15T10:53:00.000-0500",
      "body": "This only happens in the gallery not in the stand alone lightbox.\n\nWhen a thumbnail is moved in the browser, the server reindexes the thumbnails but the client does not.\n\nIn the above example a, b, c, d have indexes 0, 1, 2, 3.\\\nAfter moving 'a' to posiiton '3' the thumbnail order is b, c, a, d. The indexes on the client are 1, 2, 0, 3 but on the server are 0, 1, 2, 3.\\\nClicking on 'a' requests the server for the thumbnail at index '0' which the client expects to be 'a'. However, the server has 'b' at index 0 and returns it instead.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-11-26T13:30:39.000-0500",
      "body": "This bug has been added to the Image Gallery JIRA <http://jira.sakaiproject.org/jira/browse/GAL-68>, assigned to Louis Majanja. This bug (here) should stay open since it's a Fluid release blocker.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2007-11-28T16:40:09.000-0500",
      "body": "This is not really a bug in the Fluid component, but reflects a use of URL space by the original app that can retrospectively seen to be invalid in this context.\n\nThe issue is that the server and client are independently taking responsibility for reflecting the \"reordering\" operation - after the AJAX call, **both** client and server have reordered their respective collections. However, if the URL space applied for references within the client cells refers to collection elements by index, these indexes have now become \"overpermuted\" by the composition of the client and server operations. There are a few possible strategies for avoiding this problem, none of them very satisfactory:\n\ni) requiring a complete refresh of the managed area of the reorderer markup after each operation. This is fairly unacceptable since one of the main goals of the reorderer was to perform as many operations locally as possible.\n\nii) nominate \"invariant nodes\" by specifying from the server parts of the client cell which should be \"protected\" from the permuting operation. This is also pretty awful since as Michelle pointed out the link **text** of the link to the image would need to be treated separately from the link **target** which really is a pretty unacceptably fine-grained markup division to expect to communicate to the client.\n\nThere is no really satisfactory resolution except to forbid the use of index-based URLs within client cells which refer to elements within the managed collection by index, and to require globally stable ids instead. This would have caused a good deal of logic complication in the Gallery app if it was adopted as a global policy, but instead the problem was sidelined by adopting a \"fat ViewParams\" strategy which allows one style of URL to be used within the lightbox using ids, and another style to be used elsewhere using indexes - these URLs are considered equivalent designations of the same resource.\n\nThis is resolved in the GAL-68 branch mentioned in the linked issue - no change is required to Fluid code.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2007-11-29T19:19:00.000-0500",
      "body": "Verified the fix in firefox on winxp\n"
    }
  ]
}
---
After initially moving an image. Clicking on a moved image will show the image now residing in its original location.&#x20;

i.e.  There are four images a, b, c, d in location 1, 2, 3, 4 respectively.

move image 'a' to position 3. new order is now b, c, a, d\
clicking on image 'a' will show image 'b'\
if you had clicked on image 'b' it will show image 'c' (as this was the original location for image 'b')

Note: once the page has been reloaded the images will display correctly.

        