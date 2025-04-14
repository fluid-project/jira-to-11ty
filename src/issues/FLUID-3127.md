---json
{
  "title": "FLUID-3127",
  "summary": "modifications to builder.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-08-21T16:12:42.000-0400",
  "updated": "2009-10-22T16:28:03.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-08-31T11:59:27.000-0400",
      "body": "Moved the data into a separate file. Created a function to find module index in a json data given a module name\n"
    }
  ]
}
---
Justin and Michelle say:&#x20;

\> I also like the idea that you have good names for your indexes. (module indexes in the tests).\
\> > However, I'm only worried about them being hardcoded. The danger is\
\> > that if even the order of the modules is changed, the tests could fail.\
\> > What I was thinking was more along the lines of writing a function that\
\> > will find the index of the module based on its name. This way you won't\
\> > have to manually keep track of the indexes.

This makes a lot of sense and I completely agree.

AND

I like the idea of putting the data into its own file - I think it  \
will lead to easier to read code in the builder. The javascript file  \
containing the data would still need to be located with the demo  \
rather then with the tests since we wouldn't want the demo to depend  \
on the tests directory.

Move the script tag into the html and commented out when not in use.

        