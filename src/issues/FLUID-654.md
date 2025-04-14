---json
{
  "title": "FLUID-654",
  "summary": "Create readme for the 0.3 release to replace the PDF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Paul Zablosky",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-27T14:00:28.000-0400",
  "updated": "2011-01-14T10:37:18.428-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-05-30T18:48:05.000-0400",
      "body": "We should also resolve this new documentation file with the README.txt file in the SVN repository:\n\n<http://source.fluidproject.org/svn/fluid/components/trunk/README.txt>\n\nThis particular README is really helpful because it compiles together all of the basic information you need to start using Infusion: licensing, what's in the release, and known issues.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-02T08:08:05.000-0400",
      "body": "Colin, by \"resolve,\" do you mean merge the two files? Or just update the text file to refer to the new html documentation file?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-02T10:48:23.000-0400",
      "body": "The latter makes sense to me. The README would be pretty large if we tried to also stick the ToC into it. 🙂\n"
    },
    {
      "author": "Paul Zablosky",
      "date": "2008-06-09T14:52:01.000-0400",
      "body": "A README with a reference to the ToC was created.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:22.282-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
It would be great to include a file in the source code bundle that explains to developers how to find documentation for Fluid components.

I am thinking of a README.html file or perhaps Documentation.html that provids a quick list of pointers into the wiki for documentation. Something that we can include in the source bundle for developers. This might just be a simple export of the ToC page as HTML, or perhaps just a very brief explanation of where to go to find all of Fluid's documentation along with a URL.

iteration10

        