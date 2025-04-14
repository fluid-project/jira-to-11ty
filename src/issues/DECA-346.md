---json
{
  "title": "DECA-346",
  "summary": "Update the README for the Decapod 0.7 release",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2012-11-30T18:31:41.267-0500",
  "updated": "2016-02-19T08:07:32.187-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-11-30T18:40:40.433-0500",
      "body": "Decapod 0.7\\\n\\============\n\nMain Project Site:  \t<http://sites.google.com/site/decapodproject/>\\\nDocumentation:      \t<http://wiki.fluidproject.org/display/fluid/Decapod+0.7+Release>\\\nSource Code:  \t\t    <http://wiki.fluidproject.org/display/fluid/Decapod+Source+Code>\n\nHighlights of the 0.7 Release\\\n\\==============================\n\nDecapod 0.7 adds the following features and enhancements:\n\n* Ability to capture using cameras connected via USB\n* Create stereo 3D calibration data and dewarp stereo images based on that calibration data\n* Ubuntu 12.04 64-bit (32-bit no longer supported)\n* Fully internationalizable UI strings\n* In-application Help documentation\n\nInstalling Decapod 0.7\n\n\\======================\n\nFor full installation and configuration instructions, visit:\\\n<http://wiki.fluidproject.org/display/fluid/Download+and+Install+Decapod+0.7>\n\nTested Platform\\\n\\===============\n\nDecapod 0.7 is tested and supported in the following configurations:\n\n* Operating System: Ubuntu 12.04 64-bit\n* Web Browser: Firefox 17\n\n&#x20; \\\nOther configurations may work, but haven't been tested. The Decapod community welcomes \\\ncontributions, including testing various combinations of operating systems and browsers.\n\nWhat's in this Release?\\\n\\=======================\n\nIn General:\n\n* Image formats supported in this release are: JPEG, TIFF, and PNG.\n\nCalibrate UI & Server:\n\nThe calibrate interface allows users to upload a zip file with all the calibration images \\\ninto decapod calibrate server. The server generates the calibration data that can be exported\\\nas a zip file.\n\n* Uploading images:\n  * The zip file for calibration images must contain no less than 23 stereo images.\n  * The maximum image file size is unlimited, but configurable to any custom file size.\n\nCapture UI & Server:\n\nThe capture interface allows users to control cameras to take pictures for calibration,\\\ndewarping or other purposes. The pictures can be exported as a zip file.\n\n* Capturing images:\n  * The list of supported cameras: <http://gphoto.org/proj/libgphoto2/support.php>\n  * No more than 2 cameras can be connected to the computer.\n  * If any connected camera is disconnected, the capture server needs to be restarted to\\\n    &#x20;   work with cameras that are still connected or re-connected.\n\nDewarp UI & Server:\n\n* Steps to use:\n  * Upload the zip file that contains all the images to be dewarped.\n  * Upload the calibration zip file exported from the \"Calibrate UI & Server\".\n  * Launch the color picker to pick the colors of the page separator string and background.\n  * Start dewarping.\n  * Export the dewarped images as a zip file.\n\nExport UI & Server:\n\n* Interface:\n  * A simple import interface for uploading images to Decapod.\n  * Status messages indicating how many files are queued and how many have errors are provided.\n  * Four PDF, and two image export formats to select from.\n\n- Importing images:\n  * Image formats supported in this release are: JPEG, TIFF, and PNG.\n  * Default maximum image file size is 100MB, but configurable to any custom file size.\n\n* Exporting:\n  * Export the collection of images as a greyscale PDF. Four PDF formats include:\\\n    &#x20;   1\\. Image PDF.\\\n    &#x20;   2\\. A PDF with electable OCR'd text underlaid.\\\n    &#x20;   3\\. A PDF with contents traced by computer.                                                                     \\\n    &#x20;   4\\. A PDF with matched TrueType font.           &#x20;\n\n&#x20;                                                                   &#x20;\n\n* python-matplotlib: <http://matplotlib.sourceforge.net/> (PSF License)\n* python-nose: <http://readthedocs.org/docs/nose/en/latest/> (LGPL License)\n* python-numpy: <http://numpy.scipy.org/> (BSD License)\n* python-reportlab: <http://www.reportlab.com/> (BSD License)\n* python-scipy: <http://www.scipy.org/SciPy> (BSD License)\n* python-scipy-dbg: <http://www.scipy.org/SciPy> (BSD License)\n* python-simplejson: <http://simplejson.readthedocs.org/en/latest/> (MIT License)\n* Qunit: <http://qunitjs.com/> (MIT License)\n* scons: <http://www.scons.org/> (MIT License)\n* gphoto2: <http://gphoto.org/> (GPL License)\n* cmake: <http://www.cmake.org/cmake/project/project.html> (CMake License)\n* git: <http://git-scm.com/> (GNU General Public License)\n* python-wxgtk2.8: <http://packages.ubuntu.com/search?keywords=python-wxgtk2.8> (Ubuntu License)\n* OpenCV: <http://opencv.org/> (BSD license)\n* pyflann: <https://github.com/mariusmuja/flann> (BSD license)\n* vlfeat: <http://www.vlfeat.org/> (BSD license)\n\nSee: <http://wiki.fluidproject.org/display/fluid/Decapod+Dependencies>\n\n\\***Note: GPL licensed code is not used directly, but only interfaced through calls to the shell**\\*\n\nKnown Issues\\\n\\============\n\nBugs and other known issues in Decapod 0.7 are documented in the Release Page:\n\n<http://wiki.fluidproject.org/display/fluid/Decapod+0.7+Release>\n\nDecapod is actively being developed and improved. We welcome your feedback, bug reports, and\\\nfeature requests. Decapod uses JIRA to track bugs and issues: <http://issues.fluidproject.org/browse/DECA>\n"
    }
  ]
}
---

        