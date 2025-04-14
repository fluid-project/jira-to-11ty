---json
{
  "title": "FLOE-134",
  "summary": "An extra empty captions track metadata is also presented in the HTML viewer when only one captions is defined",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-12-20T15:49:41.573-0500",
  "updated": "2015-06-16T14:05:44.660-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-111/",
      "key": "FLOE-111"
    }
  ],
  "attachments": [],
  "comments": []
}
---
1\. Open metadata demo and add a video;\
2\. Define only one caption url in the captions panel;\
3\. Click "View Output HTML" button;\
4\. Other than the defined caption, an empty captions track element is also shown in the output:\
\<span itemscope="">\
\<meta content="en" itemprop="inLanguage">\
\<track src="hkh" srclang="en" type="captions">\</span>\
\<span itemscope="">\
\<meta content="en" itemprop="inLanguage">\
\<track src="" srclang="en" type="captions">\</span>

Note the last three lines above. They should be removed.

The possible cause of this problem is, fluid.metadata.captionPanel has a default model that contains two blank captions element. This default is to make sure there are and only are two captions input sections are created in the captions panel. However, when this model is relayed to its parent fluid.simpleEditor, the empty ones should be removed so that only the filled information is output to the HTML viewer.

        