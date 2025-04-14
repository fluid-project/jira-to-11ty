---json
{
  "title": "VULAB-99",
  "summary": "Track down licensing issue for MultiPartFormOutputStream class",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-12-01T11:16:45.000-0500",
  "updated": "2014-03-04T08:27:23.937-0500",
  "versions": [],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-12-01T11:28:45.000-0500",
      "body": "There is a class called MultiPartFormOutputStream that was available online as a code sample here:\\\n<http://forums.sun.com/thread.jspa?threadID=451245&forumID=31>\n\nI assumed that it was public domain software since it's available to anyone online and unlicensed.  Colin asked me to clarify with the author of the code.\n\nThis issue stems from the following email received from Colin:\n\nDavid,\n\nThanks for getting back to me. Comments below...\n\nQuoting David Makalsky \\<dmakalsky@gmail.com>:\n\nGood catch... I was going to follow up on this earlier, but I forgot.\\\nI found this code online at the location you mentioned, and as far as\\\nI could tell, it's a code example, or public domain code.  I think\\\nit's a free-for-all at this point.\n\nThe notice below the code is too ambiguous to interpret it clearly as being in the public domain.\n\nI will contact the author and take this on, no problem.  Also, I can\\\nalways rewrite the code.\n\nThanks, that's great. Let me know how it goes.\n\nAgain, my understanding is that if code is posted publicly with no\\\nlicense, its public domain.\n\nThat's not actually true. Any work is naturally copyrighted upon its creation. Releasing it on a forum doesn't automatically put it in the public domain; this is something that the author must do explicitly. While there's the hint that this code **may** be intended as public domain, there's no explicit statement to this effect. As a result, we need to treat it as copyrighted and not suitably licensed for use within Fluid.\n\nHopefully the author will be interested in sharing the code with us specific under an appropriate license, or confirming his intention to make it public domain.\n\nVULAB9\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-01T11:59:29.000-0500",
      "body": "Sent following email to Colin... waiting for reply.\n\nHi Colin,\n\nAll code in the SUN forum falls under this license:\\\n<http://developers.sun.com/license/berkeley_license.html>\n\nOf particular note:\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n* Redistribution of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n- Redistribution in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\nNeither the name of Sun Microsystems, Inc. or the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nThis software is provided \"AS IS,\" without a warranty of any kind. ALL EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT, ARE HEREBY EXCLUDED. SUN MICROSYSTEMS, INC. (\"SUN\") AND ITS LICENSORS SHALL NOT BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR DISTRIBUTING THIS SOFTWARE OR ITS DERIVATIVES. IN NO EVENT WILL SUN OR ITS LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF OR INABILITY TO USE THIS SOFTWARE, EVEN IF SUN HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.\n\nYou acknowledge that this software is not designed, licensed or intended for use in the design, construction, operation or maintenance of any nuclear facility.&#x20;\n\nI think we can use it, as long as we embed this license in the sourcefile.\n\nRegards,\n\n– \\\nDavid Makalsky\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-01T12:04:15.000-0500",
      "body": "🙂 forgot component.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-01T16:13:57.000-0500",
      "body": "We'll need to ensure that there is a LICENSE.txt file in this directory identifying that the MultiPartFormOutputStream.java file is licensed differently from other files in the repository The LICENSE.txt file should contain the above license.\n\nThe individual file should include copyright attribution to the original author, along with a link to the forums from which is was obtained, and the license embedded as well.\n\nHere are the details on licensing within Fluid:\n\n<http://wiki.fluidproject.org/display/fluid/Fluid+Licensing>\n\nWhile you're at it, you'll probably want to add copyright and the Fluid embedded license to each of your own source files.\n\nVULAB10\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-15T14:13:13.000-0500",
      "body": "Added LICENSE file for MultiPartFormOutputStream.java.  Will add embedded copyright this week.\n\nVULAB11\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-19T12:53:29.000-0500",
      "body": "License terms embedded in each file\n"
    }
  ]
}
---

        