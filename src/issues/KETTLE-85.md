---json
{
  "title": "KETTLE-85",
  "summary": "Abolish Kettle \"requestHandler\" system and democratise middleware system",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-06-12T08:56:27.344-0400",
  "updated": "2020-06-12T08:56:27.344-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Much of Kettle's current design was fixed before our current ideas on "open authoriality" were properly developed. In addition, this design was unduly influenced by the underlying structure of express on which it was based. As a result, it retains many areas where the scope for authorial intervention is limited.

To start with, the asymmetry between "request handlers" and "middleware" is unnecessary. In practice, their signatures are extremely similar, but not close enough. A "request handler" holds a function `handleRequest(request)` which handles the request via side-effects (e.g. firing onSuccess/onError) whereas middleware holds a function `handle(request)` which returns a promise.

Neither signature in practice is adequate - there is an interesting ambiguity relating to whether a request has been "fully handled". Under our current idiom, a "resolve" return from a middleware handler indicates that processing should continue down the middleware chain, and a "reject", naturally, that it should abort. However, unifying these signatures requires a possibility of a further kind of return - a "resolve" that indicates that the request has been fully handled and that control should not proceed to any further middleware. Note that some gestures towards this are present in the express 4.x middleware spec which allows an intermediate kind of return of the form `next("route")`. <https://expressjs.com/en/guide/using-middleware.html>

The asymmetry is similar to the blunder in the implementation of DataSources described in KETTLE-55 which has been fixed in the upcoming interface in Infusion but not yet in Kettle itself. There is no need to privilege one particular handler as the one which is expected to "fully handle" the request, especially when there is the possibility that an element like "static middleware" may have achieved this before the handler is ever reached.

Further, our system for organising the middleware sequence described in <https://github.com/fluid-project/kettle/blob/master/docs/Middleware.md> ("Middleware is accumulated at two levels in a Kettle application") is unduly hierarchical - following express distinctions such as "application middleware" and "route middleware". It should be possible for middleware configured at any level of the system to interpose between middleware configured anywhere else.

In practice, as well as reflecting the preexisting express distinctions, our provision of different locations for middleware also reflects our neuroticism about CPU costs on the server, which tend to be much more closely scrutinised than those on the client. Whilst the instantiation of an Infusion component can cost in excess of 1ms, we have bent our architecture mightily to ensure that most requests can be handled with only one or perhaps 2 constructions. We can't do too much about this before <https://issues.fluidproject.org/browse/FLUID-5304> .

        