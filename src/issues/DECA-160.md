---json
{
  "title": "DECA-160",
  "summary": "matplotlib directory not writable causes stitching error",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2011-07-28T15:04:48.790-0400",
  "updated": "2012-05-25T13:46:38.466-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:46:38.457-0400",
      "body": "Stitching has been removed from the decapod 0.5 release\n"
    }
  ]
}
---
It seems that stitching aborts if the permissions on the \~/.matplotlib directory are not set properly. Work around would be to manually set permissions on the directory, but it would be nice if the permissions were set by the install script automatically.

The following error is displayed when attempting to run stitching with decapod-server.py:

Traceback (most recent call last):\
File "/usr/local/bin/decapod-stitching", line 5, in \<module>\
from pylab import \*\
File "/usr/lib/pymodules/python2.6/pylab.py", line 1, in \<module>\
from matplotlib.pylab import \*\
File "/usr/lib/pymodules/python2.6/matplotlib/\_*init*\_.py", line 711, in \<module>\
rcParams = rc\_params()\
File "/usr/lib/pymodules/python2.6/matplotlib/\_*init*\_.py", line 629, in rc\_params\
fname = matplotlib\_fname()\
File "/usr/lib/pymodules/python2.6/matplotlib/\_*init*\_.py", line 567, in matplotlib\_fname\
fname = os.path.join(get\_configdir(), 'matplotlibrc')\
File "/usr/lib/pymodules/python2.6/matplotlib/\_*init*\_.py", line 240, in wrapper\
ret = func(\*args, \*\*kwargs)\
File "/usr/lib/pymodules/python2.6/matplotlib/\_*init*\_.py", line 436, in \_get\_configdir\
raise RuntimeError("'%s' is not a writable dir; you must set %s/.matplotlib to be a writable dir.  You can also set environment variable MPLCONFIGDIR to any writable directory where you want matplotlib data stored "% (h, h))\
RuntimeError: '/home/fluid' is not a writable dir; you must set /home/fluid/.matplotlib to be a writable dir.  You can also set environment variable MPLCONFIGDIR to any writable directory where you want matplotlib data stored

\[28/Jul/2011:14:29:09] HTTP Traceback (most recent call last):\
File "/usr/lib/pymodules/python2.6/cherrypy/\_cprequest.py", line 606, in respond\
cherrypy.response.body = self.handler()\
File "/usr/lib/pymodules/python2.6/cherrypy/\_cpdispatch.py", line 25, in \_*call*\_\
return self.callable(\*self.args, \*\*self.kwargs)\
File "decapod.py", line 78, in index\
pageSpread = self.capturePageSpread()\
File "decapod.py", line 48, in capturePageSpread\
stitchedPath = imageprocessing.stitch(firstMidPath, secondMidPath)\
File "/home/fluid/decapod/tip/decapod-server/imageprocessing.py", line 51, in stitch\
utils.invokeCommandSync(stitchCmd, ImageProcessingError, "An error occurred while trying to stitch images.")\
File "/home/fluid/decapod/tip/decapod-server/decapod\_utilities.py", line 19, in invokeCommandSync\
raise error, message\
ImageProcessingError: An error occurred while trying to stitch images.

        