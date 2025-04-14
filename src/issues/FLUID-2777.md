---json
{
  "title": "FLUID-2777",
  "summary": "Need more control over self rendering in Pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Steven Githens",
  "date": "2009-05-26T15:56:16.000-0400",
  "updated": "2020-12-14T07:15:05.927-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Patch based off Fluid Infusion Trunk Revision 7248\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2604/",
      "key": "FLUID-2604",
      "summary": "Make Pager body renderer pipeline more open for interception"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2777/Pager.r7248based.diff.txt",
      "filename": "Pager.r7248based.diff.txt"
    }
  ],
  "comments": []
}
---
Using the pager with self rendering functionality and a data model is useful so you don't have to make your own sorting links and sorting functions.  However, in practice, I've found a sizable mismatch between the column defs and what needs to be rendered in the table body.

Some scenario's are: &#x20;

* You need to sort by the long/int representation but want something very different to display.
* You need a lot of component layout in the table cell
* The table cell consists of different icons for the representation
* The table cells actually bleed across each other. Each cell may require rendering of information from other columns for that row.
* You never know what your UI designers are going to draw up.

As an initial attempt to make things more flexible, I've added a pager option that consists of a fluid.transform function titled: filteredRowTransform

This would have the following API

```java
/**
  *  A function capable of use in fluid.transform. This will be given the current filteredRow of the pager, which includes the
  *  original model as a row property. This can be used to build and return the component's for the current row of the table.
  *  You should be able to use either values or valuebindings.
  * 
  * @param {object|filteredRow} A filteredRow.  The original model is available via filtreredRow.row.
  * @param {int} The index of the current row.
  * @return You should return an Array of Maps containing component definitions for the table row to be rendered.
  */

Example usage:

var filteredRowTransform = function(obj, idx) {
    var row = obj.row;
    var togo = [ 
      { ID: "student-grade-link",
        target: '/portal/tool/'+sakai.curPlacement+'/grade/'+asnn2.curAsnnId+'/'+row.studentId,
        linktext: row.studentName
      },  
      {   
        ID: "submission-status",
        value: row.submissionStatus
      }   
    ];  

    if (row.submittedDateFormat) {
      togo.push({ ID: "submitted-time",
        value: row.submittedDateFormat
      }); 
    }   

    if (row.feedbackReleased === true) {
      togo.push({ ID: "feedback-released", value: true});
    }   

    if (graded === true) {
      togo.push({ ID: "grade", value: row.grade});
    }   


    return togo;
  };  

  var pager = fluid.pager("#submissions-table-area", {
    dataModel: data,
    columnDefs: columnDefs,
    pagerBar: pagerBarOptions,
    bodyRenderer: {
      type: "fluid.pager.selfRender",
      options: {
        filteredRowTransform : filteredRowTransform,
        selectors: {
          root: ".fl-pager-data"
        },  
        renderOptions: {debugMode: false, cutpoints: asnn2subview.selectorMap}
      }   
    }   

  });
```

        