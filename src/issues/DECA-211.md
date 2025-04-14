---json
{
  "title": "DECA-211",
  "summary": "Generating a pdf from certain png or jpeg files will produce an colour inverted image in the pdf",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-01-12T10:45:19.294-0500",
  "updated": "2012-12-03T11:05:28.088-0500",
  "versions": [
    "0.4",
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/DECA-157/",
      "key": "DECA-157",
      "summary": "Exported PDF sometimes produces inverted images for none, some, or all pages"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-01T11:55:04.200-0400",
      "body": "Still an issue in Decapod 0.5. Tried with the jpeg image from <https://fluidproject.atlassian.net/browse/DECA-157#icft=DECA-157> ( <http://issues.fluidproject.org/secure/attachment/11152/decapod-0003.jpg> )\n"
    }
  ]
}
---
Currently to work around this issue, all images are first converted to tiff. However, it would be more efficient to just have genpdf able to properly handle all png and jpeg files.&#x20;

It is still unclear what it is about certain jpeg and png files that cause the issue, as some do work. However, it seems to happen most with irregular layout with images and images with little or no text. (e.g. a regular photo).

        