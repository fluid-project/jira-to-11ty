---json
{
  "title": "FLUID-2558",
  "summary": "Progress Test Suite unit test had 6 failures",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Daphne Ogle",
  "date": "2009-04-07T15:41:15.000-0400",
  "updated": "2010-02-19T09:38:38.000-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "PC - XP IE 7.0.5 / Flash 9\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-13T10:13:56.000-0400",
      "body": "Couldn't reproduce this issue, may be something specific to the machine that it was tested on.\n"
    },
    {
      "author": "Former user",
      "date": "2010-02-19T09:38:38.000-0500",
      "body": "[buy cheap tramadol](http://thoughtmesh.net/meshes.php?group=33)\\\n[buy cheap tramadol online inurl](http://thoughtmesh.net/meshes.php?group=34)\\\n[buy tramadol](http://thoughtmesh.net/meshes.php?group=35)\\\n[cheap tramadol without prescription](http://thoughtmesh.net/meshes.php?group=36)\\\n[tramadol cheapest](http://thoughtmesh.net/meshes.php?group=37)\\\n[buy tramadol cod](http://thoughtmesh.net/meshes.php?group=38)\\\n[low price tramadol](http://thoughtmesh.net/meshes.php?group=39)\\\n[drugs that work in conjunction with tramadol ](http://thoughtmesh.net/meshes.php?group=40)\\\n[generic tramadol er dosage](http://thoughtmesh.net/meshes.php?group=41)\\\n[buy cheap tramadol online inurl](http://thoughtmesh.net/meshes.php?group=42)\\\n[order tramadol online cd](http://thoughtmesh.net/meshes.php?group=43)\\\n[side effects tramadol](http://thoughtmesh.net/meshes.php?group=44)\\\n[tramadol hcl 50 mg tab](http://thoughtmesh.net/meshes.php?group=45)\\\n[picture of tramadol hcl 50mg tab mylan](http://thoughtmesh.net/meshes.php?group=46)\\\n[buy tramadol](http://thoughtmesh.net/meshes.php?group=47)\\\n[tramadol addiction](http://thoughtmesh.net/meshes.php?group=48)\\\n[ingredients in tramadol](http://thoughtmesh.net/meshes.php?group=49)\\\n[dosage tramadol](http://thoughtmesh.net/meshes.php?group=50)\\\n[tramadol and cats dose rate](http://thoughtmesh.net/meshes.php?group=51)\\\n[drug reactions vicodin and tramadol](http://thoughtmesh.net/meshes.php?group=52)\\\n[side effects tramadol](http://thoughtmesh.net/meshes.php?group=53)\\\n[tramadol sale us no prescription required](http://thoughtmesh.net/meshes.php?group=54)\\\n[tramadol hcl](http://thoughtmesh.net/meshes.php?group=55)\\\n[tramadol hydrochloride use in dogs](http://thoughtmesh.net/meshes.php?group=56)\\\n[tramadol sale us no prescription required](http://thoughtmesh.net/meshes.php?group=57)\\\n[tramadol hydrochloride picture](http://thoughtmesh.net/meshes.php?group=58)\\\n[what is tramadol](http://thoughtmesh.net/meshes.php?group=59)\\\n[tramadol 50 mg](http://thoughtmesh.net/meshes.php?group=60)\\\n[tramadol sale us no prescription required](http://thoughtmesh.net/meshes.php?group=61)\\\n[buy cheap tramadol o](http://thoughtmesh.net/meshes.php?group=62)\\\n[online pharmacy tramadol](http://thoughtmesh.net/meshes.php?group=63)\\\n[order tramadol](http://thoughtmesh.net/meshes.php?group=64)\\\n[tramadol cheap no rx nextday delivery](http://thoughtmesh.net/meshes.php?group=65)\\\n[tramadol overnight](http://thoughtmesh.net/meshes.php?group=66)\\\n[tramadol slow release in burn pain](http://thoughtmesh.net/meshes.php?group=67)\\\n[buy cheap tramadol on](http://thoughtmesh.net/meshes.php?group=68)\\\n[is tramadol a narcotic](http://thoughtmesh.net/meshes.php?group=69)\\\n[low price tramadol](http://thoughtmesh.net/meshes.php?group=70)\\\n[tramadol prescription](http://thoughtmesh.net/meshes.php?group=71)\\\n[cheap tramadol](http://thoughtmesh.net/meshes.php?group=72)\\\n[tramadol price](http://thoughtmesh.net/meshes.php?group=73)\\\n[tramadol rx](http://thoughtmesh.net/meshes.php?group=74)\\\n[is tramadol a narcotic](http://thoughtmesh.net/meshes.php?group=75)\\\n[tramadol tablets](http://thoughtmesh.net/meshes.php?group=76)\\\n[ultram hydrochloride 100mg](http://thoughtmesh.net/meshes.php?group=77)\\\n[tramadol withdrawals](http://thoughtmesh.net/meshes.php?group=78)\\\n[tramadol drug](http://thoughtmesh.net/meshes.php?group=79)\\\n[is tramadol a narcotic](http://thoughtmesh.net/meshes.php?group=80)\\\n[ultram](http://thoughtmesh.net/meshes.php?group=81)\n"
    }
  ]
}
---
Here's what failed at <http://build.fluidproject.org/infusion/tests/component-tests/uploader/html/Progress-test.html:>

5\. Progress Tests (No animation) module: Update percent by number, null and zero (2, 4, 6)\
4\. After update of the number 50, width of indicator should be, expected: 50 result: 51\
5\. After update with percent = null, indicator should still be, expected: 50 result: 51

7\. Progress Tests (No animation) module: Update percent by string with leading number (1, 3, 4)\
4\. After update with percent = '50%', width of indicator should be, expected: 50 result: 51

8\. Progress Tests (No animation) module: Update text after percent (2, 4, 6)\
4\. After update, width of indicator should be 50px\
6\. and width should still only be 50px

9\. Progress Tests (Other Defaults) module: Min width = 0 (1, 3, 4)\
3\. After update to 50, expected indicator width: 50; actual: 51

        