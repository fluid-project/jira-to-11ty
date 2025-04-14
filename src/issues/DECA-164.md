---json
{
  "title": "DECA-164",
  "summary": "genpdfEXP can not locate libocropus.so",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2011-09-15T15:01:18.448-0400",
  "updated": "2012-05-25T13:48:21.545-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "genpdf"
  ],
  "environment": "latest version in default repository.\\\nUbuntu 10.04 32bit\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:48:21.544-0400",
      "body": "This should have been resolved for Decapod 0.4\n"
    }
  ]
}
---
The decapod-genpdfEXP.py script can not find the libocropus.so object despite it being located properly in the shared library directory.

\[Info]: running ocropus pipeline\
Traceback (most recent call last):\
File "/usr/local/bin/ocropus-binarize", line 8, in \<module>\
import sys,os,re,ocropy,optparse\
File "/usr/local/lib/python2.6/dist-packages/ocropy/\_*init*\_.py", line 2, in \<module>\
from ocropus import \*\
File "/usr/local/lib/python2.6/dist-packages/ocropus.py", line 25, in \<module>\
\_ocropus = swig\_import\_helper()\
File "/usr/local/lib/python2.6/dist-packages/ocropus.py", line 21, in swig\_import\_helper\
\_mod = imp.load\_module('\_ocropus', fp, pathname, description)\
ImportError: libocropus.so: cannot open shared object file: No such file or directory\
\[Error] generating book structure did not work as expected! (\['ocropus-binarize', '-o', '1-1-1-t2/', '1-1-1.png'])

To reproduce this error:\
1\. Install scipy, numpy, matplotlib, scons, mercurial \
2\. Clone the decapod repository: hg clone <https://code.google.com/p/decapod/> \
3\. Run sudo ./decapod/install-scripts/decapod-all.sh\
4\. Download the sample image (<http://source.fluidproject.org/svn/design/decapod/testing-images/1-1-1.png>) into the ./decapod/decapod-genpdf/src directory.\
5\. Run: ./decapod/decapod-genpdf/src/decapod-genpdfEXP.py -t 2 -d test -p test.pdf -v 3 1-1-1.png

        