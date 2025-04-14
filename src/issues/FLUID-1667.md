---json
{
  "title": "FLUID-1667",
  "summary": "possibly a jquery bug.  Uploader does nothing at all on  my platform (firefox 3.0.1, flash 9.0.124",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "James Marca",
  "date": "2008-10-08T00:22:05.000-0400",
  "updated": "2008-12-03T11:51:44.000-0500",
  "versions": [
    "0.4",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Gentoo LInux 64 bit, Firefox 3.0.1 (Mozilla/5.0 (X11; U; Linux x86\\_64; en-US; rv:1.9.0.1) Gecko/2008082113 Gentoo Firefox/3.0.1), Flash 9,0,124,0 installed\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "James Marca",
      "date": "2008-10-08T14:20:03.000-0400",
      "body": "More information. &#x20;\n\nThis morning I got an identical fault with Firefox 3 on an i686 box (so not 64 bit flash issues).  Platform: Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.1) Gecko/2008070206 Firefox/3.0.1\n\nI did an svn checkout for trunk, and built/deployed the image-gallery testing app, tweaking the pom.xml to pull in Fluid components version 0.5 (instead of 0.4-SNAPSHOT...).  Again, identical problems.  The single file upload works fine, but the multi-file widget breaks.\n\nThe Firebug console caught the following error:\n\n\\[Exception... \"'Invalid function name' when calling method: \\[nsIDOMEventListener::handleEvent]\"  nsresult: \"0x8057001e (NS\\_ERROR\\_XPC\\_JS\\_THREW\\_STRING)\"  location: \"\\<unknown>\"  data: no]\n\nLine 0\n\nThe multifile uploader page had the following debugging output listed: &#x20;\n\nVersion: 2.1.0\\\nMovie Name: SWFUpload\\_0\\\nSettings:\\\nupload\\_url:             ../../site/multiFileUpload\\\nuse\\_query\\_string:       false\\\nfile\\_post\\_name:         Filedata\\\npost\\_params:            \\[object Object]\\\nfile\\_types:             **.gif;**.jpeg;**.jpg;**.png;\\*.tiff\\\nfile\\_types\\_description: All Files\\\nfile\\_size\\_limit:        20480\\\nfile\\_upload\\_limit:      0\\\nfile\\_queue\\_limit:       0\\\nflash\\_url:              ../../fluid-components/swfupload/swfupload\\_f9.swf\\\nflash\\_color:            #FFFFFF\\\ndebug:                  true\\\ncustom\\_settings:        \\[object Object]\\\nEvent Handlers:\\\nswfupload\\_loaded\\_handler assigned:  true\\\nfile\\_dialog\\_start\\_handler assigned: true\\\nfile\\_queued\\_handler assigned:       true\\\nfile\\_queue\\_error\\_handler assigned:  true\\\nupload\\_start\\_handler assigned:      true\\\nupload\\_progress\\_handler assigned:   true\\\nupload\\_error\\_handler assigned:      true\\\nupload\\_success\\_handler assigned:    true\\\nupload\\_complete\\_handler assigned:   true\\\ndebug\\_handler assigned:             true\n\nI read in the ReadMe.txt under the uploader component directory that the error statement indicates that the \" The flashUrl setting is probably wrong.\"  But I haven't touched the code, and according to the output above, the flash url setting seems to be set properly.\n\nI've little clue.  I am going to try to shoehorn in flashembed, instead of using the swfuploader code.\n"
    },
    {
      "author": "James Marca",
      "date": "2008-10-08T18:13:10.000-0400",
      "body": "Resolved (but I don't know how to  close this bug report, or even if I can)\n\nProblem is upgrading from Firefox 2.0 to Firefox 3.0, apparently. &#x20;\n\nsee <http://swfupload.org/forum/generaldiscussion/556#comment-1492>\n\nI moved my old settings out of the way, and for good measure re-installed the flash plug-in, started Firefox 3 with a clean slate, and the uploader works fine.\n\nPossible resolution might be to note the above link somewhere in the website for resolving issues?\n\nSorry about the noise.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-28T14:59:41.000-0400",
      "body": "Thanks for letting us know about this issue, we will try to find a way to make our users aware of this issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T15:34:33.000-0400",
      "body": "Appears to be an issue when upgrading firefox, not sure if it is issolated to Linux.\n"
    }
  ]
}
---
My guess is that this is a jquery issue.  I will try to run that down.  However...

From the uploader demo (nightly or released, inline or popup) clicking the add files button does nothing, except throwing an error in firebug:

\[Exception... "'Invalid function name' when calling method: \[nsIDOMEventListener::handleEvent]"  nsresult: "0x8057001e (NS\_ERROR\_XPC\_JS\_THREW\_STRING)"  location: "\<unknown>"  data: no]\
<http://build.fluidproject.org/fluid/fluid-components/js/jquery/jquery-1.2.6.js>\
Line 2101

Hope that helps, but as it stands uploader is a dud for my machine.

        