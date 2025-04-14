---json
{
  "title": "ENGAGE-297",
  "summary": "Ensure all the Engage component work locally from the file system. ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-26T14:16:08.000-0500",
  "updated": "2010-03-12T13:05:56.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-297/ENGAGE-297.patch",
      "filename": "ENGAGE-297.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-297/ENGAGE-297b.patch",
      "filename": "ENGAGE-297b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-297/ENGAGE-297oce.patch",
      "filename": "ENGAGE-297oce.patch"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-10T18:25:34.000-0500",
      "body": "The one change in this patch that seems a little odd is the format of the json data files and therefore the expectation of initComponentWithLocalData. The data files now contain an options block rather then just a model. Yura explained that the reason he made that change was because the exhibition view requires a model for the guestbook sub component. This model needs to be specified as part of the exhibition view options not as part of the exhibition view model. If we don't change the expectations of  initComponentWithLocalData then we would need to put demo data into the options we pass to it. This defeats the purpose of separating out the demo data from the html file. &#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-10T18:32:10.000-0500",
      "body": "I would like to see two changes to this patch before I commit it:\n\n1\\. format the json data files so that they are human readable. I'd like to see this because I believe they are the only good documentation that we have at the moment of what the model for a particular component looks like. \\\n2\\. merge the options passed into initComponentWithLocalData with the options returned from the json data files and update the API docs accordingly\n"
    },
    {
      "author": "y z",
      "date": "2010-03-10T18:58:12.000-0500",
      "body": "Change to handle user cookies when dealing with guestbook is made inside fluid.engage.user.currentUser. And not in fluid.engage.user.createNewUser where the call to couch is made. This is because fluid.engage.user.currentUser will try to call fluid.engage.user.fetchUser and fail because local guestbook will set/have the user cookie.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-10T19:31:33.000-0500",
      "body": "1\\. JSON demo data is now readable\\\n2\\. Options for the component are now merged with the data from the ajax call\\\n3\\. updated nav list html to include all style dependencies (fix the position of media badge)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-12T12:47:52.000-0500",
      "body": "All the components except for code entry now work when loaded from the file system. Let's keep them working! 🙂\n"
    }
  ]
}
---
Some of the components seem to no longer work when looked at locally from the file system. It's best for components to be able to be worked on without a web server present.&#x20;

        